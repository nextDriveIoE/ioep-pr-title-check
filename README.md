# IOE PR Title Checker Action

This is a [GitHub Action](https://github.com/features/actions) that ensures your PR title matches the IOEP's PR title spec.

## Inputs

### `success-state`

**Optional.** Description of the status check if validation succeeds.
> Default: `"Title follows the specification."`.

### `failure-state`

**Optional.** Description of the status check if validation fails.
> Default: `"Title does not follow the specification."`.

### `context-name`

**Optional.** Persistent status check context key.
> Default: `"ioe-pr-title-check"`.

### `target-url`

**Optional.** URL to be used when linking the "Details" in the actions overview.
> Default: `"https://www.conventionalcommits.org/en/v1.0.0/#summary"`.

## Outputs

### `success`

`true` if the validation succeed, `false` otherwise.

### `error`

In case of an error (`success=false`), contains the error message for additional processing or usage in notifications.

## Example usage

```yaml
name: Check PR title

on:
  pull_request_target:
    types:
      - opened
      - reopened
      - edited
      - synchronize

jobs:
  lint:
    runs-on: ubuntu-latest
    permissions:
      statuses: write
    steps:
      - uses: nextDriveIoE/ioep-pr-title-check@v0.0.1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

> Note: Avoid using `main` ref, prefer to pin to a specific version.

## Credits

All thanks goes to [`amannn`](https://github.com/amannn)'s [`semantic-pull-request`](https://github.com/amannn/action-semantic-pull-request) action.
