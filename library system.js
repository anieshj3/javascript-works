
    const book = {
        title: "The Alone Boy",
        author: "Petter moses",
        year: 2022,

        getSummary: function () {
            return "The book '" + this.title +
                   "' was written by " + this.author +
                   " in " + this.year + ".";
        }
    };
    function printBookSummary(bookObj) {
        console.log(bookObj.getSummary());
    }
    printBookSummary(book);

