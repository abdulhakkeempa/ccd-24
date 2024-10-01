import Image from 'next/image';
import Link from 'next/link';

interface Team {
  image: string;
  name: string;
  role: string;
  linkedin: string;
}

export default function TeamCard({ team_member }: { team_member: Team }) {
  return (
    <div className="flex flex-col items-center gap-2 speaker-card">
      <Image
        className="rounded-full object-cover w-[150px] h-[150px]"
        src={team_member.image}
        alt={team_member.name}
        width={150}
        height={150}
      />
      <div className="flex flex-col items-center gap-1 md:gap-2">
        <Link href={team_member.linkedin}>
          <h1 className="text-base md:text-2xl font-semibold speaker-name">{team_member.name}</h1>
        </Link>
        <div className='flex flex-col items-center gap-2'>
            {team_member.role && (
              <span className="text-sm text-center team-role px-2 py-1 rounded-full speaker-company">
                {team_member.role}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}