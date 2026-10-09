import React from 'react';
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
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import {
  GraduationCap,
  BookOpen,
  Laptop,
  BarChart3,
  Trophy,
  UserCheck,
  CheckCircle2,
  Download,
  Users,
  Brain,
  ArrowRight,
  Gamepad2,
  Database,
  Award,
} from 'lucide-react';

const serviceItems = [
  {
    id: 's1',
    title: 'Classroom Training',
    icon: null,
    chessType: 'knight' as const,
    description: 'Regular offline classes at our academy with expert coaches.',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 's2',
    title: 'Online Classes',
    icon: Laptop,
    description: 'Learn from anywhere with live interactive online sessions.',
    image: '/assets/images/hero_photo.jpg',
  },
  {
    id: 's3',
    title: 'Quiz & Studies',
    icon: BookOpen,
    description: 'Interactive quizzes, puzzles and MCQs to improve understanding.',
    image: '/assets/images/programs_mockup.jpg',
  },
  {
    id: 's4',
    title: 'Game Area',
    icon: Gamepad2,
    description: 'Play against academy mates and improve through practice games.',
    image: '/assets/images/achievements_mockup.jpg',
  },
  {
    id: 's5',
    title: 'Database Access',
    icon: Database,
    description: 'Access a rich collection of master games, openings and study materials.',
    image: '/assets/images/hero_background.png',
  },
  {
    id: 's6',
    title: 'Tournaments & Simul',
    icon: Trophy,
    description: 'Participate in internal, state and national level tournaments and simul.',
    image: '/assets/images/home_mockup.jpg',
  },
  {
    id: 's7',
    title: 'Performance Reports',
    icon: BarChart3,
    description: 'Track your progress with detailed analysis and regular feedback.',
    image: '/assets/images/hero_photo.jpg',
  },
  {
    id: 's8',
    title: 'Personal Coaching',
    icon: UserCheck,
    description: 'One-on-one coaching for focused growth and special goals.',
    image: '/assets/images/programs_mockup.jpg',
  },
];

