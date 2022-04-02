export const FilmDetails = {
    planets: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "planets":
        return {
          ...state,
          planets: [...state.planets, action.planets],
        };
      case "empty":
        return {
          ...state,
          planets: [],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  