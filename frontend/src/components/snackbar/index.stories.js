import React from "react";
import { Provider } from "react-redux";
import store from "../../app/store";
import CustomSnackkbar from "./index";

export default {
  title: "Components/CustomSnackbar",
  component: CustomSnackkbar,
  argTypes: {},
};

const Template = (args) => {
  return (
    <Provider store={store}>
      <CustomSnackkbar {...args} />
    </Provider>
  );
};

export const Default = Template.bind({});
Default.args = {};
