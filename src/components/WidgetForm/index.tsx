import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.png";
import ideaImageUrl from "../../assets/idea.png";
import thoughtImageUrl from "../../assets/thought.png";

import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

// Cria um Objeto que retorna um array de objetos
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

//retorna as chaves dos tipos de feedbacks
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
      setFeedbackType(null);
    }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center 
        shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
    

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
          <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback} />
      )}

      <footer className="text-sx text-neutral-400">
        Feito com ♥ por Daniela Goulart{" "}
        <a className="underline underline-offset-2"
          href="https://github.com/danigoulart">
          Daniela Goulart </a>

      </footer>
    </div>
  );
}
