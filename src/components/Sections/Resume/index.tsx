import {memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import TechStack from '../TechStack';
import Publications from './Publications';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import Timeline from './TimelineItem';

const Resume = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <TechStack />
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <Timeline isLast={index === 0} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <Timeline item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Publications">
          <Publications />
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
