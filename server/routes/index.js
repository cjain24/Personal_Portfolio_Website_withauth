var express = require("express");
var router = express.Router();

let indexController = require ('../controllers/index')

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);


/* GET About ME page. */
router.get("/about", indexController.displayAboutPage);

/* GET Projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET Services page. */
router.get("/services", indexController.displayServicesPage);

/* GET Contact ME page. */
router.get("/contact", indexController.displayContactPage);

module.exports = router;
