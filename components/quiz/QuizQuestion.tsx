// components/quiz/QuizQuestion.tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/questions";

type QuizQuestionProps = {
  question: Question;
  value?: string;
  onChange: (value: string) => void;
};

export default function QuizQuestion({ question, value, onChange }: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <RadioGroup value={value} onValueChange={onChange}>
        {question.options.map((option, idx) => (
          <div key={idx} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value={String.fromCharCode(65 + idx)} id={`option-${idx}`} />
            <Label htmlFor={`option-${idx}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}