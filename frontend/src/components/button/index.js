import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./index.css";

const CustomButton = ({
  type,
  variant,
  color,
  size,
  label,
  fullWidth,
  isLoading,
  disabled,
  onClick,
  ...props
}) => {
  const buttonStyle = {
    margin: "4px",
    fontSize:
      size === "large" ? "1.5rem" : size === "medium" ? "1rem" : "0.75rem",
    backgroundColor: variant === "solid" ? color : "transparent",
    color: variant === "outlined" ? color : "white",
    border: variant === "outlined" ? `2px solid ${color}` : "none",
    width: fullWidth ? "100%" : "auto",
    position: "relative",
  };

  return (
    <div>
      <Button
        type={type}
        variant={variant === "outlined" ? "primary" : variant}
        disabled={disabled || false}
        style={{ ...buttonStyle }}
        onClick={onClick}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner animation="border" size="sm" role="status" />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          label
        )}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  variant: PropTypes.oneOf(["solid", "outlined"]),
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  variant: "solid",
  color: "#000000",
  size: "medium",
  fullWidth: false,
  isLoading: false,
};

export default CustomButton;
