import myOtherMod from './my-other-mod.js';

const a = 1; // Private var

export const foo = () => myOtherMod(a);

export const bar = () => { };

export default { foo, bar };