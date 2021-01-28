# OptumRX Challenge UI

## Do Not Use Real Information

- Hosted Demo Available At:

  ```Text
  https://optumrx-challenge-ui-react.herokuapp.com/
  ```

- Outputs from Backend API Response Viewable via Inspect Element

## TypeScript

Declined TypeScript for this project as current release version is application breaking.

TypeScript Issue 1: https://github.com/facebook/create-react-app/issues/9429

TypeScript Issue 2: https://github.com/facebook/create-react-app/issues/9868

TypeScrpt solution appears to be configuration of compatible versions between dependencies and TypeScript source; as this is a Proof of Concept quickest production of functional deliverable was priortized over type safety for the POC.

## Legacy Application Refactor

- MVC deployed is handlebars, not React; refactored fork URI with Formik

  ```text
  https://github.com/parallelam/Eatme-Formik
  ```

## Run Locally

- Install [NodeJS](https://nodejs.org/en/)

- Clone Repository to Local

  ```bash
  git clone https://github.com/parallelam/optumrx-challenge
  ```

- Run NPM Install for Dependency Installation

  ```bash
  npm install
  ```

- Run Script from Root Directory:

  ```bash
  npm run start
  ```

## Docker Instructions

- Build and Tag the Docker Image via CLI:

  ```docker
  # Docker Command
  docker build -t sample:dev .
  ```

- Spin Up Container Once Build Finish:

  ```docker
  # Docker Command
    docker run \
      -it \
      --rm \
      -v ${PWD}:/app \
      -v /app/node_modules \
      -p 3001:3000 \
      -e CHOKIDAR_USEPOLLING=true \
      sample:dev
  ```

## Application Launch

- URI:

  ```text
  http://localhost:3001/
  ```

- If you run into an "ENOENT: no such file or directory, open '/app/package.json". error, you may need to add an additional volume: -v /app/package.json.
