export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  studentName?: string;
  badge?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "state-champion-2025",
    title: "State Champion 2025",
    subtitle: "Andhra Pradesh State Chess Championship",
    category: "U-14 Category",
    year: "2025",
    description: "Our student won 1st place in Andhra Pradesh State Chess Championship in U-14 Category with an unbeaten record.",
    studentName: "Master S. Karthik",
    badge: "Gold Medalist"
  },
  {
    id: "team-championship",
    title: "Team Championship",
    subtitle: "Inter-School Chess Tournament 2025",
    category: "Inter-School",
    year: "2025",
    description: "Velocity Chess Academy squad secured 2nd place overall in the prestigious Inter-School Chess Tournament 2025.",
    studentName: "Academy Team Alpha",
    badge: "2nd Place"
  },
  {
    id: "national-selection",
    title: "National Selection",
    subtitle: "National Level Chess Championship 2025",
    category: "National Level",
    year: "2025",
    description: "Our student selected to represent Andhra Pradesh at the National Level Chess Championship 2025.",
    studentName: "Kumari A. Rithika",
    badge: "National Qualifier"
  },
  {
    id: "medals-tally",
    title: "10+ Medals This Year",
    subtitle: "District & State Level Tournaments",
    category: "Multiple Events",
    year: "2025",
    description: "Our players won 10+ medals in various district and state level tournaments across different age brackets.",
    studentName: "Academy Champions Squad",
    badge: "10+ Medals"
  }
];
