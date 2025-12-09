import React from "react";
import "./AskedQuestion.scss";

const AskedQuestion = () => {
  const questionLists = [
    {
      question: "Do you have any non-dairy milk options?",
      description:
        "This is the first item’s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes...",
    },
    {
      question: "What is your signature drink?",
      description:
        "It is hidden by default, until the collapse plugin adds the appropriate classes...",
    },
    {
      question: "What are your hours of operation?",
      description:
        "This is the third item’s accordion body...",
    },
  ];

  return (
    <div className="container question-wrapper">
      <h1 className="question-heading">Do you have any questions???</h1>
      <p className="question-inquiry">
        Couldn't find what you are looking for? Check our FAQ
      </p>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        {questionLists.map((details, index) => {
          const headingId = `heading-${index}`;
          const collapseId = `collapse-${index}`;

          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {details.question}
                </button>
              </h2>

              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <div className="accordion-body">{details.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AskedQuestion;
