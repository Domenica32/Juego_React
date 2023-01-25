import React, { useContext } from 'react';
import { JuegoContext } from '../context/context';
import log from '../img/logoJuego.png'

function Intro() {

	const {  currentScene, setCurrentScene } = useContext(JuegoContext);

	const startGame = (e) => {
		setCurrentScene('game');
	};

	const isActive = currentScene === 'intro' ? 'active': '';

  return (
		<div className={isActive + ' scene intro'}>
			<img className="logo" src={log} alt="keyhero" />
			<div className="instructions">
			<p>Como jugar:</p>
			<p>Da click  sobre el arbusto para evitar que la basura caiga en el.</p>
			</div>
			<button className="button" onClick={startGame}>Iniciar</button>
		</div>
  );
}

export default Intro;
