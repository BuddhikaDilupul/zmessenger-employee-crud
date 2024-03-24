import "bootstrap/dist/css/bootstrap.min.css";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";

const CustomDropdown = ({ name, options, label, isDisabled }) => {
  const { touched, errors } = useFormikContext();
  const [field] = useField(name);
  return (
    <div>
      <Form.Group className={"mb-3"} controlId={name}>
        <Form.Select
          isInvalid={touched[name] && errors[name]}
          {...field}
          disabled={isDisabled}
        >
          <option>{label}</option>
          {options.map((data, id) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </Form.Select>
        {touched[name] && errors[name] && (
          <Form.Control.Feedback type="invalid">
            {errors[name]}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </div>
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
