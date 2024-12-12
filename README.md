# Vitality

## Prerequisites:
General knowledge of HTML, CSS and JavaScript.

TypeScript: helps catch JSX errors.

## Set up development environment

Install [git](gitforwindows.org):
- within Git bash, run the following commands. 
```
git config --global user.name
git config --global user.email
```

Run `node -v`

If node is not installed, install the latest version of [node](nodejs.org/en/).

Download [Visual Studio Code](code.visualstudio.com) if it is not installed already.

Run ```npm create vite@4.1.0```

- Press (y)

- Press enter to keep the name of the project as `react-app` or change it if you wish. 

- Select the **React** framework

- Select the **TypeScript** language

## Creating a React app

Run:
```
cd React-app
npm install
code .
```
Open the terminal in **Visual Studio Code** by pushing `Ctrl+` `

Within the VS Code terminal type:
```npm run dev```
- Open the localhost address generated.

### Code formatter

Within **Visual Studio Code** download the **Prettier** extension.

Find the settings dialogue in VS Code and type **format on save** 

## Prettier description

The Prettier extension for Visual Studio Code works by:

Parsing your code: Prettier analyzes your code (JavaScript, TypeScript, CSS, etc.) to understand its structure.

Re-printing with its own rules: Instead of modifying your existing code, Prettier parses it and then re-prints it from scratch. This ensures consistent formatting across your codebase.

Enforcing a consistent style: Prettier has its own set of rules for formatting, such as:

Maximum line length: Code is wrapped to fit within a specified line length.
Indentation: Consistent use of spaces or tabs for indentation.
Single vs. double quotes: Consistent use of single or double quotes for strings.
Semicolon usage: Consistent use or omission of semicolons.
Integration with VS Code: The extension integrates with VS Code's formatting features, allowing you to:

Format on save: Automatically format your code whenever you save a file.
Format on demand: Manually format your code using keyboard shortcuts or commands.
Key benefits of using Prettier:

Consistent code style: Eliminates arguments about code style within a team.
Improved readability: Consistent formatting makes code easier to read and understand.
Increased productivity: Automating formatting saves time and effort.
Reduced cognitive load: You don't have to worry about formatting details, allowing you to focus on the logic of your code.
By using the Prettier extension in VS Code, you can significantly improve the quality and consistency of your code while also increasing your productivity.

## Next steps:

-Follow the coding instructions in [Mosh's video](https://www.youtube.com/watch?v=SqcY0GlETPk)






