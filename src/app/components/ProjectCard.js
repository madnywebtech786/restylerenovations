'use client';
import React from 'react';
import ReactCompareImage from 'react-compare-image';

export default function ProjectCard({img1,img2}) {
  return (
    <div className='projectCard my-2 md:m-2 relative group max-h-[400px] overflow-hidden'>
      <ReactCompareImage
        leftImage={img1}
        rightImage={img2}
        leftImageCss={{borderRadius:'8px',maxHeight:'400px'}}
        rightImageCss={{borderRadius:'8px',maxHeight:'400px'}}
        handleSize={25}
        aspectRatio='wider'
      />

  
      
    </div>
  );
}
