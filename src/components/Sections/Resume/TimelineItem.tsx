import React, {memo} from 'react';

interface TimelineItem {
  title: string;
  date: string;
  location: string;
  content: React.ReactNode;
}

const Timeline = memo(({item, isLast = false}: {item: TimelineItem; isLast?: boolean}) => {
  const {title, date, location, content} = item;
  return (
    <div
      className={`timeline relative flex flex-col pb-8 text-center last:pb-0 md:text-left ${isLast ? 'active' : ''}`}>
      <div className="relative flex flex-col items-center md:flex-row md:items-start md:pl-24">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="timeline-date md:hidden">{date}</div> {/* Show date only on mobile */}
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          </div>
          <div className="mt-2">{content}</div>
        </div>
        <div className="hidden md:block">
          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>
        </div>
      </div>
      <div className="timeline-date hidden md:block">{date}</div> {/* Show date only on desktop */}
    </div>
  );
});

Timeline.displayName = 'TimelineItem';
export default Timeline;
