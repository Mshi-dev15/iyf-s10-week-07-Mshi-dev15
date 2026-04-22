# Week 7: JavaScript Best Practices & Local Storage

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-FF6B6B?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


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

This project focuses on improving JavaScript skills by implementing best practices, state management, and data persistence.  

I upgraded a To-Do List to store data using localStorage, built a form with sessionStorage, and structured code in a more professional way. I also explored debugging, clean code, and linting tools like ESLint and Prettier.


---

## 🚀Live Demos

| Project | Live Demo | Tech |
|---------|-----------|------|
| **🛒 Shopping Cart | [![Live](https://img.shields.io/badge/🛒%20Shopping%20Cart-22c55e?style=for-the-badge)](https://Mshi-dev15.github.io/iyf-s10-week-07-Mshi-dev15/shopping-cart/) | `LocalStorage` |
| **📝 Notes App | [![Live](https://img.shields.io/badge/📝%20Notes%20App-f59e0b?style=for-the-badge)](https://Mshi-dev15.github.io/iyf-s10-week-07-Mshi-dev15/notes-app.html) | `CRUD` |
| **💾 Auto-Save Form | [![Live](https://img.shields.io/badge/💾%20Auto--Save-8b5cf6?style=for-the-badge)](https://Mshi-dev15.github.io/iyf-s10-week-07-Mshi-dev15/form.html) | `SessionStorage` |
| **✅ To-Do List (Week 5) | [![Live](https://img.shields.io/badge/✅%20To--Do%20List-06b6d4?style=for-the-badge&logo=trello&logoColor=white)](https://Mshi-dev15.github.io/iyf-s10-week-05-Mshi-dev15/To-Do-List/to-do-list.html) | `Modular JS` |
 
---

## Technologies Used

- **HTML5** — page structure and forms
- **CSS3** — styling and layout
- **JavaScript (ES6+)** — core logic, DOM manipulation, localStorage, sessionStorage
- **ESLint** — automated code quality checking
- **Prettier** — automated code formatting
- **Node.js / npm** — package management for ESLint and Prettier

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

<div align="center">
  <sub>Built with 💛 during IYF Weekend Academy Season 10</sub>
</div>
