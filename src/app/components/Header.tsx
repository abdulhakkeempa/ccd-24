import React from 'react';

export default function Header({ title }: { title: string }) {
  return (
    <div className='mx-4 my-12 md:mx-24'>
      <div className="flex items-center w-full h-24 md:h-40 google-grey">
        <h1 className="text-4xl md:text-7xl font-semibold pl-4 md:pl-9">{title}</h1>
      </div>
    </div>
  );
}