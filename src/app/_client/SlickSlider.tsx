'use client';

import dynamic from 'next/dynamic';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false }) as any;

export default SlickSlider;

