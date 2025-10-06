import Layout from "../components/layout/Layout";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import contactOfficeImage from "@/assets/contact-office.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      FullName: formData.name,
      phoneNo: formData.phone,
      email: formData.email,
      CompanyName: formData.company,
      service: formData.service,
      Message: formData.message,
    };

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/discoverMarketing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 123", 
          },
          body: JSON.stringify(payload),
        }
      );

      // Check if the response is JSON
      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: data.message || "We received your message.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "aradiscovermarketing@gmail.com",
      description: "Send us an email anytime!",
      color: "brand-primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "(+91) 81100 25254",
      description: "Mon-Sat from 10am to 6pm",
      color: "brand-teal",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "67A, Giri Rd, Srinivasapuram, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613009",
      description: "Our office is open to visitors",
      color: "brand-orange",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Sat: 10:00 AM - 6:00 PM",
      description: "Weekend support available",
      color: "brand-pink",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-3 months. We always provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible packages and solutions that can accommodate any budget and requirement.",
    },
    {
      question: "What's included in your maintenance packages?",
      answer:
        "Our maintenance packages include regular updates, security monitoring, performance optimization, backup management, and technical support. We offer different tiers to match your specific needs.",
    },
    {
      question: "Can you help with existing websites?",
      answer:
        "Yes, we can redesign, optimize, or migrate existing websites. We also offer audit services to identify areas for improvement and provide recommendations for better performance.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "We offer comprehensive training sessions for content management systems, digital marketing tools, and analytics platforms. Training can be conducted on-site or remotely based on your preference.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Fresh Redesign */}
      {/* Hero Section - Purple Primary Redesign */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Gradient + Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7f70e0]/80 via-black to-black"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7f70e0]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7f70e0]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-[#7f70e0] to-[#7f70e0]/80 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              From concept to launch — we craft websites, apps, and digital
              strategies that elevate your brand and drive results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() =>
                  document.getElementById("contactUs").scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-[#7f70e0] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Get Started
              </button>

              {/* <button
                onClick={() =>
                  document.getElementById("map").scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition"
              >
                Learn More
              </button> */}
            </div>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#7f70e0]/20 rounded-full">
                  <CheckCircle className="w-6 h-6 text-[#7f70e0]" />
                </div>
                <span className="text-white/90">Tailored Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#7f70e0]/20 rounded-full">
                  <MessageSquare className="w-6 h-6 text-[#7f70e0]" />
                </div>
                <span className="text-white/90">Always Connected</span>
              </div>
            </div>
          </div>

          {/* Visual / Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={contactOfficeImage}
                alt="Creative workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white text-black rounded-2xl shadow-2xl p-6 w-60 animate-bounce-slow">
              <p className="font-semibold">✨ Trusted by 100+ Clients</p>
              <p className="text-sm text-gray-600">
                Across industries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Creative Light Design */}
      {/* Classy Contact Section */}
      <section className="relative py-28 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden" id="contactUs">
        {/* Abstract Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[120px]"></div>

        <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info Cards */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white/80 backdrop-blur-lg border border-neutral-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7f70e0] to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-sm font-medium text-indigo-600">
                        {info.detail}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sleek Form Panel */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-2xl shadow-2xl p-10 relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Let’s Build Together
              </h2>
              <p className="text-gray-700 mb-8">
                Tell us about your vision and we’ll bring it to life with
                tailored strategies.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent"
                  />
                </div>

                {/* ✅ Phone Number Field */}
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent"
                />

                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent"
                />

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent bg-white"
                >
                  <option value="">Select a Service</option>
                  <option value="website-development">Website Development</option>
                  <option value="social-media-marketing">Social Media Marketing</option>
                  <option value="meta-ads">Meta Ads</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="consultation">Free Consultation</option>
                </select>

                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7f70e0] focus:border-transparent resize-none"
                />

                <Button
                  type="submit"
                  size="lg"

                  className="w-full bg-gradient-to-r from-[#7f70e0] to-indigo-500 text-white py-4 font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white" id="map">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-primary text-foreground mb-4">
              Visit Our Office
            </h2>
            {/* <p className="text-lg text-neutral-600 font-secondary max-w-2xl mx-auto">
              Located in the heart of New York City, our office is easily
              accessible and always open for meetings.
            </p> */}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.341292788555!2d79.12459417480503!3d10.78515098936415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab986fba40a6b%3A0xc60663bc6b08e04e!2sARA%20Discoveries%20Pvt%20Ltd%20%E2%80%93%20IT%20Solutions%20%26%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1759120431742!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;
