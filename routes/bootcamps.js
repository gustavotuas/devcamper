const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const courseRouter = require("./courses");

const router = express.Router();

// Re-route into other resource router
router.use("/:bootcampId/courses", courseRouter);

router.route("/").get(getBootcamps);

router.route("/:id").get(getBootcamp);

router.route("/").post(createBootcamp);

router.route("/:id").put(updateBootcamp);

router.route("/:id").delete(deleteBootcamp);

module.exports = router;
