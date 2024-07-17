# Nuxt 3 vite types repro

## Steps to reproduce

1. Install the dependencies: `pnpm i`
2. Run a build: `pnpm build`

You will see that the import inside app.vue is not possible as there are no types for it. Even though vite is able to import urls.

## Workaround

1. Check out the branch "fix"
2. Install the dependencies again: `pnpm i`
3. Run a new build: `pnpm build`

This time the build is successful as vite was installed as a dev dependency, adding the necessary types for vue-tsc to understand that nuxt is able to resolve the import.
This also works without explicitly installing vite, but by enabling shameful hoisting for pnpm.
