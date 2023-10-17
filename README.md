
# Milestone Project 2: Airport Codes Quiz

![Website shown on various devices](assets/image/responsive.jpg)

## Live Project

[View the live project](https://cshimvin.github.io/quiz-ms-2/)

## Table of Contents
1. [Project Goals](#project-goals)
- Business Goals
- User Goals
2. [User Experience](#user-experience)
- User Stories
- Design and Structure
- Wireframes
3. [Features](#features)
- Must Have (current features)
- Could Have
- Won't Have (for now)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
- User stories tests
- Functionality
- HTML Validation
- CSS Validation
- JS Validation
- Accessibility and Performance
- Browser Compatibility
- Device Compatibility
6. [Bugs](#bugs)
7. [Deployment](#deployment)
8. [Credits](#credits)

## Project Goals

### Business Goals

As a business, I would like the website to:

### Visitor Goals

As a visitor, I would like the website to:

## User Experience

### User Stories
- First time visitor goals

- Returning visitor goals

- Frequent visitor goals

### Design and Structure

### Wireframes

Wireframes of the initial design can be found in the PDF.

## Features

### Current features

These are the features that have already been implemented on the website.


### Features the site could have

### Features the site won't have (for now)

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) to create the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS3) to style the website.
- [Bootstrap 5](https://getbootstrap.com/) was used for the layout of the site.
- [FontAwesome](https://fontawesome.com/) was used to create some of the icons on the site.
- [Google Fonts](https://fonts.google.com/) was used to display the typography of the site: [Montserrat](https://fonts.google.com/specimen/Montserrat) and [REM](https://fonts.google.com/specimen/REM).
- [Git](https://git-scm.com/) was used for version control of the code.
- [GitHub](https://github.com/) was used as a repository for the code and GitHub pages was used to host the site.

## Testing

###  User stories tests

### Functionality


### HTML Validation

The [index.html](index.html) page was tested using the [W3C HTML validator](https://validator.w3.org/nu/) and no errors were found. The results are in the [HTML validation results PDF](assets/documents/html-validation.pdf).

### CSS Validation

The CSS stylesheet [style.css](assets/css/style.css) was checked using the [W3C CSS validator](https://jigsaw.w3.org/css-validator/) and no errors were found. The results can be found in the [CSS validation results PDF](assets/documents/css-validation.pdf).

### JS Validation

[JSHint](https://jshint.com/) was used to validate the JavaScript for script.js using the configuration to assume ES6 and jQuery. The validator identified 3 statements without semicolons which were corrected and the script.js file then passed validation.

![JSHint validator sesults](assets/image/jshint-output.jpg)

### Accessibility and Performance

### Browser Compatibility
### Device Compatibility

### Check links work

## Bugs

Bugs fixed:
- Issue with incrementing questions and checkAnswer function in script.js - the _questionNum++_ statement was in the incorrect function which caused the quiz to increment the question number by a random number. This was moved to the checkAnswer function to correct this issue.
- The CSS was not loading due to a typo in the href of the CSS link statment in index.html. This was fixed so it worked.

## Deployment

### How the site was deployed


### How to clone this repository


## Credits

### Images

Any images not referenced are owned by the developer. Background image was obtained from pxhere.com and is Free for personal and commercial use. No attribution required.

Background image - https://pxhere.com/en/photo/1245082

### Code

Shuffle answer order - Array randomiser function in script.js is taken from W3docs https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
