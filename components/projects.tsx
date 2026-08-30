"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface Project {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Autonomous Coupling System",
    eyebrow: "Robotics · Control",
    description:
      "A ROS 2 control system for a six-actuator Stewart platform integrating ArUco vision, IMU sensor fusion, inverse kinematics, encoder feedback, and safety-focused operator controls.",
    image: "/images/projects/stewart-control.webp",
    technologies: ["ROS 2", "OpenCV", "PID", "Sensor Fusion"],
    highlights: [
      "Real-time alignment and platform control",
      "UWB, IMU, vision, and encoder integration",
      "Monitoring, homing, calibration, and safety tooling",
      "Experimental validation and performance analysis",
    ],
    link: "https://github.com/AliHassan-019/Autonomous-Coupling",
  },
  {
    title: "EEG-Integrated Wireless Earbuds",
    eyebrow: "Medical · Connected Devices",
    description:
      "A wearable platform combining Bluetooth audio, ADS1299 biosignal acquisition, and nRF52 BLE streaming for synchronized real-time EEG data.",
    image: "/images/projects/eeg-wireless-earbuds.webp",
    technologies: ["Embedded C", "ADS1299", "nRF52", "BLE"],
  },
  {
    title: "ISE to Modbus RTU Converter",
    eyebrow: "Industrial · Communications",
    description:
      "An industrial embedded converter with isolated power, ADC-based sensing, RS-485 connectivity, and Modbus RTU communication for reliable sensor acquisition.",
    image: "/images/projects/ise-modbus-converter.webp",
    technologies: ["Modbus RTU", "RS-485", "ADC", "PCB Design"],
    link: "https://github.com/AliHassan-019/ISE-to-Modbus-RTU-Converter",
  },
  {
    title: "Catheter Trackability Testing Machine",
    eyebrow: "Medical · Test Systems",
    description:
      "A medical test platform combining load-cell acquisition, calibrated stepper-motor control, measurement processing, and embedded firmware for repeatable evaluation.",
    image: "/images/projects/catheter-testing.webp",
    technologies: ["Embedded C", "Load Cell", "Motor Control", "Validation"],
    link: "https://github.com/AliHassan-019/Catheter-Trackability-Testing-Machine---Firmware",
  },
  {
    title: "Robotic Skin Tumor Detection",
    eyebrow: "Medical · Computer Vision",
    description:
      "A robotic intervention concept using computer vision and image processing to identify skin regions and guide a controlled robotic arm workflow.",
    image: "/images/projects/skin-tumor-robot.webp",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Robotics"],
    link: "https://github.com/AliHassan-019/Robotic-Arm-Based-Skin-Tumor-Detection-Intervention-System-Using-Computer-Vision",
  },
  {
    title: "Flexural Testing Machine",
    eyebrow: "Automation · Instrumentation",
    description:
      "An automated material-testing system for controlled loading, sensor acquisition, and repeatable flexural measurement with embedded monitoring.",
    image: "/images/projects/flexural-testing.webp",
    technologies: ["STM32", "RTOS", "Sensors", "Data Acquisition"],
    link: "https://github.com/AliHassan-019/Flexural-Testing-Machine-Firmware",
  },
  {
    title: "Industrial Radio Interface",
    eyebrow: "Industrial · Wireless",
    description:
      "A rugged embedded communications concept focused on reliable radio control, hardware integration, and field-ready operator feedback.",
    image: "/images/projects/industrial-radio.webp",
    technologies: ["RF", "Embedded C", "Hardware", "Interfaces"],
    link: "https://github.com/AliHassan-019/Industrial-Radio",
  },
  {
    title: "Pressure Monitoring System",
    eyebrow: "Sensing · Monitoring",
    description:
      "A compact measurement platform for pressure acquisition, signal conditioning, live status visualization, and threshold-based monitoring.",
    image: "/images/projects/pressure-monitoring.webp",
    technologies: ["Sensors", "ADC", "Firmware", "Monitoring"],
    link: "https://github.com/AliHassan-019/Real-Time-Pressure-Monitoring-Device",
  },
  {
    title: "Autonomous Airborne Security",
    eyebrow: "Autonomy · Computer Vision",
    description:
      "An airborne monitoring concept combining drone simulation, real-time object detection, and vision-assisted security awareness for autonomous inspection scenarios.",
    image: "/images/projects/autonomous-airborne-security.webp",
    technologies: ["YOLOv8", "PX4 SITL", "Computer Vision", "Autonomy"],
    link: "https://github.com/AliHassan-019/Autonomous-Airborne-Security-System-Simulation",
  },
  {
    title: "BHFR3 Vision System",
    eyebrow: "AI · Embedded Vision",
    description:
      "An embedded face-recognition and human-machine interaction concept integrating camera input, on-device processing, and responsive robotic feedback.",
    image: "/images/projects/bhfr3.webp",
    technologies: ["C++", "Embedded Vision", "Face Recognition", "HMI"],
    link: "https://github.com/AliHassan-019/BHFR3-Bionic-Head-and-Facial-Recognition",
  },
  {
    title: "Student Management System",
    eyebrow: "Software · Data Management",
    description:
      "A C++ application for organizing student profiles, academic records, courses, and reporting through structured data models and a clear management workflow.",
    image: "/images/projects/student-management.webp",
    technologies: ["C++", "OOP", "Data Structures", "File Handling"],
    link: "https://github.com/AliHassan-019/Student-Management-System",
  },
  {
    title: "TWS Wireless Earbuds",
    eyebrow: "Audio · Connected Devices",
    description:
      "A true-wireless audio platform focused on Bluetooth connectivity, embedded audio control, power-conscious operation, and reliable device pairing.",
    image: "/images/projects/tws-earbuds.webp",
    technologies: ["Bluetooth Audio", "Embedded C", "Power Management", "TWS"],
  },
];

