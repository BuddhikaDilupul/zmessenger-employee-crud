import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CustomSnackkbar = () => {
  const alert = useSelector((state) => state.alert);
  const [show, setShow] = useState(alert?.open || false);
  const [statusCode, setStatusCode] = useState(alert?.status || null);

  let snackMsg = "";
  let variant = "success";
  useEffect(() => {
    setShow(alert?.open);
    setStatusCode(alert?.status || null);
  }, [alert]);

  const handleClose = () => {
    setShow(false);
  };

  if (statusCode === 200) {
    snackMsg = "Success: The request was successful.";
  } else if (statusCode === 201) {
    snackMsg =
      "Created: The request has been fulfilled and resulted in a new resource being created.";
  } else if (statusCode === 203) {
    snackMsg =
      "Non-Authoritative Information: The server successfully processed the request but is returning information that may be from another source.";
  } else if (statusCode === 204) {
    snackMsg =
      "No Content: The server successfully processed the request but is not returning any content.";
  } else if (statusCode === 400) {
    snackMsg =
      "Bad Request: The request cannot be fulfilled due to bad syntax.";
    variant = "error";
  } else if (statusCode === 401) {
    snackMsg = "Unauthorized: The request requires user authentication.";
    variant = "error";
  } else if (statusCode === 403) {
    snackMsg =
      "Forbidden: The server understood the request but refuses to authorize it.";
    variant = "error";
  } else if (statusCode === 404) {
    snackMsg =
      "Not Found: The requested resource could not be found on the server.";
    variant = "error";
  } else if (statusCode === 409) {
    snackMsg = "Conflict: Trying to create a resource that already exists.";
    variant = "error";
  } else if (statusCode === 422) {
    snackMsg = "Unprocessable Entity: Validation error.";
    variant = "error";
  } else if (statusCode === 500) {
    snackMsg =
      "Internal Server Error: The server encountered an unexpected condition.";
    variant = "error";
  } else if (statusCode === 503 || statusCode === "ERR_NETWORK") {
    snackMsg =
      "Service Unavailable: The server is currently unable to handle the request due to temporary overload or maintenance of the server.";
    variant = "error";
  } else {
    snackMsg =
      "Unknown Status Code: The provided status code is not handled or backend not accepting requests from this origin.";
    variant = "warning";
  }

  useEffect(() => {}, [show, statusCode]);

  return (
    <div>
      <Snackbar
        open={show}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={variant}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackkbar;
