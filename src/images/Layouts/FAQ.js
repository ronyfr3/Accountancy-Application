import React, { useState } from "react";
import { BiUpArrow, BiRightArrow } from "react-icons/bi";
const FAQ = () => {
  const [click, setClick] = useState(false);
  const toggle = (i) => {
    if (click === i) {
      return setClick(null);
    }
    setClick(i);
  };
  const data = [
    {
      question: "where are you based?",
      answer:
        "Oasis Accountants has three offices - our headquarters in Chiswick and our newest office in Bromley & Bishopsgate.",
    },
    {
      question: "will i be charged my initial consultations?",
      answer:
        "No. All initial consultations are free of charge with no obligation.",
    },
    {
      question: "what type of customers do you do accountancy for ?",
      answer:
        "We provide accountancy services to small/medium sized businesses, personal customers and umbrella service customers. Our customers range from an individual needing help with a tax return to corporations requiring us to look after their complete financial management.",
    },
    {
      question: "how qualified is the oasis accountants team?",
      answer:
        "Our team is competitive and qualified with ACCA, CIMA & ACA. All these professional bodies are highly regulated to perform our fiduciary responsibilities for clients.",
    },
    {
      question: "does it matter where my business is located?",
      answer:
        "Absolutely Not. We're an online practice so we will work with you using Skype, phone and email. So you can work with us wherever you are.",
    },
  ];
  return (
    <div className="accordian">
      <h1 className="accordian_frequently_h1">Frequently Asked Questions</h1>
      <div className="accordian_info">
        {data.map((x, i) => {
          const { answer, question } = x;
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="accordian_content"
            >
              <div className="question_icon">
                <h1 className="question">{question}</h1>
                {click === i ? (
                  <span>
                    <BiUpArrow className="arrow_faq" />
                  </span>
                ) : (
                  <span>
                    <BiRightArrow className="arrow_faq" />
                  </span>
                )}
              </div>
              <p className={`answer ${click === i ? "show" : ""}`}>{answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
