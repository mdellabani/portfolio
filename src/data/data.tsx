import {
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SoundCloudIcon from '../components/Icon/SoundCloudIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background.webp';
// import heroImage from '../images/header-background.webp';
import heroImage from '../images/cs.jpg';
import brick from '../images/portfolio/Brick.png';
import halalOs from '../images/portfolio/HalalOs.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mahieddine Dellabani',
  description: 'Mahieddine Dellabani Resume Website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mahieddine Dellabani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Full remote <strong className="text-stone-100">Technical Lead Manager</strong>, currently working at{' '}
        <strong className="text-stone-100">ActiveViam</strong> helping build Atoti, a modern data analytics solution for
        financial systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing football, digging vinyl and fooling with my synths, or exploring
        the beautiful French West Coast.
      </p>
    </>
  ),
  actions: [
    {
      href: './assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Technical Engineering Manager with strong technical skills. Autonomous, self-motivated
  and curious, but mostly not afraid of new challenges and eager to learn new technologies.
  Open minded, sociable and used to work in a multicultural collaborative environment. As
  an engineering manager, I strive at making a great product for both users and developers :
  Foster innovation, promote best practice and ensure engineers’ happiness.`,
  aboutItems: [
    {label: 'Location', text: 'Bahus-Soubiran, France', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French / Algerian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Vinyl, Piano, Surf, Snorkling', Icon: SparklesIcon},
    {label: 'Employment', text: 'ActiveViam.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programing',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'JavaScript / TypeScript',
        level: 7.5,
      },
      {
        name: 'Bash',
        level: 6,
      },

      {
        name: 'C / C++',
        level: 4,
      },
      {
        name: 'SQL / MDX',
        level: 6,
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'Spring Cloud Sleuth',
        level: 9,
      },
      {
        name: 'Spring Boot',
        level: 7,
      },
      {
        name: 'React/Next.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'JDK and Java Building Tools',
        level: 8,
      },
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'CI/CD',
        level: 8,
      },
      {
        name: 'Docker',
        level: 8,
      },
    ],
  },
  {
    name: 'Cloud Services',
    skills: [
      {
        name: 'AWS - S3',
        level: 7,
      },
      {
        name: 'Azure - Storage',
        level: 7,
      },
      {
        name: 'Azure - Durable Functions',
        level: 6,
      },
      {
        name: 'GCP - Vision API',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Halal OS',
    description: 'Linx based operating system.',
    url: 'https://github.com/mdellabani/HalalOS',
    image: halalOs,
  },
  {
    title: 'Break Out',
    description: 'Old School Brick Game on FPGAs.',
    url: 'https://github.com/mdellabani/Brick',
    image: brick,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2014 - October 2018 ',
    location: 'Université Grenoble Alpes',
    title: 'PhD in Computer Science and Mathematics',
    content: (
      <p>
        My thesis was oriented around the design, optimization and validation of distributed real-time application for
        embedded systems. Particularly, it focuses on the use of formal methods to solve problems related to the
        distributed real-time environment (communication delay, optimization issues, clock drift).
        <br />
        <b>Keywords</b>: Formal methods, model based development, timed automata, compiler, verification.
      </p>
    ),
  },
  {
    date: 'Fall 2014',
    location: 'Iowa State University - USA',
    title: 'Exchange Student in Computer Engineering',
    content: (
      <p>
        <b>Main subjects</b>: Advanced Computer Architecture, Reconfigurable Systems, Distributed Software Development.
        <br />
      </p>
    ),
  },
  {
    date: 'September 2011 - September 2014',
    location: 'Grenoble INP PHELMA/ENSIMAG - France',
    title: 'Engineering Diploma - Embedded Software and Systems',
    content: (
      <p>
        <b>Main subjects</b>: Mathematics, Programming, Operational Research, Operat- ing Systems, Real-Time Embedded
        Systems, Hardware Design.
        <br />
        <b>Thesis</b>: Vectorization of compression algorithms using SIMD instructions. Realtors: Prof. S. Viardot, Ing.
        R. Schulze, Dr. T. Willhalm. Thesis activity carried out during the final year project at SAP SE
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2019 - September 2022',
    location: 'Activeviam - Full Remote (1 week per month in Paris)',
    title: 'Technical Engineering Manager (6 people)',
    content: (
      <>
        As part of the R&D team, I design and build Atoti, a real-time decisive data analytic software for financial
        services.
        <ul>
          <li>
            - Product Development: Design, build, test and deploy of Atoti Java API capabilities: Aggregation engine,
            real-time updates, distributed computing, MDX querying
          </li>
          <li>
            - Monitoring: Involved in enhancements and implementations of Atoti Application Performance Monitoring
            stack: Tracing, metrics and logs. <b>Stack</b>: Zipkin, Logstash, Grafana, Prometheus, Docker
          </li>
          <li>- L2 Support : Solving performance issues and help the clients using the APIs</li>
          <li>
            - Internship and university project supervisor : Maximize the impact of new JDK capabilities in Atoti Java
            API (project
            <a data-style="color:red;" href="https://openjdk.org/projects/loom/">
              {' '}
              Loom
            </a>{' '}
            and <a href="https://openjdk.org/projects/panama/">Panama</a>)
          </li>
          <li>
            {' '}
            <b>Keywords</b>: In-Memory, Distributed System, Monitoring, REST, MDX, OLAP{' '}
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'September 2018 - June 2019',
    location: 'INGIMA - Paris',
    title: 'R&D Software Engineering',
    content: (
      <p>
        INGILAB is the Innovation Lab and POC Factory of INGIMA. It aims at proposing new possibilities via its motto
        "explore by doing"​. As part of INGILAB I worked on research studies and proof of concept in several fields
        (image processing, machine learning, embedded systems, etc.)
      </p>
    ),
  },
  {
    date: 'October 2014 - September 2018',
    location: ' Verimag - Grenoble',
    title: 'Full Time Researcher (PhD)',
    content: <p></p>,
  },
  {
    date: 'September 2015 - September 2016',
    location: 'IUT Valence - Université Grenoble Alpes - Valence',
    title: 'Teaching Fellow',
    content: (
      <p>
        - Introduction to Excel (Freshmen)
        <br /> - Introduction to Relation Databases (Sophomore)
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'mahieddine.dellabani@gmail.com',
      href: 'mailto:mahieddine.dellabani@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bahus-Soubiran, France',
      href: 'https://www.google.com/maps/place/40320+Bahus-Soubiran/@43.6744061,-0.386931,13z/data=!3m1!4b1!4m6!3m5!1s0xd56724b36f36cf1:0x2db7b3c19a509813!8m2!3d43.673555!4d-0.356005!16s%2Fm%2F03nvvzp',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'mdellabani',
      href: 'https://github.com/mdellabani',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mdellabani'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mdellabani/'},
  {label: 'Soundcloud', Icon: SoundCloudIcon, href: 'https://soundcloud.com/soul_ink_md'},

  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
