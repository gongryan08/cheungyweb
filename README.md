# CheungyWeb 🎶

Welcome to **CheungyWeb**, the official website designed especially for the **Cheungy Choir**. This responsive platform provides information about the choir and features an interactive registration form for new members to join.
**Quick reminder: if you are not in the SISHK Cheungy Choir, you won't understand what's going on.**
## 🚀 Live Site
The website is automatically built and hosted globally with GitHub Pages:
👉 [Link](https://gongryan08.github.io/cheungyweb) 

---

## 🛠️ Tech Stack & Features
*   **Semantic HTML5 & XHTML Standards:** Structured with clean markup and strict standard declarations.
*   **Custom Dynamic Components (Vanilla JS):** Utilizes a reusable component injection architecture (`navbar.js`) to load global layouts asynchronously, preventing redundant HTML duplicating.
*   **State-Aware Navigation:** Hardcoded identifier hooks ensure the vibrant blue capsule active status theme shifts accurately between tabs without browser path errors.
*   **Modern Typography:** Styled with the elegant, book-like **Noto Serif** font stack via Google Fonts.
*   **Responsive Forms:** Features an integrated, fluid Google Forms execution element designed to fit both desktop viewports and mobile phone screens gracefully.

---

## 📂 Project Directory Structure
```text
cheungyweb/
├── .vscode/               # Local editor workspaces (debug configurations)
├── components/            # Asynchronous JavaScript modular elements
│   └── navbar.js          # Shared global header menu & footer layout loader
├── static/                # Website design stylesheet directories
│   └── styles/
│       └── style.css      # Core presentation styles, Flexbox grids, and themes
├── index.html             # Choir Homepage
├── about.html             # "About Us" Overview
├── aboutcheung.html       # Profile: About Cheung Anderson
└── contact.html           # Join / Registration Dashboard (with Form Iframe)
```

---

## 📦 Deployment & Development Workflow
To run this project locally, launch your workspace and double-click `index.html` or fire it up inside Microsoft Edge using your integrated editor launcher configurations.

### Updating the Live Server
When pushing code changes to production, execute the standard Git staging batch sequence inside your terminal panel:
```bash
git add .
git commit -m "Describe your layout updates here"
git push origin main
```
*GitHub Pages will automatically pick up the modifications on the `main` branch and rebuild the static site cache within 60 seconds.*

---

## 📄 License
© 2026 CheungyWeb by Ryan Gong. All rights reserved.
