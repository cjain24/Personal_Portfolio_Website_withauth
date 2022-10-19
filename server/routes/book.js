let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Book Model
let Book = require("../models/book");

/* GET Route for the Book List page - READ OPeration */
router.get("/", (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(bookList);

      res.render("book/list", { title: "Books", BookList: bookList });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
});

/* GET Route for displaying Add page - Create OPeration */
router.get("/add", (req, res, next) => {
  res.render("book/add", { title: "Add Book" });
});

/* POST Route for processing Add page - Create OPeration */
router.post("/add", (req, res, next) => {
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
});
/* GET Route for displaying Edit page -UPDATE OPeration */
router.get("/edit/:id", (req, res, next) => {
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
});

/*POST Route for processing Edit page - UPDATE OPeration */
router.post("/edit/:id", (req, res, next) => {
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
});

/* GET to perform book deletion -Delete OPeration */
router.get("/delete/:id", (req, res, next) => {
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
});

module.exports = router;
