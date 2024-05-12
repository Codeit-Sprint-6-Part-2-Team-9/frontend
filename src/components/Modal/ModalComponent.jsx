import { Modal } from '@mantine/core';
import classes from './ModalComponent.module.css';

// Modal Body
import CreditChargeModalBody from './CreditChargeModalBody';
import CreditWarnModalBody from './CreditWarnModalBody';
import CreditDonationModalBody from './CreditDonationModalBody';
import VoteModalBody from './VoteModalBody';

const ModalComponent = ({ opened, close, modalDataState, donationProps }) => {
  const switchModalState = (modalDataState) => {
    switch (modalDataState) {
      case 'creditWarn':
        return <CreditWarnModalBody close={close} />;
      case 'creditCharge':
        return <CreditChargeModalBody close={close} />;
      case 'donation':
        return (
          <CreditDonationModalBody
            donationProps={donationProps}
            close={close}
          />
        );
      case 'femaleVote':
        return <VoteModalBody type="female" />;
      case 'maleVote':
        return <VoteModalBody type="male" />;
      default:
    }
  };

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
                femaleVote: '이달의 여자 아이돌',
                maleVote: '이달의 남자 아이돌',
              }[modalDataState]
            }
          </Modal.Title>
          <Modal.CloseButton className={classes.ModalCloseButton} />
        </Modal.Header>
        <Modal.Body className={classes.ModalBody}>
          {switchModalState(modalDataState)}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
