# Image-Processing App Project

## Overview
This Image processing app requires you to create a Nodejs app which allow the user to enter the url of an image with specific width and height to be resized. 

## Table of Contents

* Folder structure.
* Instructions on how to run the project.
* To get start with the code.
* Scripts to be run.
* License.


## Folder structure

```bash
├── dist
├── spec
├── src
│   ├── images
│   | routes
│   │  ├── api
│   |  |  ├── images.ts
│   |  index.ts
|   ├── tests
|   |  ├── helpers
│   │  │  ├── reporter.ts
|   |  ├── helperFunctions.spec.ts
|   |  ├── imagesRoute.spec.ts
|   |  ├── routesIndex.spec.ts
│   ├── thumb (will be created when image resized)
│   ├── utilities
│   │  ├── helperFunctions.ts
│   │  ├── logger.ts
│   ├── .env
│   ├── index.ts
├── .eslintignore
├── .eslintrc.json
├── .prettierigonre
├── .prettierrc
├── tsconfig.json
├── package-lock.json
├── package.json
```

## Instructions on how to run the project

* Open the terminal, make sure that you'r on the same root level then write `npm install`.
* After that open your browser and browse to `http://localhost:3000/`.
* To resize the desired image follow this url example `http://localhost:3000/api/images?filename=<filename>&filetype=<filetype>&width=<width>&height=<height>`.
  

## To get start with the code

#### You Will Find :

* `src/index.ts` with the server setup.
* `src/routes/index.ts` with the routes setup.
* `src/routes/api/images.ts` with the image route and the needed endpoints.
* `src/utilities/helperFunctions.ts` with all helper functions that maybe needed with the request to be complieded and resize the images.
* `src/utilities/logger.ts` with a helper function to log the url that was visited.
* `src/images` with the images will be used for the image processing.
* `src/tests` with all test files with representive names corresponding to their real file names.


## Scripts to be run

* `npm run start` to run the app.
* `npm run build` to compile ts files into js files and put them in dist folder.
* `npm run lint` to run linting aginst the linting roles.
* `npm run prettier` to run prettier aginst the prettier roles.
* `npm run jasmine` to run jasmine engine for test cases.
* `npm run test` to build the app and run jasmine engine for test cases.


## License

* Farah Mahmoud
* Advanced Full-Stack Web Development
* FWD - JAN Cohort 2023