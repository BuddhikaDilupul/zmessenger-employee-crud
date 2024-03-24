import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserProfileForm from "../components/forms/user/index";
import useFetch_GET from "../services/http/Get";
import useFetch_PUT from "../services/http/Put";

const UserProfile = () => {
  const { isLoading: isLoading_GET, data: data_GET, getData } = useFetch_GET();
  const {
    isLoading: isLoading_PUT,
    error: error_PUT,
    data: data_PUT,
    putData,
  } = useFetch_PUT();
  const { id } = useParams();
  // user data fetching
  useEffect(() => {
    getData(`api/employee/${id}`);
  }, []);

  //profile update
  const onSubmitProfile = (formData) => {
    putData(`api/employee/${id}`, formData);
  };
  return (
    <Container>
      <div>
        {isLoading_GET ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <UserProfileForm
            onSubmit={onSubmitProfile}
            data={data_GET?.user}
            isLoading={isLoading_GET || isLoading_PUT}
          />
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
