import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <br />
      <button type="button" onClick={handleClick}>Check Status</button>
      <h2>{categories}</h2>
    </div>
  );
};

export default Category;
