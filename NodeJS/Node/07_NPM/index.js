/* 
A package is a piece of code written by someone else
The npm comes bundled with node itself. Nothing is required to be installed 
npm is similar to pip in python
*/

/* 
npm init: Converted the directory 07_NPM into an npm package. The result is a package.json file.
npm install <pkg>: Does the following->
                    1. Installs the node package and adds it to the dependency. 
                    2. Creates package-lock.json
                    3. Creates node_modules folder i.e. modules you can require
npm uninstall <pkg>: Uninstalls
npm install: If you accidentally delete node_modules and want to recover it
npm install <pkg>@<major.minor.patch>: Install specific version of the package

node_modules contains many files since dependecies may depend on other dependencies as well

npm install <pkg> --save-dev: Create a dev dependency that will not get into production. 
package.json saves them under devDependencies
e.g. You can make nodemon (a command line utility that allows you to auto restart the server) as a dev dependency


the -g flag is a shorthand for the global configuration which sets the package install location to the folder where you installed NodeJS. This is useful when you need to run the package from the command line instead of using require() and import it to your code.
--global flag is useful when:
Install globally if the package provides command-line tools
Install locally if you're using the package as part of your application
Install globally and locally if both use-cases apply (e.g. nodemon)

npm i <pkg>: Shorthand for install

^ means exact
~ means it will fetches patches also
> means versions greater than this one

npm view <pkg> version: Gives version of the package
*/

console.log("Hello nodemon after changes");
