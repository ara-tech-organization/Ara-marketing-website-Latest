import { Cloud, Laptop, Video, Server } from "lucide-react";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const steps = [
    {
      icon: Cloud,
      title: "Discovery & Strategy",
      description:
        "We analyze your business, audience, and goals to craft the perfect marketing plan.",
      gradient: "from-cyan-500 to-blue-500", // Cyan → Blue
    },
    {
      icon: Laptop,
      title: "Creative Development",
      description:
        "Engaging content, stunning visuals, and compelling campaigns tailored to your brand.",
      gradient: "from-pink-500 to-rose-500", // Pink → Rose
    },
    {
      icon: Video,
      title: "Execution & Optimization",
      description:
        "We implement data-backed strategies and fine-tune them for the best results.",
      gradient: "from-purple-500 to-indigo-500", // Purple → Indigo
    },
    {
      icon: Server,
      title: "Reporting & Growth",
      description:
        "Detailed analytics and insights to scale your business efficiently.",
      gradient: "from-amber-500 to-orange-500", // Amber → Orange
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Work Process
          </h2>
          <p className="mt-4 text-neutral-600">
            We follow a structured, result-driven approach to ensure maximum
            impact.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-pink-400 to-amber-400 opacity-40"></div>

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Alignment Placeholder */}
                  <div
                    className={`hidden lg:block w-1/2 ${
                      isLeft ? "" : "order-2"
                    }`}
                  ></div>

                  {/* Step Card */}
                  <div className="relative w-full lg:w-1/2">
                    {/* Icon Circle with gradient */}
                    <div
                      className={`absolute -top-8 lg:top-1/2 lg:-translate-y-1/2 lg:-left-10 bg-gradient-to-r ${step.gradient} text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg font-bold text-lg z-10`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 border border-neutral-100 hover:shadow-2xl transition-all">
                      <h3
                        className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${step.gradient} mb-2`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
