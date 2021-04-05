import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPatients, getPatientById, getUsers } from '../../actions/patient';
import { createVitalReport } from '../../actions/vitals';
import { Table, Tag, Space, Input, Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { withRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const Pop = ({ handleClick }) => {
  return (
    <>
      <div>
        <h1>This is a pop-up</h1>
        <h3 onClick={handleClick}>close</h3>
      </div>
    </>
  );
};

const PatientView = ({
  // getPatients,
  getUsers,
  patient: { _id, patient, patients, loading },
  getPatientById,
  match,
  createVitalReport,
}) => {
  const [pop, setPop] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [patientViewed, setPatientViewed] = useState(null);
  const [formData, setFormData] = useState({
    temperature: '',
    bloodPressure: '',
    weight: '',
    height: '',
  });
  const { temperature, bloodPressure, weight, height } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createVitalReport(formData);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();

    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText();
    // this.setState({ searchText: '' });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            node = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              // this.setState({
              //   searchText: selectedKeys[0],
              //   searchedColumn: dataIndex,
              // });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => node.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const getPatient = async (id) => {
    try {
      const { data } = await axios.get(`/api/user/${id}`);

      const patient = data;

      // console.log(patient);

      setPatientViewed(patient);

      setShowModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: 'Firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      ...getColumnSearchProps('firstname'),
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      ...getColumnSearchProps('lastname'),
    },
    {
      title: 'Date Of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      ...getColumnSearchProps('dateOfBirth'),
    },
    {
      title: 'Hospital Number',
      dataIndex: 'userNumber',
      key: 'userNumber',
      ...getColumnSearchProps('userNumber'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      ...getColumnSearchProps('gender'),
    },
    {
      title: 'Actions',
      dataIndex: '_id',
      key: '_id',
      render: (id) => (
        <Link href={`/p/${id}`}>
          <Button>View Patient</Button>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    // getPatients();
    getUsers();
    getPatientById();
  }, [getPatients, getPatientById, getUsers]);

  const handleClick = () => {
    setPop(!pop);
  };

  const patientAcct = patients.filter(function (e) {
    return e.accountType === 'Patient';
  });

  return (
    <>
      {pop && <Pop pop={pop} handleClick={handleClick} />}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Table
          // onRow={(record, rowIndex) => {
          //   return {
          //     onClick: (event) => {
          //       alert(patient);
          //     }, // click row
          //   };
          // }}
          dataSource={patientAcct}
          columns={columns}
          loading={false}
          onClick={handleClick}
          size="large"
          className="shadow-xl"
        />
      )}

      <Modal
        visible={showModal}
        closable
        maskClosable
        // footer={[<Link href={`/p/${id}`}>View More</Link>]}
        centered
        onCancel={() => setShowModal(false)}
      >
        {patientViewed && (
          <>
            <div className="flex p-9">
              <div className="flex flex-col items-center w-96 h-auto mr-8  bg-white border rounded-3xl ">
                <div className="img h-20 w-20 mb-4 mt-6 rounded-full bg-gray-400"></div>
                <h2 className="font-semibold text-xl">
                  {patientViewed.firstname} {patientViewed.lastname}
                </h2>
                <div className="flex justify-center w-full p-10 ">
                  <div className="flex flex-1">
                    <div className="main_one flex flex-col">
                      <div className="mb-8">
                        <small>Date of Birth</small>
                        <h3 className="font-semibold">
                          {patientViewed.dateOfBirth}
                        </h3>
                      </div>
                      <div className="mb-8">
                        <small>Hospital Number</small>
                        <h3 className="font-semibold">
                          {patientViewed.userNumber}
                        </h3>
                      </div>
                      <div className="mb-8">
                        <small>Address</small>
                        <h3 className="font-semibold">
                          {patientViewed.address}
                        </h3>
                      </div>
                      <div className="mb-8">
                        <small>Marital Status</small>
                        <h3 className="font-semibold">
                          {patientViewed.maritalStatus}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="main_one flex flex-1 flex-col text-right">
                      <div className="mb-8">
                        <small>Phone</small>
                        <h3 className="font-semibold">
                          {patientViewed.phoneNumber}
                        </h3>
                      </div>
                      <div className="mb-8">
                        <small>Hospital Number</small>
                        <h3 className="font-semibold">
                          {patientViewed.gender}
                        </h3>
                      </div>
                      <div className="mb-8">
                        <small>E-mail</small>
                        <h3 className="font-semibold">{patientViewed.email}</h3>
                      </div>
                      <div className="mb-8">
                        {/* <small>Marital Status</small>
                <h3 className="font-semibold">{patientViewed.maritalStatus}</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* appoitment */}
              <div className="flex flex-col p-10 w-96 h-80 bg-white border rounded-3xl mr-8 ">
                <div className="main_one flex">
                  <h2 className="font-bold text-2xl">Recent Appointment</h2>
                </div>
                <div className="main_one flex justify-between">
                  <div className="mt-8">
                    <small>Date</small>
                    <h3 className="font-semibold">
                      {patientViewed.appointment.appointmentTime} 21th April,
                      2021
                    </h3>
                  </div>
                  <div className="mt-8">
                    <small>Time</small>
                    <h3 className="font-semibold">
                      {/* {patientViewed.appointment[0].appointmentTime} */}{' '}
                      10am
                    </h3>
                  </div>
                </div>
                <div className="main_one flex justify-between">
                  <div className="mt-8">
                    <small>Concern</small>
                    <h3 className="font-semibold">
                      {/* {patientViewed.appointment[0].concern} */} fever
                    </h3>
                  </div>
                  <div className="mt-8">
                    <small>Appointment Number</small>
                    <h3 className="font-semibold">
                      {/* {patientViewed.appointment[0].appointmentNumber} */}
                      appointment2932
                    </h3>
                  </div>
                </div>
              </div>
              {/* vitals */}
              <div className="flex flex-col p-10 w-96 h-80 bg-white border rounded-3xl mr-8 ">
                <div className="main_one flex">
                  <h2 className="font-bold text-2xl">Vitals</h2>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="main_one flex justify-between">
                    <div className="mt-8">
                      <label class="block">
                        <small class="text-gray-700">
                          Temperature (Celcuis)
                        </small>
                        <input
                          name="temperature"
                          value={temperature}
                          type="text"
                          class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                        />
                      </label>
                    </div>
                    <div className="mt-8 ml-4">
                      <label class="block">
                        <small class="text-gray-700">Blood Pressure</small>
                        <input
                          name="bloodPressure"
                          value={bloodPressure}
                          type="text"
                          class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="main_one flex justify-between">
                    <div className="mt-8">
                      <label class="block">
                        <small class="text-gray-700">Weight</small>
                        <input
                          name="weight"
                          value={weight}
                          type="text"
                          class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                        />
                      </label>
                    </div>
                    <div className="mt-8 ml-4">
                      <label class="block">
                        <small class="text-gray-700">Height</small>
                        <input
                          name="height"
                          value={height}
                          type="text"
                          class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-">
                    <button
                      type="submit"
                      className="p-3 px-8 mt-6 bg-blue-500 text-white uppercase rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    >
                      record
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

PatientView.propTypes = {
  // getPatients: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getPatientById: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  createVitalReport: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  getPatientById,
  getUsers,
  createVitalReport,
})(PatientView);
// export default PatientView;
