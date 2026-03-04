import {ChevronUpIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import {memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer = memo(() => (
  <div className="relative border-t border-retro-border bg-retro-base px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14" id="footer">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <Link
        className="border border-retro-border bg-retro-surface p-1 ring-retro-green ring-offset-2 ring-offset-retro-base focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}
        passHref>
        <ChevronUpIcon className="h-6 w-6 bg-transparent text-retro-green sm:h-8 sm:w-8" />
      </Link>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-retro-muted">
        <Socials />
      </div>
      <span className="text-sm text-retro-green" style={{textShadow: '0 0 6px #3a9a60'}}>&copy; Copyright 2022 Tim Baker</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
