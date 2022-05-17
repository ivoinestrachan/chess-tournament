import React, { useState } from "react";
import { qna } from "./lib/data";
import { FaqSection } from "./FaqSection";

const Faq = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {qna.map((question, index) => (
        <FaqSection key={`${index}`} question={question} />
      ))}
    </div>
  );
};

export default Faq;