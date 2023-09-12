## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Documentation

### Project Title: Job Management Interface

#### 1. Introduction

The Job Management Interface is a web application that allows users to manage job listings. Users can create, edit, and delete job listings using an intuitive user interface. This project is built using React, Next.js, and TypeScript. The UI design is implemented using Tailwind CSS for its ease of usability and popularity in the industry. Form validation is handled using Formik and Yup libraries.

#### 2. Technological Aspects

- React: A JavaScript library for building user interfaces.
- Next.js: A framework for server-side rendered React applications.
- TypeScript: A typed superset of JavaScript that improves code quality and developer productivity.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Formik: A form library for React that simplifies form handling and validation.
- Yup: A JavaScript schema validation library used with Formik for form validation.

#### 3. Project Setup

The project follows a folder structure based on the Atomic Design pattern for organizing components. The main folders and files in the project structure are as follows:

- `src` folder: Contains all the source code of the application.

  - `components` folder: Contains reusable UI components categorized as atoms, molecules, and organisms based on the Atomic Design pattern.

    - `atoms` folder: Contains individual UI components like buttons, inputs, select dropdowns, loaders, modals, and toasts.
    - `molecules` folder: Contains complex UI components composed of multiple atoms, such as the accordion component.
    - `organisms` folder: Contains UI components composed of atoms and molecules, representing larger functional units of the application.

  - `pages` folder: Contains Next.js page components for routing and rendering.

    - `_app.tsx`: The main app component that wraps all pages and provides global configurations and layouts.
    - `_document.tsx`: The custom Next.js document component for setting up the HTML document structure.

  - `styles` folder: Contains global CSS styles used throughout the application.

    - `global.css`: CSS file for defining global styles.

#### Usage

    Create new job listings.
    Edit existing job listings.
    Delete job listings.

#### Configuration

The project relies on the following environment variable for the API base URL:

    `NEXT_PUBLIC_API_BASE_URL`: Set this variable to the base URL of your API.

## Authors

- [@vikramkrana](https://www.github.com/vikramkrana)

## Feedback

If you have any feedback, please reach out to me at <er.vikramkrana@gmail.com>
