import React, { useContext } from 'react';
import { JuegoContext } from '../context/context';

function Life() {

	const { currentLife } = useContext(JuegoContext);

	const fillBars = () => {
		const bars = [1,2,3,4];
		const barsDom = bars.map((item, index) => 
			index < currentLife ? 
				<div className="block full" key={index}></div>:
					<div className="block" key={index}></div>
		);

		return barsDom;
	}

  return (
		<div className="life">
			{fillBars()}
		</div>
  );
}

export default Life;
