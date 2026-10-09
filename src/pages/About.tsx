import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  ThinkScriptText,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import {
  Trophy,
  Award,
  Users,
  BarChart3,
  Star,
  Play,
  BookOpen,
  Target,
  CheckCircle2,
  X,
  Brain,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const About: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="About Us | Velocity Chess Academy - Founded by IM Krishna Teja" />

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF5]/95 via-[#FCFAF5]/70 to-transparent w-full lg:w-[55%] pointer-events-none z-1" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="down" delay={0.1}>
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#647084]">
                  <Link to="/" className="hover:text-[#071A3A] transition-colors">Home</Link>
                  <span>&gt;</span>
                  <span className="text-[#D89A18] font-bold">About Us</span>
                </div>
              </FadeIn>

              <FadeIn direction="down" delay={0.15}>
                <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#F5EFE2] shadow-2xs w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#D89A18] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#071A3A] uppercase">
                    OUR STORY • OUR PURPOSE • OUR JOURNEY
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-3">
                  About <span className="text-[#D89A18] italic font-serif">Us</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#1E293B] font-medium text-base sm:text-lg max-w-xl leading-relaxed mb-6 font-sans">
                  A structured chess academy focused on systematic learning, expert guidance and all-round development for students of all ages.
                </p>
              </FadeIn>
            </div>

            {/* Right Hero Image + Floating Statistics Card */}
            <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end justify-center">
              {/* Cursive Think Plan Move Grow Annotation */}
              <div className="absolute -top-6 left-0 z-20 hidden sm:block pointer-events-none opacity-90">
                <ThinkScriptText />
              </div>

              <div className="relative w-full max-w-[420px]">
                {/* Hero Student Photo */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#F5EFE2] shadow-xl bg-gray-100">
                  <img
                    src="/assets/images/hero_photo.jpg"
                    alt="Velocity Chess Student Playing Chess"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Hero Statistics Card */}
                <div className="relative lg:absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-white/90 shadow-xl w-full sm:w-[320px] grid grid-cols-2 gap-3 mt-4 lg:mt-0 z-20">
                  <div className="flex items-center gap-2.5 p-1">
                    <div className="w-8 h-8 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif text-lg font-black text-[#071A3A] leading-none">500+</span>
                      <span className="text-[10px] text-[#647084] font-semibold truncate">Students Trained</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1">
                    <div className="w-8 h-8 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif text-lg font-black text-[#071A3A] leading-none">100+</span>
                      <span className="text-[10px] text-[#647084] font-semibold truncate">Tournaments</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1">
                    <div className="w-8 h-8 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif text-lg font-black text-[#071A3A] leading-none">50+</span>
                      <span className="text-[10px] text-[#647084] font-semibold truncate">Medals Won</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-1">
                    <div className="w-8 h-8 rounded-full bg-[#FDF6E2] border border-[#F5EFE2] text-[#D89A18] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif text-lg font-black text-[#071A3A] leading-none">10+</span>
                      <span className="text-[10px] text-[#647084] font-semibold truncate">Years Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. FOUNDER SECTION (IM KRISHNA TEJA) ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2] relative">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                MEET OUR FOUNDER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
                Founder & Chief Coach
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* LEFT: Portrait & Badge Composition (4 Cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <FadeIn direction="right">
                <div className="relative w-full max-w-[300px]">
                  {/* Outer Framed Card */}
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/4.5] border-4 border-[#D89A18] shadow-2xl bg-gray-100">
                    <img
                      src="/assets/images/hero_photo.jpg"
                      alt="IM Krishna Teja - Founder & Chief Coach"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/60 via-transparent to-transparent" />
                  </div>

                  {/* Top Left Script Annotation */}
                  <div className="absolute -top-3 -left-3 font-serif italic text-sm font-bold text-[#071A3A] bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-[#F5EFE2] shadow-md">
                    IM Krishna Teja
                  </div>

                  {/* Inset Secondary Photo Bottom Left */}
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full border-3 border-white shadow-lg overflow-hidden bg-black">
                    <img
                      src="/assets/images/home_mockup.jpg"
                      alt="IM Krishna Teja Playing Chess"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Right Circular Badge */}
                  <div className="absolute -bottom-3 -right-3 bg-[#071A3A] text-white px-3.5 py-1.5 rounded-full border-2 border-[#D89A18] text-[10px] font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-[#F5C542] fill-current" />
                    <span>INTERNATIONAL MASTER</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* CENTER: Biography & Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn direction="up">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                  MEET OUR FOUNDER
                </span>
                <h3 className="font-serif text-3xl font-black text-[#071A3A] mb-1">
                  IM Krishna Teja
                </h3>
                <div className="text-xs font-bold text-[#D89A18] uppercase tracking-wider mb-4">
                  International Master from India | FIDE Rating: 2384
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#647084] leading-relaxed mb-6 font-sans">
                  <p>
                    "My name is Krishna Teja, an International Master from India, rated 2384 with one GM norm and a holder of several National and International level medals. I have experience of playing chess on a professional level for more than 10 years. I am looking forward to sharing my experience and lessons I’ve acquired from working under many international coaches throughout my career."
                  </p>
                  <p>
                    "I focus on every part of the game starting from openings of your choice/style, Positional, strategic concepts of middlegame and theoretical/practical endgames. I can also analyze your games to help you understand your weaknesses and I will give you homework accordingly. I am open for individual classes, group sessions, online/offline camps and so on."
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/contact">
                    <Button variant="primary" size="md" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-2.5 shadow-sm inline-flex items-center gap-2">
                      <span>Read More</span>
                      <span>→</span>
                    </Button>
                  </Link>

                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="bg-white text-[#071A3A] rounded-full px-5 py-2.5 text-xs font-bold border border-[#071A3A]/20 flex items-center gap-2 hover:border-[#D89A18] transition-all cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#D89A18]" />
                    <span>Watch My Story</span>
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT: Career Highlights Card (3 Cols) */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className="bg-[#FCFAF5] rounded-3xl p-5 border border-[#F5EFE2] shadow-sm flex flex-col gap-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-[#F5EFE2]">
                    <Trophy className="w-4 h-4 text-[#D89A18]" />
                    <span className="font-serif font-bold text-sm text-[#071A3A]">
                      CAREER HIGHLIGHTS
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 text-xs">
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">FIDE Rating</div>
                      <div className="font-serif font-extrabold text-base text-[#D89A18]">2384</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">GM Norms</div>
                      <div className="font-serif font-bold text-xs text-[#071A3A]">1 Norm</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">National & International Medals</div>
                      <div className="font-serif font-bold text-xs text-[#D89A18]">Multiple</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#647084] font-semibold">Professional Playing Experience</div>
                      <div className="text-[11px] font-bold text-[#071A3A]">10+ Years</div>
                    </div>
                    <div className="pt-2 border-t border-[#F5EFE2]">
                      <div className="text-[10px] text-[#647084] font-semibold mb-1">BEST WINS</div>
                      <div className="text-[11px] text-[#071A3A] font-bold leading-snug">
                        Nihal Sarin, Vincent Keymer, Alexander Beliavsky, Mircea Parligras
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>



      {/* ================= 3. COACHING EXPERTISE ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                OUR COACHING EXPERTISE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
                Training That Builds <span className="text-[#D89A18] italic font-serif">Better Thinkers</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  1. Opening Preparation
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Prepare strong openings based on the player's style and strategic preferences.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  2. Middlegame Strategy
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Develop positional and strategic understanding to navigate complex middle games.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  3. Endgame Calculation
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Build practical and theoretical endgame skills to convert advantages into wins.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  4. Game Analysis
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Analyze games to identify strengths and weaknesses and assign targeted homework.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  5. Individual Coaching
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Personalized coaching based on student goals, rating targets, and tournaments.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1.5">
                  6. Group Coaching
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Interactive learning and collaborative practice in small focused batches.
                </p>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 4. OUR PHILOSOPHY & APPROACH ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A] mb-2">
                Our Philosophy & <span className="text-[#D89A18] italic font-serif">Approach</span>
              </h2>
              <p className="text-xs text-[#647084] max-w-xl font-sans">
                A structured learning environment designed to develop strong chess skills and confident thinkers.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                  1. Structured Curriculum
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Systematic learning paths designed for each level from beginner to grandmaster training.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                  2. Individual Attention
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Personal guidance based on every student's unique needs, playing style and strengths.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                  3. Practical Learning
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Learn through real games, interactive puzzles, video analysis and tournament situations.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#071A3A] mb-1">
                  4. All-Round Development
                </h3>
                <p className="text-xs text-[#647084] leading-relaxed">
                  Build confidence, discipline, patience and strategic thinking for life beyond the board.
                </p>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 5. ACADEMY EXPERIENCE SECTION ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Academy Image */}
            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#F5EFE2] shadow-xl bg-gray-100 group">
                  <img
                    src="/assets/images/home_mockup.jpg"
                    alt="Velocity Chess Academy Classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-md">
                    <div className="font-serif font-bold text-xs text-[#071A3A]">
                      State-of-the-Art Training Facilities
                    </div>
                    <div className="text-[10px] text-[#647084]">
                      Interactive demonstration boards, digital clocks, and game databases
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right 6 Cols: The Velocity Approach Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeIn direction="left">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                  THE VELOCITY APPROACH
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A] mb-3 leading-tight">
                  Learn. Think. Improve. Achieve.
                </h2>
                <p className="text-xs sm:text-sm text-[#647084] leading-relaxed mb-6 font-sans">
                  We combine structured chess training with practical experience, regular assessment and personalized guidance to help students progress with confidence.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-bold text-[#071A3A]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18]" />
                    <span>Expert coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18]" />
                    <span>Structured learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18]" />
                    <span>Regular practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18]" />
                    <span>Tournament exposure</span>
                  </div>
                </div>

                <Link to="/programs" className="w-fit">
                  <Button variant="primary" size="md" className="bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] font-bold rounded-full px-6 py-3 shadow-md flex items-center gap-2">
                    <span>Explore Our Programs</span>
                    <span>→</span>
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 6. WHY VELOCITY CHESS ACADEMY ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                WHY VELOCITY CHESS ACADEMY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#071A3A]">
                More Than Chess. <span className="text-[#D89A18] italic font-serif">A Foundation for Life.</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                Focus
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Develop concentration and sustained attention through deep strategic calculations.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                Decision Making
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Learn to evaluate choices and predict consequences before making every move.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                Confidence
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Build confidence and self-belief through structured tournament challenges.
              </p>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#F5EFE2] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FDF6E2] text-[#D89A18] border border-[#F5EFE2] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-1">
                Discipline
              </h3>
              <p className="text-xs text-[#647084] leading-relaxed">
                Develop patience, consistency, sportsmanship and resilience in victory or defeat.
              </p>
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 7. FINAL CINEMATIC CTA ================= */}
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
                JOIN VELOCITY CHESS ACADEMY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                Chess for Stronger Minds and a <span className="text-[#F5C542] italic font-serif">Brighter India</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Give your child the confidence to think ahead, make better decisions and grow through chess.
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
                <h3 className="font-serif text-2xl font-bold mb-2">IM Krishna Teja's Story</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  Discover how IM Krishna Teja built Velocity Chess Academy to train future grandmasters of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
