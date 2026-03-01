# Jenkins User Stories

Previously known as Jenkins is the way. This project showcases real-world Jenkins user stories.

## Deployment

### Deployment Workflow (to be done by Infra or a maintainer)

* Builds are done on `ci.infra.jenkins.io` (VPN needed)
* Successful builds on main branch deploy to netlify
* Netlify site is fronted by fastly


For historical record, the admin portal can be reached via https://stories.jenkins.io/admin/

## Development Setup

### System Requirements

* Node.js (Recommended: Match version in `.tool-versions`)
* npm (Node Package Manager)

## Getting Started

First, fork the repository and clone it.

```bash
git clone <url-from-github>
```

Change Directory

```bash
cd stories
```

Install Dependencies

```bash
npm install
```

Run the development server:

```bash
npm run develop
```

Open [http://localhost:8000](http://localhost:8000) on your browser to see the result

### Run app using Docker (production build)
You can skip `Install Dependencies` and run the app in an isolated environment. The Docker image runs a production static build (served by Nginx), so it does not provide hot reload like `npm run develop`.

```bash
docker build -t stories-app .
docker run --rm -p 8000:8080 stories-app
# add -d if you prefer to run the container in the background
```


## Code Quality Tools

### Formatting

Ensure consistent code style:

```bash
npm run format
```

## Contributing Guidelines

1. Create feature branches
2. Write clear commit messages
3. Run formatters before submitting PRs

## Contribution Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run prettier formatting
5. Add your changes to staging area and commit your changes
6. Push your changes to GitHub
7. Submit a pull request


