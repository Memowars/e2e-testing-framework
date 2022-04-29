const Page = require('./page');

class HomePage extends Page {
  get searchMovie() {
    return $('#suggestion-search');
  }
  get movieClick() {
    return $(`#react-autowhatever-1--item-0`);
  }
  get getDirector() {
    return $('a');
  }
  get getActor() {
    return $('#suggestion-search');
  }
  get getRank() {
    return $('#suggestion-search');
  }
  get getGenres() {
    return $('#suggestion-search');
  }

  async getSearchMovie(movie) {
    await this.searchMovie.setValue(movie);
    console.log('1', await this.searchMovie.getValue());
    await browser.pause(3000);

    await this.movieClick.click();
    await browser.pause(1000);
  }
  open() {
    return super.open('');
  }
}

module.exports = new HomePage();

('/name/nm0716257/?ref_=tt_ov_dr');
