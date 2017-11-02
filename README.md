# Statusbot
Programmatically update your Slack status
___
## Setup
### Slack
1. Create a legacy slack token [here](https://api.slack.com/custom-integrations/legacy-tokens).

    (You'll need this info later)
1. Create a new app in slack [here](https://api.slack.com/apps).
    1. Go to oAuth & Permissions
    1. Add a scope for modifying user profiles: `users.profile.write`
    1. Install the app to your workspace

### AWS
1. Create a new user in IAM
    1. Grant the user admin access
    1. Create an access key
    1. Download the .csv

        (you'll need this info in the next step)

### Serverless
1. If not already installed, run `npm i -g serverless` in terminal
1. Then run:

    `serverless config credentials --provider aws --key <<KEY FROM CSV>> --secret <<SECRET FROM CSV>>`
1. Afterward run: `npm init; npm i;`
1. Finally run: `serverless deploy` to deploy the lambda to AWS

> You can now use the provided endpoint to make POST requests (Body JSON required- see below).

---
## Usage
### IFTTT
[If This Than That](https://ifttt.com/) is an extremely flexible way to trigger the lamba.
1. You can use any trigger for the 'This'. (I used the Location trigger)
1. Use Webhooks for the 'That'
  1. Enter your endpoint url
  1. Switch the mime type to POST
  1. Input the following json in the body:

      `{ "token": <<LEGACY SLACK TOKEN>>", "profile": {"status_text":"In the office","status_emoji":":smith_tower:"} }`
