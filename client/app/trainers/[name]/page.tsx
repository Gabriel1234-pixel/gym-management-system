import Link from "next/link";

const trainerProfiles = {
  "james-mwangi": {
    name: "James Mwangi",
    role: "Strength Coach",
    experience: "12 years",
    specialty: "Powerlifting, conditioning, and strength transformation",
    bio: "James helps members build strength, improve performance, and stay consistent through intelligent training plans.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
  },
  "grace-wanjiku": {
    name: "Grace Wanjiku",
    role: "Yoga Instructor",
    experience: "9 years",
    specialty: "Flexibility, mobility, and mindfulness-based yoga",
    bio: "Grace creates calm, balanced sessions that improve flexibility, posture, and mental focus.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  "brian-kiptoo": {
    name: "Brian Kiptoo",
    role: "Bodybuilding Coach",
    experience: "10 years",
    specialty: "Muscle gain, nutrition coaching, and contest prep",
    bio: "Brian specializes in helping athletes sculpt muscle and build confidence through disciplined training.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
} as const;

export default async function TrainerProfilePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const trainer = trainerProfiles[name as keyof typeof trainerProfiles];

  if (!trainer) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
        <div className="rounded-xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">Trainer not found</h1>
          <p className="mt-3 text-gray-600">The requested trainer profile does not exist.</p>
          <Link href="/" className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-white">
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <img src={trainer.image} alt={trainer.name} className="h-96 w-full rounded-xl object-cover" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Trainer Profile</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">{trainer.name}</h1>
            <p className="mt-2 text-xl text-yellow-600">{trainer.role}</p>
            <p className="mt-6 text-gray-700">{trainer.bio}</p>

            <div className="mt-8 space-y-3 rounded-xl bg-gray-50 p-5">
              <p><span className="font-semibold">Experience:</span> {trainer.experience}</p>
              <p><span className="font-semibold">Specialty:</span> {trainer.specialty}</p>
            </div>

            <Link href="/" className="mt-8 inline-block rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-yellow-500 hover:text-black">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
