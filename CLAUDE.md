# CLAUDE.md

## Agent skills

### Issue tracker

Issues live in the `ge-tracker/ge-tracker-api` GitHub Issues, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: the five canonical roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), label string = role name. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` + `docs/adr/` at the repo root (created lazily by domain skills). See `docs/agents/domain.md`.
