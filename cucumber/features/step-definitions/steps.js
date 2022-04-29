const { Given, When } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');

const pages = {
  home: HomePage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {
  await HomePage.getSearchMovie(movie);
});
