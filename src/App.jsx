import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import questions from './assets/questions';

const IfElsePracticeApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const saved = localStorage.getItem('currentQuestionIndex');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [userInputs, setUserInputs] = useState(() => {
    const saved = localStorage.getItem('userInputs');
    return saved ? JSON.parse(saved) : {};
  });
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem('userInputs', JSON.stringify(userInputs));
  }, [userInputs]);

  const currentQuestion = questions[currentQuestionIndex];

  const runCode = () => {
    const consoleLogs = [];
    const mockConsoleLog = (...args) => consoleLogs.push(args.join(' '));

    try {
      const code = currentQuestion.codeTemplate.map((line, index) => 
        line === '|' ? userInputs[currentQuestionIndex]?.[index] || '' : line
      ).join('\n');
      // eslint-disable-next-line no-new-func
      const userFunction = new Function('variables', 'mockConsoleLog', `
        const console = { log: mockConsoleLog };
        ${code}
        return solution(variables);
      `);

      userFunction(currentQuestion.variables, mockConsoleLog);

      setOutput(consoleLogs.join('\n'));

      // For simplicity, we'll consider the test passed if any output is produced
      const passedTest = consoleLogs.length > 0;

      setFeedback(passedTest 
        ? "Great job! Your condition produces an output. Check if it matches the expected outcome." 
        : "Your condition didn't produce any output. Make sure you're using console.log() in your code.");

    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setFeedback("There was an error in your code. Please check and try again.");
    }
  };

  const nextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setOutput('');
    setFeedback('');
  };

  const previousQuestion = () => {
    const prevIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
    setCurrentQuestionIndex(prevIndex);
    setOutput('');
    setFeedback('');
  };

  const handleInputChange = (index, value) => {
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [currentQuestionIndex]: {
        ...prevInputs[currentQuestionIndex],
        [index]: value
      }
    }));
  };

  const resetProgress = () => {
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('userInputs');
    setCurrentQuestionIndex(0);
    setUserInputs({});
    setOutput('');
    setFeedback('');
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>
          <Card.Title>If/Else Practice</Card.Title>
        </Card.Header>
        <Card.Body>
          <h2 className="h4 mb-3">Question {currentQuestion.id}</h2>
          <p>{currentQuestion.description}</p>
          <pre className="bg-light p-2 rounded">
            {currentQuestion.expectedOutcomes}
          </pre>
          <div className="bg-light p-2 rounded">
            {currentQuestion.codeTemplate.map((line, index) => (
              <div key={index} className="d-flex align-items-center">
                <pre className="me-2 mb-0">{line !== "|" ? line : "  "}</pre>
                {line === "|" && (
                  <Form.Control
                    value={userInputs[currentQuestionIndex]?.[index] || ''}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="flex-grow-1 bg-warning"
                    placeholder="Enter your condition here"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3">
            <Button onClick={previousQuestion} variant="outline-secondary" className="me-2">Previous Question</Button>
            <Button onClick={runCode} className="me-2">Test Condition</Button>
            <Button onClick={nextQuestion} variant="outline-secondary" className="me-2">Next Question</Button>
            <Button onClick={resetProgress} variant="outline-danger">Reset Progress</Button>
          </div>
        </Card.Body>
      </Card>

      {output && (
        <Card className="mt-3">
          <Card.Header>
            <Card.Title>Output</Card.Title>
          </Card.Header>
          <Card.Body>
            <pre className="bg-light p-2 rounded">{output}</pre>
          </Card.Body>
        </Card>
      )}

      {feedback && (
        <Alert variant={feedback.includes("Great job") ? "success" : "danger"} className="mt-3">
          <Alert.Heading>Feedback</Alert.Heading>
          <p>{feedback}</p>
        </Alert>
      )}
    </div>
  );
};

export default IfElsePracticeApp;