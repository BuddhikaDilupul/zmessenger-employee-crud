import { Form, Formik } from "formik";
import React, { useState } from "react";
import { UserValidationSchema } from "../../../schemas/Schemas";
import colors from "../../../utils/colors";
import CustomButton from "../../button";
import CustomDropdown from "../../dropdown";
import CustomInput from "../../input";
import { Box } from "../../layout";
import Text from "../../text";

const UserProfileForm = ({ onSubmit, isLoading, data }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const options = ["male", "female"];

  const initialValues = {
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    email: data?.email || "",
    contactNumber: data?.contactNumber || "",
    gender: data?.gender,
    salary: data?.salary || "",
  };
  const handleSubmit = (values) => {
    if (
      data?.firstName === values.firstName &&
      data?.lastName === values.lastName &&
      data?.email === values.email &&
      data?.contactNumber === values.contactNumber &&
      data?.gender === values.gender &&
      data?.salary === values.salary
    ) {
      return;
    } else {
      onSubmit(values);
    }
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
            size="3xl"
            weight="bold"
            // emphasis="low"
            italic={false}
            underline={false}
            align="center"
            style={{ padding: "4px" }}
          >
            Employee Details
          </Text>

          <Box
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              width: "100%",
              maxWidth: "28rem",
            }}
          >
            {/* first-name */}
            <Text
              size="sm"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              First Name
            </Text>
            <CustomInput
              name="firstName"
              type="text"
              placeholder="First Name"
              isDisabled={isDisabled}
            />

            {/* last-name */}
            <Text
              size="sm"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Last Name
            </Text>
            <CustomInput
              name="lastName"
              type="text"
              placeholder="Last Name"
              isDisabled={isDisabled}
            />

            {/* email */}
            <Text
              size="sm"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Email
            </Text>
            <CustomInput
              name="email"
              type="email"
              placeholder="Email"
              isDisabled={true}
            />

            {/* contact-number */}
            <Text
              size="sm"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Contact Number
            </Text>
            <CustomInput
              name="contactNumber"
              type="text"
              placeholder="Contact Number"
              isDisabled={isDisabled}
            />
            {/* salary */}
            <Text
              size="sm"
              weight="bold"
              emphasis="low"
              italic={false}
              underline={false}
              align="center"
              style={{ color: "#333", padding: "4px" }}
            >
              Salary
            </Text>
            <CustomInput
              name="salary"
              type="text"
              placeholder="Salary"
              isDisabled={isDisabled}
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
              Gender
            </Text>

            <CustomDropdown
              isDisabled={isDisabled}
              name={"gender"}
              options={options}
              label={"select gender"}
            />
            {!isDisabled ? (
              <CustomButton
                type="submit"
                fullWidth={true}
                variant="solid"
                size="small"
                color={colors.primary.harmonyBlue}
                label="Submit"
                isLoading={isLoading}
              />
            ) : (
              <CustomButton
                type="button"
                fullWidth={true}
                variant="outlined"
                size="small"
                color={colors.primary.green}
                label="Edit"
                isLoading={isLoading}
                onClick={() => {
                  setIsDisabled(false);
                }}
              />
            )}
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default UserProfileForm;
