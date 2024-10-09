import { FieldLayout } from './field-layout';
import { PLAYER, STATUS } from '../../constants';
import { useReduxState, useDispatch } from '../../redux-manager';
import { checkEmptyCell, checkWin } from '../../utils';
import { setCurrentPlayer, setField, setStatus } from '../../actions';

export const Field = () => {
	const { field, status, currentPlayer } = useReduxState();
	const dispatch = useDispatch();

	const handleCellClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[cellIndex] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			let newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
