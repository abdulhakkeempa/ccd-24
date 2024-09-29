import Image from 'next/image';

interface Speaker {
  image: string;
  name: string;
  designation: string;
}

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        className="rounded-full"
        src={speaker.image}
        alt={speaker.name}
        width={150}
        height={150}
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-semibold speaker-name">{speaker.name}</h1>
        <p className="text-base text-center speaker-designation">{speaker.designation}</p>
      </div>
    </div>
  );
}