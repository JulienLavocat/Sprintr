export const CARD_COLORS = {
  sprint_objective: '#172b4d',
  story: '#7bc86c',
  investigation: '#5ba4cf',
  bug: '#ef7564',
  debt: '#ffaf3f',
  support: '#f5dd29',
  marketing: '#cd8de5',
  misc: '#FF8ED4',
};

export const TYPE_HUMANIZED: Record<keyof typeof CARD_COLORS, string> = {
  sprint_objective: "Sprint's objective",
  story: 'Story',
  investigation: 'Investigation',
  bug: 'Bug',
  debt: 'Debt',
  support: 'Support',
  marketing: 'Marketing',
  misc: 'Misc',
};

export interface Card {
  id: string;
  title: string;
  content: string;
  type: string;
  score: string;
  scoreType: string;
}
