import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import {
  Code,
  Megaphone,
  Target,
  Search,
  Palette,
  Video,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SocialMedia from "../../src/assets/socialmedia.jpeg"
import Social from "../../src/assets/social (2).jpeg"
import WebsiteDevelopment from "../../src/assets/websiteDevelopment.jpg"
import Website from "../../src/assets/websites.jpg"
import MetaAds from "../../src/assets/metaads.jpg"
import Meta from "../../src/assets/meta.jpeg"
import GoogleAds from "../../src/assets/googleads.jpg"
import GraphicDesign from "../../src/assets/graphic.jpeg"
import Graphics from "../../src/assets/graphics.jpeg"
import VideoEditing from "../../src/assets/videoediting.jpg"
import Videos from "../../src/assets/videos.jpg"
import serviceVideo from "../../src/assets/serviceshero.mp4"
import ProcessImage from "../../src/assets/process2.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Services = () => {
  const { serviceId } = useParams();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
      offset: 100, // trigger point
    });
  }, []);

  const services = [
    {
      id: "social-media-marketing",
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and engage your target audience across all platforms.",
      fullDescription: "Transform your social media presence with our comprehensive marketing strategies. We create engaging content, manage your communities, and drive meaningful conversations that convert followers into customers. Our data-driven approach ensures every post, story, and campaign contributes to your business goals.",
      features: [
        "Content Strategy & Creation",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting",
        "Brand Voice Development"
      ],
      benefits: [
        "Increased brand awareness by 300%",
        "Higher engagement rates",
        "Quality lead generation",
        "Improved customer loyalty"
      ],
      process: [
        "Audit & Strategy Development",
        "Content Calendar Creation",
        "Campaign Implementation",
        "Performance Monitoring",
        "Optimization & Scaling"
      ],
      color: "brand-teal",
      gradient: "gradient-primary",
      image: SocialMedia
    },
    {
      id: "website-development",
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      fullDescription: "We craft exceptional websites that not only look stunning but perform flawlessly across all devices. From simple landing pages to complex web applications, our development team uses the latest technologies to ensure your website is fast, secure, and scalable. Every website we build is optimized for search engines and designed to convert visitors into customers.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Content Management Systems",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation"
      ],
      benefits: [
        "50% faster loading times",
        "Mobile-first approach",
        "SEO-ready architecture",
        "Scalable infrastructure"
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development & Testing",
        "Launch & Optimization",
        "Maintenance & Support"
      ],
      color: "brand-primary",
      gradient: "gradient-accent",
      image: WebsiteDevelopment
    },
    {
      id: "meta-ads",
      icon: Target,
      title: "Meta Ads",
      description: "Precision-targeted Facebook and Instagram advertising campaigns that maximize ROI and drive conversions.",
      fullDescription: "Leverage the power of Meta's advertising platform to reach your ideal customers with laser precision. Our certified experts create and manage high-converting ad campaigns that drive qualified traffic, generate leads, and increase sales. We continuously optimize your campaigns using advanced targeting, compelling creatives, and data-driven insights.",
      features: [
        "Campaign Strategy & Setup",
        "Audience Research & Targeting",
        "Creative Design & Copywriting",
        "A/B Testing & Optimization",
        "Conversion Tracking",
        "ROI Analysis & Reporting"
      ],
      benefits: [
        "250% increase in qualified leads",
        "40% reduction in cost per acquisition",
        "Higher conversion rates",
        "Improved brand recognition"
      ],
      process: [
        "Account Audit & Strategy",
        "Campaign Creation & Launch",
        "Monitoring & Optimization",
        "Performance Analysis",
        "Scaling Successful Campaigns"
      ],
      color: "brand-orange",
      gradient: "gradient-warm",
      image: MetaAds
    },
    {
      id: "google-ads",
      icon: Search,
      title: "Google Ads",
      description: "Data-driven Google advertising strategies that put your business at the top of search results.",
      fullDescription: "Dominate search results with our expertly managed Google Ads campaigns. We help you capture high-intent traffic through strategic keyword targeting, compelling ad copy, and optimized landing pages. Our Google Ads certified specialists ensure your campaigns deliver maximum ROI while maintaining cost efficiency.",
      features: [
        "Keyword Research & Strategy",
        "Search & Display Campaigns",
        "Shopping Ads Management",
        "Landing Page Optimization",
        "Bid Management & Optimization",
        "Comprehensive Reporting"
      ],
      benefits: [
        "Top 3 search positions",
        "200% increase in website traffic",
        "Higher quality scores",
        "Improved conversion rates"
      ],
      process: [
        "Account Setup & Audit",
        "Keyword Research & Campaign Build",
        "Launch & Monitor",
        "Optimize & Refine",
        "Scale & Expand"
      ],
      color: "brand-pink",
      gradient: "gradient-primary",
      image: GoogleAds
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Design",
      description: "Stunning visual designs that communicate your brand message and captivate your audience.",
      fullDescription: "Bring your brand to life with our creative graphic design services. From logo design to marketing materials, we create visually stunning designs that tell your story and connect with your audience. Our designers combine artistic creativity with strategic thinking to deliver designs that not only look great but drive business results.",
      features: [
        "Brand Identity Design",
        "Marketing Materials",
        "Digital Graphics",
        "Print Design",
        "Packaging Design",
        "UI/UX Design"
      ],
      benefits: [
        "Consistent brand identity",
        "Professional visual presence",
        "Increased brand recognition",
        "Higher engagement rates"
      ],
      process: [
        "Brand Discovery & Research",
        "Concept Development",
        "Design Creation & Refinement",
        "Final Delivery",
        "Brand Guidelines Creation"
      ],
      color: "brand-teal",
      gradient: "gradient-accent",
      image: GraphicDesign
    },
    {
      id: "video-editing",
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing services that bring your stories to life with impact.",
      fullDescription: "Create compelling video content that engages your audience and drives action. Our video editing experts transform raw footage into polished, professional videos that tell your story effectively. From promotional videos to social media content, we handle every aspect of video production and post-production.",
      features: [
        "Video Editing & Post-Production",
        "Motion Graphics & Animation",
        "Color Grading & Correction",
        "Sound Design & Mixing",
        "Social Media Video Optimization",
        "Video Marketing Strategy"
      ],
      benefits: [
        "Higher engagement rates",
        "Professional video quality",
        "Optimized for all platforms",
        "Increased conversion rates"
      ],
      process: [
        "Project Planning & Storyboarding",
        "Footage Review & Organization",
        "Editing & Effects",
        "Review & Revisions",
        "Final Delivery & Optimization"
      ],
      color: "brand-primary",
      gradient: "gradient-warm",
      image: VideoEditing
    }
  ];

  // If serviceId exists, show individual service page
  if (serviceId) {
    const currentService = services.find(service => service.id === serviceId);
    const otherServices = services.filter(service => service.id !== serviceId);

    if (!currentService) {
      return (
        <Layout>
          <div className="min-h-screen py-24 bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-primary text-foreground mb-4">Service Not Found</h1>
              <Link to="/services">
                <Button>Back to Services</Button>
              </Link>
            </div>
          </div>
        </Layout>
      );
    }

    const Icon = currentService.icon;

    return (
      <Layout>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-brand-primary/90 via-brand-primary/80 to-brand-primary-dark/70 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/60 to-transparent"></div>
          </div>

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl">
              <div className={`inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8`}>
                <Icon className="w-6 h-6 text-white" />
                <span className="text-white font-secondary font-medium">{currentService.title}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-primary text-white mb-8 leading-tight">
                {currentService.title}
              </h1>

              <p className="text-2xl text-white/90 font-secondary mb-12 leading-relaxed max-w-3xl">
                {currentService.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-brand-primary hover:bg-neutral-100 font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300 hover:scale-105"
                  >
                    Get Started Today
                  </Button>
                </Link>
                {/* <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-primary bg-transparent font-secondary font-semibold px-8 py-4 rounded-xl hover:shadow-glow transition-all duration-300"
                  >
                    Request Quote
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Features */}
              <div>
                <h2 className="text-4xl font-bold font-primary mb-8 text-foreground">
                  What's Included
                </h2>
                <div className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300 group">
                      <CheckCircle className="w-6 h-6 text-brand-teal mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-secondary text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-4xl font-bold font-primary mb-8 text-foreground">
                  Expected Results
                </h2>
                <div className="space-y-6">
                  {currentService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-brand-primary/5 to-transparent rounded-xl border-l-4 border-brand-primary hover:shadow-soft transition-all duration-300">
                      <Star className="w-6 h-6 text-brand-primary mt-1" />
                      <span className="font-secondary text-neutral-700 text-lg font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Marketing Section */}
            {currentService.id === "social-media-marketing" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-4 bg-gradient-to-br from-purple-50 via-white to-teal-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Social Media Marketing-Elevate Your Brand Presence
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        In today’s digital era, social media is more than just a platform—it’s a powerful tool to build your brand, engage with customers, and drive business growth. At ARA Discover Marketing, we craft high-impact social media strategies that turn followers into loyal customers and create a lasting brand presence.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={Social}
                        alt="Social Media Marketing"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">

                    {/* Why It Matters */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Why Social Media Marketing Matters?</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Brand Awareness:</strong> Reach millions of potential customers and establish your authority.</li>
                        <li>🔹 <strong>Engagement & Community Building:</strong> Foster meaningful connections with your audience.</li>
                        <li>🔹 <strong>Lead Generation & Sales:</strong> Convert engagement into revenue with result-driven campaigns.</li>
                        <li>🔹 <strong>Data-Driven Insights:</strong> Leverage analytics to optimize performance and maximize ROI.</li>
                      </ul>
                    </div>

                    {/* Our Approach */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Our Approach – Strategic, Creative & Result-Driven</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>✔ <strong>Content That Captivates:</strong> Visually stunning, high-quality content that resonates with your audience.</li>
                        <li>✔ <strong>Performance-Driven Ads:</strong> Targeted Facebook, Instagram, LinkedIn & Twitter ads ensure the best ROI.</li>
                        <li>✔ <strong>Audience Engagement:</strong> Building active, engaged communities that amplify your brand.</li>
                        <li>✔ <strong>Trend-Based Strategies:</strong> Staying ahead with the latest social media trends to keep your brand relevant.</li>
                      </ul>
                    </div>

                    {/* How We Make a Difference */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">How We Make a Difference</h3>
                      <ul className="space-y-4 text-neutral-700 font-secondary">
                        <li>📍 <strong>360° Social Media Management:</strong> From planning and content creation to execution and analytics.</li>
                        <li>📍 <strong>AI-Powered Insights:</strong> Advanced analytics to understand customer behavior and optimize campaigns.</li>
                        <li>📍 <strong>Creative Storytelling:</strong> Engaging visuals, videos, and stories that connect with your audience emotionally.</li>
                        <li>📍 <strong>Consistent Brand Growth:</strong> Ensuring your brand voice remains consistent across all platforms.</li>
                      </ul>

                      {/* CTA */}
                      <div className="text-center mt-8">
                        <Link to="/contact">
                          <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300">
                            🚀 Let's Elevate Your Brand Today
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Website Development Section */}
            {currentService.id === "website-development" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-12 bg-gradient-to-br from-teal-50 via-white to-purple-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Website Development – Build a Powerful Digital Presence
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        In today’s fast-paced digital world, a website is more than just an online presence—it’s your brand’s first impression, sales engine, and growth accelerator. At ARA Discover Marketing, we craft stunning, high-performance websites that not only captivate visitors but also drive real business results.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={Website} // <-- replace with your website dev image import
                        alt="Website Development"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">

                    {/* Why a Great Website Matters */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Why a Great Website Matters?</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>First Impressions Count:</strong> A well-designed website builds trust and credibility instantly.</li>
                        <li>🔹 <strong>Responsive & Mobile-Friendly:</strong> Your website adapts to all devices for a seamless user experience.</li>
                        <li>🔹 <strong>Fast & Secure:</strong> Lightning-fast load times and robust security ensure smooth performance.</li>
                        <li>🔹 <strong>SEO & Conversion-Optimized:</strong> Drive traffic and turn visitors into loyal customers.</li>
                      </ul>
                    </div>

                    {/* Our Expertise */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Our Expertise – Custom, Scalable & Future-Ready</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>✔ <strong>Custom Website Design:</strong> Unique, brand-aligned designs that stand out.</li>
                        <li>✔ <strong>E-commerce Development:</strong> Powerful online stores that maximize conversions.</li>
                        <li>✔ <strong>Corporate & Business Websites:</strong> Professional, scalable, and growth-focused platforms.</li>
                        <li>✔ <strong>Landing Pages & Funnels:</strong> High-converting pages to boost lead generation.</li>
                        <li>✔ <strong>Web App Development:</strong> Advanced solutions for businesses looking to digitize operations.</li>
                      </ul>
                    </div>

                    {/* How We Ensure Your Success */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">How We Ensure Your Success?</h3>
                      <ul className="space-y-4 text-neutral-700 font-secondary">
                        <li>📍 <strong>User-Centered Design:</strong> We craft engaging, easy-to-navigate websites for an intuitive experience.</li>
                        <li>📍 <strong>SEO & Performance Optimization:</strong> Ensuring top Google rankings and high-speed performance.</li>
                        <li>📍 <strong>Seamless Integrations:</strong> Payment gateways, CRM, analytics, and third-party tools.</li>
                        <li>📍 <strong>Ongoing Support & Maintenance:</strong> Keeping your website up-to-date and secure.</li>
                      </ul>

                      {/* CTA */}
                      <div className="text-center mt-8">
                        <Link to="/contact">
                          <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300">
                            🚀 Ready to Take Your Business Online?
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Meta Ads Section */}
            {currentService.id === "meta-ads" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Meta Ads – Reach, Engage, and Convert Your Audience
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        In today’s digital landscape, attention is the new currency. Meta Ads (Facebook, Instagram, Messenger) give your brand the power to reach the right audience at the right time—turning clicks into customers and engagement into sales.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={Meta} // <-- import your Meta Ads illustration/image
                        alt="Meta Ads Marketing"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">

                    {/* Why Meta Ads */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Why Meta Ads?</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Hyper-Targeted Marketing:</strong> Leverage AI-driven insights to target users based on demographics, interests, behaviors, and more.</li>
                        <li>🔹<strong>Powerful Brand Awareness:</strong> Put your brand in front of millions with high-impact ad formats.</li>
                        <li>🔹 <strong>Data-Driven Performance:</strong> Optimize campaigns with real-time analytics and AI-powered insights.</li>
                        <li>🔹 <strong>Cost-Effective Solutions:</strong> Maximize ROI with precise audience targeting and budget-friendly ad strategies.</li>
                      </ul>
                    </div>

                    {/* Our Meta Ads Strategy */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Our Meta Ads Strategy – Designed for Success</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>✔ <strong>Ad Strategy & Audience Research:</strong> Understanding your market for the highest conversion rates.</li>
                        <li>✔ <strong>Compelling Ad Creatives:</strong> Eye-catching visuals, persuasive copy, and scroll-stopping videos.</li>
                        <li>✔ <strong>A/B Testing & Optimization:</strong> Fine-tuning every element to ensure the best performance.</li>
                        <li>✔ <strong>Retargeting & Conversion Boosting:</strong> Re-engage visitors and turn interest into action.</li>
                        <li>✔ <strong>Performance Tracking & Reporting:</strong> Stay informed with real-time campaign insights.</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div data-aos="fade-up" className="text-center mt-8">
                      <Link to="/contact">
                        <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300">
                          📈 Ready to Scale Your Business with Meta Ads?
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Google Ads Section */}
            {currentService.id === "google-ads" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-4 bg-gradient-to-br from-yellow-50 via-white to-blue-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Google Ads – Maximize Visibility, Drive Quality Leads & Boost ROI
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        In today’s competitive digital space, simply being online isn’t enough—you need Google Ads to ensure your brand stands out, attracts the right audience, and converts effectively.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={GoogleAds} // <-- import your Google Ads illustration/image
                        alt="Google Ads Marketing"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">

                    {/* Why Choose Google Ads */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Why Choose Google Ads?</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Instant Visibility:</strong> Appear at the top of search results when customers need you.</li>
                        <li>🔹 <strong>High ROI:</strong> Pay only for real engagement with smart bidding strategies.</li>
                        <li>🔹 <strong>Targeted Traffic:</strong> Reach high-intent users actively searching for your services.</li>
                        <li>🔹 <strong>Diverse Ad Formats:</strong> Search, Display, Shopping, YouTube, and more!</li>
                        <li>🔹 <strong>Real-Time Analytics:</strong> Optimize campaigns with data-driven insights.</li>
                      </ul>
                    </div>

                    {/* Our Google Ads Strategy */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Our Google Ads Strategy – Designed for Performance & Growth</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>✔ <strong>Keyword & Competitor Research:</strong> Find the most profitable keywords to maximize reach.</li>
                        <li>✔ <strong>Ad Copy & Creative Optimization:</strong> Craft compelling ad messages that convert.</li>
                        <li>✔ <strong>Landing Page & Conversion Rate Optimization:</strong> Increase conversions with strategic landing pages.</li>
                        <li>✔ <strong>A/B Testing & Bid Management:</strong> Continuously refine for maximum efficiency.</li>
                        <li>✔ <strong>Performance Tracking & ROI Reporting:</strong> Stay ahead with data-backed decisions.</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div data-aos="fade-up" className="text-center mt-8">
                      <Link to="/contact">
                        <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300">
                          🚀 Ready to Dominate Google Search & Drive More Sales?
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Graphic Design Section */}
            {currentService.id === "graphic-design" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-4 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Graphic Design – Elevate Your Brand with{" "}
                        <span className="text-brand-primary">Stunning Visuals</span>
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        Your brand’s visual identity is more than just aesthetics—it’s the
                        first impression, the silent storyteller, and the ultimate
                        game-changer. At ARA Discover Marketing, we craft compelling
                        designs that don’t just look great but resonate with your audience
                        and drive real engagement.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={Graphics} // <-- import your Graphic Design illustration/image
                        alt="Graphic Design Service"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">
                    {/* What We Create */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">
                        What We Create
                      </h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>✅ <strong>Logo & Brand Identity:</strong> Stand out with a unique, memorable brand presence.</li>
                        <li>✅ <strong>Brochures & Flyers:</strong> Professionally designed to captivate and convert.</li>
                        <li>✅ <strong>Social Media Graphics:</strong> Bold, scroll-stopping designs that spark engagement.</li>
                        <li>✅ <strong>Website & UI Graphics:</strong> Visually appealing designs that enhance user experience.</li>
                        <li>✅ <strong>Packaging & Print Design:</strong> Eye-catching, high-impact branding solutions.</li>
                      </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">
                        Why Choose Us?
                      </h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Strategy-Driven Design:</strong> We blend creativity with your brand goals to deliver impactful visuals.</li>
                        <li>🔹 <strong>Attention to Detail:</strong> Every design element is meticulously crafted for perfection.</li>
                        <li>🔹 <strong>Cutting-Edge Creativity:</strong> Our designers push boundaries to create innovative designs.</li>
                        <li>🔹 <strong>Market-Ready Approach:</strong> Designs tailored to stand out in competitive industries.</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div data-aos="fade-up" className="text-center mt-8">
                      <Link to="/contact">
                        <Button
                          size="lg"
                          className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300"
                        >
                          Let’s Make Your Brand Visually Unforgettable!
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Video Editing Section */}
            {currentService.id === "video-editing" && (
              <>
                {/* Intro: Left Text / Right Image */}
                <section className="py-4 bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden mt-16 rounded-md">
                  {/* Decorative shapes */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
                  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>

                  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold font-primary text-foreground">
                        Video Editing –{" "}
                        <span className="text-brand-primary">Transforming Ideas into Captivating Visual Stories</span>
                      </h2>
                      <p className="text-lg text-neutral-700 font-secondary leading-relaxed">
                        Every brand has a story, and nothing tells it better than a well-crafted video.
                        At ARA Discover Marketing, we specialize in high-impact video editing that turns raw footage into cinematic
                        experiences that capture attention, spark emotions, and drive engagement.
                      </p>
                    </div>

                    {/* Right Image */}
                    <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                      <img
                        src={Videos} // <-- import your Video Editing illustration/image
                        alt="Video Editing Service"
                        className="w-full max-w-md rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </section>

                {/* Full-Width Text Sections */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-6 max-w-5xl space-y-16">

                    {/* Our Expertise */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Our Expertise</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Promotional & Branding Videos:</strong> Leave a lasting impression with dynamic visuals.</li>
                        <li>🔹 <strong>Social Media Clips & Ads:</strong> Scroll-stopping content designed for maximum reach.</li>
                        <li>🔹 <strong>Corporate & Training Videos:</strong> Professional edits that enhance communication.</li>
                        <li>🔹 <strong>Cinematic Storytelling:</strong> Seamless cuts, transitions, and color grading for a stunning finish.</li>
                        <li>🔹 <strong>YouTube & Vlogs Editing:</strong> Engaging edits optimized for audience retention.</li>
                      </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div data-aos="fade-up" className="space-y-6">
                      <h3 className="text-3xl font-semibold font-primary text-foreground">Why Choose Us?</h3>
                      <ul className="space-y-2 text-neutral-700 font-secondary">
                        <li>🔹 <strong>Story-Driven Approach:</strong> We don’t just edit; we craft compelling narratives.</li>
                        <li>🔹 <strong>Seamless & Professional Edits:</strong> Smooth transitions, premium effects, and perfect pacing.</li>
                        <li>🔹 <strong>Optimized for Impact:</strong> Tailored to match your brand’s voice and audience engagement.</li>
                        <li>🔹 <strong>Latest Tools & Techniques:</strong> Cutting-edge software for industry-standard results.</li>
                        <li>🔹 <strong>Results-Driven Content:</strong> Designed to boost visibility, engagement, and conversions.</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div data-aos="fade-up" className="text-center mt-8">
                      <Link to="/contact">
                        <Button
                          size="lg"
                          className="bg-brand-primary text-white hover:bg-brand-teal font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300"
                        >
                          Let’s Bring Your Vision to Life!
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}


          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-foreground">
                Our Process
              </h2>
              <p className="text-xl text-neutral-600 font-secondary max-w-3xl mx-auto">
                A proven methodology that ensures exceptional results every time
              </p>
            </div>

            {/* Steps Wrapper */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {currentService.process.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[45%] lg:w-auto"
                >
                  {/* Step */}
                  <div className="text-center group">
                    <div
                      className={`w-16 h-16 bg-${currentService.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-xl font-primary">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-primary text-foreground mb-2">
                      {step}
                    </h3>
                  </div>

                  {/* Arrow (desktop only) */}
                  {index < currentService.process.length - 1 && (
                    <div className="hidden lg:flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-6 text-[#7f70e0]"
                        fill="none"
                        viewBox="0 0 100 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      >
                        <line x1="0" y1="10" x2="95" y2="10" />
                        <path d="M90,5 L100,10 L90,15" fill="currentColor" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Accordion */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-primary text-foreground mb-4">
                Explore Our Other Services
              </h2>
              <p className="text-xl text-neutral-600 font-secondary">
                Comprehensive digital solutions for every business need
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {otherServices.map((service, index) => {
                const ServiceIcon = service.icon;
                const isOpen = openAccordion === service.id;

                return (
                  <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden shadow-soft">
                    <button
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-neutral-50 transition-colors duration-300"
                      onClick={() => setOpenAccordion(isOpen ? null : service.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-${service.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                          <ServiceIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold font-primary text-foreground">{service.title}</h3>
                          <p className="text-neutral-600 font-secondary">{service.description}</p>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-neutral-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-neutral-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-6 pt-0 bg-neutral-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold font-primary text-foreground mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                                  <span className="text-sm font-secondary text-neutral-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-col justify-between">
                            <p className="text-neutral-600 font-secondary mb-4 text-sm leading-relaxed">
                              {service.fullDescription.slice(0, 150)}...
                            </p>
                            <Link to={`/services/${service.id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`border-2 border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white font-secondary font-semibold transition-all duration-300`}
                              >
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>



      </Layout>
    );
  }

  // Main services page
  const stats = [
    { icon: Users, number: "96+", label: "Happy Clients" },
    { icon: Award, number: "117+", label: "Projects Completed" },
    { icon: TrendingUp, number: "250%", label: "Average ROI Increase" },
    { icon: Star, number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden">
        {/* Background Image / Video */}
        <div className="absolute inset-0">
          {/* Background video example */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>

          {/* Background image example */}
          {/* <img
            src="/images/digital-bg.jpg"
            alt="Digital background"
            className="w-full h-full object-cover"
          /> */}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 text-left">
          <h1 className="text-5xl md:text-7xl font-bold font-primary mb-8 leading-tight max-w-3xl">
            Complete Digital
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-2xl text-white/90 font-secondary mb-12 max-w-2xl leading-relaxed">
            From web development to digital marketing, we provide comprehensive
            services that transform your business and accelerate growth in the
            digital landscape.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-left group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <StatIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold font-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 font-secondary max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-8 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`flex flex-col md:flex-row items-center overflow-hidden rounded-full shadow-lg bg-gradient-to-r from-purple-50 to-white p-4 ${index % 2 === 1 ? "md:flex-row-reverse bg-gradient-to-l" : ""
                  }`}
              >

                {/* Image side */}
                <div className="md:w-1/2 w-full flex items-center md:justify-start md:flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain rounded-full"
                  />
                </div>

                {/* Text side */}
                <div className="md:w-1/2 w-full flex flex-col justify-center md:px-6 mt-6 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold font-primary mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 font-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary-dark transition-all w-fit mx-auto md:mx-0"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-foreground">
              Why Choose <span className="bg-gradient-to-r from-brand-primary to-brand-teal bg-clip-text text-transparent">DigitalCraft?</span>
            </h2>
            <p className="text-xl text-neutral-600 font-secondary max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Team",
                description: "Certified professionals with years of industry experience",
                icon: Users,
              },
              {
                title: "Proven Results",
                description: "Track record of delivering measurable business growth",
                icon: TrendingUp,
              },
              {
                title: "Full-Service",
                description: "Complete digital solutions under one roof",
                icon: Award,
              }
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-tr from-brand-primary to-brand-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-primary mb-4 text-foreground">{item.title}</h3>
                  <p className="text-neutral-600 font-secondary leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left: Image with Overlay */}
          <div className="relative">
            <img
              src={ProcessImage}
              alt="Process Illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                Our Process
              </h2>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-gradient-to-br from-purple-50 to-teal-50">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center drop-shadow-lg mb-12">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 font-secondary mb-10 max-w-lg">
              A streamlined approach that ensures quality results and client satisfaction
            </p>

            <div className="space-y-8">
              {[
                { step: "1", title: "Discovery", desc: "We learn about your business, goals, and challenges" },
                { step: "2", title: "Strategy", desc: "We create a customized plan tailored to your needs" },
                { step: "3", title: "Execute", desc: "We implement the solution with precision and care" },
                { step: "4", title: "Optimize", desc: "We monitor, analyze, and continuously improve results" }
              ].map((process, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  {/* Step Number */}

                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-teal-500 text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{process.title}</h3>
                    <p className="text-neutral-600 font-secondary">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 font-secondary mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive digital solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-neutral-100 font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Services;