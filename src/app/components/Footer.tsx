import Link from "next/link";

export default function Footer(){
  return (
    <div>
      <div className="w-full bg-gray-900">
        <div className="mx-4 md:mx-24 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row items-center text-center justify-center gap-4 text-lg">
              <h1 className="text-gray-500">Learn · Build · Connect</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center justify-center gap-2 md:gap-4 text-lg font-semibold">
              <Link href="https://gdg.community.dev/gdg-cloud-kochi" className="text-gray-500">GDG Cloud Kochi</Link>
              <Link href="https://gdg.community.dev/gdg-cochin" className="text-gray-500">GDG Cochin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}