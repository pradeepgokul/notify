# Notify

This project runs on Angular version 7.0.2 and NodeJS.

## Creating Agent

Once the server is up and running Navigate to `http://localhost:4200/register` and Click `Create Agent`. A success message will shown.

After creating the agent to Log in:

Email : agent1@abc.com
Password: agent

You can keep creating the buttons by click on Create Agent and email will agent2@abc.com, agent3@abc.com and so on.. and password remains the same.

Make sure you don't create more than 5 agents or else you lose track of the No of agents created

## How to run the tool

Open `Terminal` or `Command Prompt`.

Clone the project and Type `cd [path\to\cloned\destination\]notify`


### Express server

Make sure `mongodb` is running on the local machine.

Then `cd server`

Install the packages using `npm install` and run `npm run dev` for a HTTP server.


### Angular Server

Open New `Terminal` or `Command Prompt`.

Then `cd client`

Install the packages using `npm install` and run `npm start` for a dev server. Navigate to `http://localhost:4200/`.


## Requirements
We recommend the following setup
 - node 8+
 - mongodb 3.4 or 3.6
 - express
 - angularcli 6+
