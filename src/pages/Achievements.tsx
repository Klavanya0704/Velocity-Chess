import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Card,
  CardImage,
  CardContent,
  ChessIcon,
  ThinkScriptText,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import {
  Trophy,
  Award,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Globe,
  Crown,
} from 'lucide-react';

const featuredAchievements = [
  {
    id: 1,
    badge: 'STATE LEVEL',
    name: 'Aditya Varma',
    category: 'U-12 Category',
    competition: 'State Level Championship 2025',
    result: 'Winner',
    image: '/assets/images/achievements_mockup.jpg',
  },
  {
    id: 2,
    badge: 'NATIONAL LEVEL',
    name: 'Sahithi Reddy',
    category: 'U-14 Category',
    competition: 'National Youth Chess 2025',
    result: 'Runner Up',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 3,
    badge: 'INTERNATIONAL EVENT',
    name: 'Rohan Prakash',
    category: 'U-16 Category',
    competition: 'Selected for Asian Youth Chess Championship',
    result: 'Selected',
    image: '/assets/images/hero_photo.jpg',
  },
  {
    id: 4,
    badge: 'TEAM ACHIEVEMENT',
    name: 'Velocity Chess Academy',
    category: 'Inter-School Team',
    competition: 'Inter-School Team Event 2025',
    result: 'Overall Champions',
    image: '/assets/images/programs_mockup.jpg',
  },
  {
    id: 5,
    badge: 'DISTRICT LEVEL',
    name: 'Nitya Agarwal',
    category: 'U-10 Category',
    competition: 'District Chess Tournament 2025',
    result: 'Winner',
    image: '/assets/images/achievements_mockup.jpg',
  },
];

