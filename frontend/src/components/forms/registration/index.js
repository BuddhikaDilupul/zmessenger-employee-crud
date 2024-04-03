import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Formik } from "formik";
import React from "react";
import { UserValidationSchema } from "../../../schemas/Schemas";
import colors from "../../../utils/colors";
import CustomButton from "../../button";
import CustomDropdown from "../../dropdown";
import CustomInput from "../../input";
import { Box } from "../../layout";
import Text from "../../text";

const RegistrationForm = ({ onSubmit, data, error, isLoading }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  const options = ["male", "female"];

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    gender: "",
    salary: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <Text
            align={"center"}
            italic={false}
            size={"3xl"}
            color={"black"}
            weight={"bold"}
          >
            Add New Employee
          </Text>
          <Box
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              width: "100%",
              maxWidth: "35rem",
            }}
          >
            {/* First name */}
            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Enter First Name
            </Text>
            <CustomInput
              name="firstName"
              type="text"
              placeholder="First Name"
            />

            {/* Last name */}
            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Enter Last Name
            </Text>
            <CustomInput name="lastName" type="text" placeholder="Last Name" />

            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Enter Contact Number
            </Text>
            <CustomInput
              name="contactNumber"
              type="tel"
              placeholder="Contact Number"
            />

            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Enter new Email
            </Text>
            <CustomInput
              name="email"
              type="text"
              id="email"
              placeholder="Email"
              initialValues={initialValues.email}
            />
            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Select Gender
            </Text>
            <CustomDropdown
              name="gender"
              options={options}
              label={"select gender"}
            />
            <Text
              size="lg"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Add Salary
            </Text>
            <CustomInput
              name="salary"
              type="text"
              id="salary"
              placeholder="Salary"
              initialValues={initialValues.salary}
            />
            <CustomButton
              type="submit"
              fullWidth={true}
              variant="solid"
              size="medium"
              color={colors.primary.harmonyBlue}
              label="Register"
              isLoading={isLoading}
            />
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
