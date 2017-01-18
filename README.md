# SCSS build tutorial

## Basic file structure
```
project/
  ├ static/
  | ├ css/
  | | └ styles.css
  | ├ js/
  | ├ scss/
  | | └ styles.css
  | └ templates/
  └ index.html
```
Please note that depending on which method you use to compile scss files you either have a .libsass.json or a gulpfile.js file in your project directory.

__Pro's and Con's__   
_libsass:_
- Easier setup
- Each time you change something you have to compile again

_gulp:_
- Watch mode so every change you make is compiled
- More difficult to setup

## Using libsass build sublime package

1. Make sure sublime [package manager](https://packagecontrol.io/installation) is installed 
2. In sbulime use `shift+p install package` to enter package manager
3. Search for `libsass build` and install
4. Copy the .libsass.json file from this directory to your own project
5. Compile scss files with `ctrl+b`

Libsass Build recourse:
[packagecontrol](https://packagecontrol.io/packages/Libsass%20Build)

## Using gulp / npm

1. If node / gulp not yet installed on system:   
> `install npm`   
`npm install gulp -g`   

2. Initialize node in directory and install gulp and gulp-sass   
> `npm init`   
`npm install gulp gulp-sass --save-dev`   
3. Copy the gulpfile.js from this file to your own project
4. Use `gulp` from your terminal to start gulp watch task

Tutorials on gulp-sass:
[css-tricks](https://css-tricks.com/gulp-for-beginners/) |
[npmjs](https://www.npmjs.com/package/gulp-sass) |
[outputstyles](https://web-design-weekly.com/2014/06/15/different-sass-output-styles/)
