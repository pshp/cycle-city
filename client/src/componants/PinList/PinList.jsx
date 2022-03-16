import React, { useContext } from 'react';
import Pin from '../Pin/Pin';
import UserContext from '../../contexts/UserContext';

function PinList() {
  const { locationsArray } = useContext(UserContext);

  const allPins = locationsArray.map((singlePin) => (
    <React.Fragment key={singlePin._id}>
      <Pin pinId={singlePin._id} />
    </React.Fragment>

  ));

  return (
    <div>
      { allPins }
    </div>
  );
}

export default PinList;
