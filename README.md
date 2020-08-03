# autopay-cypress
Automate bill paying for sites that don't provide auto drafting like Charleston County Water Services

## Automation
* Create a Github account, if you do not already have one.
* Login into Github.
* Make a copy of this repo in your own Github account.
* Go to https://app.circleci.com and login with Github.
* Got to Add Projects -> Click "Setup Project" next to this repo -> Click "Use Existing Config" -> Click "Start Building"
* Go to Project Settings and add the following environment variables:
  * `BILLING_USERNAME`: your username you use to login to City of Charleston Water Services
  * `BILLING_PASSWORD`: your password you use to login to City of Charleston Water Services

## Local Development
* Create a `.env` file that contains the following:
- `BILLING_USERNAME`: City of Charleston Water Services username used to pay bills
- `BILLING_PASSWORD`: City of Charleston Water Services password used to pay bills
* Run `yarn dev`
