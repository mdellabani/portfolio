import Head from 'next/head';
import {memo} from 'react';

import {aboutData, contact, education, experience, heroData, skills, socialLinks} from '../data/data';

const linkedIn = socialLinks.find(s => s.label === 'LinkedIn')?.href;
const github = socialLinks.find(s => s.label === 'Github')?.href;
const email = contact.items.find(i => i.type === 'Email')?.text;
const location = contact.items.find(i => i.type === 'Location')?.text;

const stripScheme = (url: string): string => url.replace(/^https?:\/\//, '');

const Resume = memo((): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${heroData.name} — Resume`}</title>
        <meta content="noindex" name="robots" />
      </Head>
      <div className="resume-root">
        <header className="resume-header">
          <div className="resume-header-left">
            <h1 className="resume-name">{heroData.name}</h1>
            <p className="resume-role">{heroData.role}</p>
          </div>
          <div className="resume-header-right">
            {email && <span className="resume-contact-line">{email}</span>}
            {location && <span className="resume-contact-line">{location}</span>}
            {github && <span className="resume-contact-line">{stripScheme(github)}</span>}
            {linkedIn && <span className="resume-contact-line">{stripScheme(linkedIn)}</span>}
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="resume-section-marker">▸</span>
            <span className="resume-section-label">Summary</span>
            <span className="resume-section-rule" />
          </h2>
          <p className="resume-summary">{aboutData.description}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="resume-section-marker">▸</span>
            <span className="resume-section-label">Skills</span>
            <span className="resume-section-rule" />
          </h2>
          <div className="resume-skills">
            {skills.map(group => (
              <div className="resume-skills-group" key={group.name}>
                <span className="resume-skills-group-name">{group.name}</span>
                <span className="resume-skills-chips">
                  {group.skills.map(s => (
                    <span className="tag" key={s.name}>
                      {s.name}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="resume-section-marker">▸</span>
            <span className="resume-section-label">Experience</span>
            <span className="resume-section-rule" />
          </h2>
          <div className="resume-items">
            {experience.map(item => (
              <article className="resume-item" key={`${item.title}-${item.date}`}>
                <div className="resume-item-head">
                  <h3 className="resume-item-title">{item.title}</h3>
                  <span className="resume-item-date">{item.date}</span>
                </div>
                <p className="resume-item-location">{item.location}</p>
                <div className="resume-item-body">{item.content}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">
            <span className="resume-section-marker">▸</span>
            <span className="resume-section-label">Education</span>
            <span className="resume-section-rule" />
          </h2>
          <div className="resume-items">
            {education.map(item => (
              <article className="resume-edu-item resume-item" key={`${item.title}-${item.date}`}>
                <div className="resume-item-head">
                  <h3 className="resume-item-title">{item.title}</h3>
                  <span className="resume-item-date">{item.date}</span>
                </div>
                <p className="resume-item-location">{item.location}</p>
                <div className="resume-item-body">{item.content}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
});

export default Resume;
