import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        CPRG 306: Web Development 2
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col gap-6 w-full max-w-sm">

        {/* Week 2 */}
        <Link
          href="/week-2"
          className="text-center border-4 border-green-600 text-green-700 font-semibold py-4 rounded-full text-xl hover:bg-green-50 transition"
        >
          Week-2
        </Link>

        {/* Week 3 */}
        <Link
          href="/week-3"
          className="text-center border-4 border-green-600 text-green-700 font-semibold py-4 rounded-full text-xl hover:bg-green-50 transition"
        >
          Week-3
        </Link>

        {/* Week 4 */}
        <Link
          href="/week-4"
          className="text-center border-4 border-green-600 text-green-700 font-semibold py-4 rounded-full text-xl hover:bg-green-50 transition"
        >
          Week-4
        </Link>

      </div>
    </main>
  );
}
