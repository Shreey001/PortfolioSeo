# Portfolio Deployment Guide

This guide provides instructions on how to deploy your portfolio website to various hosting platforms.

## Table of Contents

1. [Build Your Portfolio](#build-your-portfolio)
2. [Deployment Options](#deployment-options)
   - [Vercel](#vercel)
   - [Netlify](#netlify)
   - [GitHub Pages](#github-pages)
   - [Firebase Hosting](#firebase-hosting)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Continuous Deployment](#continuous-deployment)

## Build Your Portfolio

Before deploying, you need to build your portfolio:

1. Make sure all your changes are saved
2. Run the build command:

```bash
npm run build
```

This will create a `dist` directory with your production-ready files.

## Deployment Options

### Vercel

Vercel is one of the easiest platforms to deploy React applications.

1. Install Vercel CLI (optional):

```bash
npm install -g vercel
```

2. Deploy using Vercel CLI:

```bash
vercel
```

Or deploy through the Vercel dashboard:

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Import your GitHub/GitLab/Bitbucket repository
3. Configure your project settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Click "Deploy"

### Netlify

Netlify is another excellent option for hosting static websites.

1. Install Netlify CLI (optional):

```bash
npm install -g netlify-cli
```

2. Deploy using Netlify CLI:

```bash
netlify deploy
```

Or deploy through the Netlify dashboard:

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect to your GitHub/GitLab/Bitbucket repository
4. Configure your build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Deploy site"

### GitHub Pages

To deploy to GitHub Pages:

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add a homepage field to your package.json:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

4. Update your vite.config.js to include the base path:

```javascript
export default defineConfig({
  base: "/repository-name/",
  // other config options...
});
```

5. Deploy to GitHub Pages:

```bash
npm run deploy
```

### Firebase Hosting

To deploy to Firebase Hosting:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase in your project:

```bash
firebase init
```

4. Select "Hosting" when prompted
5. Set your public directory to `dist`
6. Configure as a single-page app: Yes
7. Set up automatic builds and deploys: No (unless you want to)
8. Deploy to Firebase:

```bash
firebase deploy
```

## Custom Domain Setup

### Purchasing a Domain

1. Choose a domain registrar (Namecheap, Google Domains, GoDaddy, etc.)
2. Search for your desired domain name
3. Purchase the domain

### Connecting Your Domain

#### Vercel

1. Go to your project on Vercel
2. Navigate to "Settings" > "Domains"
3. Add your domain
4. Follow the instructions to configure your DNS settings

#### Netlify

1. Go to your site on Netlify
2. Navigate to "Settings" > "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS settings

#### GitHub Pages

1. Go to your repository on GitHub
2. Navigate to "Settings" > "Pages"
3. Under "Custom domain", enter your domain name
4. Update your DNS settings as instructed

#### Firebase Hosting

1. Run the following command:

```bash
firebase hosting:channel:deploy --expires 30d
```

2. Go to the Firebase console
3. Navigate to "Hosting" > "Add custom domain"
4. Follow the instructions to configure your DNS settings

## Continuous Deployment

### GitHub Actions

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Vercel and Netlify

Both Vercel and Netlify offer automatic deployments when you push to your repository. No additional configuration is needed after the initial setup.

### Firebase with GitHub Actions

Create a `.github/workflows/firebase-deploy.yml` file:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

To generate a Firebase token:

```bash
firebase login:ci
```

Add the token to your GitHub repository secrets.
