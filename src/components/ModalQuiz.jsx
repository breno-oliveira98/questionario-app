import { useState } from "react";

export const ModalQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "question1",
      answer: "",
    },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: `question ${questions.length + 1}`, answer: "" }]);
    console.log(questions);
    
  };

  return (
    <div className="w-full">
      {questions.map((q, i) => (
        <div>
          <div
            key={i}
            className="border-2 flex items-center mb-3 bg-white justify-center border-yellow-500 rounded-md w-full h-[150px] py-5 px-8"
          >
            <div className="w-full space-y-3">
              <input
                className="w-26  outline-none rounded-md px-1"
                type="text"
                value={q.question}
              />
              <input
                className="bg-gray-100 rounded-md outline-none w-full h-auto py-3"
                value={q.answer}
                type="text"
              />
          <div className="flex w-full justify-end px-1"><i className="bi bi-trash hover:text-red-600 cursor-pointer"></i>Delete</div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="w-full mt-5 text-lg font-semibold bg-white rounded-md h-12 text-green-400"
        onClick={addQuestion}
      >
        Add Question
      </button>

      {/* <div className="mt-5">
        <h3 className="text-xl font-semibold">Perguntas Adicionadas:</h3>
        <ul>
          {questions.map((questionData, index) => (
            <li key={index} className="mt-2">
              <strong>Question {index + 1}: </strong>
              {questionData.question} - <strong>Answer:</strong>{" "}
              {questionData.answer}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
