import { create } from 'zustand';
import { FlatState, createFlatSlice  } from './flat.slice';

// https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern
// https://docs.pmnd.rs/zustand/guides/slices-pattern#updating-multiple-stores
// https://docs.pmnd.rs/zustand/guides/nextjs#providing-the-store

export const store = create<FlatState>()((set, get, store) => ({
    ...createFlatSlice(set, get, store)
}))