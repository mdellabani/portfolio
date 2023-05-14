import {Howl} from 'howler';
import {useEffect, useRef} from 'react';

import useInteraction from './useInteraction';

export default function useAudio(soundPath: string) {
  const hasInteracted = useInteraction();
  const audioRef = useRef<Howl>();

  useEffect(() => {
    if (!hasInteracted) {
      return;
    }

    const audio = new Howl({src: soundPath});
    audioRef.current = audio;

    return () => {
      audio.unload();
    };
  }, [hasInteracted, soundPath]);

  return audioRef.current;
}
