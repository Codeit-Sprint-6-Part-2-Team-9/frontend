import { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import classes from './ModalComponent.module.css';

// Modal Body
import CreditChargeModalBody from './CreditChargeModalBody';
import CreditWarnModalBody from './CreditWarnModalBody';
import CreditDonationModalBody from './CreditDonationModalBody';
import VoteModalBody from './VoteModalBody';

import TOP_OVERLAY from '../../assets/top_overlay.svg';
import ICON_ARROW_LEFT from '../../assets/arrow-left.svg';

const ModalComponent = ({ opened, close, modalDataState, donationProps }) => {
  function isMobileSize() {
    return window.innerWidth <= 780 ? true : false;
  }

  const [isMobile, setIsMobile] = useState(isMobileSize);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(isMobileSize());
    });

    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(isMobileSize());
      });
    };
  }, []);

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
        return <VoteModalBody type="female" isMobile={isMobile} />;
      case 'maleVote':
        return <VoteModalBody type="male" isMobile={isMobile} />;
      default:
    }
  };

  return (
    <Modal.Root
      className={classes.ModalRoot}
      opened={opened}
      onClose={close}
      size={'auto'}
      fullScreen={isMobile && modalDataState.includes('Vote')}
      centered
    >
      <Modal.Overlay className={classes.ModalOverlay} />
      <Modal.Content className={classes.ModalContent}>
        {isMobile && modalDataState.includes('Vote') && (
          <img
            src={TOP_OVERLAY}
            className={classes.overlay}
            alt={'배경 오버레이 이미지'}
          />
        )}
        <Modal.Header
          className={`${classes.ModalHeader} ${isMobile && modalDataState.includes('Vote') ? classes.mobile : ''}`}
        >
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
          {isMobile && modalDataState.includes('Vote') ? (
            <div className={classes.arrowLeft} onClick={close}>
              <img src={ICON_ARROW_LEFT} alt="모달 종료 버튼 이미지" />
            </div>
          ) : (
            <Modal.CloseButton className={classes.ModalCloseButton} />
          )}
        </Modal.Header>
        <Modal.Body
          className={`${classes.ModalBody} ${isMobile && modalDataState.includes('Vote') ? classes.mobile : ''}`}
        >
          {switchModalState(modalDataState)}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalComponent;
