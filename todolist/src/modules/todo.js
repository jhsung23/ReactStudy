import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todo/INSERT';
const REMOVE = 'todo/REMOVE';
const TOGGLE = 'todo/TOGGLE';

// action creator
let id = 5;
export const insert = createAction(INSERT, (content) => ({
  id: id++,
  content,
  isDone: false,
}));
export const remove = createAction(REMOVE, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);
