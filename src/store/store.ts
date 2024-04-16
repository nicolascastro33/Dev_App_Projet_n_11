import { createStore } from 'zustand';
import { FlatStore, createFlatSlice  } from './flat.slice';

// https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern
// https://docs.pmnd.rs/zustand/guides/slices-pattern#updating-multiple-stores
// https://docs.pmnd.rs/zustand/guides/nextjs#providing-the-store

export const store = createStore<FlatStore>()((set, get, store) => ({
    ...createFlatSlice(set, get, store),
}))