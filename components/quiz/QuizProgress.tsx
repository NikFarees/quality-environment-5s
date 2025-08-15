// components/quiz/QuizProgress.tsx
import { Progress } from "@/components/ui/progress";

type QuizProgressProps = {
  current: number;
  total: number;
};

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const percent = (current / total) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}