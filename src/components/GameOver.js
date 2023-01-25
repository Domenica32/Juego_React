import React, { useContext, useRef } from 'react';
import { JuegoContext } from '../context/context';
import anime from 'animejs/lib/anime.es.js';

function GameOver() {

	const ovniRef = useRef(null);

	const { 
		currentScene, assets
 	} = useContext(JuegoContext);

	const startGame = (e) => {
		window.location.reload();
		return false;
	}

	anime({
		targets: ovniRef.current,
		rotate: {
			value: '+=2turn',
			duration: 1800,
			easing: 'easeInOutSine'
		},
		autoplay: true,
		loop: true
	});

	const isActive = currentScene === 'gameover' ? 'active': '';

  return (
		<div className={isActive + ' scene gameover'}>
			<h2>Game Over</h2>
			<img ref={ovniRef} src={assets.basura4} alt="aliens" />
			<br></br>
			<br></br>
			<button className="button" onClick={startGame}>Reiniciar</button>
		</div>
  );
}

export default GameOver;
