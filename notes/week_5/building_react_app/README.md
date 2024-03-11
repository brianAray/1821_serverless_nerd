# Building a Production-ready React App
`npm start` is used for development purposes only and starts a local development server for the React app that will be default run on port 3000. It allows us to run and make sure our React app is working in a locally in a development environment, making it easier to catch bugs and make changes to our code. 

When you run `npm start`, your React app is **built in memory** and served from a local development server

## Building
The `npm run build` command, on the other hand, is used to create a production-ready version of a React app
- Running `npm run build` in your terminal compiles your React code into a production-ready version by creating `build` folder with all of the necessary files
- The `build` folder contains optimized and minified versions of your React components, images, and other assets, making your app faster and more efficient in production
- `npm run build` uses tools such as Babel to transpile our TypeScript code into a version of JS that is compatible with all modern browsers. Typically, this means the JS version that our project is transpiled to will be pre-ES6.
- The output of the `npm run build` command (all of the files stored in the build folder that is created) can be served from a web server (such as nginx) or from an S3 bucket, since it does not require additional processing or server-side logic
