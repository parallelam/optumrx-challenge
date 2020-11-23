# OptumRX Challenge UI

## TypeScript

Declined TypeScript for this project as current version is application breaking.

TypeScript Issue 1: https://github.com/facebook/create-react-app/issues/9429

TypeScript Issue 2: https://github.com/facebook/create-react-app/issues/9868

TypeScrpt solution appears to be configuration of compatible versions between dependencies and TypeScript source; as this is a Proof of Concept quickest production of functional deliverable was priortized over type safety for the POC.

## Legacy Application Refactor

Declined refactoring of legacy application as pertinent Secrets, Credentials and Environment Injectibles have been lost; hence delivery prioritized on knowledge demonstration.

## Docker Instructions

- Build and Tag the Docker Image via CLI:

```
$ docker build -t sample:dev .
```

- Spin Up Container Once Build Finish:

```
$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

- If you run into an "ENOENT: no such file or directory, open '/app/package.json". error, you may need to add an additional volume: -v /app/package.json.

* Application should be demoable at: http://localhost:3001/

## Do Not Use Real Information
