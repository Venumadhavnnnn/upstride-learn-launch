import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { GraduationCap, Users, Award, TrendingUp, Heart, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for contacting us!",
      description: "We will connect to you very shortly.",
    });
    setFormData({ name: "", email: "", phone: "", question: "" });
  };

  const courses = [
    "Data Science",
    "Fundamentals of AI",
    "Machine Learning",
    "Fundamentals of Python",
    "DBMS"
  ];

  const features = [
    { icon: TrendingUp, title: "Industry Level Curriculum", description: "Learn with cutting-edge content" },
    { icon: GraduationCap, title: "Hands-on Learning", description: "Practical experience with real projects" },
    { icon: Users, title: "Career Mentorship", description: "Guidance by top professionals" },
    { icon: Award, title: "Comprehensive Career Support", description: "Complete job placement assistance" },
    { icon: Heart, title: "Inclusive Environment", description: "Supportive learning community" },
    { icon: Clock, title: "Flexible Learning", description: "Accessible anytime, anywhere" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">UPSTRIDE</h1>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About Us
            </Button>
            <Button variant="ghost" onClick={() => navigate("/programs")}>
              Programs
            </Button>
            <Button variant="ghost" onClick={() => navigate("/auth")}>
              Learning Portal
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
            UPSTRIDE
          </h1>
          <p className="text-2xl md:text-4xl text-muted-foreground font-light">
            Learn, Grow and Excel
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate("/programs")}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            At Upstride, we make quality education accessible, offering hands-on courses led by 
            experts to prepare students for today's dynamic world. Our mission is to empower 
            learners with the skills and knowledge they need to excel.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">{course}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose UPSTRIDE</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="inline-block bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold">
                  🏆 Recognized by MSME
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Need Help? Talk to Our Experts</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>© 2024 UPSTRIDE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
