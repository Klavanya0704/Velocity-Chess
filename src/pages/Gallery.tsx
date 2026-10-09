import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  ThinkScriptText,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Classes' | 'Tournaments' | 'Events' | 'Achievements' | 'Workshops' | 'Academy Life';
  caption: string;
  image: string;
  aspectRatio: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'State Championship Victory Moment',
    category: 'Achievements',
    caption: 'Aditya Varma holding the AP State Chess Championship U-12 trophy.',
    image: '/assets/images/achievements_mockup.jpg',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'g2',
    title: 'Interactive Masterclass Session',
    category: 'Classes',
    caption: 'IM Krishna Teja analyzing positional tactics with young academy students.',
    image: '/assets/images/home_mockup.jpg',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'g3',
    title: 'Inter-School Tournament Concentration',
    category: 'Tournaments',
    caption: 'Student focused during a high-stakes round at the school championship.',
    image: '/assets/images/hero_photo.jpg',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g4',
    title: 'Academy Team Trophy Celebration',
    category: 'Achievements',
    caption: 'Velocity Chess Squad celebrating multiple medal wins at district level.',
    image: '/assets/images/programs_mockup.jpg',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'g5',
    title: 'Weekend Strategy Workshop',
    category: 'Workshops',
    caption: 'Group discussion on endgame techniques during our weekend workshop.',
    image: '/assets/images/hero_background.png',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g6',
    title: 'FIDE Rated Championship Round',
    category: 'Events',
    caption: 'Intense concentration as students compete under classical time controls.',
    image: '/assets/images/home_mockup.jpg',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'g7',
    title: 'Grandmaster Simul Event',
    category: 'Events',
    caption: 'Simultaneous exhibition match giving students hands-on master experience.',
    image: '/assets/images/hero_photo.jpg',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'g8',
    title: 'Junior Beginners Class',
    category: 'Classes',
    caption: 'Young learners discovering fundamental piece movements and checkmate patterns.',
    image: '/assets/images/achievements_mockup.jpg',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g9',
    title: 'Academy Life & Daily Drills',
    category: 'Academy Life',
    caption: 'Daily tactical drills and friendly sparring matches in our academy hall.',
    image: '/assets/images/contact_mockup.jpg',
    aspectRatio: 'aspect-[16/10]',
  },
];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = ['All', 'Classes', 'Tournaments', 'Events', 'Achievements', 'Workshops', 'Academy Life'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Our Gallery | Velocity Chess Academy" />

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
                    OUR CHESS JOURNEY IN PICTURES
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-2">
                  Our <span className="text-[#D89A18] italic font-serif">Gallery</span>
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-[#071A3A] mb-3 font-serif">
                  Moments that inspire, motivate and create lasting memories.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-lg leading-relaxed mb-6 font-sans">
                  From classroom learning and tournament battles to celebrations and special events, explore the moments that make the Velocity Chess Academy journey special.
                </p>
              </FadeIn>
            </div>

            {/* Center Watermark & Right Hero Camera/Student Image */}
            <div className="lg:col-span-6 relative flex items-center justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute top-4 left-0 z-10 hidden sm:block pointer-events-none opacity-85">
                <ThinkScriptText />
              </div>

              {/* Right Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[420px] border border-[#F5EFE2] shadow-xl bg-gray-100">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Velocity Chess Student Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. GALLERY FILTER TABS & MASONRY GRID ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                EXPLORE OUR MOMENTS
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Every Move Has a <span className="text-[#D89A18] italic font-serif">Story</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((cat) => (
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
          </div>

          {/* Masonry Grid */}
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="relative rounded-2xl overflow-hidden bg-[#FCFAF5] border border-[#F5EFE2] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className={`relative overflow-hidden ${item.aspectRatio}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#071A3A] text-[#F5C542] shadow-2xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-[#071A3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                    <ZoomIn className="w-8 h-8 text-[#F5C542] mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542]">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold underline mt-1">
                      View Image →
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-serif font-bold text-sm text-[#071A3A] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#647084] leading-relaxed line-clamp-2 font-sans">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 3. FEATURED MOMENTS ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                FEATURED MOMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
                Moments Worth <span className="text-[#D89A18] italic font-serif">Remembering</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#F5EFE2] shadow-xl group cursor-pointer">
              <img
                src="/assets/images/achievements_mockup.jpg"
                alt="Championship Moments"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/90 via-[#071A3A]/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                  ACHIEVEMENTS
                </span>
                <h3 className="font-serif font-bold text-xl text-white mb-2 flex items-center justify-between">
                  <span>Championship Moments</span>
                  <ArrowRight className="w-5 h-5 text-[#F5C542]" />
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#F5EFE2] shadow-xl group cursor-pointer">
              <img
                src="/assets/images/home_mockup.jpg"
                alt="Learning Together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/90 via-[#071A3A]/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                  CLASSROOM
                </span>
                <h3 className="font-serif font-bold text-xl text-white mb-2 flex items-center justify-between">
                  <span>Learning Together</span>
                  <ArrowRight className="w-5 h-5 text-[#F5C542]" />
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#F5EFE2] shadow-xl group cursor-pointer">
              <img
                src="/assets/images/hero_photo.jpg"
                alt="Beyond the Board"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/90 via-[#071A3A]/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                  COMMUNITY
                </span>
                <h3 className="font-serif font-bold text-xl text-white mb-2 flex items-center justify-between">
                  <span>Beyond the Board</span>
                  <ArrowRight className="w-5 h-5 text-[#F5C542]" />
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. ACADEMY LIFE ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 5 Cols: Large Vertical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#F5EFE2] shadow-xl bg-gray-100">
                <img
                  src="/assets/images/home_mockup.jpg"
                  alt="Velocity Academy Life"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 7 Cols: Text & 4 Gold Numbered Features */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                LIFE AT VELOCITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A] mb-3 leading-tight">
                More Than <span className="text-[#D89A18] italic font-serif">Just Chess</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#647084] leading-relaxed mb-6 font-sans max-w-xl">
                Every class, tournament and interaction contributes to a learning environment where students develop focus, confidence, discipline and a love for the game.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    01
                  </div>
                  <span className="font-serif font-bold text-sm text-[#071A3A]">Learn Together</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    02
                  </div>
                  <span className="font-serif font-bold text-sm text-[#071A3A]">Play Together</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    03
                  </div>
                  <span className="font-serif font-bold text-sm text-[#071A3A]">Compete Together</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    04
                  </div>
                  <span className="font-serif font-bold text-sm text-[#071A3A]">Grow Together</span>
                </div>
              </div>

              <Link to="/programs" className="w-fit">
                <Button variant="primary" size="md" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-3 shadow-md flex items-center gap-2">
                  <span>Explore Our Programs</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 5. CINEMATIC PHOTO BANNER ================= */}
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
                COMMUNITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                A Community Built Around <span className="text-[#F5C542] italic font-serif">Chess</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Every photograph tells a story of learning, friendship, effort and achievement.
              </p>
            </div>

            <Link to="/events" className="shrink-0">
              <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-8 py-3.5 shadow-lg flex items-center gap-2">
                <span>View Our Events</span>
                <span>→</span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>



      {/* ================= 6. FINAL COMPACT CTA ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden border-t border-white/10">
        <Container size="wide" className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C542] mb-1 block">
                YOUR JOURNEY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                Your Chess Journey <span className="text-[#F5C542] italic font-serif">Could Be Our Next Story.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Join Velocity Chess Academy and become part of our growing chess community.
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

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col">
            {/* Modal Controls Bar */}
            <div className="flex items-center justify-between p-4 bg-[#071A3A] text-white z-10 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F5C542]">
                <span>{String(lightboxIndex + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(filteredItems.length).padStart(2, '0')}</span>
                <span className="text-white/60 ml-2">•</span>
                <span className="text-white font-serif">{filteredItems[lightboxIndex].category}</span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image & Prev/Next Controls */}
            <div className="relative flex items-center justify-center bg-black min-h-[50vh] max-h-[70vh]">
              <button
                onClick={handlePrev}
                className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />

              <button
                onClick={handleNext}
                className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Details Caption Footer */}
            <div className="p-5 bg-[#071A3A] text-white border-t border-white/10">
              <h3 className="font-serif text-lg font-bold text-[#F5C542]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/80 font-sans mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
