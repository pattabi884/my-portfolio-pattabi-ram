import Reveal from "./components/Reveal";

function Divider() {
  return (
    <div className="relative my-28">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      <div className="absolute inset-x-0 -top-2 h-4 bg-indigo-500/10 blur-xl" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* HERO */}
        <Reveal>
          <section className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, Pattabi Rama here.
            </h1>

            <p className="text-xl text-slate-300">
              Ok ok — I know what you’re here for.
            </p>

            <p className="text-slate-300 leading-relaxed">
              You want to know if the person behind this page is worth your time,
              and whether they can actually build things that hold up in the real
              world.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Hey — I know looking at resumes and portfolios probably isn’t really
              what you wanted to do today, but I’ll make it easy for you. Buckle up.
            </p>
          </section>
        </Reveal>

        <Divider />

        {/* STORY */}
        <Reveal>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold sticky top-24">
                The short version
              </h2>
            </div>

            <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
              <p>
                I’m a Bangalore-based backend-focused fresher. Yeah, that’s a
                mouthful — bad joke, my bad.
              </p>

              <p>
                I graduated in 2024 with a Bachelor’s in Technology (Electrical
                and Computers). My first internship ran from November 2024 to May
                2025 working with OpenCV and Python.
              </p>

              <p>
                Somewhere along the way, I realized I enjoy breaking and fixing
                backend systems more than image processing libraries. That
                realization led me to my current internship at a fintech company
                (Paywize).
              </p>

              <p>
                I’m proficient in Node.js and Go, can ramp up on Python quickly,
                and I’m comfortable with Redis, Kafka, Postgres, Docker, and
                modern backend tooling.
              </p>

              <p className="font-medium text-slate-200">
                TL;DR — give me an interview and I’ll recommend the best food or
                drinks spot in this city based on your preference.
              </p>
            </div>
          </section>
        </Reveal>

        <Divider />

        {/* PROJECTS */}
        <section className="space-y-32">

          {/* FINTECH PROJECT */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Visual */}
              <div className="rounded-2xl bg-black/60 border border-slate-800 p-6 text-sm text-slate-300 font-mono">
{`Merchant
   |
POST /deposit
   |
Express API
   |
Redis Queue
   |
Transaction Worker
   |
Shard Router
 |        |
Shard 0  Shard 1
   |
Central Ledger
   |
Webhook`}
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  🏦 Scalable Fintech Backend
                </h3>

                <p className="text-slate-300">
                  A high-performance, sharded, event-driven fintech backend
                  designed to handle scale without sacrificing financial
                  correctness.
                </p>

                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Database sharding across multiple PostgreSQL instances</li>
                  <li>Redis-backed asynchronous processing (BullMQ)</li>
                  <li>Distributed transactions across central & shard DBs</li>
                  <li>Idempotency & deduplication to prevent double spending</li>
                  <li>Dual-write reporting into a central ledger</li>
                  <li>Secure HMAC-signed merchant webhooks</li>
                </ul>

                <a
                  href="https://github.com/pattabi884/Fintech-Backend-Scalable-Wallet-system-"
                  target="_blank"
                  className="inline-block text-indigo-400 hover:text-indigo-300"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </Reveal>

          {/* GEO PROJECT */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Visual */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
                <div className="text-sm text-slate-400 mb-4">
                  Nearby Drivers (Redis GEO + TTL)
                </div>

                <div className="relative h-56 rounded-lg bg-black/60">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    Map View
                  </div>

                  {/* Drivers */}
                  <div className="absolute top-10 left-16 h-3 w-3 rounded-full bg-green-400" />
                  <div className="absolute top-20 left-32 h-3 w-3 rounded-full bg-green-400" />
                  <div className="absolute top-32 left-24 h-3 w-3 rounded-full bg-green-400" />

                  {/* User */}
                  <div className="absolute top-24 left-24 h-4 w-4 rounded-full bg-indigo-400" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  🚖 Realtime Geospatial Engine
                </h3>

                <p className="text-slate-300">
                  A high-throughput backend built to handle real-time geospatial
                  data for mobility systems.
                </p>

                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Kafka partitioning ensures ordered driver updates</li>
                  <li>Redis GEO + TTL prevents ghost drivers</li>
                  <li>WebSocket push for live frontend updates</li>
                  <li>Backpressure & stale frame dropping</li>
                  <li>Batched writes to PostGIS reduce IOPS ~99%</li>
                </ul>

                <a
                  href="https://github.com/pattabi884/Realtime-geospatial-engine"
                  target="_blank"
                  className="inline-block text-indigo-400 hover:text-indigo-300"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-slate-800 text-slate-400">
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/pattabi884"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300"
            >
              github.com/pattabi884
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
