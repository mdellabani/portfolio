import React, {memo} from 'react';

interface Skill {
  icon: string;
  label: string;
}

interface SkillCategory {
  category: string;
  icons: Skill[];
}
const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icons: [
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', label: 'Java'},
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        label: 'TypeScript',
      },
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', label: 'C++'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', label: 'HTML'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', label: 'CSS'},
    ],
  },
  {
    category: 'Tools, Libraries and Frameworks',
    icons: [
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', label: 'Spring Boot'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js'},
      {icon: '/assets/expo-icon.png', label: 'Expo (React Native)'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', label: 'Node.js'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', label: 'GitLab CI'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg', label: 'CircleCI'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', label: 'Jenkins'},
      {icon: '/assets/jfrog-icon.png', label: 'JFrog'},
      {icon: 'https://avatars.githubusercontent.com/u/3204514?s=200&v=4', label: 'SonarQube'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', label: 'Docker'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', label: 'Azure'},
      {icon: '/assets/aws-icon.png', label: 'AWS'},
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', label: 'GitHub'},
    ],
  },
  {
    category: 'Databases',
    icons: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        label: 'PostgreSQL',
      },
      {icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', label: 'SQLite'},
      {icon: '/assets/neo4j-icon.png', label: 'Neo4j'},
    ],
  },
];

const SkillIcon = memo(({icon, label}: Skill) => (
  <div className="skill-icon" style={{position: 'relative', display: 'inline-block', margin: '5px'}}>
    <img alt={label} src={icon} style={{width: '50px', height: '50px', cursor: 'pointer'}} />
    {/* Tooltip */}
    <div className="tooltip">{label}</div>

    {/* CSS */}
    <style>
      {`
        .skill-icon {
          position: relative;
          display: inline-block;
        }
        .tooltip {
          visibility: hidden;
          opacity: 0;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 10px;
          position: absolute;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 14px;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .skill-icon:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}
    </style>
  </div>
));

const TechStack = memo(() => {
  return (
    <div id="tech-stack" style={{textAlign: 'center', marginBottom: '20px', marginTop: '-20px'}}>
      <h1 style={{marginBottom: '20px', fontSize: '2rem'}}>
        <strong>TECH STACK</strong>
      </h1>
      <div>
        {skills.map((skill, index) => (
          <div key={skill.category} style={{marginBottom: '20px'}}>
            <h2>{skill.category}</h2>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
              {skill.icons.map(({icon, label}) => (
                <SkillIcon icon={icon} key={label} label={label} />
              ))}
            </div>
            {/* Horizontal line with equal margin */}
            {index < skills.length - 1 && <hr style={{margin: '20px 0'}} />}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TechStack;
