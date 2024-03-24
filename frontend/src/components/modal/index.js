import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import colors from "../../utils/colors";
import CustomButton from "../button";

const ModalComponent = ({
  title,
  body,
  isLoading,
  label,
  error,
  data,
  onClick,
  showModal,
}) => {
  const [show, setShow] = useState(showModal || false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const color =
    label?.toLowerCase() === "delete"
      ? colors.danger.dark
      : colors.primary.harmonyBlue;

  useEffect(() => {
    if (error !== null || data !== null) {
      handleClose();
    }
  }, [isLoading, error, data]);
  return (
    <>
      <CustomButton
        onClick={handleShow}
        type="submit"
        fullWidth={false}
        variant="solid"
        size="small"
        color={color}
        label={label || "Click me"}
        isLoading={isLoading}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <CustomButton
            onClick={onClick}
            type="submit"
            fullWidth={true}
            variant="solid"
            size="medium"
            color={colors.primary.harmonyBlue}
            label="Confirm"
            isLoading={isLoading}
          />
          <CustomButton
            onClick={handleClose}
            type="submit"
            fullWidth={true}
            variant="solid"
            size="medium"
            color={colors.danger.dark}
            label="Close"
            isLoading={isLoading}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
