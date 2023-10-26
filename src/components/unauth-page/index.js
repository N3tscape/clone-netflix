"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  {
    ques: "Qu'est-ce que Netflix ?",
    ans: `Netflix est un service de streaming qui propose une grande variété d'émissions de télévision, de films, d'animes, de documentaires et bien plus encore, sur des milliers d'appareils connectés à Internet. Vous pouvez regarder autant que vous voulez, quand vous voulez, sans la moindre publicité, pour un prix mensuel modique. Il y a toujours quelque chose de nouveau à découvrir, et de nouvelles émissions et de nouveaux films sont ajoutés chaque semaine !`,
  },
  {
    ques: "Combien coûte Netflix ?",
    ans: `Regardez Netflix sur votre smartphone, votre tablette, votre Smart TV, votre ordinateur portable ou votre appareil de streaming, le tout pour un forfait mensuel fixe. Les forfaits vont de 13.49€ à 19.99€ par mois. Pas de frais supplémentaires, pas de contrat.`,
  },
  {
    ques: "Que puis-je regarder sur Netflix ?",
    ans: `Regardez n'importe où, n'importe quand. Connectez-vous avec votre compte Netflix pour regarder instantanément sur le web à l'adresse netflix.com depuis votre ordinateur personnel ou sur tout appareil connecté à Internet qui propose l'application Netflix, y compris les téléviseurs intelligents, les smartphones, les tablettes, les lecteurs multimédias en continu et les consoles de jeu.

    Vous pouvez également télécharger vos émissions préférées à l'aide de l'application iOS, Android ou Windows 10. Utilisez les téléchargements pour regarder vos émissions lorsque vous êtes en déplacement et sans connexion internet. Emportez Netflix partout avec vous.`,
  },
  {
    ques: "Comment puis-je annuler mon inscription ?",
    ans: `Netflix est flexible. Il n'y a pas de contrats ennuyeux ni d'engagements. Vous pouvez facilement résilier votre compte en ligne en deux clics. Il n'y a pas de frais d'annulation - vous pouvez démarrer ou arrêter votre compte à tout moment.`,
  },
  {
    ques: "Que puis-je regarder sur Netflix ?",
    ans: `Netflix dispose d'une vaste bibliothèque de longs métrages, de documentaires, de séries télévisées, d'animes, de films originaux Netflix primés, et bien plus encore. Regardez autant que vous voulez, quand vous voulez.`,
  },
  {
    ques: "Netflix est-il bon pour les enfants ?",
    ans: `L'expérience Netflix Kids est incluse dans votre abonnement pour permettre aux parents de contrôler les émissions de télévision et les films familiaux pendant que les enfants les regardent dans leur propre espace.

Les profils d'enfants sont dotés d'un contrôle parental protégé par un code PIN qui vous permet de restreindre le niveau de maturité des contenus que les enfants peuvent regarder et de bloquer des titres spécifiques que vous ne voulez pas qu'ils voient.`,
  },
];

function UnauthBanner({ router }) {
  return (
    <div className="h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
      <div className="bg-black bg-opacity-70 h-[100vh]">
        <div className="flex items-center justify-between">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={120}
            height={120}
            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
            onClick={() => router.push("/")}
          />
          <div className="flex mr-4 sm:mr-10">
            <button
              onClick={() => signIn("github")}
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded"
            >
              S'inscrire
            </button>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium">
            Films illimités, émissions de télévision, et plus encore...
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Regarder n'importe où. Annulez à tout moment.
          </h2>
          <div className="flex  justify-center">
            <button
              onClick={() => signIn("github")}
              className="bg-red-600 hover:bg-[#e50914] p-4 rounded"
            >
              S'identifier pour commencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnauthPage() {
  const router = useRouter();
  const [showCurrentAns, setShowCurrentAns] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <main>
        <div className="bg-[#000000]">
          <UnauthBanner router={router} />
          <div className="border-b-8 border-gray-800 pb-8">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Questions fréquemment posées
              </h1>
              {questions.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    onClick={() =>
                      setShowCurrentAns(showCurrentAns === index ? null : index)
                    }
                    className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer"
                  >
                    <h2>{item.ques}</h2>
                    <PlusIcon className="h-7 w-7" color="white" />
                  </div>
                  {showCurrentAns === index && (
                    <div className="p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
