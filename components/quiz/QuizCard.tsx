// components/quiz/QuizCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import QuizWelcome from "./QuizWelcome";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import QuizProgress from "./QuizProgress";
import { useState } from "react";
import { QUESTIONS, Question } from "@/data/questions";

export default function QuizCard() {
  // Quiz state logic will go here
  // For now, just show the welcome screen
  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardContent>
        <QuizWelcome />
      </CardContent>
    </Card>
  );
}