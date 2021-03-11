import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPatients } from '../../actions/patient';
import { Table, Tag, Space, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

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

const PatientView = ({ getPatients, patient: { patients, loading } }) => {
  const [pop, setPop] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

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
      title: 'Patient Number',
      dataIndex: 'userNumber',
      key: 'regNumber',
      ...getColumnSearchProps('userNumber'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      ...getColumnSearchProps('gender'),
    },
  ];

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  const handleClick = () => {
    setPop(!pop);
  };

  // console.log();

  return (
    <>
      {pop && <Pop pop={pop} handleClick={handleClick} />}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                alert('clicked');
              }, // click row
            };
          }}
          dataSource={patients}
          columns={columns}
          loading={false}
          onClick={handleClick}
          size="large"
          className="shadow-xl"
        />
      )}
    </>
  );
};

PatientView.propTypes = {
  getPatients: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, { getPatients })(PatientView);
// export default PatientView;
