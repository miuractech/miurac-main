/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ActionIcon,
  Badge,
  Button,
  CopyButton,
  Loader,
  LoadingOverlay,
  Title,
  Tooltip,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { SetStateAction, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { db } from '../../config/firebaseConfig';
import LoaderComponent from '../../utils/LoadComponent';

import 'react-medium-image-zoom/dist/styles.css';
//   import { conditionalRowStyles } from './conditionalStyle';
//   import { ExpandedComponent } from './expandedComponent';
import { IconBan, IconCheck, IconCopy, IconTrophy, IconX } from '@tabler/icons';
import AccessForm, { Deck } from './form';
import ExpandedComponent from './ExpandedComponent';
//   import { Filter } from './Filter';
// import { FilterComponent } from './FilterComponent';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function DeckComponent({}: Props) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<any[] | undefined>(undefined);
  const mediaQuery = useMediaQuery('(min-width: 900px)');
  const [loading, setLoading] = useState(false);
  // const [filterText, setFilterText] = useState<null|string>(null)
  const getInitialData = async () => {
    const q = query(
      collection(db, 'deck'),
      //   where('department', '==', depId)
      limit(10)
    );
    onSnapshot(q,docs=>{
        setData(docs.docs.map((d) => ({ ...d.data(), id: d.id })));
    });
  };
  useEffect(() => {
    getInitialData();
  }, []);
  // const filterFunction = async () => {
  //   const qs = [];
  //   if (selectedDepartment.length > 0 && selectedSubs.length === 0) {
  //     qs.push(where('selectedDepartment', 'in', selectedDepartment));
  //   } else if (selectedDepartment.length === 0 && selectedSubs.length > 0) {
  //     qs.push(where('subjects', 'array-contains-any', selectedSubs));
  //   }
  //   console.log(values1);

  //   if (values1.length === 1) {
  //     if (values1[0] === 'eligible') qs.push(where('finalScore', '>=', 5));
  //     else qs.push(where('finalScore', '<', 5));
  //   }
  //   const documents = await getDocs(query(collection(db, 'tutor'), ...qs));
  //   setData(documents.docs.map((d) => ({ ...d.data(), id: d.id })));
  //   setPopup(false);
  // };
  const columns = [
    {
      name: 'Status',
      selector: (row: any) => (
          <div className={`w-6 h-6 rounded-full ${row.active?'bg-green-500':"bg-red-500"}`}></div>
      ),
    },
    {
      name: 'Name',
      selector: (row: any) => row.name,
    },
    {
      name: 'Email',
      selector: (row: any) => row.email,
    },
    {
      name: 'Firm',
      selector: (row: any) => row.firm,
    },
    {
      name: 'Action',
      selector: (row: any) => (
        <div className="flex">
          <AccessForm data={row} />
          <CopyButton
            value={'https://miurac.com/deck/' + row.id}
            timeout={2000}
          >
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy'}
                withArrow
                position="right"
              >
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                  {copied ? (
                    <IconCheck size="1rem" />
                  ) : (
                    <IconCopy size="1rem" />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      ),
    },
  ];

  if (!data) return <LoaderComponent fullPage={true} />;
  return (
    <div className={`bg-white${mediaQuery ? ' p-10' : ' py-4'} rounded-lg`}>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <div className="grid md:grid-cols-2 space-y-5 md:space-y-0">
        <Title
          align="center"
          order={3}
          className="text-gray-700 md:justify-self-end"
        >
          Deck
        </Title>
        <div className="flex justify-end gap-x-5">
          <AccessForm />
          {/* <Filter
            />
            <FilterComponent
              loading={loading}
              setLoading={setLoading}
              setData={setData}
            /> */}
        </div>
      </div>
      {/* <div>
          <TextInput placeholder='Filter Name here' onChange={ (e) => setFilterText(e.target.value)}/>
          </div> */}
      <br />
      <DataTable
        customStyles={{ headRow: { style: { color: '#A1A1A1' } } }}
        columns={
          mediaQuery
            ? columns
            : columns.filter((_, index: number) => {
                if ([0, 3].includes(index)) {
                  return true;
                }
                return false;
              })
        }
        data={data}
        expandableRows
        progressPending={loading}
        pagination
        //   conditionalRowStyles={conditionalRowStyles}
        expandableRowsComponent={ExpandedComponent}
        progressComponent={<Loader />}
      />
    </div>
  );
}
