import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../common/constants/routes';
import './Home.css';

const Home = (props) => {
  return (
    <>
      <h2 className="title">Home</h2>
      <Link to={ROUTES.breeds}>Dog Breeds</Link>
    </>
  );
};

export default Home;
