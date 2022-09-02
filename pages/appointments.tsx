import React, { useEffect, useState } from 'react';
import { Listbox, Menu, Transition, RadioGroup } from '@headlessui/react';
import { addDays } from 'date-fns';
import MainLayout from '../components/MainLayout';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  getAllAppointments,
  createAppointment,
  reset,
} from '../features/appointment/appointmentSlice';
import { getPatients } from '../features/patient/patientSlice';
import { getDoctors } from '../features/doctor/doctorSlice';
// import CreateAppointment from '../components/CreateAppointment';
import { FiEdit, FiUser, FiSearch, FiCalendar } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';
import { MdAccessTime } from 'react-icons/md';
import { DateRangePicker } from 'react-date-range';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const sort = [
  { id: 1, name: 'All statuses' },
  { id: 2, name: 'Complete' },
  { id: 3, name: 'In Progress' },
  { id: 4, name: 'Not started' },
  { id: 5, name: 'Rescheduled' },
  { id: 6, name: 'Missed' },
  { id: 7, name: 'Cancelled' },
];

const timeSlot = [
  { id: 1, time: '10:00 am' },
  { id: 2, time: '11:00 am' },
  { id: 3, time: '12:00 noon' },
  { id: 4, time: '13:00 pm' },
  { id: 5, time: '14:00 pm' },
];

