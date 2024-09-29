interface AgendaItemProps {
  title: string;
  time: string;
  speaker: string;
}

export default function AgendaItem({ title, time, speaker }: AgendaItemProps) {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <span className="text-base font-medium text-gray-800">{time}</span>
        <h1 className="text-base font-medium text-gray-800">|</h1>
        <h1 className="text-base font-medium text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="mt-2 text-base font-semibold text-gray-800">Speaker: {speaker}</p>
      </div>
    </div>
  );
}
