# Weather App

Show weather for configured cities

## How to run

1. `npm install`
2. create file `.env` with content
```
REACT_APP_WEATHER_API_KEY = __API_KEY__
```
To get api key you need to register on https://www.visualcrossing.com/ and paste API KEY from there

3. `npm start`

## Cypress tests

1. Open Cypress

```
.\node_modules\.bin\cypress open
```
2. Select E2E Testing
3. Select Browser
4. Select test (`page-base.cy.ts`)
