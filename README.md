# README Maker

## Description

README Maker is an application for generating a professional README file.  This project was built to practice node.js skills including fs for writing to the file system, installing dependencies, installing inquirer version 8.2.4 for collecting user input, and string template literals to gain access to the data inside of objects.  It solves the problem of creating a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.  Some things I learned throughout README Maker are how to create a function that returns a license badge based on which license is being passed in, how to traverse markdown language so that data can be applied to sections of a README file, and understanding the import export relationship between different files within node.js.

## Installation

In order to install this project, the starter code had to be cloned to make my own repository with the starter code.  A .gitignore file was added with node_modules so that my node_modules weren't tracked or uploaded to GitHub.  Opening the terminal, the command "npm istall" was run to install all dependencies.  Then, "npm i inquirer@8.2.4" was run to install the version 8.2.4 for collecting user input.  

## Usage

In order to run README Maker, open up the terminal once within the VS Code root folder.  Run the command "node index.js" to initialize the app and launch the prompt interface.  Follow and answer each prompt accordingly to generate a README file within the lib folder.  Once the application has completed and exported or overwritten a README file to the lib folder, then the README can be accessed by right clicking the file and clicking "Open Preview."  From here, all sections are viewable with the user's input for each section.  Displayed are a license badge just below the title, a table of contents with links corresponding to sections of the README, a link to the license, and links the user's GitHub profile and email.

Attached is a screenshot of index.js:

![index.js](./assets/images/README%20Maker%20index.js.png)

Attached is a screenshot of generateMarkdown.js:

![generateMarkdown.js](./assets/images/README%20Maker%20generateMarkdown.js.png)

Attached is a screenshot of the sample README.md:

![Sample README](./assets/images/README%20Maker%20Sample%20README.png)

## Video

Attached is a walkthrough video of the application:

[Walkthrough-Video](https://drive.google.com/file/d/1KtGEn2hcXcg7CjK2QcJZEAKFD3knnKUe/view?usp=sharing)

## Credits

[Inquirer-npm](https://www.npmjs.com/package/inquirer)

[module.exports](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)

[Node.js File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

[Shields.io](https://shields.io/)

[badge-maker-npm](https://www.npmjs.com/package/badge-maker)

[Licenses: Choose a License](https://choosealicense.com/licenses/)


## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Features

Node.js, npm, Inquirer 8.2.4, fs, JSON