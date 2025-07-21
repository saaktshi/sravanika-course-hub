import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import { Search } from "lucide-react";

const coursesData = [
  {
    id: "1",
    title: "Hindi Language Mastery",
    language: "Hindi",
    description: "Complete Hindi language course from basics to advanced level",
    modules: 20,
    duration: "3 months",
    students: 450,
    rating: 4.8,
    price: 150,
    level: "Beginner",
    category: "Language"
  },
  {
    id: "2",
    title: "Tamil Language Excellence",
    language: "Tamil",
    description: "Comprehensive Tamil language learning program",
    modules: 20,
    duration: "3 months",
    students: 320,
    rating: 4.7,
    price: 150,
    level: "Beginner",
    category: "Language"
  },
  {
    id: "3",
    title: "English Communication Skills",
    language: "English",
    description: "Master English speaking, writing, and communication",
    modules: 20,
    duration: "4 months",
    students: 680,
    rating: 4.9,
    price: 150,
    level: "Intermediate",
    category: "Communication"
  },
  {
    id: "4",
    title: "Spoken English Confidence",
    language: "English",
    description: "Build confidence in spoken English with practical exercises",
    modules: 20,
    duration: "2 months",
    students: 520,
    rating: 4.8,
    price: 150,
    level: "Beginner",
    category: "Communication"
  },
  {
    id: "5",
    title: "English Grammar Fundamentals",
    language: "English",
    description: "Complete grammar course with rules and practice",
    modules: 20,
    duration: "3 months",
    students: 380,
    rating: 4.6,
    price: 150,
    level: "Beginner",
    category: "Grammar"
  },
  {
    id: "6",
    title: "Mathematics (Class 10)",
    language: "English/Hindi",
    description: "Complete mathematics course for 10th grade students",
    modules: 20,
    duration: "6 months",
    students: 420,
    rating: 4.7,
    price: 150,
    level: "School",
    category: "School Subjects"
  }
];

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "Language", label: "Languages" },
    { id: "Communication", label: "Communication" },
    { id: "Grammar", label: "Grammar" },
    { id: "School Subjects", label: "School Subjects" }
  ];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of expert-designed courses. Start with Module 1 for free!
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="grid w-full grid-cols-5 md:w-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs md:text-sm"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;