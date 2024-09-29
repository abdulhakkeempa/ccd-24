import React from 'react';

export default function Header({ title }: { title: string }) {
  return (
    <div className='mx-4 mt-5 mb-8 md:mx-24'>
      <div className="flex items-center w-full h-24 md:h-40 header-bg">
        <h1 className="text-4xl md:text-7xl font-semibold pl-4 md:pl-9">{title}</h1>
      </div>
    </div>
  );
}