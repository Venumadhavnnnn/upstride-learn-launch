import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseData: Record<string, {
    name: string;
    description: string;
    topics: string[];
  }> = {
    python: {
      name: "Fundamentals of Python",
      description: "Python is a versatile and beginner-friendly programming language widely used in web development, data science, and automation. This course provides a comprehensive introduction to Python programming, covering essential concepts and practical applications.",
      topics: [
        "Python syntax and basic programming concepts",
        "Data types, variables, and operators",
        "Control flow and loops",
        "Functions and modules",
        "Object-oriented programming basics",
        "File handling and exception handling",
        "Working with libraries and packages",
        "Real-world project implementation"
      ]
    },
    fullstack: {
      name: "Fullstack Web Development",
      description: "Master the art of building complete web applications from frontend to backend. This comprehensive course covers modern web technologies and frameworks used by industry professionals.",
      topics: [
        "HTML5, CSS3, and responsive design",
        "JavaScript and modern ES6+ features",
        "React.js for frontend development",
        "Node.js and Express.js for backend",
        "Database design with SQL and NoSQL",
        "RESTful API development",
        "Authentication and security best practices",
        "Deployment and DevOps fundamentals"
      ]
    },
    cloud: {
      name: "Cloud Computing",
      description: "Learn to leverage cloud platforms to build, deploy, and scale applications. This course covers major cloud providers and essential cloud computing concepts for modern software development.",
      topics: [
        "Introduction to cloud computing concepts",
        "AWS, Azure, and Google Cloud Platform basics",
        "Virtual machines and containerization",
        "Cloud storage and databases",
        "Serverless computing",
        "Cloud security and compliance",
        "Cost optimization strategies",
        "Building scalable cloud architectures"
      ]
    },
    analytics: {
      name: "Data Analytics",
      description: "Transform raw data into actionable insights. This course teaches you how to analyze, visualize, and interpret data to drive business decisions using industry-standard tools and techniques.",
      topics: [
        "Data analysis fundamentals",
        "Statistical concepts and methods",
        "Excel for data analysis",
        "SQL for data querying",
        "Python libraries (Pandas, NumPy)",
        "Data visualization with Tableau and Power BI",
        "Business intelligence concepts",
        "Real-world case studies and projects"
      ]
    },
    datascience: {
      name: "Data Science",
      description: "Dive deep into the world of data science and learn to extract meaningful patterns from complex datasets. This course combines statistics, programming, and domain expertise to solve real-world problems.",
      topics: [
        "Data science workflow and methodology",
        "Advanced Python for data science",
        "Statistical analysis and hypothesis testing",
        "Machine learning fundamentals",
        "Data preprocessing and feature engineering",
        "Model evaluation and optimization",
        "Big data technologies",
        "End-to-end data science projects"
      ]
    },
    ai: {
      name: "Fundamentals of AI",
      description: "Explore the exciting field of Artificial Intelligence and understand how machines can learn and make intelligent decisions. This course provides a solid foundation in AI concepts and applications.",
      topics: [
        "Introduction to artificial intelligence",
        "AI history and evolution",
        "Problem-solving and search algorithms",
        "Knowledge representation",
        "Machine learning basics",
        "Neural networks introduction",
        "AI ethics and responsible AI",
        "Practical AI applications and projects"
      ]
    },
    ml: {
      name: "Machine Learning",
      description: "Master machine learning algorithms and techniques to build intelligent systems. This course covers both supervised and unsupervised learning with hands-on implementation.",
      topics: [
        "Machine learning fundamentals",
        "Supervised learning algorithms",
        "Unsupervised learning and clustering",
        "Model training and validation",
        "Feature selection and engineering",
        "Ensemble methods and boosting",
        "Deep learning introduction",
        "Real-world ML project implementation"
      ]
    },
    cv: {
      name: "Computer Vision",
      description: "Learn how computers can understand and process visual information from the world. This course covers image processing, object detection, and advanced computer vision techniques.",
      topics: [
        "Image processing fundamentals",
        "Computer vision basics",
        "Convolutional Neural Networks (CNNs)",
        "Object detection and recognition",
        "Image segmentation",
        "Face recognition systems",
        "Video analysis",
        "Practical computer vision projects"
      ]
    }
  };

  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/programs")}>Back to Programs</Button>
        </div>
      </div>
    );
  }

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
            <Button variant="ghost" onClick={() => navigate("/programs")}>
              Programs
            </Button>
          </div>
        </nav>
      </header>

      {/* Course Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/programs")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programs
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">{course.name}</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">About This Course</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
              <p className="text-muted-foreground mb-4">
                Our courses are designed to take you from basic to advanced fundamentals, 
                ensuring a strong foundation in your chosen field. You'll be guided by 
                top-class mentors and industry professionals who bring real-world experience 
                and expertise to every lesson.
              </p>
              <p className="text-muted-foreground">
                Join thousands of students who have transformed their careers with UPSTRIDE's 
                comprehensive learning programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
