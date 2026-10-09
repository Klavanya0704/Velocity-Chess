import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Card,
  CardContent,
  Badge,
  ChessIcon,
  ThinkScriptText,
  FadeIn,
  StaggerContainer,
} from '../components';
import { SEO } from '../components/SEO';
import { ArrowRight, Home as HomeIcon, BookOpen, Trophy, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="404 - Page Not Found | Velocity Chess Academy" description="The page you are looking for does not exist. Let's get you back on the right path." />

      {/* ================= 1. CINEMATIC 404 HERO ================= */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#FCFAF5] isolate w-full border-b border-[#F5EFE2]">
        {/* Subtle Photography Background Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <img
            src="/assets/images/hero_background.png"
            alt="Chess board background texture"
            loading="eager"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF5] via-[#FCFAF5]/90 to-transparent w-full lg:w-[60%] pointer-events-none" />
        </div>

        {/* Oversized 404 Watermark Typography */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 font-serif text-[12rem] sm:text-[16rem] lg:text-[22rem] font-black text-[#071A3A]/[0.03] select-none pointer-events-none leading-none z-0">
          404
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#F5EFE2] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#D89A18] shrink-0 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#071A3A]">
                    PAGE NOT FOUND • WRONG MOVE • TRY AGAIN
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-[1.15] mb-4">
                  Looks Like You <br className="hidden sm:inline" />
                  <span className="text-[#D89A18] italic font-serif">Made the Wrong Move.</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-xl leading-relaxed mb-8 font-sans">
                  Even the best chess players make an occasional wrong move. Let's get you back on the right path.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link to="/">
                    <Button
                      variant="gold"
                      size="md"
                      showArrow={true}
                      className="px-6 py-3.5 text-xs sm:text-sm"
                    >
                      Back to Home
                    </Button>
                  </Link>

                  <Link to="/programs">
                    <Button
                      variant="secondary"
                      size="md"
                      showArrow={true}
                      className="px-6 py-3.5 text-xs sm:text-sm"
                    >
                      Explore Programs
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              {/* Chess Message Quote Card */}
              <FadeIn direction="up" delay={0.5}>
                <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#F5EFE2] shadow-sm max-w-md flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D89A18]/15 flex items-center justify-center shrink-0 text-[#D89A18]">
                    <ChessIcon type="knight" className="w-5 h-5 text-[#D89A18]" />
                  </div>
                  <div>
                    <p className="font-serif italic font-bold text-xs sm:text-sm text-[#071A3A]">
                      &ldquo;Every mistake is a lesson. Every move is a chance to improve.&rdquo;
                    </p>
                    <span className="text-[10px] font-bold text-[#D89A18] uppercase tracking-wider block mt-0.5">
                      VELOCITY CHESS ACADEMY PRINCIPLE
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Side Cinematic Chess Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute -top-6 left-0 z-20 hidden sm:block pointer-events-none opacity-90">
                <ThinkScriptText />
              </div>

              {/* Image Container with Cinematic Styling */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[440px] border-2 border-white shadow-2xl bg-white group">
                <img
                  src="/assets/images/home_mockup.jpg"
                  alt="Chess board wrong move illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/80 via-[#071A3A]/30 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#F5EFE2] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071A3A] text-[#D89A18] flex items-center justify-center shrink-0 font-serif font-bold text-xs">
                      404
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D89A18] block">NAVIGATION STATUS</span>
                      <p className="text-xs font-bold text-[#071A3A]">Position Off Board</p>
                    </div>
                  </div>
                  <Badge variant="gold" size="sm">
                    Re-Routing
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. QUICK NAVIGATION (Find Your Way Back) ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
              NAVIGATION ASSISTANT
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
              Find Your Way <span className="text-[#D89A18] italic font-serif">Back</span>
            </h2>
          </div>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Home */}
            <Link to="/" className="group block">
              <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] p-6 h-full flex flex-col justify-between group-hover:border-[#D89A18] transition-all">
                <CardContent className="p-0">
                  <div className="w-10 h-10 rounded-xl bg-[#071A3A] text-white flex items-center justify-center mb-4 group-hover:bg-[#D89A18] group-hover:text-[#071A3A] transition-colors">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-1 group-hover:text-[#D89A18] transition-colors">
                    Home
                  </h3>
                  <p className="text-xs text-[#647084] font-sans">
                    Start your journey
                  </p>
                </CardContent>
                <div className="mt-4 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#071A3A] group-hover:text-[#D89A18] flex items-center justify-between transition-colors">
                  <span>Visit Homepage</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>

            {/* Card 2: Programs */}
            <Link to="/programs" className="group block">
              <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] p-6 h-full flex flex-col justify-between group-hover:border-[#D89A18] transition-all">
                <CardContent className="p-0">
                  <div className="w-10 h-10 rounded-xl bg-[#071A3A] text-white flex items-center justify-center mb-4 group-hover:bg-[#D89A18] group-hover:text-[#071A3A] transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-1 group-hover:text-[#D89A18] transition-colors">
                    Programs
                  </h3>
                  <p className="text-xs text-[#647084] font-sans">
                    Find the right training
                  </p>
                </CardContent>
                <div className="mt-4 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#071A3A] group-hover:text-[#D89A18] flex items-center justify-between transition-colors">
                  <span>Explore Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>

            {/* Card 3: Achievements */}
            <Link to="/achievements" className="group block">
              <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] p-6 h-full flex flex-col justify-between group-hover:border-[#D89A18] transition-all">
                <CardContent className="p-0">
                  <div className="w-10 h-10 rounded-xl bg-[#071A3A] text-white flex items-center justify-center mb-4 group-hover:bg-[#D89A18] group-hover:text-[#071A3A] transition-colors">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-1 group-hover:text-[#D89A18] transition-colors">
                    Achievements
                  </h3>
                  <p className="text-xs text-[#647084] font-sans">
                    See what's possible
                  </p>
                </CardContent>
                <div className="mt-4 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#071A3A] group-hover:text-[#D89A18] flex items-center justify-between transition-colors">
                  <span>View Victories</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>

            {/* Card 4: Contact */}
            <Link to="/contact" className="group block">
              <Card variant="interactive" className="bg-[#FCFAF5] border-[#F5EFE2] p-6 h-full flex flex-col justify-between group-hover:border-[#D89A18] transition-all">
                <CardContent className="p-0">
                  <div className="w-10 h-10 rounded-xl bg-[#071A3A] text-white flex items-center justify-center mb-4 group-hover:bg-[#D89A18] group-hover:text-[#071A3A] transition-colors">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-1 group-hover:text-[#D89A18] transition-colors">
                    Contact
                  </h3>
                  <p className="text-xs text-[#647084] font-sans">
                    Talk to our academy
                  </p>
                </CardContent>
                <div className="mt-4 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#071A3A] group-hover:text-[#D89A18] flex items-center justify-between transition-colors">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          </StaggerContainer>
        </Container>
      </section>

      {/* ================= 3. FINAL COMPACT DARK NAVY CTA SECTION ================= */}
      <section className="py-16 bg-[#071A3A] relative">
        <Container size="wide">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#071A3A] via-[#0B1F41] to-[#071A3A] border border-[#D89A18]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-2 block">
                RETURN TO THE BOARD
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Ready to Make Your <span className="text-[#D89A18] italic font-serif">Next Move?</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A0AEC0] font-sans">
                Return to the board, keep learning and make your next move count.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#D89A18] text-[#071A3A] font-bold text-xs sm:text-sm hover:bg-[#F5C542] transition-colors shadow-lg"
              >
                Back to Home →
              </Link>
              <Link
                to="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm hover:bg-white/20 transition-colors"
              >
                Explore Programs →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NotFound;
