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
import heroImage from '../images/gruvbox.png';
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
  name: `Mahieddine Dellabani`,
  role: `Tech Lead | Scalable & High-Performance Systems`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a seasoned R&D software engineer with deep expertise in Java, JVM internals, and high-performance database
        systems. My work focuses on building efficient, scalable, and reliable software, with a strong emphasis on
        concurrency, distributed systems, and observability. I have extensive experience in CI/CD, containerization, and
        monitoring stacks, ensuring robust and maintainable deployments.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Passionate about software architecture and clean code, I continuously explore emerging technologies and
        experiment with new features to solve real-world challenges. I take a pragmatic approach to reducing technical
        debt, optimizing performance, and designing systems that balance scalability, maintainability, and long-term
        efficiency.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Beyond technical expertise, I have experience leading teams, mentoring engineers, and contributing to product
        roadmaps, ensuring alignment between technical execution and business goals.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently, I lead development as CTO of a sports-focused web and mobile application, leveraging my expertise
        across multiple technologies to drive technical excellence.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/portfolio.pdf',
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
  description: `R&D software enginner with strong technical skills. Autonomous, self-motivated
  and curious, but mostly not afraid of new challenges and eager to learn new technologies.
  Open minded, sociable and used to work in a multicultural collaborative environment. As
  an engineering manager, I strive at making a great product for both users and developers :
  Foster innovation, promote best practice and ensure engineers’ happiness.`,
  aboutItems: [
    {label: 'Location', text: 'Saint-Medard, 64370, France', Icon: MapIcon},
    {label: 'Age', text: calculateAge('1990-11-27'), Icon: CalendarIcon},
    {label: 'Nationality', text: 'French / Algerian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Vinyl, Piano, Surf, Snorkling', Icon: SparklesIcon},
    {label: 'Employment', text: 'Freelance.', Icon: OfficeBuildingIcon},
  ],
};

