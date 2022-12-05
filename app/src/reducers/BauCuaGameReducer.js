import { CHANGE_STATUS_DAT_CUOC, DAT_CUOC_SCORE, PLAY_GAME, REFRESH_GAME } from "../types/BauCuaGameType"

const initialState = {
  danhSachXiNgau: [
    {id: 'bau', img: './images/bau.png', score: 0, refresh: true},
    {id: 'cua', img: './images/cua.png', score: 0, refresh: true},
    {id: 'ca', img: './images/ca.png', score: 0, refresh: true},
    {id: 'ga', img: './images/ga.png', score: 0, refresh: true},
    {id: 'nai', img: './images/nai.png', score: 0, refresh: true},
    {id: 'tom', img: './images/tom.png', score: 0, refresh: true},
  ],
  totalScore: 1000,
  xucXac: [
    {id: 'bau', img: './images/bau.png', score: 0},
    {id: 'cua', img: './images/cua.png', score: 0},
    {id: 'ca', img: './images/ca.png', score: 0},
  ]
}

export const BauCuaGameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case CHANGE_STATUS_DAT_CUOC: {
    const index = state.danhSachXiNgau.findIndex(i => i.id === payload.xiNgauId);
    if (state.totalScore > 0 && index !== -1) {
      state.danhSachXiNgau[index].refresh = false;
      state.danhSachXiNgau[index].score += 100;
      state.totalScore -= 100;
      state.danhSachXiNgau = [...state.danhSachXiNgau];
    }
    return { ...state }
  }
  case DAT_CUOC_SCORE: {
    const index = state.danhSachXiNgau.findIndex(i => i.id === payload.xiNgauId);
    if (index !== -1) {
      if (payload.tangGiam) {
        if (state.totalScore > 0) {
          state.danhSachXiNgau[index].score += 100;
          state.totalScore -= 100;
        }
      } else {
        if (state.danhSachXiNgau[index].score > 0) {
          state.danhSachXiNgau[index].score -= 100;
          state.totalScore += 100;
        }
        if (state.danhSachXiNgau[index].score === 0) {
          state.danhSachXiNgau[index].refresh = true;
        }
      }
      state.danhSachXiNgau = [...state.danhSachXiNgau];
    }
    return {...state}
  }
  case REFRESH_GAME: {
    const newDanhSachXiNgau = state.danhSachXiNgau.map((xiNgau, index) => {
      return {
        ...xiNgau,
        score: 0,
        refresh: true
      }
    });
    state.danhSachXiNgau = newDanhSachXiNgau;
    state.totalScore = 1000;
    return {...state}
  }
  case PLAY_GAME: {
    const newXucXac = [];
    for (let i=0; i < state.xucXac.length; i++) {
      const position = Math.floor(Math.random() * 6);
      newXucXac.push(state.danhSachXiNgau[position]);
    }
    state.xucXac = newXucXac;

    for (let i=0; i < state.danhSachXiNgau.length; i++) {
      const xiNgau = state.danhSachXiNgau[i];
      if (xiNgau.score) {
        const arr = state.xucXac.filter(i => i.id === xiNgau.id);
        if (arr && arr.length) {
          state.totalScore += (arr.length * xiNgau.score) + xiNgau.score;
        }
        state.danhSachXiNgau[i].score = 0;
        state.danhSachXiNgau[i].refresh = true;
      }
    }
    state.danhSachXiNgau = [...state.danhSachXiNgau];
    return {...state}
  }
  default:
    return state
  }
}
