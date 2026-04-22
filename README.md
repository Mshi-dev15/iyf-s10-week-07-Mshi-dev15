# Week 7: JavaScript Best Practices & Local Storage

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## Author

| | |
|---|---|
| **Name** | Faith Mshiki |
| **GitHub** | [@Mshi-dev15](https://github.com/Mshi-dev15) |
| **Program** | IYF Weekend Academy — Season 10 |
| **Date** | April 22, 2025 |

---

## Project Description

This week covered two major areas of professional JavaScript development. First, data persistence using `localStorage` and `sessionStorage` — making apps that remember data even after the browser is closed. Second, JavaScript best practices including clean code principles, code organization into modules, debugging skills, and setting up ESLint and Prettier for automated code quality checks.

The main deliverables are a **Persistent To-Do List** and a **Shopping Cart** with full state management — both of which survive page refreshes using localStorage.

---

## Projects Built

### 📝 Notes App — Task 13.1
A simple notes app that saves and retrieves notes from localStorage using reusable helper functions.

### ✅ Persistent To-Do List — Task 13.2
An upgraded version of the Week 5 To-Do List with full localStorage persistence. Every action — adding, completing, deleting, and filtering — is saved automatically.

### 📋 Auto-Save Form — Task 13.3
A contact form that auto-saves all fields to sessionStorage as you type. Data survives accidental navigation but clears when the tab is closed.

### 🛍️ Shopping Cart — Task 13.4
A full shopping cart built with centralized state management. Products can be added, quantities adjusted, and items removed. The cart persists across page refreshes.

---

## Technologies Used

- **HTML5** — page structure and forms
- **CSS3** — styling and layout
- **JavaScript (ES6+)** — core logic, DOM manipulation, localStorage, sessionStorage
- **ESLint** — automated code quality checking
- **Prettier** — automated code formatting
- **Node.js / npm** — package management for ESLint and Prettier

---

## Features

### localStorage & sessionStorage
- ✅ Todos persist across page refreshes
- ✅ Shopping cart survives browser close and reopen
- ✅ Form data auto-saves every 5 seconds
- ✅ Search history saves last 5 searches
- ✅ Theme preference (light/dark) is remembered

### Code Quality
- ✅ Code split into separate modules (`storage.js`, `state.js`, `ui.js`, `app.js`)
- ✅ Meaningful variable and function names throughout
- ✅ Single responsibility principle applied to all functions
- ✅ No magic numbers — all constants named and explained
- ✅ ESLint configured and passing with zero errors

### Daily Challenges
- ✅ Day 1 — Light/dark theme toggle with localStorage
- ✅ Day 2 — Recent searches dropdown with history
- ✅ Day 3 — Form auto-save with sessionStorage
- ✅ Day 4 — Notes app refactored with clean code principles
- ✅ Day 5 — Weather Dashboard code review with improvement list

---

## How to Run

1. Clone this repository:
```bash
git clone https://github.com/Mshi-dev15/iyf-s10-week-07-Mshi-dev15.git
```

2. Open any `.html` file directly in your browser — no server needed.

3. To run ESLint:
```bash
cd todo-list
npm install
npx eslint "js/**/*.js"
```

---

## Lessons Learned

- **localStorage vs sessionStorage** — localStorage persists forever while sessionStorage clears when the tab closes. Choosing the right one depends on how long data needs to live.
- **JSON.stringify and JSON.parse** — localStorage only stores strings, so objects and arrays must always be converted before saving and after reading.
- **Centralized state management** — keeping all app data in one state object makes the code much easier to debug and reason about. This is the exact same pattern React uses.
- **Code organization** — splitting one big file into `storage.js`, `state.js`, `ui.js` and `app.js` makes each file easier to read and each bug easier to find.
- **ESLint** — automated linting catches mistakes before they become bugs, and enforces consistent code style across the whole project.

---

## Challenges Faced

- **Duplicate folder structure** — after cloning the repo inside an existing folder with the same name, the terminal showed a nested duplicate path. Fixed by moving files up one level with `mv` and removing the empty inner folder.
- **Checkbox deleting todos instead of toggling** — the checkbox `change` event was bubbling up to the `li` click listener, causing both to fire at once. Fixed by adding `e.stopPropagation()` to the checkbox event handler.
- **ESLint parsing errors** — ESLint was set to `sourceType: "module"` but the files used plain `<script>` tags. Fixed by turning off the `no-undef` rule since the functions are available globally through the script tag loading order.
- **Filter preference not persisting** — the active filter reset to "All" on every refresh. Fixed by saving the current filter to localStorage and loading it on startup.

---

## Live Demo

[![Shopping cart](https://img.shields.io/badge/✅%20To--Do%20List-274D6A?style=for-the-badge&logoColor=white)](https://Mshi-dev15.github.io/iyf-s10-week-07-Mshi-dev15/shopping-cart/index.html)

---

<div align="center">
  <sub>Built with 💛 during IYF Weekend Academy Season 10</sub>
</div>
