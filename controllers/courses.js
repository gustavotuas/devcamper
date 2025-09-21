const courses = require("../models/Courses");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc Get all courses
// @route GET /api/v1/courses
// @route GET /api/v1/bootcamps/:bootcampId/courses
// @access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = courses.find({ bootcamp: req.params.bootcampId });
  } else {
    query = courses
      .find()
      .populate({ path: "bootcamp", select: "name, description" });
  }

  const coursess = await query;

  res.status(200).json({
    success: true,
    count: coursess.length,
    data: coursess,
  });
});
