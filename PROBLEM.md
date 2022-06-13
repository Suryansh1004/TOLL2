# NBA List app

## Problem Statement

NBA list app is keep track of all the NBA team and player. We can add a new player with details like name and teamName to the list. We can search for any Player/Team by name 

## Know your APIs
    
     - POST    - http://localhost:3000/team     - add a new player
     - GET     - http://localhost:3000/team     - get all existing player and team 

## TECH STACK

- Angular12
- Jasmine
- json-server

## PREREQUISITES

  1. Install dependencies npm install
  2. Run the frontend `npm run start` which shall run on port:4200  
  3. Use `json-server --watch db.json` for APIs availabilty using json-server

## Instruction Before Starting Code
Make sure you have installed latest version of angular CLI  (Version 12 or more). Before you start with coding (before executing npm i command) for coding based assessment.
You can check versions by executing `ng --version` command. Below are prefered version
Angular CLI: 13.3.2 (Stable version of angular)
Node: 14.19.2 
Package Manager: npm 6.14.17 

Once above versions are available. Exceute below commands:
npm i
npm run build
npm run test
npm run lint
If all above commands run successfully, then submit the code to hobbes for evaluation.

## Problem
- Create a Reactive form in Registration component that allows us to provide player name and Team Name and make a POST request
- Define search component that lists all player and team name available when a GET request is made, And also should filter Team basis search criteria.
- Define a search pipe that searched from team list basis player name or team name.
- Define a Team service class to make POST and GET request to json server.

## Instructions

1. Your are expected to write code in the given boilerplate so that you can complete this assignment
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write code
4. After writing the code unit test your code by running `npm run test` or `ng test` and test lint errors using `ng lint` or `npm run lint`
