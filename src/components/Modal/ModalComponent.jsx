import { Modal } from '@mantine/core';
import classes from './ModalComponent.module.css';

// Modal Body
import CreditChargeModalBody from './CreditChargeModalBody';
import CreditWarnModalBody from './CreditWarnModalBody';
import CreditDonationModalBody from './CreditDonationModalBody';

import amber from '../amber.png';

const ModalComponent = ({ opened, close, modalDataState, donationProps }) => {
  return (
    <Modal.Root
      className={classes.ModalRoot}
      opened={opened}
      onClose={close}
      size={'auto'}
      centered
    >
      <Modal.Overlay className={classes.ModalOverlay} />
      <Modal.Content className={classes.ModalContent}>
        <Modal.Header className={classes.ModalHeader}>
          <Modal.Title className={classes.ModalTitle}>
            {
              {
                creditWarn: '',
                creditCharge: '크레딧 충전하기',
                donation: '후원하기',
              }[modalDataState]
            }
          </Modal.Title>
          <Modal.CloseButton className={classes.ModalCloseButton} />
        </Modal.Header>
        <Modal.Body className={classes.ModalBody}>
          {modalDataState === 'creditWarn' ? (
            <CreditWarnModalBody close={close} />
          ) : modalDataState === 'creditCharge' ? (
            <CreditChargeModalBody close={close} />
          ) : (
            <CreditDonationModalBody
              donationProps={donationProps}
              close={close}
            />
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
