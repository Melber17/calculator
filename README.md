# Calculator application

Application was made with **core JavaScript**, **HTML** and **SCSS**. In this calculator implemented more math functions from **multiplication** and ending **extracting** radical.

For assembly this project, I used **webpack**. For code style: **prettier** and **esLint**

For test this app was used **jest**.

### Themes
Application has 2 themes. ***Dark*** and ***light***:


![Screenshot from 2021-09-21 01-27-18](https://user-images.githubusercontent.com/63192915/134084302-d07ebc33-e5c6-4785-a66d-a6ff493d9919.png)

![Screenshot from 2021-09-21 01-28-38](https://user-images.githubusercontent.com/63192915/134084312-673e12c0-b44b-400b-8266-ea2f1fca54a1.png)

Also you can choose it - you need to write to html tag attribute **data-theme="dark"** or delete:
```html
<html lang="en" data-theme="dark">
```
# Usage
So for the first step you need to clone this app like so: 
```
git clone https://github.com/Melber17/calculator.git
```
And after:
```
yarn / npm i
```

So, you can start a couples scripts:

```json
 "scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production",
    "eslint": "eslint",
    "precommit": "lint-staged",
    "test": "jest"
  },
```
