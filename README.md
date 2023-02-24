# vue-pages

## Background
```
The goal for this project was to make a online cv/resume that anyone can adapt and use.
Because of this there are some interesting design choices I wouldn't have made if I didn't
keep the developer in mind. I specifically designed the application so that future developers do
not have to touch the html and css to change my information, everything is stored in global variables in Javascript.
```
## Background
```
Note that your phone number and resume download is hidden unless your url at the end
has "?recruit". This is for privacy reasons and prevents individuals from accessing your
personal information
```

## Pre-Project setup
```
Install Node.js (Note: Version has to be 16 or lower to function)

```

## Project setup
```
CD to source folder of the repository and run

npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### To push to github for public viewing
```
Note: Beforehand you need to edit the deploy.sh file to match your new GitHub repo
npm run deploy
```

### Changing assets
```
To change the icon logo, change favicon.png in the public folder
To change the resume download, change snicklausResume.pdf to your desired resume (Note that you also will need to change the download path in App.vue for the changes to take effect)

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
