import React from 'react';

interface TextCardProps {
  title: string;
  description: string;
  color: string;
}


export default function TextCard( { text }: { text: TextCardProps } ) {
  return (
    <div className={`w-full p-4 bg-red-500 rounded-lg shadow-md mb-4`}>
      <h1 className="text-2xl font-semibold text-gray-800">{text.title}</h1>
      <p className="mt-2 text-base font-semibold text-gray-800">{text.description}</p>
    </div>
  );
}