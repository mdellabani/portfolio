import React, {memo} from 'react';

interface TimelineItem {
  title: string;
  date: string;
  location: string;
  content: React.ReactNode;
}

const Timeline = memo(({item, isLast = false}: {item: TimelineItem; isLast?: boolean}) => {
  const {title, date, location, content} = item;
  const style = isLast ? 'timeine-line' : 'active timeline';
  return (
    <div className={`relative flex flex-col pb-8 text-center last:pb-0 md:text-left ${isLast ? 'active' : ''}`}>
      <div className="relative flex items-start pl-24">
        <div className="timeline-date">{date}</div>
        <div className="timeline-dot"></div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          </div>
          <div className="mt-2">{content}</div>
        </div>
      </div>
      <div className="timeline-line"></div>
    </div>
  );
});

Timeline.displayName = 'TimelineItem';
export default Timeline;
