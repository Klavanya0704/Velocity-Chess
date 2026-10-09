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
import { Download, FileText, BookOpen, Sparkles, Trophy, Video, Search, ArrowRight, CheckCircle2, Layers, Compass, ExternalLink } from 'lucide-react';

interface ResourceItem {
  id: string;
  title: string;
  type: 'ARTICLE' | 'GUIDE' | 'PUZZLE' | 'STUDY' | 'VIDEO';
  category: 'Chess Basics' | 'Tactics & Puzzles' | 'Opening Studies' | 'Middlegame' | 'Endgames' | 'Tournament Guides' | 'Videos';
  description: string;
  image: string;
  meta: string;
  icon: React.ElementType;
}

const resourcesList: ResourceItem[] = [
  {
    id: 'r1',
    title: 'Chess Basics & Rules Guide',
    type: 'GUIDE',
    category: 'Chess Basics',
    description: 'A complete beginner guide covering board setup, piece movements, castling, and foundational rules of chess.',
    image: '/assets/images/programs_mockup.jpg',
    meta: 'PDF • 2.4 MB',
    icon: FileText,
  },
  {
    id: 'r2',
    title: '50+ Tactical Pins & Forks Worksheets',
    type: 'PUZZLE',
    category: 'Tactics & Puzzles',
    description: 'Curated tactical puzzles focusing on forks, pins, skewers, and double attacks for daily pattern recognition.',
    image: '/assets/images/home_mockup.jpg',
    meta: 'PDF • 4.1 MB',
    icon: Sparkles,
  },
  {
    id: 'r3',
    title: 'Essential Opening Principles & Repertoire',
    type: 'STUDY',
    category: 'Opening Studies',
    description: 'Essential opening strategies for White and Black to control the center, develop pieces, and ensure king safety.',
    image: '/assets/images/hero_photo.jpg',
    meta: 'PDF • 3.8 MB',
    icon: BookOpen,
  },
  {
    id: 'r4',
    title: 'Middlegame Pawn Structures & Outposts',
    type: 'ARTICLE',
    category: 'Middlegame',
    description: 'Strategic guide on pawn levers, open files, knight outposts, and weak square exploitation.',
    image: '/assets/images/achievements_mockup.jpg',
    meta: 'PDF • 3.2 MB',
    icon: Layers,
  },
  {
    id: 'r5',
    title: 'Endgame Studies & King Activity',
    type: 'STUDY',
    category: 'Endgames',
    description: 'Fundamental pawn endgames, opposition, key squares, king activity, and essential rook endgame principles.',
    image: '/assets/images/hero_background.png',
    meta: 'PDF • 5.0 MB',
    icon: Compass,
  },
  {
    id: 'r6',
    title: 'FIDE Tournament Preparation & Score Sheets',
    type: 'GUIDE',
    category: 'Tournament Guides',
    description: 'Complete guide on tournament etiquette, writing score sheets, chess clock management, and rating calculations.',
    image: '/assets/images/hero_photo.jpg',
    meta: 'PDF • 1.9 MB',
    icon: Trophy,
  },
  {
    id: 'r7',
    title: 'Video Lesson: Attacking the Castled King',
    type: 'VIDEO',
    category: 'Videos',
    description: 'Masterclass video session by IM Krishna Teja analyzing pawn storms, bishop sacrifices, and mating nets.',
    image: '/assets/images/home_mockup.jpg',
    meta: 'Video • 45 Min',
    icon: Video,
  },
  {
    id: 'r8',
    title: 'Rook Endgame Fundamentals & Lucena Position',
    type: 'STUDY',
    category: 'Endgames',
    description: 'Master the Lucena and Philidor positions to confidently evaluate and win rook and pawn endgame endings.',
    image: '/assets/images/programs_mockup.jpg',
    meta: 'PDF • 2.9 MB',
    icon: BookOpen,
  },
  {
    id: 'r9',
    title: 'Calculation Techniques & Candidate Moves',
    type: 'ARTICLE',
    category: 'Tactics & Puzzles',
    description: 'Learn structured calculation trees, forcing moves evaluation, and avoiding blunder traps during live play.',
    image: '/assets/images/achievements_mockup.jpg',
    meta: 'PDF • 3.5 MB',
    icon: Sparkles,
  },
];

