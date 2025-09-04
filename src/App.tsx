import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';

// JSON imports - keep your existing imports but update the types
import resumeRaw from './data/resume.json';
import projectsRaw from './data/projects.json';
import technicalSkillsRaw from './data/technicalskills.json';
import educationRaw from './data/education.json';

import type { ResumeData, ProjectsData, EducationData, TechnicalSkillsData } from './types/index';

// Cast JSON to proper types
const resume = resumeRaw as unknown as ResumeData;
const projects = projectsRaw as unknown as ProjectsData;
const skills = technicalSkillsRaw as unknown as TechnicalSkillsData;
const education = educationRaw as unknown as EducationData;

function AppFooter({ name }: { name: string }) {
  return (
    <footer className="border-t mt-12 border-green-700 w-full">
      <div className="px-4 py-6 text-sm w-full text-center text-green-400">
        © {new Date().getFullYear()} {name}. Built with React + Tailwind.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-green-400 antialiased font-mono">
      <Header data={resume} />

      <main id="main" className="w-full">
        <HeroSection data={resume} />
        <ExperienceSection items={resume.experience} />
        <ProjectsSection data={projects} />
        <EducationSection items={education.education} />
        <SkillsSection skills={skills.technicalSkills} />
      </main>

      <AppFooter name={resume.name} />
    </div>
  );
}