const successStories = [
  {
    id: 1,
    name: 'Aditya Varma',
    label: 'U-12 State Champion',
    quote: 'The guidance at Velocity Chess Academy helped me improve my thinking, patience and confidence. I was able to win my first state level tournament.',
    image: '/assets/images/achievements_mockup.jpg',
  },
  {
    id: 2,
    name: 'Sahithi Reddy',
    label: 'National Runner Up',
    quote: 'The structured training and personal attention made a huge difference in my journey. I could perform better at national level.',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 3,
    name: 'Rohan Prakash',
    label: 'International Selection',
    quote: 'The coaches always motivate us to think deeply and improve. I got selected for the Asian Youth Chess Championship because of their support.',
    image: '/assets/images/hero_photo.jpg',
  },
];

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'State Level' | 'National Level' | 'International' | 'Team Events'>('State Level');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredAchievements.length) % featuredAchievements.length);
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredAchievements.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Our Achievements & Wall of Fame | Velocity Chess Academy" />

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
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#071A3A]">
                    DISCIPLINE • STRATEGY • ACHIEVEMENTS • A BRIGHTER INDIA
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-2">
                  Our <span className="text-[#D89A18] italic font-serif">Achievements</span>
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-[#071A3A] mb-3 font-serif">
                  Celebrating every milestone, every victory and every student’s growth.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-lg leading-relaxed mb-6 font-sans">
                  At Velocity Chess Academy, we take pride in the success of our students at district, state, national and international levels. Every achievement reflects hard work, dedication, structured training and a strong chess community.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <a href="#success-stories">
                  <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-3.5 shadow-md flex items-center gap-2">
                    <span>View Student Success Stories</span>
                    <span>→</span>
                  </Button>
                </a>
              </FadeIn>
            </div>

            {/* Center Watermark & Right Hero Student Trophy Image */}
            <div className="lg:col-span-6 relative flex items-center justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute top-4 left-0 z-10 hidden sm:block pointer-events-none opacity-85">
                <ThinkScriptText />
              </div>

              {/* Right Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[420px] border border-[#F5EFE2] shadow-xl bg-gray-100">
                <img
                  src="/assets/images/achievements_mockup.jpg"
                  alt="Velocity Chess Academy Trophy Winner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. ACHIEVEMENT STATISTICS BAR ================= */}
      <Container size="wide" className="relative z-10 -mt-6 pb-4">
        <FadeIn direction="up">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full p-4 border border-white/90 shadow-xl mx-auto w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center">
              <div className="flex items-center gap-2.5 justify-center p-1 md:border-r border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-black text-[#071A3A] leading-none">1000+</span>
                  <span className="text-[11px] text-[#647084] font-medium mt-0.5">Student Appearances</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center p-1 md:border-r border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-black text-[#071A3A] leading-none">50+</span>
                  <span className="text-[11px] text-[#647084] font-medium mt-0.5">Tournaments Participated</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center p-1 md:border-r border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-black text-[#071A3A] leading-none">200+</span>
                  <span className="text-[11px] text-[#647084] font-medium mt-0.5">Medals & Awards</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center p-1 md:border-r border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-black text-[#071A3A] leading-none">10+</span>
                  <span className="text-[11px] text-[#647084] font-medium mt-0.5">Championship Titles</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center p-1 col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-sm font-extrabold text-[#071A3A] leading-tight">Students from</span>
                  <span className="text-xs font-bold text-[#D89A18]">All Age Groups</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* ================= 3. FEATURED ACHIEVEMENTS CAROUSEL ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2] relative">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                CELEBRATING EXCELLENCE
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Featured <span className="text-[#D89A18] italic font-serif">Achievements</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                Celebrating the dedication and success of our students.
              </p>
            </div>

            <Link to="/achievements">
              <Button variant="primary" size="sm" className="bg-[#071A3A] text-white hover:bg-[#102C59] rounded-full px-5 py-2 text-xs font-bold shadow-sm">
                View All Achievements →
              </Button>
            </Link>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative">
            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevCarousel}
              aria-label="Previous Achievement"
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white text-[#071A3A] shadow-md border border-[#F5EFE2] flex items-center justify-center hover:bg-[#FCFAF5] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCarousel}
              aria-label="Next Achievement"
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white text-[#071A3A] shadow-md border border-[#F5EFE2] flex items-center justify-center hover:bg-[#FCFAF5] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 5 Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {featuredAchievements.map((item) => (
                <Card key={item.id} variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col justify-between">
                  <div className="relative">
                    <CardImage
                      src={item.image}
                      alt={item.name}
                      aspectRatio="aspect-[4/3]"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D89A18] text-[#071A3A] shadow-2xs">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#071A3A] truncate mb-0.5">
                        {item.name}
                      </h3>
                      <div className="text-[11px] font-semibold text-[#D89A18] truncate mb-0.5">
                        {item.category}
                      </div>
                      <div className="text-[10px] text-[#647084] leading-tight line-clamp-2 mb-3">
                        {item.competition}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F5EFE2] flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#071A3A] flex items-center gap-1">
                        🏆 {item.result}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-6">
              {featuredAchievements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === carouselIndex ? 'w-5 bg-[#D89A18]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. ACHIEVEMENT HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                OUR IMPACT
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Achievement <span className="text-[#D89A18] italic font-serif">Highlights</span>
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(['State Level', 'National Level', 'International', 'Team Events'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer border ${
                    activeTab === tab
                      ? 'bg-[#D89A18] text-[#071A3A] border-[#D89A18] shadow-2xs'
                      : 'bg-white text-[#647084] border-[#F5EFE2] hover:text-[#071A3A]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Highlight Cards Grid */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-black text-[#071A3A] block">25+</span>
                <span className="text-xs font-bold text-[#647084]">State Level Champions</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-black text-[#071A3A] block">40+</span>
                <span className="text-xs font-bold text-[#647084]">National Level Medals</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-black text-[#071A3A] block">5+</span>
                <span className="text-xs font-bold text-[#647084]">International Representations</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-black text-[#071A3A] block">10+</span>
                <span className="text-xs font-bold text-[#647084]">Team Championships</span>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 5. CINEMATIC ACHIEVEMENT BANNER ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess Academy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Student Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/20 shadow-2xl bg-gray-900">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Student playing chess"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-4xl text-[#F5C542] font-serif leading-none font-bold block mb-1">“</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Small Moves <span className="text-[#F5C542] italic font-serif">Big Victories</span>
              </h2>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed mb-6 font-sans">
                Every tournament, every lesson and every challenge is another step toward becoming a stronger player and a more confident thinker.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D89A18]/20 flex items-center justify-center text-[#F5C542]">
                  <ChessIcon type="knight" className="w-5 h-5 text-[#F5C542]" />
                </div>
                <span className="text-xs font-bold text-[#F5C542] uppercase tracking-wider">
                  Velocity Champions Squad
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>



      {/* ================= 6. STUDENT SUCCESS STORIES ================= */}
      <section id="success-stories" className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                BEYOND THE TROPHIES
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Student <span className="text-[#D89A18] italic font-serif">Success Stories</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                The real achievement is the growth behind every result.
              </p>
            </div>

            <Link to="/contact">
              <Button variant="secondary" size="sm" className="bg-white border-[#F5EFE2] text-[#071A3A]">
                View All Stories →
              </Button>
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#F5EFE2] bg-gray-100">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-2xl text-[#D89A18] font-serif font-bold leading-none">“</span>
                  </div>

                  <p className="text-xs text-[#647084] leading-relaxed italic mb-4 font-sans">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-sm text-[#071A3A] block">{story.name}</span>
                    <span className="text-[11px] font-semibold text-[#D89A18]">{story.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 7. FINAL COMPACT CTA ================= */}
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
                START YOUR JOURNEY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                Your Next Achievement <span className="text-[#F5C542] italic font-serif">Starts With Your Next Move.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Start your chess journey with Velocity Chess Academy.
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

export default Achievements;
