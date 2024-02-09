from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db.models import Count, Q

from spoilr.core.models import (
    HuntSetting,
    Interaction,
    Minipuzzle,
    MinipuzzleSubmission,
    PseudoAnswer,
    Puzzle,
    PuzzleAccess,
    PuzzleSubmission,
    Round,
    RoundAccess,
    SystemLog,
    Team,
    TeamInteraction,
    User,
)

admin.site.register(User, UserAdmin)


class InteractionAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return (
            super()
            .get_queryset(request)
            .annotate(
                count_teams_pending=Count(
                    "teaminteraction",
                    filter=Q(teaminteraction__accomplished=False),
                    distinct=True,
                )
            )
            .annotate(
                count_teams_accomplished=Count(
                    "teaminteraction",
                    filter=Q(teaminteraction__accomplished=True),
                    distinct=True,
                )
            )
        )

    @admin.display(description="Teams Pending")
    def teams_pending(self, interaction) -> int:
        return interaction.count_teams_pending

    @admin.display(description="Teams Accomplished")
    def teams_accomplished(self, interaction) -> int:
        return interaction.count_teams_accomplished

    list_display = ("__str__", "teams_pending", "teams_accomplished")
    search_fields = ["slug", "name"]
    ordering = ["order"]


class RoundPuzzleInline(admin.TabularInline):
    model = Puzzle
    extra = 0
    ordering = ["order"]


class RoundAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return (
            super()
            .get_queryset(request)
            .annotate(count_teams_open=Count("roundaccess", distinct=True))
            .annotate(count_puzzles=Count("puzzle", distinct=True))
        )

    @admin.display(description="Teams Open")
    def teams_open(self, round):
        return round.count_teams_open

    @admin.display(description="Puzzles")
    def puzzles(self, round):
        return round.count_puzzles

    list_display = ("__str__", "puzzles", "teams_open", "act", "order")
    list_filter = ["act"]
    search_fields = ["slug", "name"]
    ordering = ["order"]

    def get_inlines(self, request, obj):
        return [RoundPuzzleInline]


class PuzzleAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return (
            super()
            .get_queryset(request)
            .annotate(count_teams_open=Count("puzzleaccess", distinct=True))
            .annotate(
                count_teams_solved=Count(
                    "puzzleaccess", filter=Q(puzzleaccess__solved=True), distinct=True
                )
            )
        )

    @admin.display(description="Teams Open")
    def teams_open(self, puzzle):
        return puzzle.count_teams_open

    @admin.display(description="Teams Solved")
    def teams_solved(self, puzzle):
        return puzzle.count_teams_solved

    list_display = (
        "__str__",
        "name",
        "external_id",
        "round",
        "teams_open",
        "teams_solved",
    )
    list_filter = ["round__name"]
    search_fields = ["slug", "name", "external_id"]
    ordering = ["round__order", "order"]


class PseudoAnswerAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).select_related("puzzle")

    def render_change_form(self, request, context, *args, **kwargs):
        context["adminform"].form.fields["puzzle"].queryset = Puzzle.objects.all()
        return super().render_change_form(request, context, *args, **kwargs)


admin.site.register(Interaction, InteractionAdmin)
admin.site.register(Round, RoundAdmin)
admin.site.register(Puzzle, PuzzleAdmin)
admin.site.register(PseudoAnswer, PseudoAnswerAdmin)


class TeamRoundInline(admin.TabularInline):
    model = Team.rounds.through
    extra = 0
    ordering = ["round__order"]
    readonly_fields = ("round", "timestamp")

    def get_queryset(self, request):
        return super().get_queryset(request).select_related("team", "round")


class TeamPuzzleInline(admin.TabularInline):
    model = Team.puzzles.through
    extra = 0
    ordering = ["puzzle__round__order", "puzzle__order"]
    readonly_fields = ("puzzle", "timestamp", "solved_time")

    def get_queryset(self, request):
        return (
            super()
            .get_queryset(request)
            .select_related("team", "puzzle", "puzzle__round")
        )


class TeamAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return (
            super()
            .get_queryset(request)
            .annotate(count_rounds_open=Count("roundaccess", distinct=True))
            .annotate(
                count_metapuzzles_solved=Count(
                    "puzzleaccess",
                    filter=Q(
                        puzzleaccess__solved=True, puzzleaccess__puzzle__is_meta=True
                    ),
                    distinct=True,
                )
            )
            .annotate(count_puzzles_open=Count("puzzleaccess", distinct=True))
            .annotate(
                count_puzzles_solved=Count(
                    "puzzleaccess", filter=Q(puzzleaccess__solved=True), distinct=True
                )
            )
            .annotate(
                count_puzzles_unsolved=Count(
                    "puzzleaccess", filter=Q(puzzleaccess__solved=False), distinct=True
                )
            )
        )

    @admin.display(description="Rounds Open")
    def rounds_open(self, team):
        return team.count_rounds_open

    @admin.display(description="Metapuzzles Solved")
    def metapuzzles_solved(self, team):
        return team.count_metapuzzles_solved

    @admin.display(description="Puzzles Open")
    def puzzles_open(self, team):
        return team.count_puzzles_open

    @admin.display(description="Puzzles Solved")
    def puzzles_solved(self, team):
        return team.count_puzzles_solved

    @admin.display(description="Puzzles Unsolved")
    def puzzles_unsolved(self, team):
        return team.count_puzzles_unsolved

    inlines = [TeamRoundInline, TeamPuzzleInline]
    list_display = (
        "__str__",
        "username",
        "rounds_open",
        "metapuzzles_solved",
        "puzzles_open",
        "puzzles_solved",
        "puzzles_unsolved",
        "creation_time",
    )
    search_fields = ["name", "username"]