function calculateAge(birthdate: string | Date): string {
  const birth = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  // Adjust age if birthdate hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age.toString();
}

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
        level: 8,
      },
      {
        name: 'SQL / MDX',
        level: 7,
      },
      {
        name: 'Bash',
        level: 6,
      },

      {
        name: 'C / C++',
        level: 5,
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
        level: 8,
      },
      {
        name: 'Expo',
        level: 6,
      },
      {
        name: 'React/Next.js',
        level: 5,
      },
    ],
  },
  // {
  //   name: 'Tools',
  //   skills: [
  //     {
  //       name: 'JDK and Java Building Tools',
  //       level: 8,
  //     },
  //     {
  //       name: 'Git',
  //       level: 9,
  //     },
  //     {
  //       name: 'CI/CD',
  //       level: 8,
  //     },
  //     {
  //       name: 'Docker',
  //       level: 8,
  //     },
  //   ],
  // },
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
    description: 'Linx based operating system',
    url: 'https://github.com/mdellabani/HalalOS',
    image: halalOs,
  },
  {
    title: 'Break Out',
    description: 'Old School Brick Game on FPGAs',
    url: 'https://github.com/mdellabani/Brick',
    image: brick,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Fall 2014',
    location: 'Iowa State University - USA',
    title: 'Exchange Student in Computer Engineering',
    content: (
      <>
        <div>
          <span className="tag">Advanced Computer Architecture</span>
          <span className="tag">Reconfigurable Systems</span>
          <span className="tag">Distributed Software Development</span>
        </div>
      </>
    ),
  },
  {
    date: '09/2011 - 09/2014',
    location: 'Grenoble INP PHELMA/ENSIMAG - France',
    title: 'Engineering Diploma - Embedded Software and Systems',
    content: (
      <>
        <div className="bullet">
          <span className="bullet-icon">🚀</span>{' '}
          <span className="bullet-text">
            <strong>Engineering thesis:</strong> Vectorization of compression algorithms using SIMD instructions.
            Realtors: Prof. S. Viardot, Ing. R. Schulze, Dr. T. Willhalm. Thesis activity carried out during the final
            year project at SAP SE, Walldorf, Germany.
          </span>
        </div>
        <div>
          <span className="tag">Mathematics</span>
          <span className="tag">Programming</span>
          <span className="tag">Operational Research</span>
          <span className="tag">Operating Systems</span>
          <span className="tag">Real-Time Embedded Systems</span>
          <span className="tag">Hardware Design</span>
          <span className="tag">C++</span>
          <span className="tag">SAP Hana</span>
        </div>
        <br />
      </>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '09/2023 - 02/2025',
    location: 'Huawei - Full Remote (1 week per month in Grenoble)',
    title: 'R&D Software Engineer Freelance',
    content: (
      <>
        Grenoble Fermat Lab. is responsible for advanced technical research and development of Model-based and Formal
        methods for different business domains including Automotive and ICT. The team is responsible for building formal
        modeling, simulation, verification and code generation tools for the design and development of trustworthy and
        efficient embedded software.
        <br />
        <div className="bullet">
          <span className="bullet-icon">🔥</span>{' '}
          <span className="bullet-text">
            <strong>Scalable & High-Performance DSL Runtime:</strong> Designed, implemented, tested, and benchmarked a
            Java runtime interpreter and exploration engines for a domain-specific language.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🛠️</span>{' '}
          <span className="bullet-text">
            <strong>API Design & Extensibility:</strong> Designed a user-friendly API to expose and parameterize runtime
            internals, enabling seamless configuration, enhanced observability, and greater flexibility for developers.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📦</span>{' '}
          <span className="bullet-text">
            <strong>Canonical Serialization & Database Integration:</strong> Implemented{' '}
            <strong>canonical serialization</strong> for structured data persistence and seamless interoperability.
            Designed and optimized data handling for <strong>SQLite</strong> and <strong>Neo4j</strong>, ensuring
            efficient storage, retrieval, and query performance.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🚀</span>{' '}
          <span className="bullet-text">
            <strong>Java Migration & Modernization:</strong> Led the migration from Java 8 to Java 21, leveraging new
            features like <strong>Records, Virtual Threads, and Structured Concurrency</strong> to enhance performance
            and maintainability.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🔍</span>{' '}
          <span className="bullet-text">
            <strong>Formal Methods & Verification:</strong> Explored modeling technologies for developing trustworthy
            software.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🤝</span>{' '}
          <span className="bullet-text">
            <strong>Cross-Team Collaboration:</strong> Worked closely with <strong>Supply Chain teams</strong> to
            address performance issues and implement their use cases, ensuring high-quality, robust software solutions.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">⚙️</span>{' '}
          <span className="bullet-text">
            <strong>CI/CD & Infrastructure Modernization:</strong> Updated all <strong>CI/CD scripts</strong>, led the
            migration of <strong>Jenkins</strong>, and ensured a more efficient and reliable build pipeline.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📖</span>{' '}
          <span className="bullet-text">
            <strong>Engineering Best Practices:</strong> Established team-wide best practices, including{' '}
            <strong>Architecture Decision Records (ADR)</strong>, improved <strong>repository documentation</strong>,
            and structured the <strong>wiki</strong> for better knowledge sharing.
          </span>
        </div>
        <div>
          <span className="tag">API Desing</span>
          <span className="tag">DSL Runtime</span>
          <span className="tag">Formal Methods</span>
          <span className="tag">Performance</span>
          <span className="tag">Benchmarking</span>
          <span className="tag">Serialization</span>
          <span className="tag">SQlite</span>
          <span className="tag">Neo4j</span>
          <span className="tag">Java 21</span>
          <span className="tag">Eclipse OSGI</span>
          <span className="tag">C++</span>
          <span className="tag">SQL</span>
          <span className="tag">Cypher</span>
          <span className="tag">GtilabCI</span>
          <span className="tag">Jenkins</span>
          <span className="tag">Docker</span>
          <span className="tag">SonarQube</span>
          <span className="tag">Concurrent Systems</span>
          <span className="tag">Simulation</span>
        </div>
      </>
    ),
  },
  {
    date: '09/2023 - 03/2024',
    location: 'SquashQL - Full Remote',
    title: 'Open Contributor',
    content: (
      <>
        SquashQL is an open-source SQL query engine designed to streamline the process of building multi-dimensional
        queries. At its core, it acts as a middleware layer that stands between SQL databases and multiple clients or
        front-end applications.
        <br />
        <div className="bullet">
          <span className="bullet-icon">🔥</span>
          <span className="bullet-text">
            <strong>Compiled Queries & API Refinement:</strong> Led a significant restructuring of the query API by
            introducing <code>CompiledXXX objects</code>, separating query user API from query engine internals,
            ensuring cleaner code and better maintainability. This redesign simplifies query execution, enforces the SRP
            principle abd enable the introduction of the vector aggregation feature.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📅</span>
          <span className="bullet-text">
            <strong>Date Functions Support:</strong> Added support for <strong>date functions</strong> within the query
            engine, improving query flexibility and user capabilities.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🛠️</span>
          <span className="bullet-text">
            <strong>API Enhancements:</strong> Introduced a public <code>total_count</code> measure, counting the total
            number of results not considering the query limit.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">⚙️</span>
          <span className="bullet-text">
            <strong>Query Scope & Resolver Optimization:</strong> Streamlined query scope management by introducing{' '}
            <strong>QueryResolver</strong>, replacing static helper methods with a more flexible and scalable approach.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🔄</span>
          <span className="bullet-text">
            <strong>String Removal & Field Optimization:</strong> Spearheaded the initiative to replace all{' '}
            <strong>Strings</strong> in query building with typed <strong>Field</strong> objects, paving the way for
            future POJO query compilations and improving query resolution consistency.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📈</span>
          <span className="bullet-text">
            <strong>Execution Graph Simplification:</strong> Simplified the query execution graph, optimizing
            performance and making it easier for developers to manage complex queries.
          </span>
        </div>
        <div>
          <span className="tag">API Design</span>
          <span className="tag">Query Optimization</span>
          <span className="tag">Performance</span>
          <span className="tag">SQL</span>
          <span className="tag">Database Engineering</span>
          <span className="tag">Date Functions</span>
          <span className="tag">Java 21</span>
          <span className="tag">Field Objects</span>
          <span className="tag">Compiler</span>
          <span className="tag">Concurrency</span>
        </div>
      </>
    ),
  },
  {
    date: '06/2019 - 09/2023',
    location: 'Activeviam - Full Remote (1 week per month in Paris)',
    title: 'Technical Lead',
    content: (
      <>
        As part of the R&D team, I designed and built Atoti, a real-time decisive data analytics software for financial
        services.
        <br />
        <div className="bullet">
          <span className="bullet-icon">👨‍💻</span>{' '}
          <span className="bullet-text">
            <strong>Team Leadership & Mentoring:</strong> Led a team of 6 engineers, overseeing development, design
            sessions, and code validation. Provided mentorship, supervised project planning, and coordinated team
            efforts to ensure timely delivery and adherence to best practices. Owner of the distributed, monitoring and
            aggregation modules.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">💻</span>{' '}
          <span className="bullet-text">
            <strong>Product Development:</strong> Designed, built, tested, and deployed Atoti Java API capabilities:
            Aggregation engine, real-time updates, distributed computing, MDX querying.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📊</span>{' '}
          <span className="bullet-text">
            <strong>Monitoring:</strong> Involved in enhancements and implementations of Atoti Application Performance
            Monitoring stack: Tracing, metrics, and logs.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🤝</span>{' '}
          <span className="bullet-text">
            <strong>L2 Support:</strong> Solved performance issues and assisted clients in using the APIs.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">⚙️</span>{' '}
          <span className="bullet-text">
            <strong>JDK Features Prototype:</strong> Supervised the internship and university project focused on
            maximizing the impact of new JDK capabilities in Atoti Java API (projects{' '}
            <a data-style="color:red;" href="https://openjdk.org/projects/loom/">
              Loom
            </a>{' '}
            and <a href="https://openjdk.org/projects/panama/">Panama</a>).
          </span>
        </div>
        <div>
          <span className="tag">In-Memory</span>
          <span className="tag">Distributed System</span>
          <span className="tag">Aggregation</span>
          <span className="tag">Concurrency</span>
          <span className="tag">Monitoring</span>
          <span className="tag">Java 17</span>
          <span className="tag">Javascript</span>
          <span className="tag">Zipkin</span>
          <span className="tag">Logstash</span>
          <span className="tag">Grafana</span>
          <span className="tag">Prometheus</span>
          <span className="tag">Docker</span>
          <span className="tag">Atoti</span>
          <span className="tag">ActivePivot</span>

          <span className="tag">CircleCI</span>
          <span className="tag">Artifactory</span>
          <span className="tag">GithubActions</span>
          <span className="tag">SpringBoot</span>
          <span className="tag">REST</span>
          <span className="tag">MDX</span>
          <span className="tag">OLAP</span>
          <span className="tag">Leadership</span>
          <span className="tag">Team Management</span>
        </div>
      </>
    ),
  },
  {
    date: '09/2018 - 06/2019',
    location: 'INGIMA - Paris',
    title: 'R&D Software Engineering',
    content: (
      <>
        INGILAB is the Innovation Lab and POC Factory of INGIMA, focused on exploring new possibilities with its motto
        "explore by doing." As part of INGILAB, I worked on various research studies and proof of concepts in multiple
        fields such as image processing, machine learning, and embedded systems.
        <div className="bullet">
          <span className="bullet-icon">📄</span>{' '}
          <span className="bullet-text">
            <strong>PDF Parsing & Extraction:</strong> Developed and optimized a solution for analyzing nutrition table
            conformities by parsing and extracting relevant data from PDF documents. This project aimed at automating
            the comparison and validation of nutrition information to ensure accurate product distribution.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🧠</span>{' '}
          <span className="bullet-text">
            <strong>OCR Project with Google Cloud:</strong> Led the OCR (Optical Character Recognition) project using
            Google Cloud to extract text from images and scanned documents, improving data accessibility and processing
            efficiency for distribution clients.
          </span>
        </div>
        <div>
          <span className="tag">OCR</span>
          <span className="tag">Google Cloud</span>
          <span className="tag">PDF Parsing</span>
          <span className="tag">Machine Learning</span>
          <span className="tag">Image Processing</span>
          <span className="tag">Data Extraction</span>
          <span className="tag">Carrefour</span>
        </div>
      </>
    ),
  },
  {
    date: '10/2014 - 09/2018',
    location: ' Verimag - Grenoble',
    title: 'Full Time Researcher - PhD in Computer Science and Mathematics',
    content: (
      <>
        My thesis focused on the design, optimization, and validation of distributed real-time applications for embedded
        systems. Specifically, it delved into using formal methods to address challenges in distributed real-time
        environments, such as communication delay, optimization issues, and clock drift.
        <br />
        <div className="bullet">
          <span className="bullet-icon">⚙️</span>{' '}
          <span className="bullet-text">
            <strong>Distributed Real-Time Applications:</strong> Designed and optimized real-time applications for
            embedded systems using formal methods to solve critical issues like communication delay and clock drift.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">📊</span>{' '}
          <span className="bullet-text">
            <strong>Formal Methods & Verification:</strong> Applied formal methods, including timed automata and
            model-based development, to verify the correctness and performance of the distributed systems.
          </span>
        </div>
        <div>
          <span className="tag">Formal Methods</span>
          <span className="tag">Model-Based Development</span>
          <span className="tag">Timed Automata</span>
          <span className="tag">Distributed Systems</span>
          <span className="tag">Embedded Systems</span>
          <span className="tag">Optimization</span>
          <span className="tag">Verification</span>
          <span className="tag">Java</span>
          <span className="tag">Acceleo</span>
          <span className="tag">Eclipse</span>
        </div>
      </>
    ),
  },
  {
    date: '09/2015 - 09/2016',
    location: 'IUT Valence - Université Grenoble Alpes - Valence',
    title: 'Teaching Fellow',
    content: (
      <>
        <div className="bullet">
          <span className="bullet-icon">📊</span>{' '}
          <span className="bullet-text">
            <strong>Introduction to Excel:</strong> Taught freshmen the fundamentals of Excel, covering data
            organization, formulas, and basic analytics.
          </span>
        </div>
        <div className="bullet">
          <span className="bullet-icon">🗃️</span>{' '}
          <span className="bullet-text">
            <strong>Introduction to Relational Databases:</strong> Guided sophomore students through database concepts,
            including SQL queries, schema design, and normalization.
          </span>
        </div>
        <div>
          <span className="tag">Teaching</span>
          <span className="tag">Excel</span>
          <span className="tag">SQL</span>
          <span className="tag">Relational Databases</span>
          <span className="tag">Data Analysis</span>
        </div>
      </>
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
      text: 'mdellabani@gmail.com',
      href: 'mailto:mdellabani@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Saint-Médard, France',
      href: 'https://www.google.com/maps/place/64370+Saint-M%C3%A9dard,+France/@43.5269223,-0.6036646,11.96z/data=!4m6!3m5!1s0xd5661dcaf7e81fb:0x4066517481391d0!8m2!3d43.530203!4d-0.590924!16s%2Fm%2F03wc3p1?entry=ttu',
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
