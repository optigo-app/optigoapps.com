
export const isSamePath = (a, b) =>
    a.replace(/\/+$/, '') === b.replace(/\/+$/, '');
