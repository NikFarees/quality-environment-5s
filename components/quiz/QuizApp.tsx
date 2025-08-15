"use client";
import React, { useState, useEffect, useRef } from "react";
import { QUESTIONS as QUESTION_BANK, Question } from "../../data/questions";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const letter = (index: number) => String.fromCharCode(65 + index);
const pad = (n: number) => String(n).padStart(2, "0");

export default function QuizApp() {
  // Quiz state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, { chosenLetter: string; chosenText: string }>>(new Map());
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTs, setStartTs] = useState<number>(0);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [theme, setTheme] = useState<string>("dark");

  // On mount, sync theme from localStorage to avoid hydration mismatch
  useEffect(() => {
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("quiz-theme") : null;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (started && !finished) {
      setStartTs(Date.now());
      setTimer(0);
      timerRef.current && clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimer(Math.floor((Date.now() - (startTs || Date.now())) / 1000));
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
    if (finished) {
      timerRef.current && clearInterval(timerRef.current);
    }
    // eslint-disable-next-line
    return undefined;
  }, [started, finished]);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("quiz-theme", theme);
  }, [theme]);

  // Start quiz
  const startQuiz = () => {
    // Pick 10 random questions
    const selected = shuffle([...QUESTION_BANK]).slice(0, 10).map(q => ({ ...q }));
    // Shuffle options and re-map correct answer
    selected.forEach((q: Question) => {
      const original = q.options.map((text: string, i: number) => ({ text, was: letter(i) }));
      shuffle(original);
      q.options = original.map((o: { text: string; was: string }) => o.text);
      const master = QUESTION_BANK.find((x: Question) => x.id === q.id)!;
      const correctText = master.options[{ A: 0, B: 1, C: 2, D: 3 }[master.correctOption as "A" | "B" | "C" | "D"]];
      const newIndex = q.options.findIndex((t: string) => t === correctText);
      q.correctOption = letter(newIndex);
    });
    setQuestions(selected);
    setIndex(0);
    setAnswers(new Map());
    setStarted(true);
    setFinished(false);
    setStartTs(Date.now());
    setTimer(0);
  };

  // Save answer
  const saveAnswer = (qid: number, chosenLetter: string, chosenText: string) => {
    setAnswers(prev => new Map(prev).set(qid, { chosenLetter, chosenText }));
  };

  // Navigation
  const goNext = () => {
    if (index < questions.length - 1) setIndex(i => i + 1);
    else setFinished(true);
  };
  const goPrev = () => setIndex(i => Math.max(0, i - 1));

  // Results
  const calcResults = () => {
    let correct = 0;
    let incorrect = 0;
    const wrongList: { q: Question; a: { chosenLetter: string; chosenText: string } | undefined }[] = [];
    questions.forEach(q => {
      const a = answers.get(q.id);
      if (a && a.chosenLetter === q.correctOption) correct++;
      else {
        incorrect++;
        wrongList.push({ q, a });
      }
    });
    const pct = questions.length ? ((correct / questions.length) * 100).toFixed(2) : "0.00";
    return { correct, incorrect, total: questions.length, pct, secs: timer, wrongList };
  };

  // Format time
  const formatTime = (secs: number) => `${pad(Math.floor(secs / 60))}:${pad(secs % 60)}`;

  // Theme toggle
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // UI
  if (!started) {
    return (
      <div className="container">
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
          <h1>Quality Environment (5S) — Quiz (v2)</h1>
          <div className="controls">
            <span className="pill">10 Questions</span>
            <button className="btn secondary" onClick={toggleTheme} title="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</button>
            <button className="btn" onClick={startQuiz}>Start Quiz</button>
          </div>
        </header>
        <div className="card" role="region" aria-live="polite">
          <div className="panel">
            <div className="meta">
              <span className="pill">0 / 10 (0 answered)</span>
              <span className="pill">00:00</span>
              <span className="tag">All questions required • Answers revealed at end</span>
            </div>
            <div className="progress" aria-hidden="true">
              <div className="bar" style={{ width: "0%" }}></div>
            </div>
            <div className="welcome" style={{ textAlign: "center", padding: "40px 20px" }}>
              <h2>Ready to Test Your 5S Knowledge?</h2>
              <p>This quiz will randomly select 10 questions from our bank of 20 5S methodology questions. <strong>All questions must be answered</strong> before you can submit your results.</p>
              <button className="btn" onClick={startQuiz}>Begin Quiz</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const results = calcResults();
    const perfectScore = results.wrongList.length === 0;
    return (
      <div className="container">
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
          <h1>Quality Environment (5S) — Quiz (v2)</h1>
          <div className="controls">
            <span className="pill">10 Questions</span>
            <button className="btn secondary" onClick={toggleTheme} title="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</button>
            <button className="btn" onClick={startQuiz}>New Quiz</button>
          </div>
        </header>
        <div className="card" role="region" aria-live="polite">
          <div className="panel">
            <div className="meta">
              <span className="pill">{questions.length} / {questions.length}</span>
              <span className="pill">{formatTime(results.secs)}</span>
              <span className="tag">Quiz Complete</span>
            </div>
            <div className="progress" aria-hidden="true">
              <div className="bar" style={{ width: "100%" }}></div>
            </div>
            <div className="dashboard" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", padding: 10 }}>
              <div className="stat">
                <h3>Total Correct</h3>
                <div className="value" style={{ color: "var(--accent-2)" }}>{results.correct}</div>
              </div>
              <div className="stat">
                <h3>Total Incorrect</h3>
                <div className="value" style={{ color: "var(--danger)" }}>{results.incorrect}</div>
              </div>
              <div className="stat">
                <h3>Percentage</h3>
                <div className="value">{results.pct}%</div>
              </div>
              <div className="stat">
                <h3>Time Taken</h3>
                <div className="value">{formatTime(results.secs)}</div>
              </div>
            </div>
            <div className="feedback">
              <h3>Feedback</h3>
              {perfectScore && <p className="small">Perfect score! 🎉</p>}
              {results.wrongList.map(({ q, a }, idx) => {
                const userAnswer = a ? `${a.chosenLetter}: ${a.chosenText}` : <em>No answer selected</em>;
                const correctIndex = q.correctOption.charCodeAt(0) - 65;
                const correctAnswer = `${q.correctOption}: ${q.options[correctIndex]}`;
                return (
                  <details key={q.id} open={idx === 0}>
                    <summary>Q{idx + 1}: {q.question}</summary>
                    <div className="fb">
                      <ul>
                        <li><strong>Your answer:</strong> {userAnswer}</li>
                        <li><strong>Correct answer:</strong> {correctAnswer}</li>
                        {q.explanation && <li><strong>Explanation:</strong> {q.explanation}</li>}
                      </ul>
                    </div>
                  </details>
                );
              })}
            </div>
            {/* Removed redundant Try Again and New Quiz buttons at the bottom */}
          </div>
        </div>
      </div>
    );
  }

  // In-progress quiz
  const current = questions[index];
  const answered = answers.size;
  const progressPct = ((index + 1) / questions.length) * 100;
  const isLast = index === questions.length - 1;
  const saved = answers.get(current.id);

  return (
    <div className="container">
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
        <h1>Quality Environment (5S) — Quiz (v2)</h1>
        <div className="controls">
          <span className="pill">10 Questions</span>
          <button className="btn secondary" onClick={toggleTheme} title="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</button>
          <button className="btn secondary" onClick={() => { setStarted(false); setFinished(false); }}>New Quiz</button>
        </div>
      </header>
        <div className="card" role="region" aria-live="polite">
          <div className="panel flex flex-col gap-14 sm:gap-20">
            <div className="meta mb-4">
              <span className="pill">{index + 1} / {questions.length}</span>
              <span className="pill">{formatTime(timer)}</span>
            </div>
            <div className="progress mb-4" aria-hidden="true">
              <div className="bar" style={{ width: `${progressPct}%` }}></div>
            </div>
            <div className="question flex flex-col gap-10 sm:gap-16">
              <div className="q-head">
                <div className="tag">Question {index + 1}</div>
                {!saved && <div className="tag" style={{ background: "#3d1a1a", borderColor: "#663333", color: "#ffaaaa", marginBottom: 8 }}>⚠ Answer required</div>}
                <h2 className="q-text">{current.question}</h2>
              </div>
              <div className="options" role="group" aria-label="Answer options">
                {current.options.map((text, i) => {
                  const optionLetter = letter(i);
                  const optionId = `q${current.id}_${optionLetter}`;
                  const isSelected = !!(saved && saved.chosenLetter === optionLetter);
                  return (
                    <label className={`option${isSelected ? " selected" : ""}`} key={optionId}>
                      <input
                        type="radio"
                        name={`q${current.id}`}
                        id={optionId}
                        value={optionLetter}
                        checked={isSelected}
                        onChange={() => saveAnswer(current.id, optionLetter, text)}
                      />
                      <span className="opt-key">{optionLetter}</span>
                      <span>{text}</span>
                    </label>
                  );
                })}
              </div>
              <div className="footer mt-10 flex gap-8">
                <button className="btn secondary" onClick={goPrev} disabled={index === 0}>Back</button>
                <button
                  className="btn"
                  onClick={() => {
                    if (!answers.get(current.id)) {
                      alert("Please select an answer before proceeding.");
                      return;
                    }
                    if (isLast) {
                      if (answers.size < questions.length) {
                        alert(`Please answer all questions before submitting. You have ${questions.length - answers.size} unanswered question(s).`);
                        return;
                      }
                      setFinished(true);
                    } else {
                      goNext();
                    }
                  }}
                >
                  {isLast ? "Submit All" : "Save & Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
