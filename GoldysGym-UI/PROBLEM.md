# Goldies Gym 

## Problem Statement

Goldies Gym has started business in 2018 as a specialized fitness center. It started operations from a 200 sqm floor area in the suburbs of Boston. Because of its uniquely designed fitness regimes, it was able to quickly raise memberships and currently operates with five centers and aggressively planning to open multiple centers across the country.
Goldies Gym wants to digitize its operation in a phased manner. 

The problem to solve for Goldies Gym is to garner a larger membership base and create a brand in the current competitive Health and Fitness domain.


## Proposed Solution
In the first phase, Goldies Gym needs a solution for their marketing campaign. 
The solution should help to reach out to users over the web and gather enquiry to its offered programs. 


## High Level Requirements

The system should allow integration with other fitness apps and portals as well as with their own Single Page Application (SPA). Therefore, the system should be based on the standard REST 2.0 API. 

As in the current phase, the business requirements are still abstract, the system is predicted to be highly evolvable based on their business requirements. Therefore, the system should be built on the Microservices architecture.

The Gym Admin team at Goldies Gym should be able to add the fitness programs they offer, remove any old program details from the portal.


Users who visits Goldies Gym Web application, should be able to register themselves and login to the application, find the current offerings, view the details of it, and finally share their interest for the same.  

The Marketing team should be able to see the list of users who have shared their interest for the fitness programs, call them back and close the ticket with their remarks.



### There would be three roles in this application. They would be allowed to perform activities based on their role: 
  - **Customer**: View details of the fitness programs and show interest by providing contact details
  - **Marketing Team**: View details of the fitness programs, customers who has shown interest, working on these tickets, and close the same
  - **GymAdmin**: Manage fitness programs


## Tech Stack

- Angular8
- json-server 

## Prerequisites

  1. Install dependencies `npm install` 
  2. Run the backend `json-server --watch db.json` which shall run on port:3000
  3. Run the frontend `npm run start` which shall run on port:4200  

## Know your APIs
  
  1. For the programs 
     - POST    - http://localhost:3000/programs         - add a new program
     - GET     - http://localhost:3000/programs         - get all existing programs  
     - DELETE  - http://localhost:3000/programs/{id}/   - delete a program by its id 
  2. For the enqueries
     - POST    - http://localhost:3000/enquiries        - add an enquery 
     - PUT     - http://localhost:3000/enquiries/{id}/  - update the existing enquiry
     - GET     - http://localhost:3000/enquiries        - get all existing enquries
  3. For registration
     - POST    - http://localhost:3000/users            - save a new user details
  4. For login
     - POST    - http://localhost:3000/login            - save the login user details

## Instructions:

1. Your are expecting to write code in the given boilerplate so that you can achieve all  high level requirements
2. All the detailed instructions are given inside the project 
3. Understand the comments in the project and write code 
4. Given db.json file which acts as backend server with all APIs, please do not make any changes in db.json

