export interface ResourceItem {
  id: string;
  title: string;
  category: 'Guide' | 'Puzzle Set' | 'Video' | 'Rules';
  description: string;
  downloadSize?: string;
  type: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "r1",
    title: "Beginner's Chess Fundamentals Guide",
    category: "Guide",
    description: "Comprehensive handbook covering board notation, piece values, opening rules, and basic tactical motifs.",
    downloadSize: "2.4 MB PDF",
    type: "PDF Document"
  },
  {
    id: "r2",
    title: "100 Tactical Checkmate Puzzles (Level 1 & 2)",
    category: "Puzzle Set",
    description: "Curated collection of tactical problems to sharpen spatial visualization and calculation speed.",
    downloadSize: "1.8 MB PDF",
    type: "Interactive Worksheet"
  },
  {
    id: "r3",
    title: "FIDE Official Tournament Rules & Conduct",
    category: "Rules",
    description: "Essential guidebook detailing touch-move rules, clock usage, illegal moves, and tournament etiquette.",
    downloadSize: "1.1 MB PDF",
    type: "Rulebook"
  }
];
