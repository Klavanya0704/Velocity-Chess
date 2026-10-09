export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Academy", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Tournament Success", href: "/achievements" },
    { label: "Upcoming Events", href: "/events" },
  ],
  learning: [
    { label: "Beginner Course", href: "/programs#beginner" },
    { label: "Intermediate Tactics", href: "/programs#intermediate" },
    { label: "Advanced Grandmaster Training", href: "/programs#advanced" },
    { label: "Weekend Batches", href: "/programs#weekend" },
    { label: "FIDE Rating Preparation", href: "/programs#advanced" },
  ],
  resources: [
    { label: "Chess Puzzle Sets", href: "/resources" },
    { label: "Tournament Calendar", href: "/events" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Student Portal", href: "/resources" },
    { label: "FAQ & Rules", href: "/contact#faq" },
  ]
};
