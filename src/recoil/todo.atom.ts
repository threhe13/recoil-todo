import { atom, selector } from 'recoil';

interface TodoAtom {
  id: number;
  header: string | null;
  description: string | null;
  isClear: boolean;
}

const todoAtom = atom<TodoAtom>({
  key: 'todoAtom',
  default: {
    id: 0,
    header: null,
    description: null,
    isClear: false,
  },
});

export type { TodoAtom };
export { todoAtom };
