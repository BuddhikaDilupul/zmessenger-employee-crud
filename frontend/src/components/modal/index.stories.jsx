import React from "react";
import ModalComponent from "./index";

export default {
  title: "Components/ModalComponent",
  component: ModalComponent,
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    isLoading: { control: "boolean" },
    label: { control: "text" },
    error: { control: "text" },
    data: { control: null },
    isConfirmable: { control: "boolean" },
    proceedAction: { control: "text" },
    showModal: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "ModalComponent for displaying modals.",
      },
    },
  },
  tags: ["autodocs"],
};

const Template = (args) => <ModalComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sample Modal",
  body: "This is a sample modal body",
};
