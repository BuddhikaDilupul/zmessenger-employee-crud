import * as Yup from "yup";

export const UserValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
    .required("Email is required"),
  firstName: Yup.string()
    .required("First name is required")
    .min(6, "Too short")
    .max(10, "Too long")
    .matches(/^[A-Za-z]+$/, "Should only contain letters"),

  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Should only contain letters")
    .min(6, "Too short")
    .max(10, "Too long"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(
      /^0\d{9}$/,
      "Contact number must be LKA number .start with 0 and be 10 digits long"
    ),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid gender"),
});
