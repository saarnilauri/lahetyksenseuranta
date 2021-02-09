function playerReducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        ...{ url: action.payload, played: 0, loaded: 0, pip: false },
      };
    case "TOGGLE_PLAY_PAUSE":
      return { ...state, ...{ playing: !state.playing } };
    case "PLAY":
      return { ...state, ...{ playing: true } };
    case "PAUSE":
      return { ...state, ...{ playing: false } };
    case "VOLUME":
      return { ...state, ...{ volume: parseFloat(action.payload) } };
    case "TOGGLE_MUTED":
      return { ...state, ...{ muted: !state.muted } };
    case "SET_PLAYBACK_RATE":
      return { ...state, ...{ playbackRate: parseFloat(action.payload) } };
    case "ENABLE_SEEK":
      return { ...state, ...{ seeking: true } };
    case "SEEK":
      return { ...state, ...{ played: parseFloat(action.payload) } };
    case "DISABLE_SEEK":
      return { ...state, ...{ seeking: false } };
    case "PLAY_ENDS":
      return { ...state, ...{ playing: state.loop } };
    case "DURATION":
      return { ...state, ...{ duration: action.payload } };
    case "PROGRESS":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export default playerReducer;
