import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { MatrixTitle } from '../effects/MatrixTitle';
import { AnimatedContainer } from '../ui/AnimatedContainer';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section 
      id="skills" 
      className="relative overflow-hidden bg-black" 
      withMatrixBackground
    >
      <AnimatedContainer className="relative z-10 w-full flex flex-col justify-center items-center py-16 sm:py-24 space-y-6">
        <MatrixTitle text="TECHNICAL SKILLS" />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.div key={skill} whileHover={{ scale: 1.05 }}>
              <Badge variant="skill">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </AnimatedContainer>
    </Section>
  );
}