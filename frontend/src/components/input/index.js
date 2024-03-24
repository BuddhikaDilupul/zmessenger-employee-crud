import "bootstrap/dist/css/bootstrap.min.css";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ type, placeholder, name, isDisabled }) => {
  const { touched, errors } = useFormikContext();
  const [field] = useField(name);
  return (
    <div>
      <Form.Group className={"mb-3"} controlId={name}>
        <Form.Control
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          {...field}
          isInvalid={touched[name] && errors[name]}
        />
        {touched[name] && errors[name] && (
          <Form.Control.Feedback type="invalid">
            {errors[name]}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </div>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
