# Install nodemon

```bash
npm install nodemon
npm i nodemon //i=install
```

npm init is a command used in Node.js to initialize a new package.json file in your project directory.

```bash
npm init
```

# What Happens When You Run npm init?

Creates a package.json File:
Running npm init will prompt you with a series of questions to help you configure the package.json file.
It will ask for details such as:

- name: The name of your project.
- version: The version of your project (default: 1.0.0).
- description: A brief description of your project.
- entry point: The main file of your application (default: index.js).
- test command: Command to run tests (if any).
- git repository: URL of the Git repository (if applicable).
- keywords: Keywords to help others discover the project.
- author: Name of the author of the project.
- license: License for the project (default: ISC).

After answering these questions, the command generates the package.json file.

Default Values:
If you don't want to answer each question manually, you can use the following command for a default package.json with default values:

```bash
npm init -y
```

This will create a package.json with default values for all fields.

# Example Output of npm init

If you run npm init, you'll see something like this:

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

Press ^C at any time to quit.
package name: (your-project-name)
version: (1.0.0)
description: A simple project
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

Once you fill in the details, a package.json file similar to the following will be generated:

```bash
json
Copy code
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "A simple project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

# Why package.json is Important:

- Dependency Management: It keeps track of the dependencies your project requires, so they can be easily installed with npm install.
- Scripts: It allows you to define scripts (e.g., "start", "test") to automate tasks like running the application, testing, etc.
- Versioning: It helps with version control of your project, specifying the current version and tracking updates.
- Project Metadata: It provides basic information like the project name, author, license, and more.

In short, npm init sets up the foundation for managing your Node.js project, making it easier to handle dependencies, scripts, and versioning.

# Versioning in `package.json`

In Node.js, the `package.json` file uses specific symbols to define how package versions are managed. Here's a quick guide:

### Version Symbols

- **^ (Caret Symbol)**  
  Example: `^3.6.0`

  - Allows updates to **minor** and **patch** versions.
  - **Avoids upgrading to major versions**, preventing breaking changes.
  - Example: Versions like `3.6.x` or `3.x.x` are allowed, but `4.0.0` is not.

- **~ (Tilde Symbol)**  
  Example: `~3.6.0`

  - Allows updates to **patch** versions only.
  - **Avoids upgrading to both major and minor versions**.
  - Example: Versions like `3.6.x` are allowed, but `3.7.x` or `4.x.x` are not.

- **\* (Asterisk Symbol)**  
  Example: `*`
  - Upgrades to the **latest version available**.
  - **Not recommended** as it may introduce breaking changes with major updates.

### Best Practices

- Use `^` for flexible but safe updates (minor and patch).
- Use `~` for more control, allowing only patch updates.
- Avoid using `*` to prevent unintended breaking changes.

For more details on semantic versioning, check out the [npm documentation](https://docs.npmjs.com/about-semantic-versioning).

### Update your Packages with latest patch

```bash
npm update

//OR
npm update YOUR_PACKGE_NAME
```

### Remove Package

```bash
npm rm

//OR
npm rm YOUR_PACKGE_NAME
```
