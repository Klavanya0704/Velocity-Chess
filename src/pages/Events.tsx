import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Card,
  CardImage,
  CardContent,
  Badge,
  ChessIcon,
  ThinkScriptText,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import { MapPin, Clock, Calendar, Camera } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'Tournaments' | 'Workshops' | 'Simultaneous Exhibitions' | 'Academy Events';
  date: string;
  day: string;
  month: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  status: 'Upcoming' | 'Completed';
}

const eventsList: EventItem[] = [
  {
    id: 'e1',
    title: 'Open for All Categories - Youth Chess Cup 2025',
    category: 'Tournaments',
    date: '15 OCT',
    day: '15',
    month: 'OCT',
    time: '9:00 AM - 5:00 PM',
    location: 'Velocity Chess Academy Campus, Hyderabad',
    description: 'A grand open tournament for players across all age groups with medals, cash prizes, and certificates.',
    image: '/assets/images/home_mockup.jpg',
    status: 'Upcoming',
  },
  {
    id: 'e2',
    title: 'Weekend Masterclass & Strategy Workshop',
    category: 'Workshops',
    date: '22 OCT',
    day: '22',
    month: 'OCT',
    time: '10:00 AM - 2:00 PM',
    location: 'Interactive Online & Offline Hall',
    description: 'Intensive middlegame tactics and endgame strategy session led by International Master Krishna Teja.',
    image: '/assets/images/hero_photo.jpg',
    status: 'Upcoming',
  },
  {
    id: 'e3',
    title: 'FIDE Rated Classical Championship Preparation',
    category: 'Tournaments',
    date: '05 NOV',
    day: '05',
    month: 'NOV',
    time: '9:30 AM - 6:00 PM',
    location: 'KPHB Colony Academy Center',
    description: 'Official tournament practice under classical FIDE time controls to prepare students for rated tournaments.',
    image: '/assets/images/achievements_mockup.jpg',
    status: 'Upcoming',
  },
  {
    id: 'e4',
    title: 'Grandmaster Simul Exhibition Match',
    category: 'Simultaneous Exhibitions',
    date: '18 NOV',
    day: '18',
    month: 'NOV',
    time: '2:00 PM - 6:00 PM',
    location: 'Velocity Chess Main Auditorium',
    description: '25 selected academy students play simultaneously against visiting titled grandmaster coaches.',
    image: '/assets/images/programs_mockup.jpg',
    status: 'Upcoming',
  },
];

const pastEventsList: EventItem[] = [
  {
    id: 'pe1',
    title: 'AP State Interschool Chess Championship 2025',
    category: 'Tournaments',
    date: '15 SEP',
    day: '15',
    month: 'SEP',
    location: 'State Sports Complex',
    description: 'Our academy squad bagged 10+ medals and the overall team trophy.',
    image: '/assets/images/achievements_mockup.jpg',
    status: 'Completed',
  },
  {
    id: 'pe2',
    title: 'Summer Youth Chess Boot Camp 2025',
    category: 'Workshops',
    date: '28 AUG',
    day: '28',
    month: 'AUG',
    location: 'Velocity Chess Main Hall',
    description: 'Intensive 5-day workshop covering tactical calculation and practical endgames.',
    image: '/assets/images/hero_photo.jpg',
    status: 'Completed',
  },
];

const galleryStripImages = [
  { id: 'g1', src: '/assets/images/achievements_mockup.jpg', alt: 'Trophy Victory' },
  { id: 'g2', src: '/assets/images/home_mockup.jpg', alt: 'Classroom Drill' },
  { id: 'g3', src: '/assets/images/hero_photo.jpg', alt: 'Tournament Concentration' },
  { id: 'g4', src: '/assets/images/programs_mockup.jpg', alt: 'Group Coaching' },
];

