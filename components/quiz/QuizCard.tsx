// components/quiz/QuizCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import QuizWelcome from "./QuizWelcome";

export default function QuizCard() {
  const [theme, setTheme] = useState("dark");
  
  // You'll need to import your CHAPTERS data here
  const chapters = {}; // Replace with your actual chapters data
  
  const onStart = (chapter: string) => {
    // Handle quiz start logic
    console.log("Starting quiz for:", chapter);
  };
  
  const onToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardContent>
        <QuizWelcome
          chapters={chapters}
          onStart={onStart}
          onToggleTheme={onToggleTheme}
          theme={theme}
        />
      </CardContent>
    </Card>
  );
}