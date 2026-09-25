# Fatestream

Fatestream is an *opinionated fork of P-Stream -> Sudo-Flix -> Movieweb, its philosophy leans closer to sudo-flix and more so on ease of use

[![Fatestream Image](.github/Fatestream.png)](https://Fatestream.github.io/docs/)

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFatestream%2FFatestream)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Fatestream/Fatestream)

**NOTE: To self-host, more setup is required. Check the [docs](https://Fatestream.github.io/docs/) to properly set up!!!!**

## Links And Resources

| Service       | Link                                            | Source Code                                             |
| ------------- | ----------------------------------------------- | ------------------------------------------------------- |
| Fatestream Docs | [docs](https://Fatestream.github.io/docs/)                | [source code](https://github.com/Fatestream/docs)         |
| Extension     | [extension](https://Fatestream.github.io/docs/extension) | [source code](https://github.com/Fatestream/browser-ext)  |
| Proxy         | [simple-proxy](https://Fatestream.github.io/docs/proxy)  | [source code](https://github.com/Fatestream/simple-proxy) |
| Backend       | [backend](https://github.com/Fatestream/backend)          | [source code](https://github.com/Fatestream/backend)      |
| Frontend      | [Fatestream](https://Fatestream.github.io/docs/instances)  | [source code](https://github.com/Fatestream/Fatestream)     |
| Weblate       | [weblate](https://Fatestream.github.io/docs/weblate)          |                                                         |

## Referrers

- [FMHY (Voted as #1 streaming site of 2024, 2025)](https://fmhy.net)

## Running Locally

Type the following commands into your terminal / command line to run Fatestream locally

```bash
git clone https://github.com/thingfoil/Fatestream.git
cd smov
git pull
pnpm install
pnpm run dev
```

Then you can visit the local instance [here](http://localhost:5173) or, at local host on port 5173.

## Updating a Fatestream Instance

To update a Fatestream instance you can type the below commands into a terminal at the root of your project.

```bash
git remote add upstream https://github.com/thingfoil/Fatestream.git
git fetch upstream # Grab the contents of the new remote source
git checkout <YOUR_MAIN_BRANCH>  # Most likely this would be `origin/production`
git merge upstream/production
# * Fix any conflicts present during merge *
git add .  # Add all changes made during merge and conflict fixing
git commit -m "Update Fatestream instance (merge upstream/production)"
git push  # Push to YOUR repository
```

## Contact Me / Discord

[Discord](https://discord.gg/R8ke6EGVBn)

<!-- (fluxer is an OSS Discord alternative platform) -->
