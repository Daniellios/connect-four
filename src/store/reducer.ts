const reducer = (state, action) => {
    switch (action.type) {
        case "DISPLAY_GAME_RULES":
            return { ...state, isGameRulesOpen: true };

        case "CLOSE_GAME_RULES":
            return { ...state, isGameRulesOpen: false };

        case "DISPLAY_PAUSE_MENU":
            return { ...state, isPauseMenuOpen: true };

        case "CLOSE_PAUSE_MENU":
            return { ...state, isPauseMenuOpen: false };

        case "TOGGLE_TURN":
            return { ...state, isRedTurn: !state.isRedTurn };

        case "TURN_OFF_ANIMATION":
            return { ...state, isAnimationInProgress: false };

        case "TURN_ON_ANIMATION":
            return { ...state, isAnimationInProgress: true };

        case "COMPUTER_IS_PLAYING":
            return {
                ...state,
                isComputerPlaying: true,
            };

        case "HUMAN_IS_PLAYING":
            return {
                ...state,
                isComputerPlaying: false,
            };

        case "UPDATE_PIECES_STATE":
            let index = action.payload.indexToUpdate;
            let newArr = [...state.pieces];
            newArr[index] = action.payload.player;
            return {
                ...state,
                pieces: newArr,
            };

        case "DECLARE_WINNER":
            return {
                ...state,
                isWinnerDeclared: true,
            };

        case "DRAW_GAME":
            return {
                ...state,
                isDraw: true,
            };

        case "ADD_POINT_TO_RED":
            return {
                ...state,
                redScore: state.redScore + 1,
            };

        case "ADD_POINT_TO_YELLOW":
            return {
                ...state,
                yellowScore: state.yellowScore + 1,
            };

        case "COUNTDOWN":
            return {
                ...state,
                timePerMove: state.timePerMove - 1,
            };

        case "RESET_COUNTDOWN":
            return {
                ...state,
                timePerMove: 1500,
            };

        case "START_NEW_GAME":
            return {
                ...state,
                firstTurnRed: state.isRedTurn ? false : true,
                isRedTurn: state.isRedTurn ? true : false,
                isAnimationInProgress: false,
                isWinnerDeclared: false,
                isDraw: false,
                pieces: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                ],
            };

        case "RESTART_GAME":
            return {
                isGameRulesOpen: false,
                isPauseMenuOpen: false,
                isRedTurn: state.isRedTurn ? true : false,
                redScore: 0,
                yellowScore: 0,
                firstTurnRed: state.isRedTurn ? false : true,
                isAnimationInProgress: false,
                isWinnerDeclared: false,
                isDraw: false,
                pieces: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                ],
            };

        default:
            throw new Error("no matching action type");
    }
};

export default reducer;
