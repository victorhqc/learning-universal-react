export const merge = nextState => state => ({
  ...state,
  ...nextState,
});

export const isFulfilled = state => ({
  ...state,
  isFetching: false,
});

export const isFetching = state => ({
  ...state,
  isFetching: true,
});
