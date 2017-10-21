# HunterJobWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Recuperation du code source
Vous devez d'abord installer la version 6.11.3 de nodeJS. Vous pouvez la télécharger ici : https://nodejs.org/en/

1) Lancer la commande git clone https://ab_dou@bitbucket.org/dlfullstackteam/hunterjobweb.git
2) Après avoir récuperer le code faites "npm install" pour installer les packages.
3) Installer le module moterial avec cette commande: npm install --save @angular/material @angular/cdk
4) npm install --save @angular/animations

## Installation du module ngrx
Il y a la version 4 qui est sortie mais elle n'est pas encore store. Donc pour l'instant nous utiliseront la version 2.3

npm install @ngrx/core @ngrx/store@2.2.3 --save
npm install @ngrx/store-devtools@3.2.4 --save
npm install @ngrx/router-store@1.2.6 --save
npm install @ngrx/effects@2.0.5 --save
npm install reselect
npm i --save-dev ngrx-store-freeze

Après avoir installer tous ces modules, faites "npm install" pour installer les modules qui sont definis dans le fichier package.json.

##Lancement de l'application
"npm start" (linux et windows) oubien "ng serve" si vous êtes sur windows

Plus d'information sur le module ngrx: https://gist.github.com/btroncone/a6e4347326749f938510