export const Resources: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    'All Resources',
    'Chess Basics',
    'Tactics & Puzzles',
    'Opening Studies',
    'Middlegame',
    'Endgames',
    'Tournament Guides',
    'Videos',
  ];

  const filteredItems = resourcesList.filter((item) => {
    const matchesCategory = activeFilter === 'All Resources' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (title: string) => {
    alert(`Starting download for: ${title}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO 
        title="Chess Resources & Study Materials | Velocity Chess Academy" 
        description="Access free study sheets, tactical puzzle sets, opening repertoires, endgame guides, and video masterclasses curated by International Masters."
      />

      {/* ================= 1. CINEMATIC RESOURCES HERO ================= */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#FCFAF5] isolate w-full border-b border-[#F5EFE2]">
        {/* Photography Background Asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/images/hero_background.png"
            alt="Velocity Chess Academy Study Environment"
            loading="eager"
            className="w-full h-full object-cover object-center absolute inset-0 opacity-80"
          />
          {/* Subtle Left Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF5] via-[#FCFAF5]/90 to-transparent w-full lg:w-[58%] pointer-events-none z-1" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#F5EFE2] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#D89A18] shrink-0 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#071A3A]">
                    LEARN • PRACTICE • IMPROVE • MASTER
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-[1.15] mb-4">
                  Chess <span className="text-[#D89A18] italic font-serif">Resources</span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#071A3A] mb-3 font-serif">
                  Helpful materials for every stage of your chess journey.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-xl leading-relaxed mb-8 font-sans">
                  Access curated study materials, tactical puzzle sets, opening guides, and video lessons designed by International Master coaches to accelerate your chess growth.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#library-section"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#D89A18] text-[#071A3A] font-bold text-xs sm:text-sm hover:bg-[#F5C542] transition-colors shadow-sm"
                  >
                    Browse Learning Library
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#featured-resource"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#071A3A] border border-[#F5EFE2] font-bold text-xs sm:text-sm hover:border-[#D89A18] transition-colors shadow-2xs"
                  >
                    View Featured Study Guide
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Hero Image & Watermark */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute -top-6 left-0 z-20 hidden sm:block pointer-events-none opacity-90">
                <ThinkScriptText />
              </div>

              {/* Right Image Card */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[440px] border-2 border-white shadow-2xl bg-white group">
                <img
                  src="/assets/images/programs_mockup.jpg"
                  alt="Student studying chess materials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#F5EFE2] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D89A18]/20 flex items-center justify-center shrink-0 text-[#D89A18]">
                      <ChessIcon type="knight" className="w-5 h-5 text-[#D89A18]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D89A18] block">ACADEMY KNOWLEDGE VAULT</span>
                      <p className="text-xs font-bold text-[#071A3A]">Masterclass Content & Worksheets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. RESOURCE CATEGORIES & SEARCH BAR ================= */}
      <section id="library-section" className="py-12 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                STUDY VAULT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                Explore <span className="text-[#D89A18] italic font-serif">Materials</span>
              </h2>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#647084]" />
              <input
                type="text"
                placeholder="Search chess resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FCFAF5] border border-[#F5EFE2] text-xs font-medium text-[#071A3A] placeholder-[#647084] focus:outline-none focus:border-[#D89A18] transition-colors"
              />
            </div>
          </div>

          {/* 8 Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  activeFilter === cat
                    ? 'bg-[#D89A18] text-[#071A3A] border-[#D89A18] shadow-2xs'
                    : 'bg-[#FCFAF5] text-[#647084] border-[#F5EFE2] hover:text-[#071A3A] hover:border-[#D89A18]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= 3. FEATURED LEARNING RESOURCE ================= */}
      <section id="featured-resource" className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="bg-white rounded-3xl border border-[#F5EFE2] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Side */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] border border-[#F5EFE2]">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Build Strong Chess Foundations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold" size="sm" className="font-bold">
                    FEATURED STUDY GUIDE
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D89A18] mb-2 block">
                  RECOMMENDED READ • 15 MIN READ • PDF DOWNLOAD
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071A3A] mb-3 leading-snug">
                  Build Strong Chess Foundations: Complete Opening & Tactical Guide
                </h3>
                <p className="text-xs sm:text-sm text-[#647084] leading-relaxed mb-6 font-sans">
                  A comprehensive master-curated handbook detailing center control, piece coordination, king safety, and early middlegame pawn structures. Essential reading for players moving from casual play to tournament competitions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FCFAF5] border border-[#F5EFE2]">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18] shrink-0" />
                    <span className="text-xs font-bold text-[#071A3A]">Opening Principles</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FCFAF5] border border-[#F5EFE2]">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18] shrink-0" />
                    <span className="text-xs font-bold text-[#071A3A]">Tactical Vision</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FCFAF5] border border-[#F5EFE2]">
                    <CheckCircle2 className="w-4 h-4 text-[#D89A18] shrink-0" />
                    <span className="text-xs font-bold text-[#071A3A]">Endgame Rules</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleDownload('Build Strong Chess Foundations Guide')}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Free PDF (4.8 MB)
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    showArrow={false}
                    onClick={() => alert('Opening guide preview...')}
                    className="gap-2"
                  >
                    Preview Online
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. 3-COLUMN LEARNING LIBRARY CARD GRID ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
              ACADEMY LIBRARY
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-[#071A3A] mb-3">
              Learning <span className="text-[#D89A18] italic font-serif">Vault</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#647084] font-sans">
              Filter by category or search to access tailored guides, tactical problem sets, and master video analysis.
            </p>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#FCFAF5] rounded-3xl border border-[#F5EFE2]">
              <p className="text-base font-bold text-[#071A3A] mb-2 font-serif">No resources match your search.</p>
              <p className="text-xs text-[#647084] mb-4">Try clearing your search query or choosing another category.</p>
              <Button
                variant="secondary"
                size="sm"
                showArrow={false}
                onClick={() => { setActiveFilter('All Resources'); setSearchQuery(''); }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <Card
                    key={item.id}
                    variant="interactive"
                    className="bg-[#FCFAF5] border-[#F5EFE2] flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="relative">
                        <CardImage
                          src={item.image}
                          alt={item.title}
                          aspectRatio="aspect-[16/10]"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase bg-[#071A3A] text-white shadow-2xs">
                            {item.type}
                          </span>
                          <Badge variant="gold" size="sm">
                            {item.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[#D89A18]/15 text-[#071A3A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D89A18] transition-colors">
                            <IconComp className="w-4 h-4 text-[#071A3A]" />
                          </div>
                          <h3 className="font-serif font-bold text-base text-[#071A3A] leading-snug group-hover:text-[#D89A18] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#647084] leading-relaxed font-sans line-clamp-3">
                          {item.description}
                        </p>
                      </CardContent>
                    </div>

                    <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F5EFE2] mt-4">
                      <span className="text-[11px] font-bold text-[#647084]">
                        {item.meta}
                      </span>
                      <button
                        onClick={() => handleDownload(item.title)}
                        className="w-9 h-9 rounded-full bg-[#071A3A] text-white hover:bg-[#D89A18] hover:text-[#071A3A] flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
                        title={`Download ${item.title}`}
                        aria-label={`Download ${item.title}`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                );
              })}
            </StaggerContainer>
          )}
        </Container>
      </section>



      {/* ================= 5. CHESS STUDY SECTION (Train Your Thinking) ================= */}
      <section className="py-20 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
              ACADEMY STUDY SYSTEM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#071A3A] mb-3">
              Train Your <span className="text-[#D89A18] italic font-serif">Thinking</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#647084] font-sans">
              Structured study pillars designed by International Masters to develop disciplined decision-making under tournament conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#F5EFE2] shadow-sm hover:border-[#D89A18] transition-all flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-black text-[#D89A18] block mb-3">01</span>
                <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2">Tactical Puzzles</h3>
                <p className="text-xs text-[#647084] leading-relaxed font-sans">
                  Daily pattern recognition worksheets covering pins, double attacks, skewers, and mating combinations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#D89A18] flex items-center justify-between">
                <span>Daily Exercises</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F5EFE2] shadow-sm hover:border-[#D89A18] transition-all flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-black text-[#D89A18] block mb-3">02</span>
                <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2">Opening Studies</h3>
                <p className="text-xs text-[#647084] leading-relaxed font-sans">
                  Structured opening repertoires and central control plans for both White and Black color choices.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#D89A18] flex items-center justify-between">
                <span>Repertoire Sheets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F5EFE2] shadow-sm hover:border-[#D89A18] transition-all flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-black text-[#D89A18] block mb-3">03</span>
                <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2">Endgame Practice</h3>
                <p className="text-xs text-[#647084] leading-relaxed font-sans">
                  Critical king-and-pawn positions, opposition rules, and practical rook endgame technique.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#D89A18] flex items-center justify-between">
                <span>Technique Manuals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F5EFE2] shadow-sm hover:border-[#D89A18] transition-all flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-black text-[#D89A18] block mb-3">04</span>
                <h3 className="font-serif font-bold text-lg text-[#071A3A] mb-2">Game Analysis</h3>
                <p className="text-xs text-[#647084] leading-relaxed font-sans">
                  Annotated grandmaster games and masterclass video reviews demonstrating deep positional planning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5EFE2] text-[11px] font-bold text-[#D89A18] flex items-center justify-between">
                <span>Video & PGN Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 6. LEARNING PATH PROGRESSION SECTION (Learn Step by Step) ================= */}
      <section className="py-20 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
              STRUCTURED ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#071A3A] mb-3">
              Learn Step by <span className="text-[#D89A18] italic font-serif">Step</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#647084] font-sans">
              Our structured 4-stage progression takes students from foundational piece rules to rated FIDE tournament play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-[#FCFAF5] border border-[#F5EFE2] relative">
              <div className="w-10 h-10 rounded-full bg-[#071A3A] text-[#D89A18] font-serif font-bold text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-2">Fundamentals & Rules</h3>
              <p className="text-xs text-[#647084] leading-relaxed font-sans">
                Master board setup, piece values, movement, castling, en passant, and basic checkmate patterns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-[#FCFAF5] border border-[#F5EFE2] relative">
              <div className="w-10 h-10 rounded-full bg-[#071A3A] text-[#D89A18] font-serif font-bold text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-2">Tactical Calculation</h3>
              <p className="text-xs text-[#647084] leading-relaxed font-sans">
                Build pattern recognition for forks, pins, skewers, discovered attacks, and forcing combinations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-[#FCFAF5] border border-[#F5EFE2] relative">
              <div className="w-10 h-10 rounded-full bg-[#071A3A] text-[#D89A18] font-serif font-bold text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-2">Strategic Planning</h3>
              <p className="text-xs text-[#647084] leading-relaxed font-sans">
                Develop middlegame plans, pawn structures, file control, knight outposts, and piece coordination.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-[#FCFAF5] border border-[#F5EFE2] relative">
              <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] font-serif font-bold text-sm flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="font-serif font-bold text-base text-[#071A3A] mb-2">Tournament Mastery</h3>
              <p className="text-xs text-[#647084] leading-relaxed font-sans">
                Execute under classical clock controls, maintain score sheets, and handle rated FIDE competition.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 7. DARK NAVY RESOURCE SPOTLIGHT SECTION ================= */}
      <section className="py-20 bg-[#071A3A] text-white relative overflow-hidden border-b border-[#0B1F41]">
        {/* Decorative ambient background accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D89A18]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0B1F41] rounded-full blur-2xl pointer-events-none" />

        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6">
              <ChessIcon type="knight" className="w-8 h-8 text-[#D89A18]" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-3 block">
              COACHING PRINCIPLE
            </span>

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
              &ldquo;Every game can teach you something. The key is analyzing your moves with patience and discipline.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm font-bold text-[#D89A18] uppercase tracking-wider mb-10">
              — IM Krishna Teja, Founder & Chief Coach
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-white block mb-1">PGN Game Vault</span>
                <span className="text-[11px] text-[#A0AEC0]">Download annotated master games</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-white block mb-1">Video Masterclasses</span>
                <span className="text-[11px] text-[#A0AEC0]">On-demand video analysis</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-white block mb-1">Printable Worksheets</span>
                <span className="text-[11px] text-[#A0AEC0]">Tactical problem sets</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 8. FINAL COMPACT DARK NAVY CTA SECTION ================= */}
      <section className="py-16 bg-[#071A3A] relative">
        <Container size="wide">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#071A3A] via-[#0B1F41] to-[#071A3A] border border-[#D89A18]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-2 block">
                BEGIN YOUR JOURNEY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Your Next Move Starts With <span className="text-[#D89A18] italic font-serif">Learning.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A0AEC0] font-sans">
                Download free study materials or speak with our master coaches to build your personalized training roadmap today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#D89A18] text-[#071A3A] font-bold text-xs sm:text-sm hover:bg-[#F5C542] transition-colors shadow-lg"
              >
                Enroll Now →
              </Link>
              <Link
                to="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm hover:bg-white/20 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Resources;
