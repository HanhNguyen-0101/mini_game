import { CHANGE_STATUS_DAT_CUOC, DAT_CUOC_SCORE, PLAY_GAME, REFRESH_GAME } from "../types/BauCuaGameType";

export const changeDatCuocStatus = (xiNgauId) => ({
    type: CHANGE_STATUS_DAT_CUOC,
    payload: {xiNgauId}
});

export const changeDatCuocScore = (xiNgauId, tangGiam) => ({
    type: DAT_CUOC_SCORE,
    payload: {xiNgauId, tangGiam}
});

export const refreshGame = () => ({
    type: REFRESH_GAME
});

export const playGame = () => ({
    type: PLAY_GAME
});