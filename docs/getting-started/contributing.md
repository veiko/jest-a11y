---
id: contributing
sidebar_class_name: sidebar-green
title: Contributing
---

Thanks for showing interest to contribute to `jest-a11y` 💖!

When it comes to open source, there are different ways you can contribute, all of which are valuable. Here's a few guidelines that should help you as you prepare your contribution.

## Setup the Project

Setting up the project is easy. The following steps will get you up and running to contribute to `jest-a11y`:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](https://github.com/veiko/jest-a11y))
2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/jest-a11y.git
cd jest-a11y
```

3. Setup all the dependencies and packages by running `yarn`.
4. Execute `yarn start` to spin up a local development server.

:::info

If you run into any issues, kindly reach out to the `jest-a11y` team [here](https://github.com/veiko/jest-a11y/issues)

:::

### Commands

**`yarn`**: installs the dependency packages.

**`yarn start`**: starts the local development server.

**`yarn build`**: builds the project for production.

### Commit Convention

Before you create a PR, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention `category(scope or module): message` in your commit message while using one of the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/ or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork off the `jest-a11y` repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other conventional commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the [commit convention](https://github.com/veiko/jest-a11y/blob/main/CONTRIBUTING.md#commit-convention).

## License

By contributing your code to the chakra-ui-docs GitHub repository, you agree to license your contribution under the MIT license.
