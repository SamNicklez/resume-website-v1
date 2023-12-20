### README for the Vue Pages Repository

#### Repository Overview
This repository [SamNicklez/vue-pages](https://github.com/SamNicklez/vue-pages) is a project focused on creating an online CV/resume that can be easily adapted and used by anyone. It is built using Vue.js, a progressive JavaScript framework, and incorporates various tools and plugins for a rich user interface.

#### Project Description
The project is designed with the developer in mind, allowing future developers to update information without needing to modify the HTML and CSS directly. All information is stored in global JavaScript variables for ease of updating.

#### Key Features
- **Online CV/Resume**: The main goal of the project is to provide a template for an online CV or resume.
- **Privacy Considerations**: The phone number and resume download are hidden unless the URL ends with `?recruit`. This feature is implemented for privacy reasons on the main page.
- **Ease of Customization**: The project is structured to allow easy customization without the need to delve into HTML and CSS.

#### Getting Started
1. **Pre-Project Setup**: Install Node.js (version 16 or lower).
2. **Project Setup**: 
   - Clone the repository.
   - Navigate to the source folder and run `npm install`.
3. **Development and Deployment**:
   - For development with hot-reloads: `npm run serve`.
   - To compile and minify for production: `npm run build`.
   - Lint and fix files: `npm run lint`.
   - Deploy to GitHub for public viewing (after editing `deploy.sh` to match the new GitHub repo): `npm run deploy`.

#### Customization
- **Changing Assets**: 
  - To change the icon logo, replace `favicon.png` in the public folder.
  - To change the resume download, replace `snicklausResume.pdf` with the desired resume and update the download path in `App.vue`.

#### Project Structure
- [`App.vue`](https://github.com/SamNicklez/vue-pages/blob/main/src/App.vue): The main Vue component for the application.
- [`main.js`](https://github.com/SamNicklez/vue-pages/blob/main/src/main.js): The entry point for the Vue application, where various plugins are used.
- [`vue.config.js`](https://github.com/SamNicklez/vue-pages/blob/main/vue.config.js): Contains Vue CLI configuration.
- [`package.json`](https://github.com/SamNicklez/vue-pages/blob/main/package.json): Lists the project dependencies and scripts.
- [`index.html`](https://github.com/SamNicklez/vue-pages/blob/main/public/index.html): The main HTML file.
- [`babel.config.js`](https://github.com/SamNicklez/vue-pages/blob/main/babel.config.js): Babel configuration for JavaScript transpilation.
- [`deploy.sh`](https://github.com/SamNicklez/vue-pages/blob/main/deploy.sh): Shell script for deploying the application to GitHub Pages.
