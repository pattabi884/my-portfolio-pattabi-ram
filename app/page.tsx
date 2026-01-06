import Image from "next/image";
import Reveal from "./components/Reveal";

const MAIN_STACK = [
  { name: "Node.js", src: "/tech/node.png" },
  { name: "TypeScript", src: "/tech/typescript.png" },
  { name: "Go", src: "/tech/go.png" },
  { name: "Redis", src: "/tech/redis.png" },
  { name: "Kafka", src: "/tech/kafka.png" },
  { name: "PostgreSQL", src: "/tech/postgres.png" },
  { name: "Python", src: "/tech/python.png" },
  { name: "Docker", src: "/tech/docker.png" },
];

const SECONDARY_STACK = [
  { name: "Prisma", src: "/tech/prisma.png" },
  { name: "Keycloak", src: "/tech/keycloak.png" },
  { name: "Kong", src: "/tech/kong.png" },
  { name: "OpenCV", src: "/tech/opencv.png" },
  { name: "Next.js", src: "/tech/next.png" },
  { name: "MongoDB", src: "/tech/mongo.png" },
];

function TechIcon({
  name,
  src,
  small = false,
}: {
  name: string;
  src: string;
  small?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-neutral-800 bg-black ${
        small ? "px-3 py-2" : "px-4 py-3"
      }`}
    >
      <Image
        src={src}
        alt={name}
        width={small ? 20 : 24}
        height={small ? 20 : 24}
      />
      <span
        className={`${
          small
            ? "text-xs text-neutral-400"
            : "text-sm font-medium text-neutral-200"
        }`}
      >
        {name}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* HERO */}
        <Reveal>
          <section className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I’m Pattabi.
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              I’m a backend-focused fresher with experience in startups and
              high-pressure environments, looking to build robust, complex,
              scalable systems — and debug them until 2am when needed.
            </p>
          </section>
        </Reveal>

        {/* TECH STACK */}
        <Reveal>
          <section className="space-y-10">
            <h2 className="text-2xl font-semibold">Preferred Tech Stack</h2>

            <div className="flex flex-wrap gap-4">
              {MAIN_STACK.map((t) => (
                <TechIcon key={t.name} {...t} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {SECONDARY_STACK.map((t) => (
                <TechIcon key={t.name} {...t} small />
              ))}
            </div>
          </section>
        </Reveal>

        {/* PROJECTS */}
        <Reveal>
          <section className="space-y-20">
            <h2 className="text-2xl font-semibold">Selected Work</h2>

            {/* FINTECH PROJECT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Image
                src="/projects/wallet-architecture.png"
                alt="Wallet Architecture Diagram"
                width={900}
                height={520}
                className="rounded-xl border border-neutral-800 bg-white p-4"
              />

              <div className="space-y-5">
                <h3 className="text-xl font-semibold">
                  Scalable Fintech Backend — Wallet & Ledger System
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  This project explores what it actually takes to build a
                  production-grade wallet system — not just APIs, but correctness
                  under retries, partial failures, and high write throughput.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  I designed a sharded wallet architecture to eliminate
                  single-database bottlenecks, implemented deterministic routing
                  to avoid cross-shard transactions, and moved transaction
                  execution off the request path using Redis-backed queues.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  The system uses idempotency keys to safely handle retries,
                  dual-write patterns for reporting, and HMAC-signed webhooks so
                  merchants can independently verify transaction events.
                </p>

                <a
                  href="https://github.com/pattabi884/Fintech-Backend-Scalable-Wallet-system-"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Dive into the architecture & code →
                </a>
              </div>
            </div>

            {/* GEO PROJECT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Image
                src="/projects/nearby-drivers.png"
                alt="Realtime Nearby Drivers"
                width={900}
                height={520}
                className="rounded-xl border border-neutral-800"
              />

              <div className="space-y-5">
                <h3 className="text-xl font-semibold">
                  Realtime Geospatial Engine (Uber-style Backend)
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  This system focuses on the “high-frequency writes” problem
                  common in mobility platforms — where location updates arrive
                  faster than databases can comfortably handle.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  I built a Kafka-based ingestion pipeline with key-based
                  partitioning to guarantee ordered processing per driver, while
                  Redis GEO indices with TTL-based liveness checks power fast
                  nearby-driver queries.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  Historical paths are persisted to PostGIS using batched writes,
                  reducing IOPS while sustaining continuous real-time updates.
                </p>

                <a
                  href="https://github.com/pattabi884/Realtime-geospatial-engine"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  See how the system handles real-time load →
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-neutral-800 text-neutral-400 space-y-2">
          <p>Bangalore, Karnataka</p>
          <p>
            <a
              href="mailto:pattabirama2000@gmail.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              pattabirama2000@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/pattabi-ram-129431259"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/pattabi884"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300"
            >
              GitHub
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}
