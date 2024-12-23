# Fortbyte

### A tool to keep track of Fortnite news, user stats and daily item shop updates from the comfort of your mobile or desktop (no console needed!)

Quick and easy to access, visit [Fortbyte](https://fortbyte.cyanne.codes) where it's deployed to check it out! 

#### Local instructions
*Note: you will need an API key from [Fortnite-API](https://dash.fortnite-api.com/account) to follow this process* 
- Clone down this repo and `cd` into it
- Run `npm i` in the root directory to install dependencies
- Copy and paste your API key into `.env.example` where `REACT-APP_API_KEY` is
- Run `npm start` to boot up the server and navigate to `localhost:3000` in your browser

#### Testing instructions
- Run `npx cypress open` in root to run testing suite

#### Usage instructions

From the home page, you'll see this week's news. You're able to favorite a news item and filter it by favorited to only show the news items you're interested in. 

##### Stats
Head on over to the stats page! Enter any Epic Games to see the account's stats. See how you and your squad compares! Who has the highest kd? Now you know! This is genuinely my favorite part of this app as a lot of this information isn't shown in game. *Note: due to the nature of the data pulled from Fortnite API, trios stats are unavailable at this time, and don't affect your overall score*

If you don't have an Epic Games account, you're more than welcome to use my username, `elephant123` to check out how this page works!

##### Shop 
From the shop tab, you'll be able to see all the daily items refreshed at 0:00GMT every day. No more having to wait for a long console/PC login experience just to see if there's anything good in the shop today! Currently only daily items are displayed, but I hope to add the featured items in the future. 

#### See it in action! 
![short-fortbyte-screencap_AdobeExpress](https://user-images.githubusercontent.com/98280256/183130402-bd435431-07bf-4c79-817e-933cd6c96923.gif)

#### Built using
- React
- HTML
- CSS
- Cypress testing
- [Zustand state management](https://github.com/pmndrs/zustand)
- Fetch API
- React Router
- [Figma](https://www.figma.com/file/zI4EPf1Ig9vMvZeoLkD9mI/Fortbyte?node-id=0%3A1)
- Trello 
- Vercel