export default function Projects() {
  const [featured, ...supporting] = projects;
  const railRef = useRef<HTMLDivElement>(null);

  const moveProjects = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <section id="work" className="section-shell border-b border-[#173044] bg-[#04101a]">
      <div className="site-container">
        <span className="section-kicker">Work</span>
        <h2 className="section-title">Selected Engineering Work</h2>
        <p className="section-copy">
          Embedded systems, robotics, sensing, and medical technology projects spanning firmware, electronics, control, and validation.
        </p>

        <article className="mt-9 overflow-hidden border border-[#1f3a4e] bg-[#081722] sm:mt-12 lg:grid lg:grid-cols-[1.25fr_0.9fr]">
          <div className="relative min-h-[245px] sm:min-h-[360px] lg:min-h-[520px]">
            <Image src={featured.image} alt={`${featured.title} project`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-9 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2790ff]">{featured.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">{featured.title}</h3>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#a9b6c0]">{featured.description}</p>
            <ul className="mt-6 space-y-3">
              {featured.highlights?.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-[#c7d2db]">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Project technologies">
              {featured.technologies.map((technology) => (
                <span key={technology} className="border border-[#294459] bg-[#0b1d2a] px-2.5 py-1 text-xs text-[#a9c8df]">{technology}</span>
              ))}
            </div>
            <a href={featured.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2790ff] hover:text-[#7fc0ff]">
              View project details
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="mt-10 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2790ff]">Project archive</p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">More systems I have built</h3>
          </div>
          <div className="flex w-full shrink-0 justify-between gap-3 sm:w-auto sm:justify-start">
            <button type="button" onClick={() => moveProjects(-1)} aria-label="Show previous projects" className="grid h-12 w-12 place-items-center rounded-full border border-[#31526e] bg-[#0b1d2a] text-white transition hover:border-[#2790ff] hover:bg-[#123047] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fc0ff]">
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveProjects(1)} aria-label="Show next projects" className="grid h-12 w-12 place-items-center rounded-full bg-[#2790ff] text-[#03101a] transition hover:bg-[#7fc0ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fc0ff]">
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={railRef} className="project-rail -mx-3 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-4 sm:mx-0 sm:mt-6 sm:gap-5 sm:px-0" aria-label="Additional projects">
          {supporting.map((project) => (
            <article key={project.title} className="group flex min-w-[88%] snap-start flex-col overflow-hidden border border-[#1f3a4e] bg-[#071521] sm:min-w-[48%] lg:min-w-[31.5%]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 32vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.025]" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#2790ff]">{project.eyebrow}</p>
                <h4 className="mt-2 text-xl font-bold leading-snug text-white">{project.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#9eacb7]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="border border-[#294459] px-2 py-1 text-[0.7rem] text-[#a9c8df]">{technology}</span>
                  ))}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2790ff] hover:text-[#7fc0ff]">
                    View project
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-[#6f8291]">Project details available on request</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="https://github.com/AliHassan-019" target="_blank" rel="noreferrer" className="button-secondary w-full sm:w-auto">
            View more on GitHub
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
