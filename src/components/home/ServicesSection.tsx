import { 
  Palette, 
  Code, 
  Megaphone, 
  Video, 
  Target, 
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Website from "../../assets/websiteDevelopment.jpg"
import SocialMedia from "../../assets/socialmedia.jpeg"
import MetaAds from "../../assets/metaads.jpg"
import GoogleAds from "../../assets/googleads.jpg"
import GraphicDesign from "../../assets/graphicdesigner.jpg"
import VideoEditing from "../../assets/video.jpg"

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      gradient: "gradient-primary",
      link: "/services/website-development",
      image: Website
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and engage your target audience effectively.",
      features: ["Content Strategy", "Audience Growth", "Analytics", "Engagement"],
      gradient: "gradient-accent",
      link: "/services/social-media-marketing",
      image: SocialMedia
    },
    {
      icon: Target,
      title: "Meta Ads",
      description: "Precision-targeted Facebook and Instagram advertising campaigns that maximize ROI and drive conversions.",
      features: ["Targeted Campaigns", "A/B Testing", "ROI Tracking", "Optimization"],
      gradient: "gradient-warm",
      link: "/services/meta-ads",
      image: MetaAds
    },
    {
      icon: Search,
      title: "Google Ads",
      description: "Data-driven Google advertising strategies that put your business at the top of search results.",
      features: ["Keyword Research", "Ad Optimization", "Conversion Tracking", "Performance Reports"],
      gradient: "gradient-cool",
      link: "/services/google-ads",
      image: GoogleAds
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Stunning visual designs that communicate your brand message and captivate your audience.",
      features: ["Brand Identity", "Print Design", "Digital Graphics", "UI/UX Design"],
      gradient: "gradient-primary",
      link: "/services/graphic-design",
      image: GraphicDesign
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing services that bring your stories to life with impact.",
      features: ["Motion Graphics", "Color Grading", "Sound Design", "Post-Production"],
      gradient: "gradient-accent",
      link: "/services/video-editing",
      image: VideoEditing
    }
  ];

  

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-4 py-2 mb-6 shadow-soft">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-secondary font-medium text-brand-primary">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary mb-6">
            <span className="text-foreground">Complete Digital</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          
          <p className="text-xl text-neutral-600 font-secondary max-w-3xl mx-auto leading-relaxed">
            At ARA Discoveries Pvt Ltd, we provide innovative digital marketing services designed to accelerate growth, increase brand awareness, and maximize ROI. Our expertise ensures your business stands out in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Glass Content Card */}
                <div className="relative -mt-8 mx-4 bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-transparent group-hover:border-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-500">
                  <h3 className="text-xl font-bold font-primary mb-3 text-foreground group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-700 font-secondary mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                        <span className="text-sm font-secondary text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-primary-dark font-secondary font-semibold group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-accent text-white font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
