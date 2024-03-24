import { Formik } from "formik";
import React from "react";
import CustomInput from "./index";

export default {
  title: "Components/Input",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
    name: { control: "text" },
    isDisabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <div>
        <CustomInput {...args} />
      </div>
    </Formik>
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "Enter text here",
  name: "text",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter password",
  name: "password",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "Enter number",
  name: "number",
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
  placeholder: "Enter date",
  name: "date",
};
