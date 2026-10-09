import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  GlassCard,
  ChessIcon,
  ThinkScriptText,
  VelocityLogo,
  FadeIn,
} from '../components';
import { SEO } from '../components/SEO';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Trophy,
  MessageSquare,
  Send,
  Users,
  ArrowRight,
  Share2,
  Globe,
  MessageCircle,
  Tv,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    queryType: 'Admissions Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        queryType: 'Admissions Enquiry',
        message: '',
      });
    }, 4000);
  };

  const faqs = [
    {
      q: "How can I enroll my child in a program?",
      a: "You can enroll by contacting us through this form, calling us, or visiting our academy. Our team will guide you with the best program based on your child's age and level."
    },
    {
      q: "Do you offer online classes?",
      a: "Yes, we offer both online and offline classes with interactive live sessions conducted by experienced coaches."
    },
    {
      q: "Can I book a demo class?",
      a: "Yes! You can book a free demo class to experience our teaching methodology before enrolling."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] overflow-x-hidden w-full max-w-full">
      <SEO title="Contact Us | Velocity Chess Academy - KPHB Colony, Hyderabad" />

      {/* ================= 1. CONTACT HERO SECTION ================= */}
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
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#647084]">
                  <Link to="/" className="hover:text-[#071A3A] transition-colors">Home</Link>
                  <span>&gt;</span>
                  <span className="text-[#D89A18] font-bold">Contact Us</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight mb-2">
                  Contact <span className="text-[#D89A18] italic font-serif">Us</span>
                </h1>
                <h2 className="text-lg sm:text-xl font-bold text-[#071A3A] mb-3 font-serif">
                  We’d Love to Hear From You!
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-[#647084] text-xs sm:text-sm max-w-lg leading-relaxed font-sans mb-4">
                  Have questions about our programs, admissions, upcoming events or anything else? Reach out to us and our team will get back to you as soon as possible.
                </p>
              </FadeIn>
            </div>

            {/* Center Watermark & Right Hero Student Photo */}
            <div className="lg:col-span-6 relative flex items-center justify-end">
              {/* Think Plan Move Grow script watermark */}
              <div className="absolute top-4 left-0 z-10 hidden sm:block pointer-events-none opacity-85">
                <ThinkScriptText />
              </div>

              {/* Right Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[420px] border border-[#F5EFE2] shadow-xl bg-gray-100">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Velocity Chess Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. CONTACT INFORMATION BAR ================= */}
      <Container size="wide" className="relative z-10 -mt-6 pb-4">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl sm:rounded-full border border-white/90 shadow-xl flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F5C542] text-[#071A3A] flex items-center justify-center shrink-0 shadow-2xs">
                <Phone className="w-5 h-5 fill-current text-[#071A3A]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-xs text-[#071A3A]">Call Us</span>
                <span className="text-xs text-[#647084] font-semibold truncate">+91 8074710673</span>
                <span className="text-xs text-[#647084] font-semibold truncate">8500564155</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl sm:rounded-full border border-white/90 shadow-xl flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F5C542] text-[#071A3A] flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-5 h-5 text-[#071A3A]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-xs text-[#071A3A]">Email Us</span>
                <span className="text-xs text-[#647084] font-semibold truncate">chesskrish64@gmail.com</span>
                <span className="text-[10px] text-[#647084] truncate">We usually respond within 24 hours</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl sm:rounded-full border border-white/90 shadow-xl flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F5C542] text-[#071A3A] flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-5 h-5 text-[#071A3A]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-xs text-[#071A3A]">Working Hours</span>
                <span className="text-xs text-[#647084] font-semibold">Mon - Sat</span>
                <span className="text-xs text-[#647084] font-semibold">9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl sm:rounded-3xl border border-white/90 shadow-xl flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F5C542] text-[#071A3A] flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5 text-[#071A3A]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-xs text-[#071A3A]">Visit Our Academy</span>
                <span className="text-[10px] text-[#647084] leading-tight line-clamp-2 font-medium">
                  Bhanu Nilayam, Lig 258, 2nd Floor, Road No 2, KPHB Colony, Hyderabad, Telangana 500072
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* ================= 3. GET IN TOUCH SECTION ================= */}
      <section className="py-16 bg-white border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 6 Cols: Contact Form */}
            <div className="lg:col-span-6 bg-[#FCFAF5] p-6 sm:p-8 rounded-3xl border border-[#F5EFE2] shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D89A18] block mb-1">
                SEND US A MESSAGE
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A] mb-1">
                Get in <span className="text-[#D89A18] italic font-serif">Touch</span>
              </h2>
              <p className="text-xs text-[#647084] mb-6">
                Fill in the details below and we will get back to you soon.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-base mb-1">Thank You!</h4>
                  <p className="text-xs text-emerald-700">
                    Your message has been sent successfully. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071A3A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F5EFE2] text-xs text-[#071A3A] outline-none focus:border-[#D89A18] shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A3A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F5EFE2] text-xs text-[#071A3A] outline-none focus:border-[#D89A18] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071A3A] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F5EFE2] text-xs text-[#071A3A] outline-none focus:border-[#D89A18] shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A3A] mb-1">
                        Query Type *
                      </label>
                      <select
                        value={formData.queryType}
                        onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F5EFE2] text-xs text-[#071A3A] outline-none focus:border-[#D89A18] shadow-2xs"
                      >
                        <option>Select a query type</option>
                        <option>Admissions Enquiry</option>
                        <option>Program Details</option>
                        <option>Event Registrations</option>
                        <option>General Questions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071A3A] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      maxLength={500}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F5EFE2] text-xs text-[#071A3A] outline-none focus:border-[#D89A18] resize-none shadow-2xs"
                    />
                    <div className="text-right text-[10px] text-[#647084] mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#D89A18] hover:bg-[#F5C542] text-[#071A3A] font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message →</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right 6 Cols: Student Photo with Headline + 4 Circle Options */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Photo with Overlay Text */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F5EFE2] h-[340px] bg-gray-100 group">
                <img
                  src="/assets/images/hero_photo.jpg"
                  alt="Velocity Chess Student"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/80 via-transparent to-transparent flex items-end p-8 text-right justify-end">
                  <div className="max-w-xs font-serif italic text-2xl sm:text-3xl text-[#F5C542] font-bold leading-snug drop-shadow-md">
                    “Let's Build a Brighter Future Together.”
                  </div>
                </div>
              </div>

              {/* 4 Quick Contact Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link to="/programs" className="p-3.5 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] text-center flex flex-col items-center hover:border-[#D89A18] transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#F5C542] flex items-center justify-center text-[#071A3A] mb-2 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#071A3A] leading-tight">Admissions Enquiries</span>
                </Link>

                <Link to="/programs" className="p-3.5 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] text-center flex flex-col items-center hover:border-[#D89A18] transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#F5C542] flex items-center justify-center text-[#071A3A] mb-2 shadow-2xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#071A3A] leading-tight">Program Details</span>
                </Link>

                <Link to="/events" className="p-3.5 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] text-center flex flex-col items-center hover:border-[#D89A18] transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#F5C542] flex items-center justify-center text-[#071A3A] mb-2 shadow-2xs">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#071A3A] leading-tight">Event Registrations</span>
                </Link>

                <a href="#faq" className="p-3.5 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] text-center flex flex-col items-center hover:border-[#D89A18] transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#F5C542] flex items-center justify-center text-[#071A3A] mb-2 shadow-2xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#071A3A] leading-tight">General Questions</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. OUR LOCATION SECTION ================= */}
      <section className="py-16 bg-[#FCFAF5] border-b border-[#F5EFE2]">
        <Container size="wide">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
              LOCATION
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
              Our <span className="text-[#D89A18] italic font-serif">Location</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 6 Cols: Map Visual Panel */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-white border border-[#F5EFE2] shadow-sm p-6 flex flex-col justify-between min-h-[340px] relative">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D89A18]/20 text-[#071A3A] text-xs font-bold">
                  VELOCITY CHESS ACADEMY
                </div>
                <h3 className="font-serif text-xl font-bold text-[#071A3A]">KPHB Colony, Hyderabad</h3>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="my-4 p-5 rounded-2xl bg-[#FCFAF5] border border-[#F5EFE2] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D89A18] text-[#071A3A] flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-5 h-5 text-[#071A3A]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#071A3A] block">Velocity Chess Academy</span>
                    <span className="text-[11px] text-[#647084]">KPHB Colony, Hyderabad, Telangana 500072</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2"
              >
                <Button variant="secondary" size="md" className="w-full justify-center bg-white border-[#F5EFE2] text-[#071A3A] hover:bg-[#FCFAF5]">
                  View on Google Maps →
                </Button>
              </a>
            </div>

            {/* Right 6 Cols: Address + Building Photo + Hours */}
            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-[#F5EFE2] shadow-sm flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-8">
                  <h4 className="font-serif font-bold text-base text-[#071A3A] mb-1.5 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D89A18]" />
                    Visit Our Academy
                  </h4>
                  <p className="text-xs text-[#647084] leading-relaxed">
                    Bhanu Nilayam, Lig 258, 2nd Floor, Road No 2, KPHB Colony, Hyderabad, Telangana 500072
                  </p>
                </div>
                <div className="sm:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] border border-[#F5EFE2] bg-gray-100">
                  <img
                    src="/assets/images/home_mockup.jpg"
                    alt="Velocity Academy Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xs text-[#071A3A] mb-2 uppercase tracking-wider text-[#D89A18]">
                  Nearest Landmarks
                </h4>
                <ul className="text-xs text-[#647084] space-y-1">
                  <li className="flex items-center gap-2">• KPHB Metro Station – 1 Km</li>
                  <li className="flex items-center gap-2">• Forum Sujana Mall – 1.5 Km</li>
                  <li className="flex items-center gap-2">• KPHB Park – 500 m</li>
                  <li className="flex items-center gap-2">• Easy access by metro, bus and private transport</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F5EFE2]">
                <h4 className="font-serif font-bold text-xs text-[#071A3A] mb-1">Working Hours</h4>
                <p className="text-xs text-[#647084]">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-xs text-[#647084]">Sunday: (By Prior Appointment)</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 5. FREQUENTLY ASKED QUESTIONS ================= */}
      <section id="faq" className="py-16 bg-white">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] mb-1 block">
                FAQS
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#071A3A]">
                Frequently <span className="text-[#D89A18] italic font-serif">Asked Questions</span>
              </h2>
            </div>

            <Link to="/contact">
              <Button variant="ghost" size="sm" className="text-[#071A3A]">
                View All FAQs →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <GlassCard key={idx} variant="light" className="p-5 bg-[#FCFAF5] flex flex-col justify-between border-[#F5EFE2]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F5C542] text-[#071A3A] flex items-center justify-center mb-3 font-bold shadow-2xs">
                    {idx === 0 ? <GraduationCap className="w-5 h-5" /> : idx === 1 ? <Users className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#071A3A] mb-2 leading-snug">{faq.q}</h4>
                  <p className="text-xs text-[#647084] leading-relaxed">{faq.a}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F5EFE2] flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#071A3A] border border-[#F5EFE2]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>



      {/* ================= 6. COMPACT CONTACT FOOTER ================= */}
      <footer className="bg-[#071A3A] text-white py-8 border-t border-white/10">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Left Brand Logo */}
            <Link to="/" className="shrink-0">
              <VelocityLogo size="md" variant="light" />
            </Link>

            {/* Center Navigation Links & Social Icons */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/80">
                <Link to="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
                <Link to="/about" className="hover:text-[#F5C542] transition-colors">About Us</Link>
                <Link to="/programs" className="hover:text-[#F5C542] transition-colors">Programs</Link>
                <Link to="/achievements" className="hover:text-[#F5C542] transition-colors">Achievements</Link>
                <Link to="/events" className="hover:text-[#F5C542] transition-colors">Events</Link>
                <Link to="/gallery" className="hover:text-[#F5C542] transition-colors">Gallery</Link>
                <Link to="/resources" className="hover:text-[#F5C542] transition-colors">Resources</Link>
                <Link to="/contact" className="hover:text-[#F5C542] transition-colors text-[#F5C542]">Contact</Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 text-white/70">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C542] transition-colors" title="Facebook">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C542] transition-colors" title="Instagram">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C542] transition-colors" title="YouTube">
                  <Tv className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C542] transition-colors" title="LinkedIn">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Tagline */}
            <div className="flex items-center gap-2 text-right">
              <ChessIcon type="knight" className="w-6 h-6 text-[#F5C542]" />
              <div className="font-serif italic text-xs text-white/90">
                “Discipline today, a brighter tomorrow.”
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-[11px] text-white/60">
            © 2024 Velocity Chess Academy. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Contact;
