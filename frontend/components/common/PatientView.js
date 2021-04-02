import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPatients, getPatientById } from '../../actions/patient';
import { Table, Tag, Space, Input, Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
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
  getPatients,
  patient: { _id, patient, patients, loading },
  getPatientById,
  match,
}) => {
  const [pop, setPop] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [patientViewed, setPatientViewed] = useState(null);

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
      const { data } = await axios.get(`/api/patient/${id}`);

      const patient = data;

      console.log(patient);

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
        <Button onClick={() => getPatient(id)}>View Patient</Button>
      ),
    },
  ];

  useEffect(() => {
    getPatients();
    getPatientById();
  }, [getPatients, getPatientById]);

  const handleClick = () => {
    setPop(!pop);
  };

  console.log();

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
          dataSource={patients}
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
        footer={null}
        centered
        onCancel={()=>setShowModal(false)}
      >
        {patientViewed && <p>{patientViewed.userNumber}</p>}
      </Modal>
    </>
  );
};

PatientView.propTypes = {
  getPatients: PropTypes.func.isRequired,
  getPatientById: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, { getPatients, getPatientById })(
  PatientView
);
// export default PatientView;
