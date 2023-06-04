import { Image,  Modal, Text } from '@mantine/core';
import React, { SetStateAction } from 'react';
import LOGO from '../../assets/img/logo.png';
interface props {
  row: any;
  opened: boolean;
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}

export default function CompletionModal({ row, opened, setOpened }: props) {
  // ({ employeeNumber, issuedDate, isOpen, onClose })
  return (
    <Modal
      title="Employee Details"
      withCloseButton
      opened={opened}
      onClose={() => setOpened(false)}
      size={1000}
    >
      <div className="bg-[#F0F3F8] lato p-8">
        <div className="flex justify-between">
          <div className="flex">
            <Image src={LOGO} alt="Logo" width={32} height={32} mr={4} />
            <Text weight={700} size={22}>
              MIURAC
            </Text>
          </div>
          <div className="font-medium" style={{ fontFamily: 'Lato' }}>
            <div>
              Employee Number: {row.firstName} {row.lastName}
            </div>
            <div>Issued Date: {new Date().toDateString()}</div>
          </div>
        </div>
        <div style={{ fontFamily: 'Manrope' }} className='text-5xl font-light my-9'>CERTIFICATE OF <br /> COMPLETION</div>
      </div>
    </Modal>
  );
}
