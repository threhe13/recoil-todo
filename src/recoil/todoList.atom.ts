import { atom } from 'recoil';

const todoListAtom = atom({
  key: 'TodoList',
  default: [],
});

export { todoListAtom };
