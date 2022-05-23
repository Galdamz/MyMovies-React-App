# MyMovies-React-App

MyMovies is a React App Where You Can See the Most Popular Movies, Search and Mark Your Favorite ones...

**[Live Demo](https://my-movies-react-app-woad.vercel.app/) Hosted By Vercel**

Important: Due to Vercel's CORS Policy, it's probably the search box on route ```/search``` will not work...

This is because TheMovieDB API Redirects to a http (unsecure) link instead a https (secure) link.

You can know more about this [here](https://vercel.com/support/articles/how-to-enable-cors)


----------------


- Core Tecnologies

| Technology                                           | Version |
| ---------------------------------------------------- | ------- |
| [React](https://reactjs.org/)                        | 18.0.0  |
| [React-DOM](https://www.npmjs.com/package/react-dom) | 18.0.0  |
| JavaScript                                           | ES6     |
| [TypeScript](https://www.typescriptlang.org/)        | 4.63    |
| [Vite](https://vitejs.dev/)                          | 2.9.9   |

- Fetching Tecnologies

| Technology                                       | Version |
| ------------------------------------------------ | ------- |
| [Axios](https://www.npmjs.com/package/axios)     | 0.27.2  |
| [React-Query](https://react-query.tanstack.com/) | 3.39.0  |

- Styles UI Tecnologies

| Technology                                                 | Version |
| ---------------------------------------------------------- | ------- |
| [ChakraUI](https://chakra-ui.com/)                         | 2.0.2   |
| [Lottie-React](https://www.npmjs.com/package/lottie-react) | 2.2.1   |

## Before All...

Make sure you have Node.js and NPM installed on your machine

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Important:

You will need yarn package manager, you can install it using npm
```
npm install -g yarn
````

---

# Instructions

```
# Development Mode
```

1. Install all necessary dependencies

Note: It's Highly recommended use `yarn` as package manager due compatibility dependencies between React 18.0.0 and lottie.

```sh
yarn install
```

2. Create an `.env` file and add all your .env variables (You can rename `.env.example` file if you want)

3. Run application in Development Mode.

```sh
yarn run dev
```

4. Start Coding :)

---

```
# Production Mode
```

If you would like to use this app on a web server, follow the next instructions:

1. Save all your changes before build to production.

2. Run the next command to build a optimized version for web navigators.

```sh
yarn run build
```

When the build has been completed, you will see a `dist` directory, copy all the files inside on you web server (NGINX or Apache for example).
