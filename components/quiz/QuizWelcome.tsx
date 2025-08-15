// components/quiz/QuizWelcome.tsx
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Question } from "@/data/questions";

export type QuizWelcomeProps = {
  chapters: Record<string, Question[]>;
  onStart: (chapter: string) => void;
  onToggleTheme?: () => void;
  theme?: string;
};

export default function QuizWelcome({
  chapters,
  onStart,
  onToggleTheme,
  theme,
}: QuizWelcomeProps) {
  return (
    <div className="container text-center py-10">
      <h1 className="text-2xl font-bold mb-6">Certified Productivity Specialist (CPS) Preparatory Course</h1>
      <div className="mb-8 mt-7">
        <h2 className="text-xl font-bold mb-2">Ready to Test Your 5S Knowledge?</h2>
        <p className="mb-2">
          Please choose a chapter below and answer 10 questions to test your knowledge.<br />
          <strong>You must answer all questions</strong> before you can submit your results.
        </p>
      </div>

      {/* Theme toggle button */}
      {onToggleTheme && (
        <div className="mb-6">
          <Button
            onClick={onToggleTheme}
            title="Toggle theme"
            className={
              theme === "dark"
                ? "bg-white text-yellow-500 hover:bg-gray-200 focus:ring-2"
                : "bg-gray-900 text-yellow-100 hover:bg-gray-800 focus:ring-2"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
        </div>
      )}

      {/* Chapter selection dropdown */}
      <div className="flex flex-col items-center justify-center gap-5 mt-2">
        <Select onValueChange={onStart}>
          <SelectTrigger className="min-w-[300px] px-8 py-4 text-lg font-bold rounded-xl shadow bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-150">
            <SelectValue placeholder="Select a Chapter" />
          </SelectTrigger>
          <SelectContent className="w-full max-w-[300px]">
            {Object.keys(chapters).map((chapter) => (
              <SelectItem key={chapter} value={chapter}>
                {chapter.replace(/chapter/i, "Chapter ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}