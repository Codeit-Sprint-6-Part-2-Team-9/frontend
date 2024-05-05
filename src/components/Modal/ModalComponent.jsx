import { Modal, Button } from "@mantine/core";
import classes from "./ModalComponent.module.css";

// Modal Content
import CreditChargeModalBody from "./CreditChargeModalBody";
import CreditWarnModalBody from "./CreditWarnModalBody";
import CreditDonationModalBody from "./CreditDonationModalBody";

const ModalComponent = ({ opened, close, modalDataState }) => {
  return (
    <Modal.Root
      className={classes.ModalRoot}
      opened={opened}
      onClose={close}
      centered
    >
      <Modal.Overlay className={classes.ModalOverlay} />
      <Modal.Content className={classes.ModalContent}>
        <Modal.Header className={classes.ModalHeader}>
          <Modal.Title className={classes.ModalTitle}>
            {modalDataState === "creditWarn"
              ? ""
              : modalDataState === "creditCharge"
              ? "크레딧 충전하기"
              : "후원하기"}
          </Modal.Title>
          <Modal.CloseButton className={classes.ModalCloseButton} />
        </Modal.Header>
        <Modal.Body className={classes.ModalBody}>
          {modalDataState === "creditWarn" ? (
            <CreditWarnModalBody close={close} />
          ) : modalDataState === "creditCharge" ? (
            <CreditChargeModalBody />
          ) : (
            <CreditDonationModalBody />
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
