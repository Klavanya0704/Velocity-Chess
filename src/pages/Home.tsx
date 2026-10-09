import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Card,
  CardImage,
  CardContent,
  GlassCard,
  Badge,
  ChessIcon,
  ThinkScriptText,
  AnimatedHeroEnvironment,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import {
  Play,
  Users,
  Trophy,
  Award,
  BarChart3,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Brain,
  TrendingUp,
  UserCheck,
  BookOpen,
  ArrowRight,
  X,
  ShieldCheck,
  Sparkles,
  BookOpenCheck,
  HelpCircle,
  FileText,
  Layers,
  GraduationCap,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { programsData } from '../data/programs';
import { eventsData } from '../data/events';
import { achievementsData } from '../data/achievements';
import { galleryData } from '../data/gallery';

const achievementSlides = [
  {
    id: 1,
    title: 'State Champion 2025',
    studentName: 'Aditya Varma',
    category: 'U-12 Category',
    competition: 'Andhra Pradesh State Chess Championship',
    badge: 'Winner',
    image: '/assets/images/achievements_mockup.jpg',
  },
  {
    id: 2,
    title: 'Team Championship',
    studentName: 'Sahithi Reddy',
    category: 'Inter-School Tournament',
    competition: 'AP State Interschool Cup',
    badge: 'Overall Champions',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 3,
    title: 'National Selection',
    studentName: 'Rohan Prakash',
    category: 'National Level',
    competition: 'National Level Championship',
    badge: 'Selected',
    image: '/assets/images/hero_photo.jpg',
  },
  {
    id: 4,
    title: '10+ Medals This Year',
    studentName: 'Velocity Chess Squad',
    category: 'District & State Level',
    competition: 'Multiple Tournaments 2025',
    badge: 'Multiple Medals',
    image: '/assets/images/programs_mockup.jpg',
  },
];

const courseCategories = [
  {
    id: 'beginner-course',
    title: 'Beginner Course',
    level: 'Beginner',
    age: 'Age: 5+ Years',
    description: 'Learn the fundamentals and build strong chess habits.',
    image: '/assets/images/programs_mockup.jpg',
  },
  {
    id: 'intermediate-course',
    title: 'Intermediate Course',
    level: 'Intermediate',
    age: 'Age: 8+ Years',
    description: 'Strengthen tactical and positional understanding.',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 'advanced-course',
    title: 'Advanced Course',
    level: 'Advanced',
    age: 'Age: 12+ Years',
    description: 'Prepare for serious competitive chess.',
    image: '/assets/images/hero_photo.jpg',
  },
  {
    id: 'competitive-course',
    title: 'Competitive Training',
    level: 'Competitive',
    age: 'All Age Groups',
    description: 'Tournament-focused training and performance improvement.',
    image: '/assets/images/achievements_mockup.jpg',
  },
];

const resourceItems = [
  {
    id: 'r1',
    title: 'Chess Articles',
    icon: FileText,
    description: 'Improve your chess understanding.',
  },
  {
    id: 'r2',
    title: 'Study Materials',
    icon: BookOpenCheck,
    description: 'Access curated resources and PDFs.',
  },
  {
    id: 'r3',
    title: 'Tactical Puzzles',
    icon: Sparkles,
    description: 'Test your calculation and tactical skills.',
  },
  {
    id: 'r4',
    title: 'Parent Guide',
    icon: HelpCircle,
    description: 'Helpful guidance for supporting young players.',
  },
];

const whyChooseUsBenefits = [
  {
    title: 'Expert Guidance',
    desc: 'Learn from experienced title-holders',
    icon: GraduationCap,
  },
  {
    title: 'Structured Curriculum',
    desc: 'Well-designed learning paths',
    icon: Layers,
  },
  {
    title: 'Interactive Learning',
    desc: 'Engaging and practical training',
    icon: Brain,
  },
  {
    title: 'Regular Assessments',
    desc: 'Track progress and improve',
    icon: BarChart3,
  },
  {
    title: 'Tournament Exposure',
    desc: 'Real competition experience',
    icon: Trophy,
  },
  {
    title: 'Personalized Attention',
    desc: 'Focused guidance for every student',
    icon: ShieldCheck,
  },
];

export const Home: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievementSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievementSlides.length) % achievementSlides.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Velocity Chess Academy | Every Move Builds a Brighter Tomorrow" />

      {/* ================= 1. CINEMATIC HERO ================= */}
      <section className="relative pt-20 pb-4 lg:pt-24 lg:pb-6 min-h-[850px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#FCFAF5] isolate w-full">
        {/* Clean Photography Background Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Velocity Chess Academy Environment"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          {/* Subtle Left Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 to-transparent w-full lg:w-[48%] pointer-events-none z-1" />
        </div>

        {/* Photorealistic Animated Chess Piece Foreground */}
        <AnimatedHeroEnvironment />

        <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center my-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-full">
            {/* Left Column: Hero Typography & Text Block */}
            <div className="lg:col-span-5 flex flex-col justify-center min-w-0 max-w-full">
              {/* Tagline Badge */}
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-2xs max-w-full">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#1E293B] truncate">
                    DISCIPLINE • STRATEGY • CHARACTER • A BRIGHTER INDIA
                  </span>
                </div>
              </FadeIn>

              {/* Main Headline & Cursive Accent */}
              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-[1.12]">
                  Every Move Builds a
                </h1>
                <div className="relative inline-block mb-3">
                  <span className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#D89A18] drop-shadow-2xs block">
                    Brighter Tomorrow
                  </span>
                  <svg viewBox="0 0 260 16" fill="none" className="w-full h-3.5 text-[#D89A18] -mt-1 opacity-90">
                    <path d="M4 12 Q 130 2 256 10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#1E293B] font-semibold text-base sm:text-lg max-w-lg leading-relaxed mb-6 font-sans">
                  Nurturing confident, creative and strategic thinkers through the power of chess.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                  <Link to="/programs">
                    <Button variant="primary" size="lg" className="bg-[#071A3A] text-white rounded-full px-6 py-3.5 font-bold shadow-md hover:bg-[#102C59] flex items-center gap-2">
                      <span>Explore Our Programs</span>
                      <span>→</span>
                    </Button>
                  </Link>

                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="bg-white/90 backdrop-blur-sm text-[#071A3A] rounded-full px-6 py-3.5 font-bold border border-white/90 shadow-sm flex items-center gap-2.5 hover:bg-white transition-all cursor-pointer"
                  >
                    <div className="w-7.5 h-7.5 rounded-full bg-[#071A3A] text-white flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <span>Watch Our Story</span>
                  </button>
                </div>
              </FadeIn>

              {/* Feature Items Bar */}
              <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-2.5 px-3.5 py-2.5 rounded-2xl sm:rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-sm w-full max-w-full sm:max-w-2xl text-[11px] sm:text-xs font-semibold text-[#1E293B]">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF6E2] text-[#D97706] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                      <Brain className="w-3.5 h-3.5" />
                    </div>
                    <span>Builds Focus</span>
                  </div>

                  <div className="w-px h-5 bg-gray-300/60 shrink-0 hidden sm:block" />

                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF6E2] text-[#D97706] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span>Enhances Decision Making</span>
                  </div>

                  <div className="w-px h-5 bg-gray-300/60 shrink-0 hidden sm:block" />

                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF6E2] text-[#D97706] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <span>Develops Confidence</span>
                  </div>

                  <div className="w-px h-5 bg-gray-300/60 shrink-0 hidden sm:block" />

                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-[#FDF6E2] text-[#D97706] border border-[#F5EFE2] flex items-center justify-center shrink-0">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <span>Prepares for a Brighter Future</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Center & Right Area: Middle Watermark Text + Our Achievements Glass Card */}
            <div className="lg:col-span-7 relative flex items-center justify-between min-h-[300px] lg:min-h-[400px]">
              {/* Middle Watermark Text in stylized cursive script */}
              <div className="absolute top-8 left-0 sm:left-4 lg:left-8 z-10 hidden sm:block pointer-events-none">
                <ThinkScriptText />
              </div>

              {/* Vertical Glassmorphism "Our Achievements" Carousel Card */}
              <div className="w-full sm:w-[340px] ml-auto lg:-mr-2 z-20">
                <div className="bg-white/85 backdrop-blur-lg rounded-3xl p-4 border border-white/90 shadow-xl flex flex-col gap-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#F5EFE2]">
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-[#D97706]" />
                      <span className="font-serif font-bold text-xs sm:text-sm text-[#0B1528]">
                        Our Achievements
                      </span>
                    </div>
                    <Link
                      to="/achievements"
                      className="text-[10px] font-bold text-[#0B1528] hover:text-[#D97706] flex items-center gap-1 bg-[#FDF6E2] px-2.5 py-1 rounded-full transition-colors border border-[#F5EFE2]"
                    >
                      View All →
                    </Link>
                  </div>

                  {/* Active Slide Content */}
                  {(() => {
                    const slide = achievementSlides[currentSlide];
                    return (
                      <div className="flex flex-col gap-2.5">
                        {/* Slide Text Details */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-xs sm:text-sm text-[#0B1528] truncate leading-snug">
                              {slide.title}
                            </span>
                            <span className="text-[11px] font-semibold text-[#D97706] truncate">
                              {slide.studentName} • <span className="text-gray-500 font-normal">{slide.category}</span>
                            </span>
                            <span className="text-[10px] text-[#647084] truncate mt-0.5">
                              {slide.competition}
                            </span>
                          </div>
                          <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20">
                            {slide.badge}
                          </span>
                        </div>

                        {/* Large Player Image Container */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#F5EFE2] shadow-inner bg-gray-100 group">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Carousel Navigation Arrows Overlay */}
                          <button
                            onClick={prevSlide}
                            aria-label="Previous Achievement"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#0B1528] flex items-center justify-center backdrop-blur-sm shadow-md transition-all cursor-pointer border border-white/90"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextSlide}
                            aria-label="Next Achievement"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#0B1528] flex items-center justify-center backdrop-blur-sm shadow-md transition-all cursor-pointer border border-white/90"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Carousel Dot Indicators */}
                        <div className="flex items-center justify-center gap-1.5 pt-1">
                          {achievementSlides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentSlide(idx)}
                              aria-label={`Go to slide ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                idx === currentSlide ? 'w-5 bg-[#D97706]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* ================= 2. STATISTICS BAR ================= */}
        <Container size="wide" className="relative z-10 pb-2">
          <FadeIn direction="up">
            <div className="bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-full p-3.5 sm:p-4 border border-white/90 shadow-lg mx-auto w-full">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center">
                <div className="flex items-center gap-2.5 p-1 pr-3 border-r border-gray-300/60">
                  <div className="w-9 h-9 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D97706] flex items-center justify-center shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl sm:text-2xl font-black text-[#0B1528] leading-none">500+</span>
                    <span className="text-[11px] text-[#647084] font-medium mt-0.5">Students Trained</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-1 pr-3 border-r border-gray-300/60">
                  <div className="w-9 h-9 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D97706] flex items-center justify-center shrink-0">
                    <Trophy className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl sm:text-2xl font-black text-[#0B1528] leading-none">100+</span>
                    <span className="text-[11px] text-[#647084] font-medium mt-0.5">Tournaments Participated</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-1 pr-3 border-r border-gray-300/60">
                  <div className="w-9 h-9 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D97706] flex items-center justify-center shrink-0">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl sm:text-2xl font-black text-[#0B1528] leading-none">50+</span>
                    <span className="text-[11px] text-[#647084] font-medium mt-0.5">Medals Won</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-1 pr-3 md:border-r border-gray-300/60">
                  <div className="w-9 h-9 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D97706] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl sm:text-2xl font-black text-[#0B1528] leading-none">10+</span>
                    <span className="text-[11px] text-[#647084] font-medium mt-0.5">Years of Excellence</span>
                  </div>
                </div>

                {/* Right Side Quote */}
                <div className="col-span-2 md:col-span-1 border-t md:border-t-0 pt-2 md:pt-0 pl-1 md:pl-2 flex items-center gap-1">
                  <span className="text-xl text-[#D97706] font-serif leading-none font-bold">“</span>
                  <p className="font-serif italic text-xs sm:text-sm font-bold text-[#1E293B] leading-snug">
                    Chess teaches you to think ahead in life.
                  </p>
                  <span className="text-xl text-[#D97706] font-serif leading-none font-bold">”</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>



      {/* ================= 3. WHY CHESS MATTERS ================= */}
      <section className="py-14 bg-white border-b border-[#F5EFE2] relative overflow-hidden">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                  WHY CHESS MATTERS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                  Small Moves. Bigger Possibilities.
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <span className="font-serif italic text-sm text-[#D89A18] font-bold block">
                  A stronger mind for a brighter India.
                </span>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl font-black text-[#D89A18]/50 group-hover:text-[#D89A18] transition-colors">
                  01
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                Builds Focus
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Improves concentration and attention span.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl font-black text-[#D89A18]/50 group-hover:text-[#D89A18] transition-colors">
                  02
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                Enhances Decision Making
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Helps in critical thinking and better choices.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl font-black text-[#D89A18]/50 group-hover:text-[#D89A18] transition-colors">
                  03
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                Develops Confidence
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Builds self-belief and resilience.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl font-black text-[#D89A18]/50 group-hover:text-[#D89A18] transition-colors">
                  04
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                Builds Strategic Thinking
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Prepares for real-life challenges.
              </p>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 4. FOUNDER / COACH PREVIEW ================= */}
      <section className="py-16 bg-[#FCFAF5]">
        <Container size="wide">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F5EFE2] shadow-md max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Portrait Frame */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <div className="relative rounded-full aspect-square overflow-hidden border-4 border-[#D89A18] shadow-xl bg-gray-100">
                    <img
                      src="/assets/images/hero_photo.jpg"
                      alt="IM Krishna Teja"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#071A3A] text-white px-3 py-1.5 rounded-full border-2 border-[#D89A18] text-[10px] font-bold flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 text-[#F5C542] fill-current" />
                    <span>International Master</span>
                  </div>
                  <div className="absolute top-2 left-0 font-serif italic text-xs text-[#071A3A] font-bold bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#F5EFE2]">
                    IM Krishna Teja
                  </div>
                </div>
              </div>

              {/* Center Text Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                  FOUNDER & CHIEF COACH
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-[#071A3A] mb-1">
                  IM Krishna Teja
                </h2>
                <div className="text-xs font-bold text-[#D89A18] uppercase tracking-wider mb-4">
                  International Master from India | FIDE Rating: 2384
                </div>

                <p className="text-xs text-[#647084] leading-relaxed mb-6 font-sans">
                  My name is Krishna Teja, an International Master from India, rated 2384 with one GM norm and a holder of several National and International level medals. I have been playing chess at a professional level for more than 10 years. I am passionate about sharing my experience and lessons with young minds, and helping them grow through structured training, practical guidance and a deep understanding of the game.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/about">
                    <Button variant="primary" size="md" className="bg-[#071A3A] text-white rounded-full px-6 py-2.5 font-bold shadow-sm hover:bg-[#102C59] inline-flex items-center gap-2">
                      <span>Read More</span>
                      <span>→</span>
                    </Button>
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="bg-[#FCFAF5] text-[#071A3A] rounded-full px-5 py-2.5 text-xs font-bold border border-[#F5EFE2] flex items-center gap-2 hover:bg-white transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#D89A18]" />
                    <span>Watch My Story</span>
                  </button>
                </div>
              </div>

              {/* Right Career Highlights Card */}
              <div className="lg:col-span-3">
                <div className="bg-[#FCFAF5] rounded-2xl p-4 border border-[#F5EFE2] shadow-2xs flex flex-col gap-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#F5EFE2]">
                    <Trophy className="w-4 h-4 text-[#D89A18]" />
                    <span className="font-serif font-bold text-xs text-[#071A3A]">
                      Career Highlights
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 text-xs">
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">FIDE Rating</div>
                      <div className="font-serif font-extrabold text-sm text-[#071A3A]">2384</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">GM Norms</div>
                      <div className="font-serif font-bold text-xs text-[#D89A18]">1 Norm</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">National & International Level Medals</div>
                      <div className="font-serif font-bold text-xs text-[#071A3A]">Multiple</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">10+ Years</div>
                      <div className="text-[11px] text-[#647084]">Professional Playing Experience</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">Best Wins</div>
                      <div className="text-[10px] text-[#071A3A] font-medium leading-tight">
                        Nihal Sarin, Vincent Keymer, Alexander Beliavsky, Milos Perunovic
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 5. PROGRAMS PREVIEW ================= */}
      <section className="py-16 bg-white border-y border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                CHESS FOR EVERY JOURNEY
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Our <span className="text-[#D89A18] italic font-serif">Programs</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                Choose the right program based on your age, level and goals.
              </p>
            </div>
            <Link to="/programs">
              <Button variant="secondary" size="sm" className="bg-[#FCFAF5] border-[#F5EFE2] text-[#071A3A]">
                View All Programs →
              </Button>
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.map((prog) => (
              <Card key={prog.id} variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col">
                <CardImage
                  src="/assets/images/programs_mockup.jpg"
                  alt={prog.title}
                  aspectRatio="aspect-[16/10]"
                />
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#D89A18]/20 flex items-center justify-center text-[#D89A18] shrink-0">
                        <ChessIcon type={prog.icon} className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#071A3A]">
                        {prog.title}
                      </h3>
                    </div>
                    <ul className="space-y-1 mb-4">
                      {prog.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#647084]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                    <Badge variant="cream">{prog.ageGroup}</Badge>
                    <Link to="/programs">
                      <button aria-label="View Program" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 6. COURSES PREVIEW ================= */}
      <section className="py-16 bg-[#FCFAF5]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                FIND YOUR PERFECT PATH
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Our <span className="text-[#D89A18] italic font-serif">Courses</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                From fundamentals to advanced strategies, we have the right course for you.
              </p>
            </div>
            <Link to="/courses">
              <Button variant="secondary" size="sm" className="bg-white border-[#F5EFE2] text-[#071A3A]">
                View All Courses →
              </Button>
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((course) => (
              <Card key={course.id} variant="interactive" className="bg-white border-[#F5EFE2] flex flex-col">
                <CardImage
                  src={course.image}
                  alt={course.title}
                  aspectRatio="aspect-[16/10]"
                />
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-base font-bold text-[#071A3A]">
                        {course.title}
                      </h3>
                      <div className="w-6 h-6 rounded-full bg-[#D89A18]/20 text-[#D89A18] flex items-center justify-center shrink-0">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-xs text-[#647084] leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                    <Badge variant="gold">{course.age}</Badge>
                    <Link to="/courses">
                      <button aria-label="Explore Course" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 7. ACHIEVEMENTS & EVENTS SIDE BY SIDE PREVIEW ================= */}
      <section className="py-16 bg-white border-y border-[#F5EFE2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Cols: Student Success (Achievements) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-0.5 block">
                    STUDENT SUCCESS
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                    Small Moves. Big Victories.
                  </h2>
                </div>
                <Link to="/achievements">
                  <Button variant="secondary" size="sm" className="bg-[#FCFAF5] border-[#F5EFE2]">
                    View All Achievements →
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievementsData.slice(0, 4).map((item, idx) => {
                  const imageMap = [
                    '/assets/images/achievements_mockup.jpg',
                    '/assets/images/home_mockup.jpg',
                    '/assets/images/hero_photo.jpg',
                    '/assets/images/programs_mockup.jpg',
                  ];
                  return (
                    <Card key={item.id} variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col">
                      <CardImage
                        src={imageMap[idx % imageMap.length]}
                        alt={item.title}
                        aspectRatio="aspect-[16/10]"
                      />
                      <CardContent className="p-3.5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <Badge variant="gold">{item.badge || 'Winner'}</Badge>
                            <span className="text-[10px] font-bold text-[#647084]">{item.year}</span>
                          </div>
                          <h3 className="font-serif text-sm font-bold text-[#071A3A] truncate">
                            {item.title}
                          </h3>
                          <div className="text-[11px] font-semibold text-[#D89A18] truncate">
                            {item.studentName}
                          </div>
                          <div className="text-[10px] text-[#647084] truncate">
                            {item.category}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Cols: Upcoming Events */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-0.5 block">
                    UPCOMING EVENTS
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                    Be Part of The Action
                  </h2>
                </div>
                <Link to="/events">
                  <Button variant="ghost" size="sm">
                    View All Events →
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {eventsData.slice(0, 4).map((ev) => (
                  <GlassCard key={ev.id} variant="light" className="p-3 bg-white border-[#F5EFE2] hover:border-[#D89A18]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-[#071A3A] text-white shrink-0">
                        <span className="font-serif text-sm font-bold leading-none text-[#F5C542]">
                          {ev.day}
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-wider text-white/80 mt-0.5">
                          {ev.month}
                        </span>
                      </div>

                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-xs text-[#071A3A] truncate">
                          {ev.title}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-[#647084] mt-0.5">
                          <MapPin className="w-3 h-3 text-[#D89A18] shrink-0" />
                          <span className="truncate">{ev.location}</span>
                        </div>
                      </div>

                      <Link to="/events" className="shrink-0">
                        <button className="px-2.5 py-1 rounded-full bg-[#D89A18]/10 text-[#D89A18] hover:bg-[#D89A18] hover:text-[#071A3A] text-[10px] font-bold transition-colors cursor-pointer border border-[#D89A18]/20">
                          Register Now
                        </button>
                      </Link>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 8. GALLERY & RESOURCES SIDE BY SIDE PREVIEW ================= */}
      <section className="py-16 bg-[#FCFAF5]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Cols: Life at Velocity (Gallery Preview) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-0.5 block">
                    LIFE AT VELOCITY
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                    A Glimpse of Our Journey
                  </h2>
                </div>
                <Link to="/gallery">
                  <Button variant="secondary" size="sm" className="bg-white border-[#F5EFE2]">
                    Explore Gallery →
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {galleryData.slice(0, 6).map((item, idx) => {
                  const imageMap = [
                    '/assets/images/home_mockup.jpg',
                    '/assets/images/hero_photo.jpg',
                    '/assets/images/achievements_mockup.jpg',
                    '/assets/images/programs_mockup.jpg',
                    '/assets/images/hero_background.png',
                    '/assets/images/home_mockup.jpg',
                  ];
                  return (
                    <Link
                      key={item.id}
                      to="/gallery"
                      className="relative group rounded-2xl overflow-hidden aspect-square border border-[#F5EFE2] shadow-2xs block bg-gray-100"
                    >
                      <img
                        src={imageMap[idx % imageMap.length]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                      <div className="absolute bottom-2 left-2 right-2 text-white">
                        <h3 className="font-serif font-bold text-[11px] text-white truncate">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Cols: Learn Beyond the Board (Resources Preview) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-0.5 block">
                    LEARN & GROW
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                    Learn Beyond the Board
                  </h2>
                </div>
                <Link to="/resources">
                  <Button variant="ghost" size="sm">
                    Explore Resources →
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resourceItems.map((res) => {
                  const IconComp = res.icon;
                  return (
                    <div key={res.id} className="bg-white p-4 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-2.5">
                          <IconComp className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="font-serif text-sm font-bold text-[#071A3A] mb-1">
                          {res.title}
                        </h3>
                        <p className="text-[11px] text-[#647084] leading-relaxed mb-3">
                          {res.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#F5EFE2] flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#D89A18]">Free PDF</span>
                        <Link to="/resources">
                          <button aria-label="Resource Details" className="w-6 h-6 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 9. WHY CHOOSE US / WHAT WE OFFER ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/assets/images/home_mockup.jpg"
            alt="Chess Background Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C542] mb-1 block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-white">
                What <span className="text-[#F5C542] italic font-serif">The offer</span>
              </h2>
              <p className="text-xs text-white/80 mt-2">
                More than just chess classes — a complete learning ecosystem.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsBenefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 flex items-start gap-4 hover:border-[#F5C542]/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#F5C542]/20 text-[#F5C542] border border-[#F5C542]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 10. FINAL CTA BANNER ================= */}
      <section className="py-16 relative overflow-hidden bg-[#071A3A] text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess Academy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content & Buttons */}
            <div className="lg:col-span-8 flex flex-col">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Chess for Stronger Minds <span className="text-[#F5C542]">and a</span> <span className="text-[#D89A18] italic font-serif">Brighter India</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed mb-6">
                Give your child the confidence to think ahead, make better decisions and grow through chess.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/programs">
                  <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] rounded-full px-6 py-3.5 font-bold hover:bg-[#F5C542]">
                    Explore Our Programs →
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 rounded-full px-6 py-3.5 font-bold hover:bg-white/20">
                    Contact Us →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Quote Card */}
            <div className="lg:col-span-4 flex justify-end">
              <GlassCard variant="dark" className="p-6 w-full border-[#D89A18]/40 flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-2xl">
                <span className="text-2xl text-[#F5C542] font-serif leading-none font-bold">“</span>
                <p className="font-serif italic text-sm text-white font-bold leading-relaxed">
                  A small move today can create a brighter tomorrow.
                </p>
                <span className="text-xs text-[#F5C542] font-semibold tracking-wide mt-2">
                  — Velocity Chess Academy
                </span>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Story Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full flex items-center justify-center bg-slate-900 text-white p-8 text-center">
              <div>
                <Trophy className="w-16 h-16 text-[#F5C542] mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2">Velocity Chess Academy Story</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  Experience how our coaches nurture strategic thinkers across India. Contact our desk for full academy documentary video.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
