import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Video, Download } from "lucide-react";

const ModuleDetail = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  const moduleData: Record<string, { title: string; description: string }> = {
    "fundamentals-of-ai": {
      title: "Fundamentals of AI",
      description: "Master the core concepts of Artificial Intelligence"
    },
    "placement": {
      title: "Placement",
      description: "Prepare for placements with interview prep and career guidance"
    }
  };

  const currentModule = moduleId ? moduleData[moduleId] : null;

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Module Not Found</CardTitle>
            <CardDescription>The requested module does not exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/learning-portal")}>
              Back to Learning Portal
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/learning-portal")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-primary">{currentModule.title}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About This Module</CardTitle>
            <CardDescription>{currentModule.description}</CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-8">
          {/* Files will be uploaded here in future */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Module Files</h2>
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-2">No files uploaded yet</p>
                <p className="text-sm text-muted-foreground">Files will be available here once uploaded</p>
              </CardContent>
            </Card>
          </section>

          {/* Video Lectures Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Video Lectures</h2>
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Video className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-2">No videos available yet</p>
                <p className="text-sm text-muted-foreground">Video lectures will be added soon</p>
              </CardContent>
            </Card>
          </section>

          {/* Study Materials Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Study Materials</h2>
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Download className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-2">No study materials yet</p>
                <p className="text-sm text-muted-foreground">Materials will be uploaded for download</p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ModuleDetail;
