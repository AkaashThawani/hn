# Hn

A modern Hacker News client built with Angular 20, featuring story lists, comments, and user profiles.

# Description

This project is an Angular-based web application that provides a user-friendly interface to browse Hacker News stories, view comments, and explore user profiles. It utilizes the official Hacker News API to fetch and display content in real-time.

## Technologies Used

- **Angular**: Version 20.3.0
- **Angular Material**: For UI components
- **Tailwind CSS**: For styling and responsive design
- **RxJS**: For reactive programming
- **Karma & Jasmine**: For unit testing
- **GitHub Pages**: For deployment

## Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` or `ng build` to build the project using Ahead-of-Time (AOT) compilation. The build artifacts will be stored in the `dist/hn` directory.

## Running Unit Tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deployment

Run `npm run deploy` to build the project for production and deploy it to GitHub Pages at `https://akaasthawani.github.io/hn/`.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further Help

To get more help on the Angular CLI, use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Features

- Browse top stories, new stories, and ask/show stories
- View detailed information for each story including score, author, and time
- Read comment threads with nested replies
- Explore user profiles with their submitted stories and comments
- Responsive design that works on desktop and mobile devices
- Loading indicators and error handling
