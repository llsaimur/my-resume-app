import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { TerminalButton } from '../ui/TerminalButton';
import { useRabbitMovement } from '../../hooks/useRabbitMovement';
import type { ResumeData } from '../../types';

interface ContactLinksProps {
  contact: ResumeData['contact'];
}

function ContactLinks({ contact }: ContactLinksProps) {
  if (!contact) return null;

  return (
    <div className="space-y-3 text-lg sm:text-xl">
      {contact.email && (
        <p>
          <span className="text-green-300">Email:</span>{" "}
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-green-200 transition-colors"
          >
            {contact.email}
          </a>
        </p>
      )}
      {contact.github && (
        <p>
          <span className="text-green-300">GitHub:</span>{" "}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 transition-colors"
          >
            {contact.github}
          </a>
        </p>
      )}
      {contact.linkedin && (
        <p>
          <span className="text-green-300">LinkedIn:</span>{" "}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 transition-colors"
          >
            {contact.linkedin}
          </a>
        </p>
      )}
    </div>
  );
}

interface HeroPromptProps {
  name: string;
}

function HeroPrompt({ name }: HeroPromptProps) {
  return (
    <>
      <p className="text-lg sm:text-xl">
        <span className="text-green-300">user@matrix</span>:
        <span className="text-green-500">~</span>$ whoami
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        {name}
      </h1>
      <p className="text-lg sm:text-2xl max-w-xl">
        Click the white rabbit <span className="animate-pulse">▌</span>
      </p>
    </>
  );
}

interface HeroInfoProps {
  data: ResumeData;
  onExit: () => void;
}

function HeroInfo({ data, onExit }: HeroInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-green-400 font-mono bg-black pt-80"
    >
      <div className="w-full max-w-4xl text-center">
        <p className="mb-6 text-xl sm:text-2xl">
          <span className="text-green-300">user@matrix</span>
          :<span className="text-green-500">~</span>$ cat about.txt
        </p>

        <p className="text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 leading-relaxed">
          {data.summary ?? 
            "Here's some secret info revealed when you follow the rabbit! You can put your summary or fun messages here."}
        </p>

        <ContactLinks contact={data.contact} />
        
        <div className="mt-8 flex justify-center gap-4">
          <TerminalButton
            href="/resume.pdf"
            download
            variant="red"
          >
            <span className="text-red-300">user@matrix</span>
            :<span className="text-red-500">~</span>$ download resume
          </TerminalButton>

          <TerminalButton
            onClick={onExit}
            variant="blue"
          >
            <span className="text-blue-300">user@matrix</span>
            :<span className="text-blue-500">~</span>$ exit
          </TerminalButton>
        </div>
      </div>
    </motion.div>
  );
}

interface HeroSectionProps {
  data: ResumeData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [showInfo, setShowInfo] = useState(false);
  const rabbitPos = useRabbitMovement();

  return (
    <Section id="hero" className="relative overflow-hidden bg-black h-screen">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black animate-pulse"></div>
        <div className="absolute inset-0 border-t border-green-800/20"></div>
        <div className="absolute inset-0 border-l border-green-800/20"></div>
      </div>

      {/* Rabbit */}
      <motion.div
      className="absolute w-12 h-12 cursor-pointer z-20"
      style={{
        backgroundImage: "url('/rabbit.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      animate={{ x: rabbitPos.x, y: rabbitPos.y }}
      transition={{ duration: 2, ease: "easeInOut" }}
      onClick={() => setShowInfo(true)}
      />

      {/* Hero terminal prompt */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-green-400 font-mono select-none">
        {!showInfo && <HeroPrompt name={data.name ?? "Anonymous"} />}
      </div>

      <AnimatePresence>
        {showInfo && <HeroInfo data={data} onExit={() => setShowInfo(false)} />}
      </AnimatePresence>
    </Section>
  );
}