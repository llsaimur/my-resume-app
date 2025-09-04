import type { EducationItem } from '../../types';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MatrixTitle } from '../effects/MatrixTitle';
import { AnimatedContainer } from '../ui/AnimatedContainer';

interface EducationItemProps {
  education: EducationItem;
}

function EducationItemCard({ education }: EducationItemProps) {
  const { degree, school, period, notes } = education;

  return (
    <Card variant="experience" className="relative z-10 w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div>
          <h3 className="font-semibold text-green-400 drop-shadow-[0_0_4px_rgba(0,255,70,0.8)] text-lg sm:text-xl">
            {degree}
          </h3>
          <div className="text-green-200/80 text-sm">{school}</div>
        </div>
        <time className="text-green-200/80 text-sm font-mono mt-2 sm:mt-0">
          {period}
        </time>
      </div>

      {notes && (
        <ul className="mt-3 list-disc list-inside text-green-200/80 space-y-1 font-mono">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

interface EducationSectionProps {
  items: EducationItem[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <Section 
      id="education" 
      className="relative overflow-hidden bg-black" 
      withMatrixBackground
    >
      <AnimatedContainer className="relative z-10 w-full flex flex-col justify-center items-center py-16 sm:py-24 space-y-6">
        <MatrixTitle text="EDUCATION" />

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">
            No education yet — add entries to resume.json
          </p>
        ) : (
          items.map((edu) => (
            <EducationItemCard key={edu.id} education={edu} />
          ))
        )}
      </AnimatedContainer>
    </Section>
  );
}