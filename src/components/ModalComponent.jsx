import { Modal, Button } from "@mantine/core";
import classes from "./ModalComponent.module.css";

import Typography from "./Typography";
import CREDIT_WARN_SVG from "../assets/credit_warn.svg";

const CreditWarnModalContent = () => {
  return (
    <div>
      <img src={CREDIT_WARN_SVG} alt="크레딧 부족 이미지" />
      <Typography>앗! 투표하기 위한 크레딧이 부족해요</Typography>
    </div>
  );
};
const CreditChargeModalContent = () => {
  return (
    <div>
      <Typography>크레딧 충전하기</Typography>
    </div>
  );
};
const CreditDonationModalContent = () => {
  return (
    <div>
      <Typography>후원하기</Typography>
    </div>
  );
};

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
            <CreditWarnModalContent />
          ) : modalDataState === "creditCharge" ? (
            <CreditChargeModalContent />
          ) : (
            <CreditDonationModalContent />
          )}
          <Button>확인</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
