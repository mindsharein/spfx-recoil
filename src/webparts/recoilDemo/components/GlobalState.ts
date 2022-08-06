// Store all the Recoil Atoms here
import { atom, RecoilState, selector } from "recoil";

// Atom to store C temperature
export const temp : RecoilState<number> = atom<number>({
    key: 'tempState',
    default: 0
});

// Selector to convert C to F
export const farenTemp = selector({
    key: 'farenTempState',
    get: ({get}) => {
        const t = get(temp);

        return ((9/5) * t) + 32.0;
    }
})