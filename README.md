<h1 align="center">
  <br>
  <a href="https://blizy-bodybuilding.netlify.app/"><img src="https://i.imgur.com/64hlryU.png" alt="blizy gym" width="200"></a>
  <br>
  DonBlizy Bodybuilding
  <br>
</h1>

<h4 align="center">A gym exercises app built using <a href="https://reactjs.org/" target="_blank">React.js</a> and <a href="https://mui.com/">Material UI. </a></h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> 
</p>

![screenshot](https://media.giphy.com/media/Wt4qCVlb4be9kxSkqN/giphy.gif)

## Key Features

This project was created as practice for MUI. It is not meant to be used for production and is a work in progress.

A user can:

- Search for exercises based on muscle group, equipment, various keywords (ie Deadlift).
- View suggested youtube videos based on a chosen exercise.

The app is using 2 different APIs to fetch <a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb"> exercise data </a> and <a href="https://rapidapi.com/h0p3rwe/api/youtube-search-and-download">youtube videos </a> respectively.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/donblizy/gym_exercises.git

# Go into the repository
$ cd blizy-bodybuilding
# Install dependencies
$ npm install

# Run the app
$ npm start
```

You will also need to subscribe (free) to the 2 APIs linked above and get your own key and add it to the 2 fields in src/utils/fetchData.js either by hard pasting it or through an environment variable (.env) .
