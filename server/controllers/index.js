let express = require ('express');
let router = express.Router();


module.exports.displayHomePage = (req,res,next) => {
    res.render('index', {title: 'Home'});
}


module.exports.displayAboutPage = (req,res,next) => {
    res.render('about', {title: 'About'});
}

module.exports.displayContactPage = (req,res,next) => {
    res.render('contact', {title: 'Contact Me'});
}

module.exports.displayServicesPage = (req,res,next) => {
    res.render('services', {title: 'Services'});
}
module.exports.displayProjectsPage = (req,res,next) => {
    res.render('projects', {title: 'My projects'});
}