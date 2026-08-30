import Image from "next/image";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  MapPinIcon,
  SignalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const capabilities = [
  { label: "STM32", icon: CpuChipIcon },
  { label: "nRF52", icon: SignalIcon },
  { label: "Zephyr RTOS", icon: CubeTransparentIcon },
  { label: "ROS 2", icon: Squares2X2Icon },
];

export default function Hero() {
  return (
    <section id="home" className="border-b border-[#173044] pt-16 sm:pt-[72px]">
      <div className="grid lg:min-h-[690px] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex bg-[#06131e] px-4 py-11 sm:px-10 sm:py-14 lg:justify-end lg:px-12 lg:py-16">
          <div className="flex w-full max-w-[510px] flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2790ff]">
              Embedded systems · Robotics · MedTech
            </p>
            <h1 className="mt-5 text-[clamp(2.75rem,14vw,5.2rem)] font-bold leading-[0.94] tracking-[-0.05em] text-white">
              Ali Hassan
            </h1>
            <p className="mt-5 text-lg font-semibold leading-snug text-[#eef4f8] sm:mt-6 sm:text-2xl">
              Embedded Systems Engineer
              <span className="block text-[#7fc0ff]">Firmware &amp; Hardware Integration</span>
            </p>
            <p className="mt-5 max-w-[48ch] text-base leading-7 text-[#a8b6c1]">
              I build reliable, real-time systems across robotics, connected devices, and medical technology—bringing firmware, electronics, and validation together.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="button-primary">
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                View selected work
              </a>
              <a href="/resume.pdf" download className="button-secondary">
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                Download résumé
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-5" aria-label="Core technologies">
              {capabilities.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-[#b2c0cb]">
                  <Icon className="h-5 w-5 text-[#73b7f7]" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm text-[#a8b6c1]">
              <MapPinIcon className="h-5 w-5 text-[#73b7f7]" aria-hidden="true" />
              Lyon, France
            </p>
          </div>
        </div>

        <div className="relative min-h-[330px] overflow-hidden border-t border-[#173044] bg-[#091722] sm:min-h-[440px] lg:min-h-[690px] lg:border-l lg:border-t-0">
          <Image
            src="/images/projects/stewart-control.webp"
            alt="Autonomous six-degree-of-freedom Stewart platform with sensors, cameras, embedded controllers, and monitoring interface"
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#04101a]/25" aria-hidden="true" />
          <div className="absolute inset-x-4 bottom-4 border border-[#31526e] bg-[#06131e]/90 p-4 backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-[290px]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2790ff]">Current focus</p>
            <p className="mt-2 text-sm leading-6 text-[#d7e2ea]">ROS 2 control, sensor fusion, localization, and embedded integration for autonomous coupling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