admin.site.register(Team, TeamAdmin)


class HuntSettingAdmin(admin.ModelAdmin):
    list_display = ["name"]


admin.site.register(HuntSetting, HuntSettingAdmin)


class LogTeamFilter(admin.SimpleListFilter):
    title = "team"
    parameter_name = "team"

    def lookups(self, request, model_admin):
        return [(x.name, x.name) for x in Team.objects.all()]

    def queryset(self, request, queryset):
        if self.value() is None:
            return queryset
        return queryset.filter(team__name=self.value())


class SystemLogAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).select_related("team")

    @admin.display()
    def team_name(self, data):
        if data.team:
            return data.team.name
        else:
            return ""

    list_display = ("timestamp", "event_type", "team_name", "object_id", "message")
    list_filter = ("event_type", LogTeamFilter, "object_id")
    # TODO: how does this work? Should it traverse into team__name?
    search_fields = [team_name, "event_type", "object_id", "message"]  # type: ignore


admin.site.register(SystemLog, SystemLogAdmin)


class RoundAccessRoundFilter(admin.SimpleListFilter):
    title = "round"
    parameter_name = "round"

    def lookups(self, request, model_admin):
        return [(x.name, x.name) for x in Round.objects.all()]

    def queryset(self, request, queryset):
        if self.value() is None:
            return queryset
        return queryset.filter(round__name=self.value())


class RoundAccessAdmin(admin.ModelAdmin):
    list_display = ("__str__", "team", "round")
    list_filter = (RoundAccessRoundFilter, "team__name")
    search_fields = ["team__name", "round__name"]
    ordering = ["team__name", "round__order"]


class PuzzleAccessRoundFilter(admin.SimpleListFilter):
    title = "round"
    parameter_name = "round"

    def lookups(self, request, model_admin):
        return [(x.name, x.name) for x in Round.objects.all()]

    def queryset(self, request, queryset):
        if self.value() is None:
            return queryset
        return queryset.filter(puzzle__round__name=self.value())


def mark_solved(modeladmin, request, queryset):
    queryset.update(solved=True)


def mark_unsolved(modeladmin, request, queryset):
    queryset.update(solved=False)


class PuzzleAccessAdmin(admin.ModelAdmin):
    def render_change_form(self, request, context, *args, **kwargs):
        context["adminform"].form.fields["puzzle"].queryset = Puzzle.objects.all()
        return super().render_change_form(request, context, *args, **kwargs)

    list_display = ("__str__", "team", "timestamp", "puzzle", "solved")
    list_filter = (PuzzleAccessRoundFilter, "solved", "team__name")
    search_fields = ["team__name", "puzzle__name", "puzzle__round__name"]
    ordering = ["team__name", "puzzle__round__order", "puzzle__order"]
    actions = [mark_solved, mark_unsolved]


class TeamInteractionAdmin(admin.ModelAdmin):
    list_display = ("__str__", "team", "interaction", "accomplished")
    list_filter = ("interaction", "accomplished", "team__name")
    search_fields = ["team__name", "interaction__name"]
    ordering = ["team__name", "interaction__order"]


admin.site.register(RoundAccess, RoundAccessAdmin)
admin.site.register(PuzzleAccess, PuzzleAccessAdmin)
admin.site.register(TeamInteraction, TeamInteractionAdmin)


class PuzzleSubmissionAdmin(admin.ModelAdmin):
    def render_change_form(self, request, context, *args, **kwargs):
        context["adminform"].form.fields["puzzle"].queryset = Puzzle.objects.all()
        return super().render_change_form(request, context, *args, **kwargs)

    list_display = ("__str__", "timestamp", "team", "puzzle")
    list_filter = (PuzzleAccessRoundFilter, "team__name")
    search_fields = ["team__name", "puzzle__name", "puzzle__round__name"]
    ordering = ["timestamp"]


admin.site.register(PuzzleSubmission, PuzzleSubmissionAdmin)


class MinipuzzleAdmin(admin.ModelAdmin):
    list_display = ("__str__", "team", "solved_time", "ref", "puzzle")
    list_filter = (PuzzleAccessRoundFilter, "ref", "team__name")
    search_fields = ["team__name", "puzzle__name", "puzzle__round__name"]
    ordering = ["-solved_time"]


admin.site.register(Minipuzzle, MinipuzzleAdmin)


class MinipuzzleSubmissionAdmin(admin.ModelAdmin):
    list_display = ("__str__", "team", "raw_answer", "answer", "correct")
    list_filter = ("correct", "minipuzzle__ref", "minipuzzle__puzzle__name", "team")
    search_fields = ["answer", "team__name", "minipuzzle__puzzle__name"]
    ordering = ["-timestamp"]


admin.site.register(MinipuzzleSubmission, MinipuzzleSubmissionAdmin)
