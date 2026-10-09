export interface GalleryItem {
  id: string;
  title: string;
  category: 'Tournaments' | 'Classroom' | 'Trophies' | 'Events';
  aspectRatio?: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "State Championship Finals 2025",
    category: "Tournaments",
    caption: "Deep focus during the final round of AP State Championship."
  },
  {
    id: "g2",
    title: "Mastering Openings in Class",
    category: "Classroom",
    caption: "Senior coach explaining Sicilian Defense structures on the demonstration board."
  },
  {
    id: "g3",
    title: "Annual Trophy Ceremony",
    category: "Trophies",
    caption: "Proud students displaying their gold and silver trophies."
  },
  {
    id: "g4",
    title: "Inter-School Tournament Opening",
    category: "Events",
    caption: "Over 150 students gathered for the annual Velocity Cup."
  },
  {
    id: "g5",
    title: "Focus and Strategy",
    category: "Tournaments",
    caption: "Young player calculating tactical combinations."
  },
  {
    id: "g6",
    title: "Weekend Batch Demonstration",
    category: "Classroom",
    caption: "Interactive group puzzle analysis during weekend batch."
  }
];
