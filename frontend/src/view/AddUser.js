import React from "react";
import { Container } from "react-bootstrap";
import RegistrationForm from "../components/forms/registration";
import useFetch_POST from "../services/http/Post";
const AddUser = () => {
  const { isLoading, data, error, postData } = useFetch_POST();
  const onSubmit = (data) => {
    postData("api/employee/", data);
  };
  return (
    <Container>
      <div>
        <RegistrationForm onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </Container>
  );
};

export default AddUser;
