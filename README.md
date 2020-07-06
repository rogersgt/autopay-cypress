# autopay-cypress
Automate bill paying for sites that don't provide auto drafting like Charleston County Water Services

## Automation
* Create a Github account, if you do not already have one.
* Login into Github.
* Go to app.circleci.com and login with Github
* TO DO: set up circleci config

## Local Development
* Create a `.env` file that contains the following:
- `BILLING_USERNAME`: City of Charleston Water Services username used to pay bills
- `BILLING_PASSWORD`: City of Charleston Water Services password used to pay bills
* Run `yarn dev`
