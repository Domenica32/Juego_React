import React, {createContext, useState} from 'react';
import arbusto from '../img/arbusto2.png';
import basura1 from '../img/basura1.png';
import basura2 from '../img/basura2.png';
import basura3 from '../img/basura3.png';
import basura4 from '../img/basura4.png';
import logo from '../img/logoJuego.png'

export const JuegoContext = createContext();

const JuegoProvider = (props) => {

	const [assets, setAssets] = useState({
		arbusto,
		basura1,
		basura2,
		basura3,
		basura4,
		logo
	});
	
	const [isRunning, setIsRunning] = useState(false);
	const [currentScene, setCurrentScene] = useState('intro');
	const [currentLife, setCurrentLife] = useState(4);
	const [currentPoints, setCurrentPoints] = useState(0);
	const [shoot, setShoot] = useState({});
	const [enemyActive, setEnemyActive] = useState(null);
	const [currentSpeed, setCurrentSpeed] = useState(8000);
	const [activePlayers, setActivePlayers] = useState([
		{id: 's1', state: true}, 
		{id: 's2', state: true},
		{id: 's3', state: true},
		{id: 's4', state: true}]);

	return (
		<JuegoContext.Provider
			value={{
				assets,
				setAssets,
				isRunning,
				setIsRunning,
				currentScene,
				setCurrentScene,
				currentLife,
				setCurrentLife,
				currentPoints,
				setCurrentPoints,
				shoot,
				setShoot,
				enemyActive,
				setEnemyActive,
				currentSpeed,
				setCurrentSpeed,
				activePlayers,
				setActivePlayers
			}}
		>
			{props.children}
		</JuegoContext.Provider>
	)
}

export default JuegoProvider;