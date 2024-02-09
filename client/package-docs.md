# NPM Package Dependencies

Dependency documentation in progress.

## Core

- `classnames`
- `crypto-js`
- `next`
- `react`
- `react-dom`

## UI/UX

- `@headlessui/react`
- `@heroicons/react`

## Components

- `howler`: site sound
- `react-a11y-footnotes`: footnotes (e.g., in solutions)
- `react-confetti`: victory and solve confetti
- `react-rangeslider`: volume slider
- `@twemoji/api`: consistent emoji display
- `react-tooltip`: info icon

## Miscellaneous

- `autoprefixer`
- `jquery`: `vorple` dependency, and used in `shine_image`
- `promise.allsettled`: polyfill. Support horizon TBD.

## Puzzle-specific

### `text-adventure`

- `vorple`: text adventure in the browser
- `patches/` and `patch.sh` (resolve
  [`vorple` bug](https://github.com/vorple/vorple/issues/60))

### `mandalay-bay`

- `react-confetti-explosion`: The other confetti drops from the top of the
  screen, we wanted it from a specific source.

### `io`

- `highlight.js`
