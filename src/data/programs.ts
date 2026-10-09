export interface Program {
  id: string;
  title: string;
  category: string;
  ageGroup: string;
  description: string;
  features: string[];
  icon: 'knight' | 'rook' | 'crown' | 'users' | 'target' | 'award';
  badge?: string;
  level: string;
}

export const programsData: Program[] = [
  {
    id: "beginner",
    title: "Beginner Program",
    category: "Foundation Training",
    ageGroup: "Age: 5+ Years",
    description: "Learn the basics, build strong fundamentals and develop a deep love for the game.",
    features: [
      "Board setup & piece movement mechanics",
      "Basic checkmate patterns & rules",
      "Focus & spatial concentration development",
      "Interactive fun puzzle solving"
    ],
    icon: "knight",
    level: "Beginner"
  },
  {
    id: "intermediate",
    title: "Intermediate Program",
    category: "Tactical Mastery",
    ageGroup: "Age: 8+ Years",
    description: "Strengthen strategies, improve tactical skills and compete at higher levels.",
    features: [
      "Forks, pins, skewers & tactical combinations",
      "Opening principles & pawn structures",
      "Endgame techniques & calculation drills",
      "Weekly internal academy tournaments"
    ],
    icon: "rook",
    level: "Intermediate"
  },
  {
    id: "advanced",
    title: "Advanced Training",
    category: "Championship Prep",
    ageGroup: "Age: 12+ Years",
    description: "For serious players aiming for state, national and international tournaments.",
    features: [
      "FIDE preparation & opening preparation",
      "Deep positional analysis & engine studies",
      "Psychological tournament readiness",
      "Personalized game analysis by FIDE coaches"
    ],
    icon: "crown",
    badge: "FIDE Prep",
    level: "Advanced"
  },
  {
    id: "weekend",
    title: "Weekend Coaching",
    category: "Flexible Schedule",
    ageGroup: "All Age Groups",
    description: "Flexible weekend batches designed for school students and working beginners.",
    features: [
      "Saturday & Sunday regular sessions",
      "Structured module-based progression",
      "Small batch size with individual attention",
      "Online puzzle portal access included"
    ],
    icon: "users",
    level: "All Levels"
  }
];
