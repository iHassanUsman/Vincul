# Vincul

**Vincul** bonds AI chatbots and automation into the systems companies already run — CRMs on Java / Spring Boot / Angular / Vue, plus booking and invoice automation examples.

- **Site:** [`website/`](website/) — Vue 3 + Vite + TypeScript + `motion-v`
- **Business kit:** [`business-kit/`](business-kit/)
- **Contact:** [hello@vincul.ai](mailto:hello@vincul.ai)

Repo: [github.com/iHassanUsman/Vincul](https://github.com/iHassanUsman/Vincul)

---

## 1) Run locally

```bash
git clone https://github.com/iHassanUsman/Vincul.git
cd Vincul

cd website
npm install
npm run dev
```

Open **http://127.0.0.1:5173/**

### Production preview

```bash
cd website
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

→ **http://127.0.0.1:4173/**

Needs **Node.js 18+** (20 or 22 recommended).

---

## 2) GitHub Pages (online testing)

Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

### One-time setup

1. Open **https://github.com/iHassanUsman/Vincul**
2. **Settings → Pages**
3. **Source** = **GitHub Actions**
4. Push to `main` (or **Actions → Run workflow**)

### Live URL

**https://ihassanusman.github.io/Vincul/**

---

## Domain & email (later)

1. Register **vincul.ai**
2. Create **hello@vincul.ai**
3. For a custom root domain, build with `VITE_BASE=/` and point DNS at your host
