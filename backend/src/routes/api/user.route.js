const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const userController = require("../../controllers/user.controller");
const userValidation = require("../../validations/user.validation");

router.post(
  "/",
  validate(userValidation.create),
   userController.create
)
router.get(
  "/:id",
   userController.view
)
router.get(
  "/",
   userController.viewAll
)
router.put(
  "/:id",
  validate(userValidation.create),
   userController.edit
);
router.delete(
  "/:id",
   userController.removeUser
);

module.exports = router;
