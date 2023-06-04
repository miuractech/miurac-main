import { Button, Image, Menu, Modal, Text } from '@mantine/core';
import React, { SetStateAction, useState } from 'react';
import LOGO from '../../assets/img/logo.png';
import BG from '../../assets/img/offer_letter.jpg';
import SanjeevSign from '../../assets/img/signature-sanjeev.png';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { IconGlobe, IconMail, IconPhone, IconWorld } from '@tabler/icons';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
interface props {
  row: any;
  opened: boolean;
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}

export default function OfferLetterModal({ row, opened, setOpened }: props) {
  // ({ employeeNumber, issuedDate, isOpen, onClose })
  const printRef = React.useRef<any>();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    html2canvas(element).then((canvas: any) => {
      const imgWidth = 212;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;
      const document = new jsPDF('p', 'mm');
      document.addImage(
        canvas,
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        '',
        'FAST'
      );
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        document.addPage();
        document.addImage(
          canvas,
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight,
          '',
          'FAST'
        );
        heightLeft -= pageHeight;
      }
      const pdf = document.output('datauristring')
      addDoc(collection(db, 'mail'), {
        to: [row.email],
        message: {
          subject: 'Welcome To Miurac!',
          text: `Dear ${row.name},

          Congratulations! Welcome to the Miurac family. 
          
          You have been selected for the position of ${
            row.position
          } form a period of ${row.doj.toDate().toDateString()} to ${row.ending
            .toDate()
            .toDateString()}.
          Please login to continue form here ASAP - https://people.miurac.com
          
          Find the attachment for welcome note and offer letter.
      
      Sanjeev,
      Miurac`,
          html: `<p>Dear ${row.name},
          <br/>
          <br/>
Congratulations! Welcome to the Miurac family. 
          <br/>
          <br/>
You have been selected for the position of ${
            row.position
          } form a period of ${row.doj.toDate().toDateString()} to ${row.ending
            .toDate()
            .toDateString()}.
          <br/>
Please login to continue form here ASAP - https://people.miurac.com
          <br/>
          <br/>
Find the attachment for welcome note and offer letter.
          <br/>
Sanjeev,
          <br/>
Miurac
      </p>`,
          attachments: [
            {
                path:pdf,
              filename: 'offerLetter.pdf',
            //   content: pdf,
            //   contentType: 'application/pdf',
            //   encoding: 'base64',
            },
          ],
        },
      });
    });

    // const canvas = await html2canvas(element);
    // const data = canvas.toDataURL('image/png');

    // const pdf = new jsPDF();
    // const imgProperties = pdf.getImageProperties(data);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    // pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    // pdf.save('print.pdf');
  };
  return (
    <Modal
      title="Employee Details"
      withCloseButton
      opened={opened}
      onClose={() => setOpened(false)}
      size={1000}
    >
      <div>
        <Button onClick={handleDownloadPdf}>Send</Button>
      </div>
      <div ref={printRef}>
        <div
          className="lato w-full h-44 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="px-8">
            <div className="h-44 flex items-center">
              <Image src={LOGO} alt="Logo" width={32} height={32} />
              <Text weight={700} size={22}>
                MIURAC
              </Text>
            </div>
          </div>
        </div>
        <div
          className="p-8 pr-12 text-justify"
          style={{ fontFamily: 'manrope' }}
        >
          <div className="text-4xl font-light text-center">Offer Letter</div>
          <div>
            Dear{' '}
            <b>
              Mr. {row.firstName} {row.lastName}{' '}
            </b>
            ,
            <br />
            We at Miurac, are pleased to offer you employment at the position of
            &nbsp;
            {row.position} w.e.f {row.doj.toDate().toDateString()}, till{' '}
            {row.ending.toDate().toDateString()}. We are eager to have you as a
            part of the team. We foresee your potential skills as a valuable
            contribution to our company and clients.
            <br />
            This appointment is subject to the following terms and conditions:
            <br />
            <br />
            <b>1. DUTIES AND RESPONSIBILITIES</b>
            <br />
            You are required to perform the duties and responsibilities related
            to your position at any division, department or section in the
            Company or within the Group of Companies. Your key responsibilities
            include being able to develop Apps, software and components as per
            the company requirement. You could be assigned any role which the
            company deems fit as per your capabilities in the larger interests
            of the company.
            <br />
            <br />
            <b> 2. WORKING HOURS</b>
            <br />
            Monday to Saturday: 12 p.m. to 8 p.m. &#40;You can avail the option
            of flexible working on hours of your availability in consultation
            with your seniors&#41;.The Company reserves the right to change your
            working days and hours
            <br />
            <br />
            <b>3. ANNUAL LEAVE/HOLIDAYS</b>
            <br />
            You are entitled to 24 annual leaves in addition to 3 gazetted
            holidays observed by the Company.
            <br />
            <br />
            <b>4.TRANSFER/SECONDMENT</b>
            <br />
            You are subject to transfer or secondment to any place where the
            Company has an office or when required in the course of performing
            your duties.
            <br />
            <br />
            <b> 5.RULES, REGULATIONS & CONFIDENTIALITY</b>
            <br />
            You shall at all times, devote your full attention and skill to the
            affairs of the company and will endeavour to your utmost ability to
            promote and advance the interests of the Company.
            <br />
            Accordingly, you undertake that:
            <br />
            i&#41; You will under no circumstances make available your services
            to any undertaking, or have any interest directly or indirectly in
            any other undertaking or activity which might interfere with the
            proper performance of your duties without first obtaining the
            written permission of the Company.
            <br />
            <br />
            ii&#41; You will not at any time during the continuance or after the
            termination of your services with the Company irrespective of any
            reason for such termination, make use or disclose to any party
            either for your own benefit or for the benefit of any party
            &#40;individual, firm, company, any trade or business&#41;, the
            affairs and confidential information of the Company or any of its
            related companies of which you have knowledge or become aware during
            the course of your service with the Company.
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
            iii&#41;You will obey and comply with all reasonable orders and
            instructions
            <br />
            given to you by the Company or its authorized agents and observe all
            <br />
            standing and other rules and/or regulations now in force or from
            timeto time approved by the Company.
            <br />
            <b> 6.Compensation</b>
            <br />
            Your monthly basic compensation would be Rs.3000/- per month
            including basic salary, HR allowances. For every project completed
            and published &#40;by you&#41;, you will be entitled to an
            appropriate incentive in addition to your basic compensation.
            <br />
            <br />
            <b> 7. TERMINATION </b>
            <br />
            After confirmation of your employment, notice of termination of
            employment will be one &#40;1&#41; months&#39; notice in writing or
            one &#40;1&#41; month salary in lieu of notice from either party.
            During the internship period, your employment can be terminated
            without any advance notice.
            <br />
            Notwithstanding the aforementioned, the Company shall be entitled to
            terminate your employment without notice, indemnities and
            compensation in any of the following events:
            <br />
            a. If you are, in the opinion of the Company, guilty of dishonesty,
            misconduct or negligence in the performance of your duties;
            <br />
            b. If you have been found to have committed a serious breach or
            continual material breach of any of your duties or obligations;
            <br />
            c. If you are found to have made illegal monetary profit or received
            any gratuities or other rewards, in cash or in kind, out of any of
            the company&#39;s affairs or any of its subsidiaries or related
            companies;
            <br />
            <br />
            If you find that the terms are favourable, please indicate your
            acceptance. This offer will automatically lapse and can no longer be
            accepted if we do not hear from you by 12 th August 2022
            <br />
          </div>
          <div className="flex h-96 px-24 items-end justify-between">
            <div>Sign Here</div>
            <div>
              <div>
                <img
                  src={SanjeevSign}
                  className="w-32"
                  alt="founder signature"
                />
              </div>
              <div>
                <b>Sanjeev</b>
              </div>
              <div>FOUNDER, MIURAC</div>
            </div>
          </div>
          <div className="h-64 flex justify-end items-end">
            <div className="p-4 h-[125px]">
              <div className="font-bold">Location</div>
              <div>
                005, BM Lotus Apartment, <br />
                Doddakannelli,Bengaluru.
              </div>
            </div>
            <div className="p-4">
              {[
                { text: '+91-6363668966', icon: <IconPhone /> },
                { text: 'info@miurac.com', icon: <IconMail /> },
                { text: 'miurac.com', icon: <IconWorld /> },
              ].map((item) => (
                <div className="flex flex-gap-2">
                  <div>{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4 bg-[#101C28]" />
      </div>
    </Modal>
  );
}
