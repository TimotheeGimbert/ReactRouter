import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => (
  <div className='Works'>
    <h1>Welcome on the works page.</h1>
    <p>Please select a category</p>
    <Link to='/works/exercices'>Training Exercices</Link> <br/>
    <Link to='/works/case-studies'>Case Studies</Link> <br/>
    <Link to='/works/concret-cases'>Concret Cases</Link> <br/>
  </div>
);

export default Works;