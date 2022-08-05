# Fortbyte

### A tool to keep track of Fortnite news, user stats and daily item shop updates from the comfort of your mobile or desktop (no console needed!)

Quick and easy to access, visit [Fortbyte](fortbyte.vercel.app) where it's deployed on Vercel to check it out! 

#### Installation instructions

- Clone down this repo and `cd` into it
- Run `npm i` to install dependencies
- Head over to [Fortnite-API](https://dash.fortnite-api.com/account) and follow the directions to get yourself an API key (Heads up though: Discord account required)
- Copy and paste your API key into `.env.example` where `REACT-APP_API_KEY` is
- Run `npm start` to boot up the server and head over to `localhost:3000`

- Run `npx cypress open` to run testing suite

#### Usage instructions

From the home page, you'll see this week's news. You're able to favorite a news item and filter it by favorited to only show the news items you're interested in. 

##### Stats
Head on over to the stats page! Enter any Epic Games to see the account's stats. See how you and your squad compares! Who has the highest kd? Now you know! This is genuinely my favorite part of this app as a lot of this information isn't shown in game. *Note: due to the nature of the data pulled from Fortnite API, trios stats are unavailable at this time, and don't affect your overall score*

If you don't have an Epic account, you're more than welcome to use my username, `hails8n666` to check out how this page works!

##### Shop 
From the shop tab, you'll be able to see all the daily items refreshed at 0:00GMT every day. No more having to wait for a long console/PC login experience just to see if there's anything good in the shop today! Currently only daily items are displayed, but I hope to add the featured items in the future. 

#### See it in action! 
![short-fortbyte-screencap_AdobeExpress](https://user-images.githubusercontent.com/98280256/183130402-bd435431-07bf-4c79-817e-933cd6c96923.gif)

#### Built using
- React
- HTML
- CSS
- Cypress testing
- [Zustand state management](https://github.com/pmndrs/zustand) (I love this tool so much)
- Fetch API
- React Router
- [Figma](https://www.figma.com/file/zI4EPf1Ig9vMvZeoLkD9mI/Fortbyte?node-id=0%3A1)
- Trello 
- Vercel deployment

#### Reflections
This project was probably the most fun project I've made to date. Creating a tool that my friends are excited to use every day is probably the coolest feeling you can have as a developer, or even just a maker in general. The information returned from Fortnite API felt so gnarly to dig through, that this project gave me so much more comfortability rifling through complex data sets to just get to what I need. I think the shop data returns some 30k lines of code. That paired with the first time implementing global state usage in a React project has helped me feel so much more compotent and confident as a delveoper. I would love to add so much more to this project. Things like featured items being displayed in the shop, as well as a filter by type, rarity and price would be really cool too as more things are being added to the shop. 

This is my last solo project of [Turing School of Software And Design](https://turing.edu/)'s front end program, and it's crazy to think that 6 months ago I typed my first "hello world" into an HTML document an today I'm wrapping up this tool I'm really proud of. Overall this project was a blast to build and reminds me why I chose this dev path in the first place. There's room for silly and creative people in this programming world and I'm stoked to build more in the future. 
