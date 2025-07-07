// src/pages/MetricDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// New flat metrics array
const metrics = [
  { label: 'Spacing', color: 'text-red-500', value: 90 },
  { label: 'Structure', color: 'text-purple-500', value: 95 },
  { label: 'Confidence', color: 'text-green-500', value: 80 },
  { label: 'Social Skills', color: 'text-orange-500', value: 60 },
  { label: 'Hireability', color: 'text-blue-500', value: 30 },
];


const questionsByMetric = {
  Spacing: [
    {
      question: 'What is spacing in web design?',
      userAnswer: 'It’s just margin.',
      correctAnswer:
        'It includes margin, padding, line-height, and white space.',
    },
    {
      question: 'Why is spacing important?',
      userAnswer: 'To make it look nice.',
      correctAnswer: 'To improve readability, clarity, and focus.',
    },
  ],
  Structure: [
    {
      question: 'How would you structure an HTML document?',
      userAnswer: 'Use divs.',
      correctAnswer:
        'Use semantic tags like header, main, section, footer, etc.',
    },
  ],
  // Add other metric questions here...
};

export default function MetricDetail() {
  const { metricName } = useParams();
const metric = metrics.find((m) => m.label === metricName);
  const questions = questionsByMetric[metricName] || [];

  const [index, setIndex] = useState(0);
  const question = questions[index];

  if (!metric) {
    return <p className="text-red-600">Invalid metric.</p>;
  }

  const next = () => setIndex((i) => (i + 1 < questions.length ? i + 1 : i));
  const prev = () => setIndex((i) => (i - 1 >= 0 ? i - 1 : i));

  return (
    <>
      {/* Large Progress Circle */}
      <div
        style={{ marginTop: 20 }}
        className="flex flex-col items-center mb-8"
      >
        <svg width="140" height="140" className="mb-2">
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#e5e7eb" // Tailwind gray-200
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            strokeDasharray={2 * Math.PI * 60}
            strokeDashoffset={2 * Math.PI * 60 * (1 - metric.value / 100)}
            className={`${metric.color} transition-all duration-700`}
            strokeLinecap="round"
          />
          <text
            x="70"
            y="78"
            textAnchor="middle"
            className={`text-2xl font-bold ${metric.color}`}
          >
            {metric.value}
          </text>
        </svg>

        {/* Metric Label */}
        <p className={`mt-2 text-lg ${metric.color} font-medium`}>
          {metricName}
        </p>
      </div>

      {/* Gray Paragraph Box with Q&A */}
      {question && (
        <div
          style={{ marginTop: 40 }}
          className="bg-gray-300 p-8 rounded-xl shadow-md w-full max-w-5xl mx-auto mt-16 text-center space-y-6"
        >
          <p className="text-black text-lg font-medium">
            <strong>Question:</strong> {question.question}
          </p>
          <p className="text-red-600">
            <strong>Your Answer:</strong> {question.userAnswer}
          </p>
          <p className="text-green-600">
            <strong>Correct Answer:</strong> {question.correctAnswer}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
      ${
        index === 0
          ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      }`}
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={index === questions.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
      ${
        index === questions.length - 1
          ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      }`}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* No questions available */}
      {!question && (
        <p
          style={{ marginTop: 40 }}
          className="text-center text-gray-500 mt-10"
        >
          No questions found for this metric.
        </p>
      )}
    </>
  );
}
