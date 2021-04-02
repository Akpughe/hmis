import React from 'react';
import { getUsers, getPatientById } from '../../actions/patient';
import axios from 'axios';

const PatientDetails = (props) => {
  return (
    <div>
      <p>{props.user.userNumber}</p>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data } = await axios.get('/api/patient/get-all-patients');

  console.log(data);

  const users = data;

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { data } = await axios.get(`/api/patient/${params.id}`);

  const user = data;

  // Pass post data to the page via props
  return { props: { user } };
}

export default PatientDetails;
