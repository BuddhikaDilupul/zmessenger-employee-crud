import PropTypes from "prop-types";
import React from "react";
const Text = ({
  as = "span",
  align,
  size,
  weight,
  emphasis,
  italic,
  underline,
  style,
  ...props
}) => {
  const Component = as;

  const baseStyles = {
    textAlign:
      align === "left" ? "left" : align === "center" ? "center" : "right",
    fontSize:
      size === "sm"
        ? "0.875rem"
        : size === "lg"
        ? "1rem"
        : size === "xl"
        ? "1.5rem"
        : size === "2xl"
        ? "1.875rem"
        : size === "3xl"
        ? "2.25rem"
        : "1rem",
    fontWeight: weight,
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };

  if (emphasis === "low") {
    baseStyles.color = "#6B7280";
    baseStyles.fontWeight = "lighter";
  }

  const mergedStyle = { ...baseStyles, ...style };

  return <Component style={mergedStyle} {...props} />;
};

export default Text;

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  size: PropTypes.oneOf(["sm", "lg", "xl", "2xl", "3xl"]),
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  emphasis: PropTypes.oneOf(["low"]),
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  style: PropTypes.object,
};
