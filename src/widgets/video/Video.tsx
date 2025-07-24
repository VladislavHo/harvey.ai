import React, { useRef } from 'react'
import { useVideoScroll } from '../../shared/lib/hooks/useVideoScroll'

export default function Video() {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const width = useVideoScroll(videoWrapperRef);

  return (
    <section className="video max-w-[1920px]">
      <div 
        ref={videoWrapperRef}
        className="video--wrapper my-0 mx-auto transition-all duration-300 ease-out"
        style={{width: `${width}%`}}
      >
        <video controls playsInline src='./video/intro.mp4' preload='false' poster='./video/intro.jpeg'/>
      </div>
    </section>
  )
}