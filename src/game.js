import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';
import { useDispatch } from './redux-manager';

export const Game = () => {
	// const [status, setStatus] = useState(STATUS.TURN);
	// const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	// const [field, setField] = useState(createEmptyField());

	// const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };

	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout handleRestart={handleRestart} />;
};
