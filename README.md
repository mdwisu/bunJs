# bunjs

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.tsx
```

This project was created using `bun init` in bun v1.1.42. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Bun

<!-- bun Installation -->

https://bun.sh/docs/installation#windows

## env

https://bun.sh/docs/runtime/env

```powershell
$env:NODE_ENV = "production"
echo $env:NODE_ENV
```

```bash
export NODE_ENV=production
```

## package manager

https://bun.sh/docs/cli/install

```sh
bun install
```

```sh
bun add preact
bun add zod@3.20.0
bun add zod@^3.0.0
bun add zod@latest
bun add -d @types/react
```

```sh
bun remove ts-node
```

```sh
# To update all dependencies to the latest version
bun update
bun update [package]
# By default, bun update will update to the latest version of a dependency that satisfies the version range specified in your package.json.
# To update to the latest version, regardless of if it's compatible with the current version range, use the --latest flag
bun update --latest
```

## package runner

```
bunx tsc --verison
bunx figle halo_bang
```
