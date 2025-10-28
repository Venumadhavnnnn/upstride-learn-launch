import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Code2, Brain } from "lucide-react";

const Programs = () => {
  const navigate = useNavigate();

  const cseItPrograms = [
    { id: "python", name: "Fundamentals of Python" },
    { id: "fullstack", name: "Fullstack Web Development" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "analytics", name: "Data Analytics" },
  ];

  const genAiPrograms = [
    { id: "datascience", name: "Data Science" },
    { id: "ai", name: "Fundamentals of AI" },
    { id: "ml", name: "Machine Learning" },
    { id: "cv", name: "Computer Vision" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground cursor-pointer" onClick={() => navigate("/")}>
            UPSTRIDE
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              Home
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-5xl font-bold text-center mb-4">Our Programs</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Choose from our comprehensive range of programs designed for your success
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CSE/IT Programs */}
          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-10 h-10 text-primary" />
                <CardTitle className="text-3xl">CSE/IT</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cseItPrograms.map((program) => (
                  <Button
                    key={program.id}
                    variant="outline"
                    className="w-full justify-between hover:bg-primary/10"
                    onClick={() => navigate(`/course/${program.id}`)}
                  >
                    <span>{program.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gen AI Programs */}
          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-10 h-10 text-primary" />
                <CardTitle className="text-3xl">Gen AI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {genAiPrograms.map((program) => (
                  <Button
                    key={program.id}
                    variant="outline"
                    className="w-full justify-between hover:bg-primary/10"
                    onClick={() => navigate(`/course/${program.id}`)}
                  >
                    <span>{program.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programs;
