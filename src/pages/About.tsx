import Layout from "../components/layout/Layout";
import {
  Target,
  Eye,
  Users,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Calendar,
  TrendingUp,
  CheckCircle,
  Rocket
} from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";
import shape1 from "@/assets/shape1.png";
import shape2 from "@/assets/shape2.png";
import shape3 from "@/assets/shape3.png";
import bgImage from "@/assets/bg.png";
import aboutHistoryImage from "@/assets/about-history.jpg";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroVideo from "../../src/assets/hero-1.mp4"
import { Link } from "react-router-dom";

const About = () => {
  const profileControls = useAnimation();
  const notesControls = useAnimation();

  const notes = [
    "Boost social media engagement",
    "Automated email campaigns",
    "SEO optimization strategies",
    "Real-time ad performance tracking",
    "Content tailored for audience",
  ];

  // Framer Motion Variants
  const notesParent = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3, // children animate one by one
      },
    },
    exit: { opacity: 0, y: -60, transition: { duration: 0.6 } },
  };

  const noteItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const runAnimation = async () => {
      // Reset states
      await profileControls.start({ opacity: 0, y: 80 });
      await notesControls.start("hidden");

      // Show profile card
      await profileControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });

      // Show notes one by one
      await notesControls.start("visible");

      // Wait a bit with both visible
      await new Promise((res) => setTimeout(res, 3000));

      // Profile card fades and slides up
      await profileControls.start({
        opacity: 0,
        y: -60,
        transition: { duration: 0.8 },
      });

      // Notes move UP into card’s position
      await notesControls.start({
        y: -80,
        transition: { duration: 0.8 },
      });

      // Wait before looping
      await new Promise((res) => setTimeout(res, 2000));

      runAnimation(); // Loop again
    };

    runAnimation();
  }, [profileControls, notesControls]);

  // Variants for notes
  const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.5 },
    }),
  };

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      desc: "Started with a vision to transform digital experiences",
    },
    {
      year: "2020",
      title: "First 50 Clients",
      desc: "Built trust with innovative solutions and exceptional service",
    },
    {
      year: "2021",
      title: "Team Expansion",
      desc: "Grew to 25+ talented professionals across multiple disciplines",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      desc: "Awarded 'Best Digital Agency' by Tech Innovation Awards",
    },
    {
      year: "2023",
      title: "Global Reach",
      desc: "Expanded services to clients across 15+ countries",
    },
    {
      year: "2024",
      title: "500+ Projects",
      desc: "Celebrating 500 successful projects and growing stronger",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "Strategic Leadership",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      expertise: "Technical Innovation",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      expertise: "Design Excellence",
      initials: "ER",
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      expertise: "Growth Strategies",
      initials: "DK",
    },
    {
      name: "Lisa Wang",
      role: "Operations Manager",
      expertise: "Process Optimization",
      initials: "LW",
    },
    {
      name: "James Miller",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      initials: "JM",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional results.",
      color: "brand-primary",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships based on trust and mutual growth.",
      color: "brand-teal",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing and quality checks to ensure flawless execution.",
      color: "brand-orange",
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description:
        "We combine speed with precision, delivering projects efficiently without compromising quality.",
      color: "brand-pink",
    },
  ];
  // Variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const step = end / 100;
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(interval);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(interval);
    }, [end]);

    return <span>{count}+</span>;
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* OVERLAY & CONTENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-primary opacity-70"></div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
              >
                <h1 className="text-5xl md:text-7xl font-bold font-primary text-white mb-8 leading-tight">
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-white to-brand-teal bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h1>
              </motion.div>

              <p className="text-xl text-white/90 font-secondary mb-8 leading-relaxed">
                At ARA Discover Marketing, we don't just offer digital marketing—we craft game-changing online experiences that amplify brands, drive engagement, and fuel business success. With a data-driven approach and a passion for innovation, we help businesses like yours stand out, connect, and thrive in the ever-evolving digital landscape.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white font-primary">
                    <Counter end={4} />
                  </div>
                  <div className="text-white/80 font-secondary text-sm">
                    Years
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white font-primary">
                    96+
                  </div>
                  <div className="text-white/80 font-secondary text-sm">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white font-primary">
                    117+
                  </div>
                  <div className="text-white/80 font-secondary text-sm">
                    Clients
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-large">
                <img
                  src={aboutTeamImage}
                  alt="DigitalCraft team collaborating"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="relative py-20 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* BG OVERLAY */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

        {/* SHAPES */}
        <img
          src={shape1}
          alt="shape"
          className="absolute top-6 left-8 w-16 h-16 opacity-80 z-10"
        />
        <img
          src={shape3}
          alt="shape"
          className="absolute bottom-10 right-12 w-12 h-15 opacity-80 z-10"
        />
        <img
          src={shape2}
          alt="shape"
          className="absolute top-6 right-10 w-18 h-16 opacity-80 z-10"
        />

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-20">
          {/* Row 1 - Mission & Vision (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-md rounded-lg p-10 shadow-lg border border-gray-100 relative">
            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">MISSION</h2>
              <p className="text-gray-700">
                At ARA Discover Marketing, our mission is simple: to transform businesses into
                digital powerhouses. We provide tailor-made marketing strategies that
                maximize visibility, attract the right audience, and convert engagement
                into measurable growth. Our goal is to help brands adapt, evolve, and lead
                in a competitive online world.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">VISION</h2>
              <p className="text-gray-700">
                We envision a world where businesses—big and small—harness the full
                potential of digital marketing to scale, innovate, and dominate their
                industries. By blending creativity with cutting-edge technology, we aim to
                set new benchmarks for performance-driven digital marketing that creates
                long-term impact.
              </p>
            </div>

            {/* Center Line */}
            {/* <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-[2px] bg-gradient-to-b from-primary via-indigo-400 to-primary rounded-full"></div> */}
          </div>

          {/* Row 2 - Stats (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900">117+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900">96+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900">34+</h3>
              <p className="text-gray-600">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE (Animated Cards) */}
          {/* LEFT SIDE (Animated Cards) */}
          <div className="bg-gradient-to-br from-[#7f70e0] to-purple-600 rounded-[3rem] p-10 flex flex-col items-center justify-start shadow-2xl text-white overflow-hidden relative min-h-[500px]">
            {/* Feature Highlight Card */}
            <motion.div
              animate={profileControls}
              initial={{ opacity: 0, y: 80 }}
              className="bg-white text-black rounded-2xl p-6 shadow-lg w-full max-w-sm text-center mb-8 flex flex-col items-center"
            >
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg">Growth Accelerator</h3>
              <p className="text-sm text-gray-600">
                Boost your brand with AI-powered insights
              </p>
            </motion.div>

            {/* Animated Notes / Highlights */}
            <motion.div
              variants={notesParent}
              animate={notesControls}
              initial="hidden"
              className="flex flex-col space-y-4 w-full"
            >
              {notes.map((note, index) => (
                <motion.div
                  key={index}
                  variants={noteItem}
                  className="bg-purple-300/60 px-4 py-3 rounded-full shadow-md flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>{note}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE (Text + Feature Boxes) */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-foreground">
              Smarter Digital Marketing
            </h2>
            <p className="text-lg text-neutral-600 mb-12">
              Automate campaigns, track performance, and optimize ROI in real
              time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
                <h4 className="font-semibold mb-2">Campaign Insights</h4>
                <p className="text-sm text-neutral-600">
                  Get real-time analytics across multiple channels.
                </p>
              </div>
              <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
                <h4 className="font-semibold mb-2">Smart Targeting</h4>
                <p className="text-sm text-neutral-600">
                  AI-driven audience segmentation for better results.
                </p>
              </div>
              <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
                <h4 className="font-semibold mb-2">Content Strategy</h4>
                <p className="text-sm text-neutral-600">
                  Optimize messaging for higher engagement.
                </p>
              </div>
              <div className="bg-neutral-100 p-6 rounded-2xl shadow-md flex flex-col items-start justify-between">
                <p className="text-sm text-neutral-600 mb-3">
                  Take your brand visibility to the next level.
                </p>
                <Link
                  to="/services"
                  className="px-4 py-2 rounded-full bg-[#7f70e0] text-white text-sm"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      {/* <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-4 py-2 mb-6 shadow-soft">
              <Calendar className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-secondary font-medium text-brand-orange">
                Our Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6">
              <span className="text-foreground">From Startup to</span>
              <br />
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Industry Leader
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src={aboutHistoryImage}
                alt="Company growth timeline"
                className="w-full rounded-2xl shadow-large"
              />
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold font-primary">
                      {milestone.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-primary text-foreground mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600 font-secondary leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6">
              <span className="text-foreground">Meet Our</span>
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-neutral-600 font-secondary max-w-3xl mx-auto">
              Talented professionals dedicated to bringing your digital vision
              to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-subtle rounded-2xl p-8 text-center shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 group border border-neutral-100"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl font-primary">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-primary text-foreground mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-brand-teal font-secondary font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-neutral-600 font-secondary">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values & Culture */}
      {/* <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-brand-teal/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-white/90 font-secondary max-w-3xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold font-primary mb-4 text-white">
                    {value.title}
                  </h3>

                  <p className="text-white/80 font-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-20">
            <p className="text-2xl text-white/90 font-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
              "At DigitalCraft, we don't just build digital solutions – we craft
              experiences that inspire, engage, and transform businesses for the
              better."
            </p>
            <p className="text-brand-teal font-secondary font-semibold text-lg">
              - Sarah Johnson, CEO & Founder
            </p>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default About;
