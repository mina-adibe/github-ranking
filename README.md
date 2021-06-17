# github-ranking

## Idea of the App

The task was to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. by fetching the sorted JSON data directly from the Github API ) and using pagination to implement infinite scroll.

## Features

- [x] As a User I should be able to list the most starred Github repos that were created in the last 30 days.
- [x] As a User I should see the results as a list. One repository per row.
- [x] As a User I should be able to see for each repo/row the following details :
  - Repository name
  - Repository description
  - Number of stars for the repo.
  - Number of issues for the repo.
  - Username and avatar of the owner.
- [x] As a User I should be able to keep scrolling and new results should appear (pagination).

## Screenshot

The final result of the project looks like :
![](https://github.com/mina-adibe/github-ranking/blob/master/public/assets/screenshot1.JPG)
![](https://github.com/mina-adibe/github-ranking/blob/master/public/assets/screenshot2.JPG)

## Technologies Used in Project

- Reactjs
- react-infinite-scroll-component
- Moment.js
- react-router-dom
- The Github API

## Setup

To setup the project you have to :
git clone https://github.com/mina-adibe/github-ranking.git

- install all project dependencies with `npm install`

```


## Running the app

To get the app up and running use :

```

npm start

```

The project will be available at :  **http://localhost:3000 to view it in the browser.**
```