const Appointment = () => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('profile');
  const [sortOption, setSortOption] = useState(sort[0]);
  const { appointments, isLoading, isError, isSuccess, message } =
    useAppSelector((state) => state.appointment);

  // const { doctors, totalNumberofDoctors } = useAppSelector(
  //   (state) => state.doctor
  // );

  const [state, setState] = useState<boolean>(false);
  const [stateCal, setStateCal] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [docs, setDocs] = useState<any>([]);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(getAllAppointments());
  }

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const showCalendar = () => {
    setState(!state);
  };
  const showCal = () => {
    setStateCal(!stateCal);
  };

  useEffect(() => {
    if (isError) {
      // toast.error(message);
      alert(message);
    }

    // if (!patients) {
    //   router.push('/');
    // }

    // dispatch(getTotalPatients());
    dispatch(getAllAppointments());
    // dispatch(getDoctors());

    return () => {
      dispatch(reset());
    };
  }, []);

  // get patients by account type
  // console.log('doctors', doctors);

  const optionsWrapperClassName =
    'absolute top-16 overflow-auto bg-white rounded-md shadow-dropdown max-h-64 focus:outline-none divide-y divide-secondary divide-opacity-10 w-[10.9375rem]';
  const optionsWrapperClassName2 =
    'absolute top-16 right-20 overflow-auto bg-white rounded-md shadow-dropdown max-h-60 focus:outline-none divide-y divide-secondary divide-opacity-10 w-[30rem]';

  console.log('appointments', appointments);
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Appointment</h1>

      <div className="mt-10 p-5 ">
        <div className="flex bg-white px-4 py-8 rounded-tl-2xl rounded-tr-2xl space-x-4">
          {/* seach bar */}
          <div className=" w-96 ">
            <div className="bg-white flex items-center w-full rounded-lg py-4 border border-grey-100">
              <FiSearch size={25} className="pl-1 " />
              <input
                className=" w-full pl-2 text-xs text-gray-700 tracking-wide font-light focus:outline-none"
                id="search"
                type="text"
                placeholder="Search by patient's name or phone number"
              />

              {/* <div className="py-1">
            <button className="text-white rounded bg-indigo-600 px-2 w-full py-2 ">Look Up</button>
          </div> */}
            </div>
          </div>
          {/* end search bar */}
          {/* start status */}
          <div className="flex items-center w-48">
            <Listbox value={sortOption} onChange={setSortOption}>
              <Listbox.Label className="text-small sr-only">
                Sort by:&nbsp;
              </Listbox.Label>
              <div className="relative flex items-center border px-4 py-4 rounded-lg w-full">
                <Listbox.Button className="flex items-center justify-between w-full text-sm">
                  {/* {selectedPerson.name}{' '} */}
                  {sortOption?.name}{' '}
                  <div>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 9 7"
                      fill="none"
                      className="text-black ml-2 text-[.5rem]"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                </Listbox.Button>
                <div className={optionsWrapperClassName}>
                  <Listbox.Options className="rounded-md border border-[#ad20ea]">
                    {sort.map((s) => (
                      <Listbox.Option
                        key={s.id}
                        value={s}
                        // disabled={s.unavailable}
                        className={({ active }) =>
                          `flex items-center justify-between whitespace-nowrap px-6 py-3 cursor-pointer border-b text-sm ${
                            active ? 'text-[#ad20ea]' : 'text-black'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span>{s.name}</span>
                            {selected && (
                              <svg
                                width="13"
                                height="10"
                                viewBox="0 0 13 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-4"
                              >
                                <path
                                  d="M0.968262 4.85894L4.49995 8.39062L11.9999 0.890625"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                              </svg>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </div>
            </Listbox>
          </div>
          {/* end status */}
          {/* select date */}
          <div className="flex items-center relative w-36">
            <div
              className="flex items-center justify-between border px-4 py-4 rounded-lg w-full text-sm cursor-pointer"
              onClick={showCalendar}
            >
              <div>Select date</div>
              <FiCalendar />
            </div>
            {state && (
              <div
                // state={state}
                className="absolute top-5  bg-purple-200 rounded-xl mt-10 w-[320px] h-auto p-5"
              >
                <Calendar
                  maxDetail={'month'}
                  value={new Date()}
                  onChange={changeDate}
                />
              </div>
            )}
          </div>
          {/* end date */}
          {/* new appointment  */}
          <div className="flex items-center">
            <button
              onClick={openModal}
              className="bg-purple-600 text-white text-xs px-4 py-4  rounded-md"
            >
              New appointment
            </button>
          </div>
          {/* end new appointment  */}
        </div>

        {/* ----------------------------------------- */}
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  capitalize  border-t border-b ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">Time</div>
                  </th>
                  <th scope="col" className="p-4">
                    Date
                  </th>
                  <th scope="col" className="p-4">
                    Patient
                  </th>
                  <th scope="col" className="p-4">
                    Phone number
                  </th>
                  <th scope="col" className="p-4">
                    Medical Cabinet
                  </th>
                  <th scope="col" className="p-4">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="p-4">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => {
                  console.log(appointment);
                  const fullName =
                    appointment.user?.firstname +
                    ' ' +
                    appointment.user?.lastname;
                  const docFullName =
                    appointment.doctor?.firstname +
                    ' ' +
                    appointment.doctor?.lastname;
                  const phoneNumber = appointment.user?.phoneNumber;
                  return (
                    <tr
                      key={appointment._id}
                      className="bg-white border-b hover:bg-slate-50 cursor-pointer "
                    >
                      <td className="p-4">
                        <div className="flex items-center">
                          {appointment?.appointmentTime}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          {appointment?.appointmentDate}
                        </div>
                      </td>
                      <td className="p-4 ">{fullName}</td>
                      <td className="p-4">{phoneNumber}</td>
                      <td className="p-4">{docFullName}</td>
                      <td className="flex space-x-2 p-4">
                        <div className="border rounded-lg p-2 text-blue-500 hover:bg-gray-100">
                          <FiEdit size={15} />
                        </div>
                        <div className="border rounded-lg p-2  text-purple-500 hover:bg-gray-100">
                          <FiUser size={15} />
                        </div>
                        <div className="border rounded-lg p-2 hover:bg-gray-100">
                          <AiOutlineDelete size={15} color="red" />
                        </div>
                      </td>
                      <td className="p-4">
                        <button className="bg-purple-200 text-purple-500 text-xs px-3 py-3 rounded-md">
                          Start appointment
                        </button>
                      </td>
                      {/* <td className="p-4">-</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modalIsOpen && (
        <CreateAppointmentModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </MainLayout>
  );
};

const CreateAppointmentModal = ({ modalIsOpen, closeModal }) => {
  const dispatch = useAppDispatch();
  const [stateCal, setStateCal] = useState<boolean>(false);
  const [dateState, setDateState] = useState<string>();
  const [showTime, setShowTime] = useState<boolean>(false);
  const [selectedFilterOption, setSelectedFilterOption] = useState<string>('');
  const [searchDoctor, setSearchDoctor] = useState<string>('');
  const [suggestion, setSuggestion] = useState<any>([]);
  const [appData, setAppData] = useState({
    appointmentDate: new Date(),
    appointmentTime: '',
    doctor: '',
    concern: '', 
  })
  const [selectedDoc, setSelectedDoc] = useState()

  const {appointmentDate, appointmentTime, concern, doctor} = appData
  // setAppData({...appData, appointmentTime: selectedFilterOption})

  const { appointments, isLoading, isError, isSuccess, message } =
  useAppSelector((state) => state.appointment);
 
  const handleChange = (e) => {
    setAppData({...appData, [e.target.name]: e.target.value})
  }


  const { doctors, totalNumberofDoctors } = useAppSelector(
    (state) => state.doctor
  );

  const onChangeHandler = (searchDoctor) => {
    let matches = [];
    if (searchDoctor.length > 0) {
      matches = doctors.filter((doctor) => {
        const regex = new RegExp(`${searchDoctor}`, 'gi');
        return doctor.firstname.match(regex);
      });
    }
    console.log('matches', matches);
    setSuggestion(matches);
    setSearchDoctor(searchDoctor);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getDoctors());

    return () => {
      dispatch(reset());
    };
  }, []);

  const showTimeOptions = () => {
    setShowTime(!showTime);
  };

  const showCal = () => {
    setStateCal(!stateCal);
  };

  const changeDate = (e) => {
    // setDateState(e);
    setAppData({...appData, appointmentDate})
  };

  const changeTime = () => {
    setAppData({...appData, appointmentTime})
  }

  console.log('appTime', selectedFilterOption);
  // console.log('selectedFilterOption', selectedFilterOption);
  // console.log('doctors', doctors);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(createAppointment({...appData, appointmentTime:selectedFilterOption}));
    dispatch(getAllAppointments());
    isSuccess ? toast.success('Appointment added') : ''

    closeModal()
  };

  const customStyles = {
    content: {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',

      maxWidth: '576px',
      maxHeight: '576px',
      margin: 'auto',
      padding: '50px',
      backgroundColor: '#f2f4f6',
    },
  };
  const optionsWrapperClassName =
    'absolute top-16 overflow-auto bg-white rounded-md shadow-dropdown max-h-64 focus:outline-none divide-y divide-secondary divide-opacity-10 w-[10.9375rem]';
  
  console.log('appData', appData)
    return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Create appointment"
    >
      <div className="max-w-">
        <h2 className="font-semibold text-xl">Create appointment</h2>
      </div>

      <form className="mt-10" onSubmit={(e)=> handleSubmit(e)}>
        {/* select date */}
        <div className="flex items-center relative w-full mb-4">
          <div
            className="flex items-center justify-between border-2 border-purple-500 px-4 py-3 rounded-lg w-full text-sm cursor-pointer"
            onClick={showCal}
          >
            <div>
              Select date: <span>{dateState}</span>{' '}
            </div>
            <FiCalendar />
          </div>
          {stateCal && (
            <div
              // stateCal={stateCal}
              className="absolute top-5  bg-purple-200 rounded-xl mt-10 w-[320px] h-auto p-5 z-50"
            >
              <Calendar
                maxDetail={'month'}
                value={appointmentDate}
                onChange={changeDate}
              />
            </div>
          )}
        </div>
        {/* time */}
        <div
          onClick={showTimeOptions}
          className="flex items-center justify-between border-2 border-purple-500 px-4 py-3 rounded-lg w-36 text-sm cursor-pointer mb-4"
        >
          Start time
          <MdAccessTime />
        </div>

        {showTime && (
          <RadioGroup
            // showTime={showTime}
            value={selectedFilterOption}
            onChange={setSelectedFilterOption}
            // onClick={(e)=> setAppData({...appData, appointmentTime:selectedFilterOption})}
          >
            <RadioGroup.Label className="sr-only">
              Filter feedback
            </RadioGroup.Label>
            <div className="flex flex-wrap -ml-2 -mb-2">
              {timeSlot.map((option) => (
                <RadioGroup.Option
                  key={option.id}
                  value={option.time}
                  className={({ checked }) =>
                    `px-2 py-1 rounded-lg font-medium text-xs ml-2 mb-2 cursor-pointer ${
                      checked ? 'bg-purple-500' : 'bg-[#f2f4ff]'
                    }`
                  }
                >
                  {({ checked }) => (
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium  ${
                        checked ? 'text-white' : 'text-[#4760e7]'
                      }`}
                    >
                      {option.time}
                    </RadioGroup.Label>
                  )}
                  {/* {option} */}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
        {/* time end */}

        <div className="flex items-center relative w-full mb-4 mt-4">
          <div className="flex items-center justify-between border-2 border-purple-500 px-4 py-3 rounded-lg w-full text-sm cursor-pointer">
            <input
              className="bg-transparent w-full h-full focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter name or id"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={searchDoctor}
            />
            <AiOutlineUser />
          </div>
        </div>
        {suggestion?.map((sug) => {
          return (
            <div className="bg-white rounded-lg p-4">
              <div
                className="hover:bg-gray-200 h-full p-2  rounded-lg"
                key={sug._id}
                onClick={() => setAppData({...appData, doctor:sug._id})}
              >
                {sug.firstname + ' ' + sug.lastname}
              </div>
            </div>
          );
        })}

        <div className="flex items-center relative w-full mb-4 mt-4">
          <div className="flex items-center justify-between border-2 border-purple-500 px-4 py-3 rounded-lg w-full text-sm cursor-pointer">
            <textarea
              className="bg-transparent w-full h-full focus:outline-none"
              name="concern"
              placeholder="Concern"
              onChange={handleChange}
              value={concern}
            ></textarea>
            {/* <AiOutlineUser /> */}
          </div>
        </div>

        {/* button */}
        <button type="submit" className="bg-purple-600 text-purple-100 text-xs px-3 py-3 rounded-md w-full">
          Confirm
        </button>
        {/* end button */}
      </form>
    </Modal>
  );
};

export default Appointment;
