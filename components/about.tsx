import { AcademicCapIcon, ArrowDownTrayIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const education = [
  {
    degree: "Master’s in Embedded Systems Security",
    school: "Grenoble INP Esisar",
    period: "Sep 2026",
  },
  {
    degree: "BSc Electrical Engineering",
    school: "COMSATS University Islamabad",
    period: "Aug 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell border-b border-[#173044] bg-[#071521]">
      <div className="site-container grid gap-11 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <span className="section-kicker">About</span>
          <h2 className="section-title">From peripheral configuration to complete system behavior</h2>
          <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-[#a9b6c0] sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              I am an Embedded Systems Engineer focused on firmware development, electronics integration, and real-time applications. I work across microcontrollers, RTOS-based systems, communication interfaces, and sensor-driven platforms.
            </p>
            <p>
              My approach connects low-level implementation with the full product: PCB and schematic work, peripheral configuration, control logic, communication, debugging, and validation. That system view helps me build solutions that are reliable in the real world—not only on the bench.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/resume.pdf" download className="button-primary w-full sm:w-auto">
              <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
              Download résumé
            </a>
            <div className="flex min-h-11 items-center gap-2 px-1 text-sm text-[#9fb0bc] sm:px-2">
              <GlobeAltIcon className="h-5 w-5 text-[#2790ff]" aria-hidden="true" />
              English C1 · French A1
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 border-b border-[#31526e] pb-4">
            <AcademicCapIcon className="h-7 w-7 text-[#2790ff]" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>
          <div className="divide-y divide-[#1f3a4e]">
            {education.map((item) => (
              <article key={item.degree} className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2790ff]">{item.period}</p>
                <h4 className="mt-2 text-lg font-bold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm text-[#9eacb7]">{item.school}</p>
              </article>
            ))}
          </div>
          <div className="border border-[#294459] bg-[#091a27] p-5 text-sm leading-6 text-[#a9b6c0]">
            Current academic focus: secure firmware, embedded-system security, and dependable connected architectures.
          </div>
        </div>
      </div>
    </section>
  );
}
