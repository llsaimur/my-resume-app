import type { Project, ProjectsData } from '../../types';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MatrixTitle } from '../effects/MatrixTitle';
import { AnimatedContainer } from '../ui/AnimatedContainer';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tech, repo, link } = project;

  return (
    <Card variant="project" className="flex flex-col justify-between h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-green-400 drop-shadow-[0_0_4px_rgba(0,255,70,0.8)]">
            {name}
          </h4>
          <p className="mt-2 text-green-200/80 text-sm font-mono">
            {description}
          </p>

          {tech && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t} variant="tech">
                  {t}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end gap-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-green-400 hover:text-green-200 transition-colors font-mono"
            >
              Code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-green-400 hover:text-green-200 transition-colors font-mono"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

interface ProjectsSectionProps {
  data: ProjectsData;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const projects = data.projects ?? [];

  return (
    <Section 
      id="projects" 
      className="relative overflow-hidden bg-black" 
      withMatrixBackground
    >
      <AnimatedContainer className="relative z-10 w-full flex flex-col justify-center items-center py-16 sm:py-24 space-y-6">
        <MatrixTitle text="PROJECTS" />

        {projects.length === 0 ? (
          <p className="text-gray-500 text-center">
            No projects configured — add entries to projects.json
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatedContainer>
    </Section>
  );
}