export const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Events');

  const filterCategories = ['All Events', 'Tournaments', 'Workshops', 'Simultaneous Exhibitions', 'Academy Events'];

  const filteredUpcomingEvents = activeFilter === 'All Events'
    ? eventsList
    : eventsList.filter(ev => ev.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Our Events & Tournaments | Velocity Chess Academy" />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#FCFAF5] isolate w-full border-b border-[#F5EFE2]">
        {/* Clean Photography Background Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Velocity Chess Academy Environment"
            loading="eager"
            className="w-full h-full object-cover object-center absolute inset-0 opacity-90"
          />
          {/* Subtle Left Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF5]/95 via-[#FCFAF5]/70 to-transparent w-full lg:w-[52%] pointer-events-none z-1" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#F5EFE2] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#D89A18] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#071A3A] uppercase">
                    COMPETE • LEARN • EXPERIENCE • GROW
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-2">
                  Our <span className="text-[#D89A18] italic font-serif">Events</span>
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-[#071A3A] mb-3 font-serif">
                  Where learning meets competition.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-lg leading-relaxed mb-6 font-sans">
                  From academy tournaments and workshops to competitive chess events, our programs give students opportunities to test their skills, gain experience and grow with confidence.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a href="#upcoming-events">
                    <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-3.5 shadow-md flex items-center gap-2">
                      <span>Explore Upcoming Events</span>
                      <span>→</span>
                    </Button>
                  </a>

                  <a href="#upcoming-events">
                    <Button variant="secondary" size="lg" className="bg-white border-[#071A3A]/20 text-[#071A3A] hover:border-[#D89A18] font-bold rounded-full px-6 py-3.5 shadow-2xs flex items-center gap-2 text-xs">
                      <Calendar className="w-4 h-4 text-[#D89A18]" />
                      <span>View Event Calendar</span>
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Center Watermark & Right Hero Tournament Image */}
            <div className="lg:col-span-6 relative flex items-center justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute top-4 left-0 z-10 hidden sm:block pointer-events-none opacity-85">
                <ThinkScriptText />
              </div>

              {/* Right Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[420px] border border-[#F5EFE2] shadow-xl bg-gray-100">
                <img
                  src="/assets/images/home_mockup.jpg"
                  alt="Velocity Chess Tournament Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. UPCOMING EVENTS & CATEGORY FILTERS ================= */}
      <section id="upcoming-events" className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                WHAT'S HAPPENING
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Upcoming <span className="text-[#D89A18] italic font-serif">Events</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                Stay connected with tournaments, workshops and special chess experiences.
              </p>
            </div>

            <a href="#past-events" className="text-xs font-bold text-[#071A3A] hover:text-[#D89A18] flex items-center gap-1">
              <span>View Past Events</span>
              <span>→</span>
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer border ${
                  activeFilter === cat
                    ? 'bg-[#D89A18] text-[#071A3A] border-[#D89A18] shadow-2xs'
                    : 'bg-[#FCFAF5] text-[#647084] border-[#F5EFE2] hover:text-[#071A3A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Event Cards Grid */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredUpcomingEvents.map((ev) => (
              <Card key={ev.id} variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col justify-between">
                <div>
                  <div className="relative">
                    <CardImage
                      src={ev.image}
                      alt={ev.title}
                      aspectRatio="aspect-[16/9]"
                    />
                    {/* Date Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-[#071A3A] text-white px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md flex flex-col items-center">
                      <span className="font-serif font-black text-lg leading-none text-[#F5C542]">
                        {ev.day}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                        {ev.month}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <Badge variant="gold" size="sm">
                        {ev.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2 leading-snug">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-[#647084] leading-relaxed mb-4">
                      {ev.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#647084] pt-3 border-t border-[#F5EFE2]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#D89A18]" />
                        {ev.location}
                      </span>
                      {ev.time && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#D89A18]" />
                          {ev.time}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </div>

                <div className="p-4 pt-0 flex justify-end">
                  <Link to="/contact">
                    <Button variant="primary" size="sm" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-5 py-2 text-xs shadow-2xs flex items-center gap-1.5">
                      <span>Register Now</span>
                      <span>→</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 3. FEATURED EVENT SECTION ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F5EFE2] shadow-md max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Large Event Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#F5EFE2] shadow-lg bg-gray-100">
                  <img
                    src="/assets/images/achievements_mockup.jpg"
                    alt="Featured Tournament Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#071A3A] text-[#F5C542] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                    FEATURED EVENT
                  </div>
                </div>
              </div>

              {/* Right Event Text & Details */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                  FEATURED EVENT
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-[#071A3A] mb-3 leading-tight">
                  Experience the <span className="text-[#D89A18] italic font-serif">Game Beyond the Board</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#647084] leading-relaxed mb-6 font-sans">
                  Our special events combine competition, learning and community, giving students an opportunity to challenge themselves and experience chess in a new way.
                </p>

                {/* Event Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] mb-6">
                  <div>
                    <span className="text-[10px] font-semibold text-[#647084] block">Date</span>
                    <span className="font-serif font-bold text-xs text-[#071A3A]">15 OCT 2025</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#647084] block">Time</span>
                    <span className="font-serif font-bold text-xs text-[#071A3A]">9:00 AM - 5:00 PM</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#647084] block">Venue</span>
                    <span className="font-serif font-bold text-xs text-[#071A3A]">Velocity Campus</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#647084] block">Category</span>
                    <span className="font-serif font-bold text-xs text-[#D89A18]">FIDE Rated</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/contact">
                    <Button variant="primary" size="md" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-2.5 shadow-sm inline-flex items-center gap-2">
                      <span>Register Now</span>
                      <span>→</span>
                    </Button>
                  </Link>
                  <a href="#upcoming-events">
                    <Button variant="secondary" size="md" className="bg-white text-[#071A3A] border border-[#071A3A]/20 hover:border-[#D89A18] font-bold rounded-full px-5 py-2.5 text-xs shadow-2xs inline-flex items-center gap-2">
                      <span>View Details</span>
                      <span>→</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. WHY PARTICIPATE? ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                WHY PARTICIPATE?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
                Every Event Is <span className="text-[#D89A18] italic font-serif">A New Opportunity</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-sm flex items-center justify-center mb-3 shadow-2xs">
                  01
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                  Gain Experience
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Build confidence through real tournament situations and official game clocks.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-sm flex items-center justify-center mb-3 shadow-2xs">
                  02
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                  Test Your Skills
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Apply what you learn in competitive environments against diverse opponents.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-sm flex items-center justify-center mb-3 shadow-2xs">
                  03
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                  Meet Fellow Players
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Connect with students who share your passion for chess and make lifelong friends.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-sm flex items-center justify-center mb-3 shadow-2xs">
                  04
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                  Learn From Every Game
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Use post-game analysis and feedback from titled coaches to constantly improve.
                </p>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 5. EVENT EXPERIENCE BANNER ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess Environment"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C542] mb-1 block">
                TOURNAMENT ATMOSPHERE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                Compete. Learn. <span className="text-[#F5C542] italic font-serif">Grow.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Every tournament is more than a result. It is an opportunity to become a stronger player.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F5C542]/20 text-[#F5C542] flex items-center justify-center shrink-0">
                <ChessIcon type="knight" className="w-6 h-6 text-[#F5C542]" />
              </div>
              <a href="#upcoming-events">
                <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-7 py-3.5 shadow-lg flex items-center gap-2">
                  <span>Join Our Next Event</span>
                  <span>→</span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 6. PAST EVENTS ================= */}
      <section id="past-events" className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                MEMORIES & MILESTONES
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Past <span className="text-[#D89A18] italic font-serif">Events</span>
              </h2>
            </div>
            <Link to="/gallery" className="text-xs font-bold text-[#071A3A] hover:text-[#D89A18] flex items-center gap-1">
              <span>View Photos</span>
              <span>→</span>
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pastEventsList.map((ev) => (
              <Card key={ev.id} variant="interactive" className="bg-white border-[#F5EFE2] flex flex-col justify-between">
                <div>
                  <div className="relative overflow-hidden aspect-[16/9] rounded-t-2xl">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#071A3A] text-[#F5C542] text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-white/20">
                      {ev.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-bold text-[#D89A18] mb-1">{ev.date} • {ev.location}</div>
                    <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2">{ev.title}</h3>
                    <p className="text-xs text-[#647084] leading-relaxed">{ev.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex justify-end">
                  <Link to="/gallery">
                    <button className="text-xs font-bold text-[#071A3A] hover:text-[#D89A18] flex items-center gap-1 cursor-pointer">
                      <span>View Photos</span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 7. EVENT GALLERY STRIP ================= */}
      <section className="py-14 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                EVENT MOMENTS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                Captured <span className="text-[#D89A18] italic font-serif">Moments</span>
              </h2>
            </div>
            <Link to="/gallery">
              <Button variant="secondary" size="sm" className="bg-[#FCFAF5] border-[#F5EFE2] text-[#071A3A]">
                View Full Gallery →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryStripImages.map((img) => (
              <div key={img.id} className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#F5EFE2] shadow-2xs group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#071A3A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Camera className="w-6 h-6 text-[#F5C542]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* ================= 8. FINAL COMPACT CTA ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess Academy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C542] mb-1 block">
                TAKE THE NEXT STEP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                Your Next Game <span className="text-[#F5C542] italic font-serif">Could Be Your Next Breakthrough.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Take your skills to the next level with Velocity Chess Academy.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link to="/programs">
                <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-7 py-3.5 shadow-lg flex items-center gap-2">
                  <span>Explore Our Programs</span>
                  <span>→</span>
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-bold rounded-full px-7 py-3.5 flex items-center gap-2 text-xs">
                  <span>Contact Us</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Events;
