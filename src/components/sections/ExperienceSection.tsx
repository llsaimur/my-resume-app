import type { ExperienceItem } from '../../types';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MatrixTitle } from '../effects/MatrixTitle';
import { AnimatedContainer } from '../ui/AnimatedContainer';

interface ExperienceItemProps {
  experience: ExperienceItem;
}

function ExperienceItemCard({ experience }: ExperienceItemProps) {
  const { role, company, location, startDate, endDate, bullets } = experience;

  return (
    <Card variant="experience" className="relative z-10 w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div>
          <h3 className="font-semibold text-green-400 drop-shadow-[0_0_4px_rgba(0,255,70,0.8)] text-lg sm:text-xl">
            {role}{" "}
            <span className="text-green-300 font-normal">— {company}</span>
          </h3>
          {location && (
            <div className="text-sm text-green-200/80 font-mono">{location}</div>
          )}
        </div>
        <time className="text-sm text-green-200/80 font-mono mt-2 sm:mt-0">
          {startDate ?? "?"} — {endDate ?? "Present"}
        </time>
      </div>

      {bullets && (
        <ul className="mt-3 list-disc list-inside text-green-200/80 space-y-1 font-mono">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

interface ExperienceSectionProps {
  items?: ExperienceItem[];
}

export function ExperienceSection({ items = [] }: ExperienceSectionProps) {
  return (
    <Section 
      id="experience" 
      className="relative overflow-hidden bg-black" 
      withMatrixBackground
    >
      <AnimatedContainer className="relative z-10 w-full flex flex-col justify-center items-center py-16 sm:py-24 space-y-6">
        <MatrixTitle text="EXPERIENCE" />

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">
            No experience yet — add entries to resume.json
          </p>
        ) : (
          items.map((item) => (
            <ExperienceItemCard key={item.id} experience={item} />
          ))
        )}
      </AnimatedContainer>
    </Section>
  );
}