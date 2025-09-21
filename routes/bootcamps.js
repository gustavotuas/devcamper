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

const { isAuth } = require("../middleware/auth");

// Re-route into other resource router
router.use("/:bootcampId/courses", courseRouter);

router.route("/").get(getBootcamps);

router.route("/:id").get(getBootcamp);

router.route("/").post(isAuth, createBootcamp);

router.route("/:id").put(isAuth, updateBootcamp);

router.route("/:id").delete(isAuth, deleteBootcamp);

module.exports = router;
