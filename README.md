# Speedlify

[![Netlify deploy status](https://api.netlify.com/api/v1/badges/3612fc3d-ce61-4e6d-a2b8-0cc14d6be572/deploy-status)](https://app.netlify.com/sites/gifted-heisenberg-4853ce/deploys)

![CRON GitHub Action](https://github.com/codeforamerica/speedlify-cfa/actions/workflows/main.yml/badge.svg)

After you make a fast web site, keep it fast by measuring it over time. Read [Use Speedlify to Continuously Measure Site Performance](https://www.zachleat.com/web/speedlify/). Created by [@zachleat](https://www.zachleat.com/).

* Requires Node 12+
* Each file in `_data/sites/*.js` is a category and contains a list of sites for comparison.

## Run locally

```
npm install
npm run test-pages
npm run start
```

## Update sites to run statistics on

Go to one of the JavaScript files in [_data/sites](https://github.com/codeforamerica/speedlify-cfa/tree/live/_data/sites) and modify the `urls` field.

## Netlify for deployments

You'll need a login and be added to [the Netlify team account](https://app.netlify.com/teams/loumoore/overview). There you see trigger a production deploy or monitor failed deploys. Current folks with access:

- Lou Moore
- Colt Borg

## Automatic builds

This repo has a [GitHub Action](https://github.com/codeforamerica/speedlify-cfa/blob/live/.github/workflows/main.yml) that automatically re-deploy the site with new data every Monday and Friday morning.

---

## Notes

Can run directly on Netlify (including your tests) and will save the results to a Netlify build cache (via Netlify Build Plugins, see `plugins/keep-data-cache/`).

Speedlify will also save your data to `/results.zip` so that you can download later. Though this has proved to be unnecessary so far, it does serve as a fallback backup mechanism in case the Netlify cache is lost. Just look up your previous build URL and download the data to restore.

### Known Limitations

* If you change a URL to remove a redirect (to remove or add a `www.`, moved domains, etc), you probably want to delete the old URL’s data otherwise you’ll have two entries in the results list.
* When running on Netlify, a single category has a max limit on the number of sites it can test, upper bound on how many tests it can complete in the 15 minute Netlify build limit.
* The same URL cannot be listed in two different categories (yet).
