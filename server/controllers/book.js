let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { monitorEventLoopDelay } = require("perf_hooks");


//create reference to schema

let Book = require ('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
      if (err) {
        return console.error(err);
      } else {
        
  
        res.render("book/list", { title: "Books", BookList: bookList });
        
      }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render("book/add", { title: "Add Book" });
}

module.exports.processAddPage = (req, res, next) => {
    let newbook = Book({
      name: req.body.name,
      author: req.body.author,
      published: req.body.published,
      description: req.body.description,
      price: req.body.price,
    });
    Book.create(newbook, (err, Book) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the book-list
        res.redirect("/book-list");
      }
    });
  };


  module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    Book.findById(id, (err, booktoedit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("book/edit", { title: "Edit Book", book: booktoedit });
      }
    });
  }

  module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatebook = Book({
      _id: id,
      name: req.body.name,
      author: req.body.author,
      published: req.body.published,
      description: req.body.description,
      price: req.body.price,
    });
    Book.updateOne({ _id: id }, updatebook, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the book list
        res.redirect("/book-list");
      }
    });
  }

  module.exports.performDeletePage = (req, res, next) => {
    let id = req.params.id;
    Book.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh book list
        res.redirect("/book-list");
      }
    });
  }