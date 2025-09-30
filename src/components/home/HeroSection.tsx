import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-brand-teal/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-brand-orange/10 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 z' fill='none' stroke='%23000000' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 shadow-soft">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-secondary font-medium text-foreground">
              Trusted by 100+ Businesses across TamilNadu
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-primary mb-6 leading-tight">
            <span className="block text-foreground">Boost Your Business </span>
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              With Digital Marketing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 font-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            At ARA Discover, we craft powerful, data-driven marketing strategies to boost your online presence, attract the right audience, and drive measurable business growth. From startups to established enterprises, our customized solutions help you scale faster and smarter in today’s competitive digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-white font-secondary font-semibold px-8 py-4 rounded-xl shadow-glow hover:shadow-large transition-all duration-300 hover:scale-105 group"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* <Button
              variant="outline"
              size="lg"
              className="border-2 border-neutral-300 hover:border-brand-primary text-foreground hover:text-brand-primary bg-white/80 backdrop-blur-sm font-secondary font-semibold px-8 py-4 rounded-xl hover:shadow-glow transition-all duration-300 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "96+", label: "Projects Completed" },
              { number: "117+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold font-primary text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm font-secondary text-neutral-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent clip-wave"></div>
    </section>
  );
};

export default HeroSection;