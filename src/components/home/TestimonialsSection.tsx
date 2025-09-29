import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Naturals Thanjavur",
      // position: "CEO, TechStart Inc.",
      content:
        "Working with ARA Discover was a game-changer! Their marketing strategies helped me reach more customers and boost engagement.",
      rating: 5,
      // company: "TechStart Inc.",
    },
    {
      name: "Naturals Nizam Colony",
      // position: "Marketing Director, GrowthCo",
      content:
        "My website now looks professional and user-friendly, thanks to ARA Discover's amazing web development team!",
      rating: 5,
      // company: "GrowthCo",
    },
    {
      name: "GroHair & GloSkin Clinic",
      // position: "Founder, Creative Studios",
      content:
        "Their social media marketing efforts made a huge difference for my business. My pages look more engaging than ever!",
      rating: 5,
      // company: "Creative Studios",
    },
    {
      name: "Timeline Studio",
      // position: "CTO, InnovateX",
      content:
        "ARA Discover Technologies boosted my business with expert Google Ads, driving leads and instant engagement. Highly recommended",
      rating: 5,
      // company: "InnovateX",
    },
    {
      name: "Sophia Lee",
      // position: "Founder, StyleHub",
      content:
        "The team did an outstanding job with our website. The design is modern, user-friendly, and perfectly represents our brand.",
      rating: 5,
      // company: "StyleHub",
    },
    {
      name: "James Carter",
      // position: "Operations Head, BuildPro",
      content:
        "Their digital marketing strategies truly transformed our online presence – we’re reaching more customers and seeing real growth.",
      rating: 5,
      // company: "BuildPro",
    },
  ];

  const stats = [{ number: "98%", label: "Client Satisfaction", color: "brand-primary" }, { number: "250%", label: "Average ROI Increase", color: "brand-teal" }, { number: "45%", label: "Faster Project Delivery", color: "brand-orange" }, { number: "24/7", label: "Support Available", color: "brand-pink" }];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-4 py-2 mb-6 shadow-soft">
            <Star className="w-4 h-4 text-brand-orange fill-current" />
            <span className="text-sm font-medium text-brand-orange">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our Clients</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
        </div>

        {/* Stats Row */} <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`text-4xl md:text-5xl font-bold font-primary text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-sm font-secondary text-neutral-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={3}
          slidesPerGroup={3}
          speed={700} // smooth animation speed
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative border border-neutral-200">
                {/* Quote Icon */}
                <div className="absolute top-2 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-orange-500 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-700 leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