export const Programs: React.FC = () => {
  const handleDownloadBrochure = () => {
    alert("Velocity Chess Academy Brochure PDF download starting...");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Our Programs & Services | Velocity Chess Academy" />

      {/* ================= 1. PROGRAMS HERO SECTION ================= */}
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
                    LEARN • PRACTICE • COMPETE • GROW
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-2">
                  Our <span className="text-[#D89A18] italic font-serif">Programs</span>
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-[#071A3A] mb-3">
                  Structured learning paths for every age group and skill level.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-lg leading-relaxed mb-6 font-sans">
                  From your first move to national and international competitions, our carefully designed programs help you grow step by step with expert guidance.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-3.5 shadow-md flex items-center gap-2">
                      <span>Explore Programs</span>
                      <span>→</span>
                    </Button>
                  </Link>

                  <button
                    onClick={handleDownloadBrochure}
                    className="bg-white text-[#071A3A] border border-[#071A3A]/20 hover:border-[#D89A18] font-bold rounded-full px-6 py-3.5 shadow-2xs inline-flex items-center gap-2 text-xs transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#D89A18]" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Center Watermark & Right Hero Image + Highlights Card */}
            <div className="lg:col-span-6 relative flex items-center justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute top-4 left-0 z-10 hidden sm:block pointer-events-none opacity-85">
                <ThinkScriptText />
              </div>

              {/* Right Image & Floating Highlights Card */}
              <div className="relative flex items-center gap-4 w-full justify-end">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[360px] border border-[#F5EFE2] shadow-xl bg-gray-100">
                  <img
                    src="/assets/images/hero_photo.jpg"
                    alt="Velocity Chess Student"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Benefits List Card */}
                <div className="bg-white/90 backdrop-blur-md border border-white/90 shadow-xl rounded-2xl p-4 w-[210px] hidden sm:flex flex-col gap-2.5 shrink-0 z-20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#071A3A]">
                    <div className="w-6 h-6 rounded-full bg-[#FDF6E2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <span>Beginners Welcome</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#071A3A]">
                    <div className="w-6 h-6 rounded-full bg-[#FDF6E2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <span>Expert Coaches</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#071A3A]">
                    <div className="w-6 h-6 rounded-full bg-[#FDF6E2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <span>Structured Curriculum</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#071A3A]">
                    <div className="w-6 h-6 rounded-full bg-[#FDF6E2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <span>Regular Assessments</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#071A3A]">
                    <div className="w-6 h-6 rounded-full bg-[#FDF6E2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                    <span>Tournament Exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. OUR PROGRAMS SECTION ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
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
            {/* Card 1: Beginner */}
            <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col relative">
              <div className="relative">
                <CardImage
                  src="/assets/images/programs_mockup.jpg"
                  alt="Beginner Program"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shadow-md border-2 border-white">
                  <ChessIcon type="knight" className="w-5 h-5 text-[#071A3A]" />
                </div>
              </div>
              <CardContent className="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1.5">
                    Beginner Program
                  </h3>
                  <p className="text-xs text-[#647084] leading-relaxed mb-3">
                    Learn the fundamentals of chess in a fun and engaging way. Perfect for first-time learners.
                  </p>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Basic rules and piece movements</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Simple strategies and tactics</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Interactive practice sessions</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                  <Badge variant="gold">Age: 5+ Years</Badge>
                  <Link to="/contact">
                    <button aria-label="Enroll Beginner" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Intermediate */}
            <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col relative">
              <div className="relative">
                <CardImage
                  src="/assets/images/home_mockup.jpg"
                  alt="Intermediate Program"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shadow-md border-2 border-white">
                  <BookOpen className="w-4.5 h-4.5 text-[#071A3A]" />
                </div>
              </div>
              <CardContent className="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1.5">
                    Intermediate Program
                  </h3>
                  <p className="text-xs text-[#647084] leading-relaxed mb-3">
                    Strengthen your skills and improve your game with structured training.
                  </p>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Advanced strategies and tactics</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Endgame techniques</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Regular practice and assessments</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                  <Badge variant="gold">Age: 8+ Years</Badge>
                  <Link to="/contact">
                    <button aria-label="Enroll Intermediate" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Advanced Training */}
            <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col relative">
              <div className="relative">
                <CardImage
                  src="/assets/images/hero_photo.jpg"
                  alt="Advanced Training"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shadow-md border-2 border-white">
                  <ChessIcon type="crown" className="w-5 h-5 text-[#071A3A]" />
                </div>
              </div>
              <CardContent className="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1.5">
                    Advanced Training
                  </h3>
                  <p className="text-xs text-[#647084] leading-relaxed mb-3">
                    For serious players aiming for state, national and international competitions.
                  </p>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Deep positional understanding</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Tournament preparation</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Personalized coaching plans</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                  <Badge variant="gold">Age: 12+ Years</Badge>
                  <Link to="/contact">
                    <button aria-label="Enroll Advanced" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Weekend & Group Coaching */}
            <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col relative">
              <div className="relative">
                <CardImage
                  src="/assets/images/achievements_mockup.jpg"
                  alt="Weekend & Group Coaching"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shadow-md border-2 border-white">
                  <Users className="w-4.5 h-4.5 text-[#071A3A]" />
                </div>
              </div>
              <CardContent className="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1.5">
                    Weekend & Group Coaching
                  </h3>
                  <p className="text-xs text-[#647084] leading-relaxed mb-3">
                    Flexible batches for school students and beginners of all age groups.
                  </p>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Weekday and weekend batches</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Small batch sizes</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[11px] text-[#647084]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D89A18] shrink-0" />
                      <span>Regular doubt clearing sessions</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#F5EFE2] flex items-center justify-between">
                  <Badge variant="gold">All Age Groups</Badge>
                  <Link to="/contact">
                    <button aria-label="Enroll Weekend" className="w-7 h-7 rounded-full bg-[#F5EFE2] hover:bg-[#071A3A] hover:text-white flex items-center justify-center text-[#071A3A] transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </StaggerContainer>
        </Container>
      </section>



      {/* ================= 3. WHAT WE OFFER BANNER ================= */}
      <section className="py-14 bg-[#FDF6E2]/70 border-b border-[#F5EFE2] relative overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Student Image */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#F5EFE2] shadow-md bg-gray-100">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Student playing chess"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Content & 6 Circle Features */}
            <div className="lg:col-span-7 flex flex-col items-center text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A] mb-2">
                What <span className="text-[#D89A18] italic font-serif">We Offer</span>
              </h2>
              <p className="text-xs text-[#647084] max-w-lg mb-8">
                More than just chess classes — a complete learning ecosystem.
              </p>

              {/* 6 Circular Icons Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Expert Guidance</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Structured Curriculum</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Interactive Learning</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Regular Assessments</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Tournament Exposure</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center mb-2 shadow-sm">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-xs text-[#071A3A] leading-snug">Personalized Attention</span>
                </div>
              </div>
            </div>

            {/* Right Decorative Graphic */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#D89A18]/20 flex items-center justify-center text-[#D89A18]">
                <ChessIcon type="knight" className="w-16 h-16 text-[#D89A18]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. OUR SERVICES SECTION ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                COMPLETE CHESS ECOSYSTEM
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Our <span className="text-[#D89A18] italic font-serif">Services</span>
              </h2>
              <p className="text-xs text-[#647084] mt-1">
                We provide a wide range of services to help students at every stage of their chess journey.
              </p>
            </div>
            <Link to="/programs">
              <Button variant="secondary" size="sm" className="bg-[#FCFAF5] border-[#F5EFE2] text-[#071A3A]">
                View All Services →
              </Button>
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceItems.map((svc) => {
              const IconComp = svc.icon;
              return (
                <Card key={svc.id} variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col relative">
                  <div className="relative">
                    <CardImage
                      src={svc.image}
                      alt={svc.title}
                      aspectRatio="aspect-[16/10]"
                    />
                    <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shadow-md border-2 border-white">
                      {svc.chessType ? (
                        <ChessIcon type={svc.chessType} className="w-5 h-5 text-[#071A3A]" />
                      ) : IconComp ? (
                        <IconComp className="w-4.5 h-4.5 text-[#071A3A]" />
                      ) : null}
                    </div>
                  </div>

                  <CardContent className="p-4 pt-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1.5">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-[#647084] leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 5. FINAL DARK ADVANTAGES SECTION ================= */}
      <section className="py-16 bg-[#071A3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess Academy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C542] mb-1 block">
                OUR ADVANTAGES
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-white">
                Why Students <span className="text-[#F5C542] italic font-serif">Trust Us</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 4 Stat Cards (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F5C542]/20 text-[#F5C542] flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-black text-white leading-none">500+</span>
                <span className="text-[11px] text-white/70 font-medium mt-1">Students Trained</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F5C542]/20 text-[#F5C542] flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-black text-white leading-none">100+</span>
                <span className="text-[11px] text-white/70 font-medium mt-1">Tournaments Participated</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F5C542]/20 text-[#F5C542] flex items-center justify-center mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-black text-white leading-none">50+</span>
                <span className="text-[11px] text-white/70 font-medium mt-1">Medals Won</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F5C542]/20 text-[#F5C542] flex items-center justify-center mb-2">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-black text-white leading-none">10+</span>
                <span className="text-[11px] text-white/70 font-medium mt-1">Years of Excellence</span>
              </div>
            </div>

            {/* Quote Card (4 Cols) */}
            <div className="lg:col-span-4">
              <GlassCard variant="dark" className="p-6 border-[#F5C542]/30 bg-white/10 backdrop-blur-md rounded-2xl relative overflow-hidden">
                <span className="text-3xl text-[#F5C542] font-serif leading-none font-bold block mb-1">“</span>
                <p className="font-serif italic text-sm text-white font-bold leading-relaxed mb-3">
                  Chess builds patience, discipline and the ability to think ahead — skills for life.
                </p>
                <span className="text-xs text-[#F5C542] font-semibold tracking-wide block">
                  — Velocity Chess Academy
                </span>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Programs;
