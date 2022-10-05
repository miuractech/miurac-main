import {
  Badge,
  Button,
  Checkbox,
  Chip,
  LoadingOverlay,
  Modal,
  Text,
  TextInput,
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
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { SetStateAction, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { db } from '../../config/firebaseConfig';
import LoaderComponent from '../../utils/LoadComponent';
import * as yup from 'yup';
import 'react-medium-image-zoom/dist/styles.css';
//   import { conditionalRowStyles } from './conditionalStyle';
//   import { ExpandedComponent } from './expandedComponent';
import {
  IconBan,
  IconCheck,
  IconEdit,
  IconPlus,
  IconTrophy,
  IconX,
} from '@tabler/icons';
import { environment } from '../../environments/environment';
import { defaultErrorMessage } from '../../constants';
import { showNotification } from '@mantine/notifications';
import { useForm, yupResolver } from '@mantine/form';
import { staffCollection } from './constants';
import AddEmployee from './addEmployee';
import EditEmployee from './editEmployee';
//   import { Filter } from './Filter';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Employee({}: Props) {
  const [data, setData] = useState<staffType[] | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState<staffType | null>(null);
  const [loading, setloading] = useState(false);
  const mediaQuery = useMediaQuery('(min-width: 900px)');
  // const [filterText, setFilterText] = useState<null|string>(null)
  const getInitialData = async () => {
    const q = query(
      staffCollection,
      //   where('department', '==', depId)
      limit(10)
    );
    const docs = await getDocs(q);
    setData(docs.docs.map((d) => ({ ...d.data(), id: d.id })) as staffType[]);
  };
  useEffect(() => {
    getInitialData();
  }, []);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      access: [],
    },
    validate: yupResolver(
      yup
        .object()
        .shape({
          name: yup
            .string()
            .min(3, 'minimum 3 charecters required')
            .max(50, 'Name cannot exceed 25 charecters')
            .required('Name cannot be empty'),
          email: yup
            .string()
            .email('wrong email')
            .required('subject cannot be empty'),
          description: yup.array().required(),
        })
        .required()
    ),
  });

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
      name: 'Access',
      selector: (row: any) =>
        row.access.map((a: string) => (
          <Chip key={a} className="m-1" size="xs">
            {a}
          </Chip>
        )),
    },

    {
      name: 'Action',
      selector: (row: any) => {
        return (
          <div className="flex gap-3">
            <Button
              className={`${mediaQuery ? 'w-34' : 'w-12'}`}
              size={mediaQuery ? 'sm' : 'xs'}
              variant="outline"
              onClick={() => setEditData(row)}
            >
              <IconEdit />
              {mediaQuery && <>Edit Access</>}
            </Button>
            <Button
              color={row.disabled ? 'green' : 'red'}
              className={`${mediaQuery ? 'w-28' : 'w-12'}`}
              variant="outline"
              size={mediaQuery ? 'sm' : 'xs'}
            >
              <IconX />
              {mediaQuery && <>Delete</>}
            </Button>
          </div>
        );
      },
    },
  ];

  if (!data) return <LoaderComponent fullPage={true} />;
  return (
    <div className={`bg-white${mediaQuery ? ' p-10' : ' py-4'} rounded-lg`}>
      <div className="w-full flex pb-4 justify-between">
        <AddEmployee />

        <Title align="center" order={3} className="text-gray-700">
          Staff
        </Title>
        <div className="w-16" />
        {/* <Button
          onClick={() => setModalOpen(true)}
          variant="filled"
          className="rounded-3xl"
        >
          <IconPlus /> &nbsp;{mediaQuery ? 'Add Staff' : ''}
        </Button> */}
      </div>

      {/* <Filter
            selectedSubs={selectedSubs}
            setSelectedSubs={setSelectedSubs}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            values1={values1}
            handlers1={handlers1}
            filterFunction={filterFunction}
            popup={popup}
            setPopup={setPopup}
            getInitialData={getInitialData}
          /> */}

      {/* <div>
          <TextInput placeholder='Filter Name here' onChange={ (e) => setFilterText(e.target.value)}/>
          </div> */}
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
        // expandableRows
        pagination
        //   conditionalRowStyles={conditionalRowStyles}
        //   expandableRowsComponent={ExpandedComponent}
      />
      {editData && <EditEmployee data={editData} setData={setData} />}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        centered
        size={'80%'}
        title="Add Staff"
      >
        <form
          onSubmit={form.onSubmit(async (data) => {
            setloading(true);
            try {
              //   let check = true;
              //   const id = bookId ? bookId : uuid();
              //   if (!bookId) {
              //     const checkQuery = query(
              //       collection(db, 'books'),
              //       where('department', '==', data.department),
              //       where('subject', '==', data.subject),
              //       where('name', '==', data.name)
              //     );
              //     const checkDocs = await getDocs(checkQuery);
              //     check = checkDocs.empty;
              //   }
              //   if (!check) {
              //     showNotification({
              //       id: `reg-err-${Math.random()}`,
              //       autoClose: 5000,
              //       title: 'Error',
              //       message: 'Book already exist!',
              //       color: 'red',
              //       icon: <IconX />,
              //       loading: false,
              //     });
              //   }
              //   else {
              // const ref = doc(collection(db, 'books'), id);
              // await setDoc(ref, { ...data, id });
              // window.location.reload();
              //   }
            } catch (error: any) {
              console.error(error);

              showNotification({
                id: `reg-err-${Math.random()}`,
                autoClose: 5000,
                title: 'Error',
                message: environment.production
                  ? defaultErrorMessage
                  : error.message,
                color: 'red',
                icon: <IconX />,
                loading: false,
              });
            }
            setloading(false);
          })}
        >
          <div className="my-4">
            <TextInput placeholder="email" label="Email" />
          </div>
          <Button type="submit" loading={loading}>
            Add Staff
          </Button>
          <Button
            color={'red'}
            disabled={loading}
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export type staffType = {
  email: string;
  name: string;
  access: string[];
  id: string;
};

export const EditAccess = ({
  editId,
  setEditId,
}: {
  editId: staffType | null;
  setEditId: React.Dispatch<React.SetStateAction<staffType | null>>;
}) => {
  console.log(editId);
  const [access, setAccess] = useState<string[] | undefined>([]);
  useEffect(() => {
    setAccess(editId?.access);
  }, [editId]);

  const [loading, setLoading] = useState(false);
  return (
    <Modal
      opened={Boolean(editId)}
      onClose={() => setEditId(null)}
      centered
      size={'80%'}
      title="Edit Access"
    >
      <div>
        <div className="my-8">
          <Checkbox.Group
            value={access}
            label="Select All the access you want to give"
            description="This can be edited later"
            withAsterisk
            onChange={(v) => setAccess(v)}
          >
            <div className="grid grid-cols-2">
              {/* {employeeAccesses.map(({ value, name }) => (
                <Checkbox
                  key={value}
                  className="m-2"
                  value={value}
                  label={name}
                />
              ))} */}
            </div>
          </Checkbox.Group>
        </div>
        <Button
          onClick={async () => {
            if (access) {
              try {
                setLoading(true);
                await updateDoc(doc(staffCollection, editId?.id), {
                  access: Array(...new Set([...access, 'employee'])),
                });
                setLoading(false);
                setEditId(null);
                window.location.reload();
              } catch (error: any) {
                setLoading(false);
                showNotification({
                  id: `reg-err-${Math.random()}`,
                  autoClose: 5000,
                  title: 'Error',
                  message: environment.production
                    ? defaultErrorMessage
                    : error.message,
                  color: 'red',
                  icon: <IconX />,
                  loading: false,
                });
              }
            }
          }}
          loading={loading}
        >
          Update
        </Button>
      </div>
    </Modal>
  );
};
