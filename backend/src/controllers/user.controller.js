const userModel = require("../models/user.model");
const httpStatus = require("http-status");

//controller for user registration
exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const existsAuthor = await userModel.find({
      email: req.body.email,
    });

    if (existsAuthor.length > 0) {
      return res.status(httpStatus.CONFLICT).json("This email already used");
    } else {
      const user = new userModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        gender: req.body.gender,
      });
      await user.save();

      return res.status(httpStatus.CREATED).json({ user });
    }
  } catch (error) {
    next(error);
  }
};

//edit user data
exports.edit = async (req, res, next) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    return res.status(httpStatus.OK).json({ updatedUser });
  } catch (error) {
    next(error);
  }
};

//view single user
exports.view = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    return res.status(httpStatus.OK).json({ user });
  } catch (error) {
    next(error);
  }
};

//view all users
exports.viewAll = async (req, res, next) => {
  try {
    const users = await userModel.find();
    return res.status(httpStatus.OK).json({ users });
  } catch (error) {
    next(error);
  }
};

//delete user
exports.removeUser = async (req, res, next) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.status(httpStatus.OK).json({ message: `${user.firstName +" "+ user.lastName} has been deleted` });
  } catch (error) {
    next(error);
  }
};
