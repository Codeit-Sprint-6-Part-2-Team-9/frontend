import { Modal } from "@mantine/core";
import classes from "./ModalComponent.module.css";

// Modal Body
import CreditChargeModalBody from "./CreditChargeModalBody";
import CreditWarnModalBody from "./CreditWarnModalBody";
import CreditDonationModalBody from "./CreditDonationModalBody";

import amber from "../amber.png";

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
            <CreditDonationModalBody
              props={{
                profileImg: amber,
                subtitle: "강남역 광고",
                title: "앰버 2015 첫 광고",
              }}
            />
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
