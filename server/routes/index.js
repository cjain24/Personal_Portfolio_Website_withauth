var express = require("express");
var router = express.Router();

let indexController = require ('../controllers/index')

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);


/* GET About ME page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Products" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
