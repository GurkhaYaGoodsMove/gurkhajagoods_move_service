import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      duration: 5000,
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+358 413 123691", "+358 417 233118"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@gurkhayagoods.fi", "info@gurkhayagoods.fi"],
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Juustenintie 3", "Helsinki, Finland"],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 - 18:00", "Sat: 9:00 - 15:00"],
      color: "text-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-200/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold mb-2 text-lg">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-6">
            Contact Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to move? Have questions about our services? We're here to help
            you every step of the way.
          </p>
          <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-500 mb-6">
                Let's Start Your Moving Journey
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're moving across town or across the country, our
                experienced team is ready to provide you with reliable,
                professional moving services. Contact us today for a free
                consultation and personalized quote.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${info.color.replace(
                        "text",
                        "bg"
                      )}/10`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-500 mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Info */}
            <Card className="bg-cyan-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">
                  Gurkha Trading Oy
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  As a subsidiary of Gurkha Trading Oy, we bring decades of
                  experience in logistics and transportation to ensure your
                  moving experience is seamless and stress-free.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-elegant border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-500 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-500 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-cyan-600 focus:ring-cyan-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-500 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-cyan-600 focus:ring-cyan-600"
                      placeholder="+358 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-cyan-600 focus:ring-cyan-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-gray-200 focus:border-cyan-600 focus:ring-cyan-600 resize-none"
                    placeholder="Tell us about your moving needs, dates, and any special requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
