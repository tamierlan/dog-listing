import { useEffect, useState } from 'react';
import './Breeds.css';
import breedsService from '../../services/BreedsService';
import BreedCard from './BreedCard.js/BreedCard';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../common/constants/routes';

const Breeds = () => {
  // get the first 12 dog breeds using the "BreedsService" and use them in this component
  const btn = 'Load More';
  const btnEnds = 'It is last page';

  const [ data, setData ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ btntext, setBtntext ] = useState(btn);

 // get data
  const getData = async num => {
    let temp = await breedsService.getDogBreeds();
    let twelve = 12;
    let start = twelve * page;
    let moreLoad = data.length + twelve;
    setData([]);

    // more load
    if (num === 'load-more') {
      if (moreLoad + twelve > temp.length) {
        // last page
        moreLoad = temp.length - 1;
        setBtntext(btnEnds);
      } else {
        // next page
        temp = temp.splice(start, moreLoad)
        if (btntext !== btn) setBtntext(btn);
      }

    // prev next
    } else {
      // other paging
      start = twelve * num;
      if (start + twelve > temp.length) {
        // last page
        twelve = temp.length - 1;
        setBtntext(btnEnds);
      } else {
        // next page
        temp = temp.splice(start, twelve);
        setPage(num);
        if (btntext !== btn) setBtntext(btn);
      }
    }
    setTimeout(() => {
      setData(temp);
    }, 500);
  };


  // initial render
  useEffect(() => {
    getData(0)
  }, []);


  return (
    <>
      <div className="arrow-container">
        <Link to={ROUTES.home} className="back-arrow button">
          <span className="arrow-label">Home</span>
        </Link>

        <div className="pagination">
          <div onClick={() => page && getData(page - 1)} className="prev button" />
          <div className="page">{ page + 1 }</div>
          <div onClick={() => getData(page + 1)} className="next button" />
        </div>

      </div>
      <h2 className="title">Dog Breeds</h2>
      <div className="container">
        {data.length ? (
          data.map((breed) => {
            return <BreedCard breed={breed} key={breed.id} />;
          })
        ) : (
          <div className="loading">
            <h1>LOADING...</h1>
          </div>
        )}
      </div>
      <div className="centered">
        <button onClick={() => getData('load-more')} className="button">
          { btntext }
        </button>
      </div>
    </>
  );  
};

export default Breeds;
