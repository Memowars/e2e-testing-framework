class MovieList { 
    
    constructor() {
        this.parentLocator = `.findSection .findList tr`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink() {
        return $(this.parentLocator).$(`.result_text`);
    }
}

module.exports = new MovieList;