let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home page" });
});
/* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("index", { title: "About page" });
});
/* GET product page. */
router.get("/product", function(req, res, next) {
  res.render("index", { title: "Product page" });
});
/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("index", { title: "Services page" });
});
/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("index", { title: "Contact Page" });
});
module.exports = router;
