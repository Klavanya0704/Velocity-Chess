export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  highlight: string;
  studentClass?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Varma",
    role: "Parent of Karthik (State U-14 Champion)",
    content: "Velocity Chess Academy transformed my son's focus and problem-solving skills. The coaches here don't just teach moves; they instill discipline and confidence.",
    rating: 5,
    highlight: "Transformed focus and problem-solving skills",
    studentClass: "Advanced Batch"
  },
  {
    id: "t2",
    name: "Sunitha Rao",
    role: "Parent of Rithika (National Qualifier)",
    content: "The personal attention given to each student is outstanding. The atmosphere is encouraging, competitive, and truly inspiring for young minds.",
    rating: 5,
    highlight: "Outstanding personal attention",
    studentClass: "FIDE Rating Batch"
  },
  {
    id: "t3",
    name: "Pravallika K.",
    role: "Intermediate Student, Age 11",
    content: "I love solving puzzles and playing weekend tournaments at Velocity! My calculation speed has improved so much in just 6 months.",
    rating: 5,
    highlight: "Calculation speed improved significantly",
    studentClass: "Intermediate Batch"
  }
];
