import React, { useContext } from 'react';
import Pin from '../Pin/Pin';
import UserContext from '../../contexts/UserContext';

function PinList({ myMap }) {
  const { locationsArray } = useContext(UserContext);

  const allPins = locationsArray.map((singlePin) => (
    <React.Fragment key={singlePin._id}>
      <Pin isActive myMap={myMap} pinId={singlePin._id} />
    </React.Fragment>

  ));

  return (
    <div>
      { allPins }
    </div>
  );
}

export default PinList;
