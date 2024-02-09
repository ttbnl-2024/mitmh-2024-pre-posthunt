from typing import Generic, TypeVar

from django.db.models import Manager, Model

SlugModelT_co = TypeVar("SlugModelT_co", bound="SlugModel", covariant=True)


class SlugManager(Generic[SlugModelT_co], Manager[SlugModelT_co]):
    def get_by_natural_key(self, slug):
        return self.get(slug=slug)


class SlugModel(Model):
    objects = SlugManager()

    def natural_key(self) -> tuple[str]:
        return (getattr(self, "slug"),)  # noqa: B009

    class Meta:
        abstract = True
