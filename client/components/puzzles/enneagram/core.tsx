export type NamedPage =
  | 'GAMETITLE'
  | 'ALLLEVELS'
  | 'SETTHINGS'
  | 'LEARNMORE'
  | 'AQUESTION'
  | 'YOUWINYAY';

export interface Gram {
  gram: string;
  solved: boolean;
  num: number;
}

export interface Grams {
  [unlockAt: number]: number | Gram[];
}

// Stored locally to avoid making a network request
export const getGramStartState = () => {
  return {
    0: [
      { gram: 'ENTERNINE', num: 1, solved: false },
      { gram: 'UNOUTLAWS', num: 2, solved: false },
      { gram: 'FGHIJKMNO', num: 3, solved: false },
      { gram: 'EOFPEMDAS', num: 4, solved: false },
      { gram: 'MORSEIOOI', num: 5, solved: false },
      { gram: 'TTTTTTTTT', num: 6, solved: false },
      { gram: 'MELAZARUS', num: 7, solved: false },
      { gram: 'NEONARGON', num: 8, solved: false },
      { gram: 'DISENACTS', num: 9, solved: false },
    ],
    5: 9,
    11: 9,
    19: 9,
  };
};

export const SIGN_0 =
  '0a0ed16ff1e81158ecdb66850dbb71ec928e45b529ed4225affe373c64716382';
