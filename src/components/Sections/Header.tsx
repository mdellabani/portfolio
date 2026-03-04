import {Dialog, Transition} from '@headlessui/react';
import {MenuAlt3Icon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Testimonials, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav = memo(
  ({navSections, currentSection}: {navSections: SectionId[]; currentSection: SectionId | null}) => {
    const baseClass =
      '-m-1.5 px-3 py-1.5 font-bold uppercase first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-retro-green sm:hover:text-retro-green text-retro-muted';
    const activeClass = classNames(baseClass, 'text-retro-green');
    const inactiveClass = classNames(baseClass, 'text-retro-muted');
    return (
      <header className="fixed top-0 z-50 hidden w-full border-b border-retro-border bg-retro-base p-4 sm:block" id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav = memo(
  ({navSections, currentSection}: {navSections: SectionId[]; currentSection: SectionId | null}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-retro-green uppercase';
    const activeClass = classNames(baseClass, 'bg-retro-surface text-retro-green font-bold');
    const inactiveClass = classNames(baseClass, 'text-retro-muted font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-2 top-2 z-40 border border-retro-green bg-retro-base p-2 ring-offset-retro-base hover:bg-retro-surface focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-retro-green focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <MenuAlt3Icon className="h-8 w-8 text-retro-green" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-retro-base bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 border-r border-retro-border bg-retro-surface">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem = memo(
  ({
    section,
    current,
    inactiveClass,
    activeClass,
    onClick,
  }: {
    section: string;
    current: boolean;
    activeClass: string;
    inactiveClass: string;
    onClick?: () => void;
  }) => {
    return (
      <Link
        className={classNames(current ? activeClass : inactiveClass)}
        href={`/#${section}`}
        key={section}
        onClick={onClick}
        passHref>
        [ {section.toUpperCase()} ]
      </Link>
    );
  },
);

Header.displayName = 'Header';
export default Header;
