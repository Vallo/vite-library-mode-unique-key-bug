# vite-library-mode-unique-key-bug

## Reproduction steps:

Enter Library project, `npm install` then  `npm run build`. 

Copy `library-example-0.0.1.tgz` to consumer project. Run `npm install` and then `npm run dev`. 

Upon page load, an error should appear on console `Each child in a list should have a unique "key" prop...`

This does not happen if you `npm run build:dev` (sets `process.env.NODE_ENV = development`)

Error does not trigger if a random key is added to `<Grid>` component.
