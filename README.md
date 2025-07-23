# Profession fit test
Used 4 AIs to craft it (Claude, Deepseek, ChatGPT, Qwen).
ToDos:
- check why the app doesn't take 5 as initialised
- amend profession profiles for the last 20 professions
- research profiling best testing practices
- enhance dark theme

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

On wsl ubuntu to test the production build:
npm run build
npm run preview
http://localhost:4173/proforientator/

dev:
rm -rf node_modules package-lock.json
npm install
npm start
