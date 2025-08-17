/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from "react";
import styles from "./AudioControl.module.css";

interface AudioControlProps {
  audioSrc: string;
  volume?: number;
  autoPlay?: boolean;
  onToggle?: (value: boolean) => void;
}

export const AudioControl = ({ 
  audioSrc, 
  volume = 0.5, 
  autoPlay = true,
  onToggle
}: AudioControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.volume = volume;
    audioRef.current = audio;
    
    // Add event listeners
    const handlePlay = () => {
      setIsPlaying(true);
      setShowButton(true);
      onToggle?.(true);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      onToggle?.(false);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      onToggle?.(false);
    };
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    
    if (autoPlay) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Audio autoplay blocked');
        setShowButton(true); // Show button even if autoplay fails
      });
    } else {
      setShowButton(true);
    }

    return () => {
      // Cleanup event listeners
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [audioSrc, volume, autoPlay]);

  useEffect(() => {
    if (isInitial) {
      setTimeout(() => setIsInitial(false), 1500);
    }
  }, [isInitial]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio play failed');
        });
      }
    }
  };

  if (!showButton) return null;

  return (
    <button 
      className={`${styles.audioControlButton} ${isInitial ? styles.initial : ''} ${isPlaying ? styles.pulsing : ''}`} 
      onClick={toggleAudio}
    >
      <img 
        src={isPlaying ? "/assets/images/icons/pause.svg" : "/assets/images/icons/play.svg"} 
        alt={isPlaying ? "Pause" : "Play"} 
      />
    </button>
  );
};

export default AudioControl;
