export interface AcademyEvent {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  time?: string;
  category: string;
  description: string;
  status: 'Upcoming' | 'Registration Open' | 'Limited Seats' | 'Completed';
}

export const eventsData: AcademyEvent[] = [
  {
    id: "event-1",
    day: "15",
    month: "NOV",
    year: "2026",
    title: "Inter-School Chess Championship",
    location: "Velocity Chess Academy Campus",
    time: "9:00 AM - 5:00 PM",
    category: "Tournament",
    description: "Open inter-school championship for Under-10, Under-14 and Under-18 categories with trophies and FIDE-standard boards.",
    status: "Registration Open"
  },
  {
    id: "event-2",
    day: "28",
    month: "NOV",
    year: "2026",
    title: "Chess Workshop for Beginners",
    location: "Velocity Chess Academy Main Hall",
    time: "10:00 AM - 1:00 PM",
    category: "Workshop",
    description: "Interactive 3-hour orientation workshop introducing young minds to board vision, tactics, and decision-making.",
    status: "Limited Seats"
  },
  {
    id: "event-3",
    day: "10",
    month: "DEC",
    year: "2026",
    title: "FIDE Rated Classical Tournament",
    location: "Visakhapatnam District Chess Center",
    time: "Full Day (3 Days)",
    category: "FIDE Tournament",
    description: "Official FIDE rating tournament sponsored and hosted for advanced players seeking international ratings.",
    status: "Upcoming"
  },
  {
    id: "event-4",
    day: "22",
    month: "DEC",
    year: "2026",
    title: "Grandmaster Masterclass with Guest Coach",
    location: "Velocity Chess Academy Auditorium",
    time: "2:00 PM - 6:00 PM",
    category: "Special Session",
    description: "Exclusive tactical masterclass featuring endgame calculation techniques by invited International Master.",
    status: "Limited Seats"
  }
];
