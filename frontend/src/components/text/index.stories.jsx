import React from "react";
import Text from "./index";

export default {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    emphasis: {
      control: {
        type: "select",
        options: ["low"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["thin", "normal", "medium", "semibold", "bold", "black"],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    italic: {
      control: "boolean",
    },
    underline: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Text {...args}>Hello, World!</Text>;

export const Default = Template.bind({});
Default.args = {};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  size: "xl",
  weight: "bold",
  emphasis: "low",
  italic: true,
  underline: true,
  align: "center",
  style: {
    color: "#333", 
  },
};
