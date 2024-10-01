import Image from 'next/image';

interface Speaker {
  image: string;
  name: string;
  designation: string;
  company: string;
}

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex flex-col items-center gap-4 speaker-card">
      <Image
        className="rounded-full object-cover w-[170px] h-[170px]"
        src={speaker.image}
        alt={speaker.name}
        width={150}
        height={150}
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-semibold speaker-name">{speaker.name}</h1>
        <div className='flex flex-col items-center gap-2'>
          <p className="text-base text-center speaker-designation">{speaker.designation}</p>
            {/* <p className="text-base text-center speaker-designation">{speaker.designation}</p> */}
            {speaker.company && (
              <span className="text-sm text-center google-grey-900 google-grey-text px-2 py-1 rounded-full speaker-company">
                {speaker.company}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}