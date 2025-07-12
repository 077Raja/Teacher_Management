
# Live On Render: https://teacher-management-llgr.onrender.com/
# Loom demo Link : 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Teacher_Management

Project Initialization Steps (Optional: Run before committing to GitHub)
# Using Vite build tool
Step 1: Navigate to the folder where you want to create the project and 
open it in terminal

Step 2: In the terminal of the application directory type the following 
command.

npm create vite@latest <<Application_name>>
npm install tailwindcss @tailwindcss/vite

#.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

#index.css
@import "tailwindcss";

Step 3: Select the React Framework and then variant as JavaScript from 
options.

select javascript variant

Step 4: Navigate to the newly created folder using the command.
cd <<Application_name>>

Step 5: Use the below command in terminal to install all required 
dependencies.
npm install 
 OR
npm i
npm install

Step 6: To run the application use the following command in terminal.
npm run dev
Visit http://localhost:3000 to see the app running locally.


