import {DeviceMobileIcon, LocationMarkerIcon, MailIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: MailIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DeviceMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: LocationMarkerIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-retro-surface" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <MailIcon className="h-10 w-10 text-retro-green" />
          <h2 className="text-2xl font-bold text-retro-green">{headerText}</h2>
          {description && <p className="max-w-lg text-sm leading-6 text-retro-muted">{description}</p>}
        </div>
        <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-retro-border py-4">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <div key={srLabel}>
                <dt className="sr-only">{srLabel}</dt>
                <dd>
                  <a
                    className={classNames(
                      'flex items-center gap-x-2 text-retro-text transition-colors hover:text-retro-green focus:outline-none focus:ring-2 focus:ring-retro-green',
                      {'hover:text-retro-cyan': href},
                    )}
                    href={href}
                    target="_blank">
                    <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-retro-cyan sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">{text}</span>
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
        <div className="mx-auto w-full max-w-screen-md">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
