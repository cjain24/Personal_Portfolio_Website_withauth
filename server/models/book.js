let mongoose = require('mongoose');

let booksModel = mongoose.Schema({

    name : String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
}
);

module.exports = mongoose.model('Book', booksModel);