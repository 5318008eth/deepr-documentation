"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageModal({ src, alt, width, height }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="screenshot-link" onClick={toggleModal}>
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          className="screenshot"
        />
      </div>
      
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <Image 
              src={src} 
              alt={alt} 
              width={width * 1.5} 
              height={height * 1.5} 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
} 