import React, { useContext } from 'react';
import { JuegoContext } from '../context/context';

function Points() {

	const { currentPoints } = useContext(JuegoContext);

  return (
		<div className="points">
			<h2>Points: {currentPoints}</h2>
		</div>
  );
}

export default Points;
