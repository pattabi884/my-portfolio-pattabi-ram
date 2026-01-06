import Image from "next/image";
import Reveal from "./components/Reveal";

/* ------------------ TECH STACK (CDN) ------------------ */

const MAIN_STACK = [
  { name: "Node.js", icon: "node.js", color: "339933" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Go", icon: "go", color: "00ADD8" },
  { name: "Redis", icon: "redis", color: "DC382D" },
  { name: "Kafka", icon: "apachekafka", color: "FFFFFF" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "Docker", icon: "docker", color: "2496ED" },
];

const SECONDARY_STACK = [
  { name: "Prisma", icon: "prisma", color: "2D3748" },
  { name: "Keycloak", icon: "keycloak", color: "4D4D4D" },
  { name: "Kong", icon: "kong", color: "003459" },
  { name: "OpenCV", icon: "opencv", color: "5C3EE8" },
  { name: "Next.js", icon: "next.js", color: "FFFFFF" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
];

function TechIcon({
  name,
  icon,
  color,
  small = false,
}: {
  name: string;
  icon: string;
  color: string;
  small?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-neutral-800 bg-black ${
        small ? "px-3 py-2" : "px-4 py-3"
      }`}
    >
      <img
        src={`https://cdn.simpleicons.org/${icon}/${color}`}
        alt={name}
        className={small ? "h-5 w-5" : "h-6 w-6"}
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

/* ------------------ PAGE ------------------ */

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

        {/* EXPERIENCE */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-2xl font-semibold">Experience</h2>

            {/* Paywize */}
            <div className="max-w-4xl space-y-4">
              <h3 className="text-xl font-semibold">
                Backend Engineering Intern — Paywize (Fintech Startup)
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                Worked in a fintech environment where backend systems had to
                behave predictably under retries, partial outages, and strict
                consistency constraints.
              </p>

              <ul className="list-disc list-inside text-neutral-400 space-y-2">
                <li>
                  Built and maintained backend microservices using Node.js
                  (TypeScript) and Go to support transaction workflows and
                  internal APIs.
                </li>
                <li>
                  Designed Redis-backed asynchronous processing for retries,
                  delayed execution, and background jobs, keeping request paths
                  fast and failure-isolated.
                </li>
                <li>
                  Refactored database queries to remove performance bottlenecks
                  and selectively used Kafka to offload asynchronous processing
                  when synchronous execution was not viable.
                </li>
              </ul>
            </div>

            {/* Python */}
            <div className="max-w-4xl space-y-4">
              <h3 className="text-xl font-semibold">
                Python Developer Intern
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                Started out working close to computer-vision pipelines, then
                gradually moved toward backend systems supporting those
                workflows.
              </p>

              <ul className="list-disc list-inside text-neutral-400 space-y-2">
                <li>
                  Worked on algorithm design and optimization for real-time
                  OpenCV-based image processing in sports drill analysis.
                </li>
                <li>
                  Built backend APIs to support data ingestion, preprocessing,
                  and orchestration of computer-vision workflows.
                </li>
                <li>
                  Identified and optimized bottlenecks across image-processing
                  pipelines and related database queries to improve overall
                  throughput.
                </li>
              </ul>
            </div>
          </section>
        </Reveal>

        {/* PROJECTS */}
        <Reveal>
          <section className="space-y-20">
            <h2 className="text-2xl font-semibold">Selected Work</h2>

            {/* FINTECH */}
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
                  A deep dive into building a production-grade wallet system
                  where correctness matters more than happy-path demos.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  The system uses sharded databases with deterministic routing to
                  avoid cross-shard transactions, Redis-backed queues to move
                  execution off the request path, and idempotency to survive
                  retries and partial failures.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  Secure, HMAC-signed webhooks allow merchants to independently
                  verify transaction events without trusting the transport.
                </p>

                <a
                  href="https://github.com/pattabi884/Fintech-Backend-Scalable-Wallet-system-"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Read the architecture & code →
                </a>
              </div>
            </div>

            {/* GEO */}
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
                  Designed to handle high-frequency GPS updates without melting
                  databases or sacrificing freshness.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  Kafka guarantees ordered processing per driver, Redis GEO
                  indices power fast proximity queries with TTL-based liveness,
                  and PostGIS stores historical paths using batched writes.
                </p>

                <a
                  href="https://github.com/pattabi884/Realtime-geospatial-engine"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Explore the system design →
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
