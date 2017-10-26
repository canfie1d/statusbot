Run `serverless deploy` to deploy the lambda.

- Get a legacy slack token from here:
https://api.slack.com/custom-integrations/legacy-tokens

- Hit a POST endpoint

- With this json in the BODY
{ "token": <Legacy Slack Token>", "profile": {"status_text":"In the office","status_emoji":":smith_tower:"} }
