// components/quiz/QuizWelcome.tsx
import { Button } from "@/components/ui/button";

type QuizWelcomeProps = {
  onStart?: () => void;
};

export default function QuizWelcome({ onStart }: QuizWelcomeProps) {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold text-primary mb-4">Ready to Test Your 5S Knowledge?</h2>
      <p className="text-muted-foreground mb-6">
        This quiz will randomly select 10 questions from our bank of 20 5S methodology questions.
        <br />
        <strong>All questions must be answered</strong> before you can submit your results.
      </p>
      <Button size="lg" onClick={onStart}>
        Begin Quiz
      </Button>
    </div>
  );
}