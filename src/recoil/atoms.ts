import { atom } from 'recoil';

export const categoryAtom = atom<string>({
  key: 'category',
  default: '',
});

export const answersAtom = atom<Array<number>>({
  key: 'answers',
  default: [],
});

export const userNameAtom = atom<string>({
  key: 'userName',
  default: '',
});
