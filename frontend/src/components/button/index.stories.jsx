import React from "react";
import CustomButton from "./index";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Components/Button",
  component: CustomButton,
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outlined"],
    },
    color: { control: "color" }, // Color control for custom colors
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
    label: { control: "text" },
    // onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <CustomButton {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  type:"submit",
  variant: "solid",
  color: "#4e9742",
  label: "Solid Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  type:"submit",
  variant: "outlined",
  color: "#00ff00", // Custom color for outlined button
  label: "Outlined Button",
};
