// components/quiz/QuizResult.tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";

type QuizResultProps = {
  correct: number;
  total: number;
  onRetry: () => void;
  onRestart: () => void;
  wrongList: { q: Question; a?: { chosenLetter: string; chosenText: string } }[];
};

export default function QuizResult({ correct, total, onRetry, onRestart, wrongList }: QuizResultProps) {
  return (
    <div>
      <Alert className="mb-6">
        <AlertTitle>Quiz Complete!</AlertTitle>
        <AlertDescription>
          You got <b>{correct}</b> out of <b>{total}</b> correct ({((correct / total) * 100).toFixed(1)}%)
        </AlertDescription>
      </Alert>
      {wrongList.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Review:</h3>
          {wrongList.map(({ q, a }, i) => (
            <div key={q.id} className="mb-3 p-3 border rounded">
              <div className="font-medium">{q.question}</div>
              <div>
                <span className="text-red-600">Your answer: {a ? `${a.chosenLetter}: ${a.chosenText}` : "No answer"}</span>
              </div>
              <div>
                <span className="text-green-600">
                  Correct: {q.correctOption}: {q.options[q.correctOption.charCodeAt(0) - 65]}
                </span>
              </div>
              {q.explanation && <div className="text-xs text-muted-foreground mt-1">{q.explanation}</div>}
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <Button onClick={onRetry}>Try Again</Button>
        <Button variant="secondary" onClick={onRestart}>New Quiz</Button>
      </div>
    </div>
  );
}