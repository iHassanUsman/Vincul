# Images

Binary JPGs (`hero.jpg`, `how-bg.jpg`, `experience-bg.jpg`, `medical.jpg`, `logistics.jpg`, `systems.jpg`) could not be uploaded through the GitHub MCP `create_or_update_file` / `push_files` tools (text Contents API; ~170–270KB each).

Until they are committed to this repo (e.g. via a local `git push` of the binary files), `website/src/base.ts` loads them from:

`https://raw.githubusercontent.com/iHassanUsman/WorkSpace-FA/cursor/vincul-agency-site-f5ed/website/public/images/<filename>`
