import CarouselSection from "../components/Carousel/Carousel";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import ModalComponent from "../components/Modal/ModalComponent";
import IdolsQueryExample from "../api/idols/IdolsQueryExample";

function List() {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalDataState, setModalDataState] = useState('donation');

  const openModal = (modalName) => {
    open();
    setModalDataState(modalName);
  };

  return (
    <div>
      <CarouselSection />
      List
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={modalDataState}
      />
      <MyCreditRechargeButton
        onClick={() => {
          openModal('creditCharge');
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          onClick={() => {
            openModal('creditWarn');
          }}
        >
          크레딧 부족 모달
        </Button>
        <Button
          onClick={() => {
            openModal('creditCharge');
          }}
        >
          크레딧 충전 모달
        </Button>
        <Button
          onClick={() => {
            openModal('donation');
          }}
        >
          후원하기 모달
        </Button>
      </div>
      <div>
        <Carousel />
      </div>
      <IdolsQueryExample/>
    </div>
  );
}

export default List;
