# 🌐 Personal Website v2.0

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Live](https://img.shields.io/badge/Live-antonsatsuk.com-brightgreen)](https://antonsatsuk.com)

> 👉 **Live site:** [antonsatsuk.com](https://antonsatsuk.com)
>
> 📂 **Previous version:** [anton-website-v1.0](https://github.com/highk1nda/anton-website-v1.0)

---

## 📖 About

This is the second and current version of my personal website — a complete rebuild from scratch. Compared to v1.0 (Flask + plain HTML/CSS), this version uses a modern frontend stack with **React**, **TypeScript**, and **Tailwind CSS**, bundled with **Vite**.

The site showcases my projects, skills, and contact info, with smooth by **Framer Motion** and an easter egg hidden somewhere on the page 🥚

---

## 📁 Project Structure

```
anton-website-v2.0/
│
└── portfolio/                    # Main application
    │
    ├── index.html                # Entry HTML
    ├── package.json              # Dependencies & scripts
    ├── vite.config.ts            # Vite configuration
    ├── tsconfig.json             # TypeScript configuration
    │
    ├── public/                   # Static assets (favicon, icons)
    │
    └── src/
        ├── main.tsx              # React entry point
        ├── App.tsx               # Root component & layout
        ├── App.css               # Global styles
        ├── index.css             # Base CSS / Tailwind directives
        │
        ├── components/           # Page sections as React components
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── Projects.tsx
        │   ├── ProjectCard.tsx
        │   ├── Skills.tsx
        │   ├── About.tsx
        │   ├── Contact.tsx
        │   ├── Transition.tsx
        │   └── EasterEgg.tsx
        │
        ├── data/
        │   └── projects.ts       # Project data (title, tech, links)
        │
        └── assets/               # Images and SVGs
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Bundler:** Vite
- **Deployment:** GitHub Actions → GitHub Pages

---

## ⚙️ Requirements & Running Locally

Make sure you have **Node.js** (v18+) and **npm** installed, then:

```bash
cd portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

---

## 📌 Status

✅ Active — currently live at [antonsatsuk.com](https://antonsatsuk.com)

---

## 📬 Contacts

- **LinkedIn:** [linkedin.com/in/antonsatsuk](https://www.linkedin.com/in/antonsatsuk/)
- **Email:** satsuk.anton@gmail.com

---

<p align="center">
  <strong>Have fun, do zustrichi 👋</strong>
</p>

<p align="center">
  <a href="https://github.com/highk1nda">More projects by highk1nda 🚧</a>
</p>
