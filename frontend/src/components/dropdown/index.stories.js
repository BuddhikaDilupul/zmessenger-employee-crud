import { Formik } from "formik";
import React from "react";
import CustomDropdown from "./index";

export default {
  title: "Components/CustomDropdown",
  component: CustomDropdown,
  argTypes: {
    name: { control: "text" },
    options: { control: "array" },
  },
};

const Template = (args) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <div>
        <CustomDropdown {...args} />{" "}
      </div>
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "gender",
  options: ["male", "female", "other"],
};
