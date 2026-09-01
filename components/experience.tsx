import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Robotics & Embedded Systems Engineer Intern",
    company: "ABMI Groupe",
    location: "Lyon, France",
    period: "Mar 2026 — Sep 2026",
    points: [
      "Developing ROS 2 components for sensor integration, real-time communication, and autonomous coupling.",
      "Implementing control algorithms with UWB, IMU, vision, and encoder feedback for robotic alignment.",
      "Supporting embedded integration, monitoring interfaces, and validation of a 6-DOF Stewart platform.",
    ],
  },
  {
    role: "Embedded Systems Engineer",
    company: "MindTune Innovations",
    location: "Wah Cantt, Pakistan",
    period: "Mar 2025 — Sep 2025",
    points: [
      "Developed RTOS-based applications for connected devices with an emphasis on reliability and real-time behavior.",
      "Designed a wireless EEG acquisition platform integrating biosignal sensing, processing, and data transfer.",
      "Developed embedded audio firmware for wireless devices, optimizing performance and power consumption.",
    ],
  },
  {
    role: "Embedded Systems Engineer",
    company: "Revive Medical Technologies",
    location: "Islamabad, Pakistan",
    period: "Aug 2023 — Mar 2025",
    points: [
      "Developed embedded firmware for medical applications with control logic and real-time processing.",
      "Integrated sensors and wireless transmission for connected monitoring through hardware–software integration.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-b border-[#173044] bg-[#071521]">
      <div className="site-container grid gap-10 sm:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Engineering systems that work beyond the prototype</h2>
          <p className="section-copy">
            Experience across robotics, wearable biosignals, and medical devices—covering the path from low-level firmware to integrated system validation.
          </p>
          <div className="mt-7 flex w-full items-center gap-3 border border-[#294459] bg-[#0a1b28] p-4 text-sm leading-6 text-[#b9c8d3] sm:mt-8 sm:w-auto sm:inline-flex">
            <BriefcaseIcon className="h-6 w-6 text-[#2790ff]" aria-hidden="true" />
            Open to embedded, firmware, and robotics opportunities.
          </div>
        </div>

        <ol className="grid min-w-0 gap-4 md:block md:border-l md:border-[#31526e] md:pl-10">
          {experiences.map((experience) => (
            <li key={`${experience.company}-${experience.period}`} className="relative min-w-0 border border-[#294459] bg-[#091a27] p-5 md:border-0 md:bg-transparent md:p-0 md:pb-12 md:last:pb-0">
              <span className="absolute -left-[2.78rem] top-1 hidden h-3 w-3 rounded-full border-2 border-[#2790ff] bg-[#071521] md:block" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#2790ff]">{experience.period}</p>
              <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">{experience.role}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-[#b9d9f2]">{experience.company}</span>
                <span className="flex items-center gap-1 text-[#8093a1]">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {experience.points.map((point) => (
                  <li key={point} className="relative pl-5 text-sm leading-6 text-[#a6b4bf] before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-[#5e83a0]">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
