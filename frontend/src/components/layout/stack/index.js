import { Box } from "../box/index";

export const Stack = ({ ...props }) => {
  const stackStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  return <Box style={stackStyles} {...props} />;
};
