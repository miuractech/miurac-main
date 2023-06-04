import {
    Badge,
    Button,
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
    orderBy,
    query,
    updateDoc,
    where,
  } from 'firebase/firestore';
  import { useEffect, useState } from 'react';
  import DataTable from 'react-data-table-component';
  // import { db } from '../../config/firebaseConfig';
  // import LoaderComponent from '../../utils/LoadComponent';
  
  import 'react-medium-image-zoom/dist/styles.css';
  import { conditionalRowStyles } from './conditionalStyle';
  import { ExpandedComponent } from './expandedComponent';
  import { IconBan, IconCheck, IconTrophy, IconX } from '@tabler/icons';
  import { Filter } from './Filter';
import { FilterComponent } from './FilterComponent';
  
  // eslint-disable-next-line @typescript-eslint/ban-types
  type Props = {db:any};
  
  // eslint-disable-next-line no-empty-pattern
  export function ThreeBsEnquiryComponent({db}: Props) {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<any[] | undefined>(undefined);
    const mediaQuery = useMediaQuery('(min-width: 900px)');
    const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<string[]>([]);
    const [values1, handlers1] = useState<string[]>([]);
    const [popup, setPopup] = useState(false);
    const [loading, setLoading] = useState(false)
    // const [filterText, setFilterText] = useState<null|string>(null)
    const getInitialData = async () => {
      const q = query(
        collection(db, 'threebs'),
        //   where('department', '==', depId)
        orderBy('timeStamp','desc'),
        limit(10)
      );
      const docs = await getDocs(q);
      console.log(docs);
      
      setData(docs.docs.map((d) => ({ ...d.data(), id: d.id })));
    };
    useEffect(() => {
      getInitialData();
    }, []);
    const filterFunction = async () => {
      const qs = [];
      if (selectedDepartment.length > 0 && selectedSubs.length === 0) {
        qs.push(where('selectedDepartment', 'in', selectedDepartment));
      } else if (selectedDepartment.length === 0 && selectedSubs.length > 0) {
        qs.push(where('subjects', 'array-contains-any', selectedSubs));
      }
      console.log(values1);
  
      if (values1.length === 1) {
        if (values1[0] === 'eligible') qs.push(where('finalScore', '>=', 5));
        else qs.push(where('finalScore', '<', 5));
      }
      const documents = await getDocs(query(collection(db, 'tutor'), ...qs));
      setData(documents.docs.map((d) => ({ ...d.data(), id: d.id })));
      setPopup(false);
    };
    const columns = [
      {
        name: 'Name',
        selector: (row: any) => row.name,
      },
      {
        name: 'Email',
        selector: (row: any) => row.email,
      },
      {
        name: 'Phone',
        selector: (row: any) => row.contact,
      },
      {
        name: 'business Name',
        selector: (row: any) => row.businessName,
      },
      {
        name: 'Message',
        selector: (row: any) => row.message,
      },
    ];
  
    if (!data) return<div className={`flex justify-center align-middle flex-grow w-full h-screen`} >
    <Loader />
</div>;
    return (
      <div className={`bg-white${mediaQuery ? ' p-10' : ' py-4'} rounded-lg`}>
        <LoadingOverlay visible={visible} overlayBlur={2} />
        <div className="grid md:grid-cols-2 space-y-5 md:space-y-0">
          <Title
            align='center'
            order={3}
            className="text-gray-700 md:justify-self-end"
          >
            Enquiry
          </Title>
          <div className='flex justify-end gap-x-5'>
            <Filter
            />
            <FilterComponent
              loading={loading}
              setLoading={setLoading}
              setData={setData} db={db}            />
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
          conditionalRowStyles={conditionalRowStyles}
          expandableRowsComponent={ExpandedComponent}
          progressComponent={<Loader />}
        />
      </div>
    );
  }
  