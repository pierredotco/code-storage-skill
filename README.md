# @pierre/code-storage-skill

Install the Code Storage agent skill for Claude Code, Codex CLI, and compatible agents.

## Install

```sh
npx @pierre/code-storage-skill
```

The installer copies `skill/SKILL.md` into:

```text
~/.claude/skills/code-storage/SKILL.md
~/.codex/skills/code-storage/SKILL.md
~/.agents/skills/code-storage/SKILL.md
```

## Manual Install

If `npx` is not available, install manually with `curl`:

```sh
mkdir -p ~/.claude/skills/code-storage ~/.codex/skills/code-storage ~/.agents/skills/code-storage
curl -fsSL https://raw.githubusercontent.com/pierre/code-storage-skill/main/skill/SKILL.md -o ~/.claude/skills/code-storage/SKILL.md
curl -fsSL https://raw.githubusercontent.com/pierre/code-storage-skill/main/skill/SKILL.md -o ~/.codex/skills/code-storage/SKILL.md
curl -fsSL https://raw.githubusercontent.com/pierre/code-storage-skill/main/skill/SKILL.md -o ~/.agents/skills/code-storage/SKILL.md
```
