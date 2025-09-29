import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "117+",
      title: "Happy Clients",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: Award,
      number: "96+",
      title: "Projects Delivered",
      description: "Successful projects across industries",
    },
    {
      icon: Clock,
      number: "34+",
      title: "Team Members",
      description: "Skilled & Experienced Professionals",
    }
  ];

  const values = [
    "Innovation-driven approach",
    "Results-focused strategies",
    "Transparent communication",
    "Cutting-edge technologies",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-teal/5 via-white to-brand-primary/5 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-teal/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-primary leading-tight text-foreground">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Elevating Brands
            </span>{" "}
            with Digital Excellence
          </h2>
          <p className="mt-6 text-neutral-700 text-lg leading-relaxed">
            We craft experiences that merge creativity with technology —
            building solutions that last and inspire.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-brand-teal/90 to-brand-primary/90 text-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
            >
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">{value}</span>
            </div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/40 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-primary rounded-2xl flex items-center justify-center shadow-md mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-primary">
                  {achievement.number}
                </h3>
                <h4 className="text-lg font-semibold text-foreground mt-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-neutral-600 mt-2">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link to="/about">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-teal to-brand-primary text-white font-semibold px-8 py-4 rounded-xl transition-transform hover:scale-110 hover:shadow-xl"
            >
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
