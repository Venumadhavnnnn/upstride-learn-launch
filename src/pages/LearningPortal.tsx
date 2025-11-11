import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Download, LogOut } from "lucide-react";

const LearningPortal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/auth");
  };

  const modules = [
    { id: "fundamentals-of-ai", title: "Fundamentals of AI", description: "Master the core concepts of Artificial Intelligence", lessons: 15 },
    { id: "placement", title: "Placement", description: "Prepare for placements with interview prep and career guidance", lessons: 20 },
  ];

  const ebooks = [
    { id: 1, title: "Python Programming Guide", author: "UPSTRIDE Team", pages: 250 },
    { id: 2, title: "AI Fundamentals", author: "UPSTRIDE Team", pages: 300 },
    { id: 3, title: "Web Development Handbook", author: "UPSTRIDE Team", pages: 350 },
    { id: 4, title: "Data Science Manual", author: "UPSTRIDE Team", pages: 400 },
  ];

  const papers = [
    { id: 1, title: "Latest Trends in AI", author: "Research Team", year: 2024 },
    { id: 2, title: "Cloud Computing Architecture", author: "Tech Experts", year: 2024 },
    { id: 3, title: "Modern Web Frameworks", author: "Dev Community", year: 2024 },
    { id: 4, title: "Machine Learning Applications", author: "ML Researchers", year: 2024 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">UPSTRIDE Learning Portal</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Modules Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Modules</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{module.lessons} lessons</p>
                  <Button className="w-full" onClick={() => navigate(`/module/${module.id}`)}>
                    Access Files
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ebooks Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Ebooks</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook) => (
              <Card key={ebook.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{ebook.title}</CardTitle>
                  <CardDescription>By {ebook.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{ebook.pages} pages</p>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reference Papers Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Reference Papers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {papers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{paper.title}</CardTitle>
                  <CardDescription>{paper.author} • {paper.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningPortal;
