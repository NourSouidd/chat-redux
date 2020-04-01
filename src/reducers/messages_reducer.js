import { MESSAGE_POSTED } from '../actions';

export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case MESSAGE_POSTED:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
