import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const questions = [
  {
    id: 1,
    question: "What's your preferred scent family?",
    options: ["Floral", "Woody", "Oriental", "Fresh"]
  },
  {
    id: 2,
    question: "When do you typically wear perfume?",
    options: ["Day", "Night", "Special occasions", "All the time"]
  },
  {
    id: 3,
    question: "How would you describe your personality?",
    options: ["Adventurous", "Romantic", "Sophisticated", "Relaxed"]
  }
];

const FragranceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    // This is a simple recommendation logic. In a real application, this would be more sophisticated.
    if (answers[0] === "Floral" && answers[1] === "Day") {
      return "Daybreak Essence";
    } else if (answers[0] === "Woody" && answers[1] === "Night") {
      return "Midnight Allure";
    } else {
      return "Floral Symphony";
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">Find Your Perfect Scent</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <>
            <h3 className="text-xl font-semibold mb-4 text-secondary">{questions[currentQuestion].question}</h3>
            <RadioGroup onValueChange={handleAnswer} className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Your Perfect Scent</h3>
            <p className="text-lg mb-4 text-primary">{getRecommendation()}</p>
            <Button onClick={resetQuiz} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Take Quiz Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FragranceQuiz;