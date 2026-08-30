import {
  BoltIcon,
  CircleStackIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Firmware & RTOS",
    icon: BoltIcon,
    skills: ["Embedded C", "C++", "FreeRTOS", "Zephyr RTOS", "Device Drivers", "Interrupts", "DMA"],
  },
  {
    title: "Embedded Platforms",
    icon: CpuChipIcon,
    skills: ["STM32 / ARM Cortex-M", "nRF52", "PIC", "Jieli AC6966", "Raspberry Pi"],
  },
  {
    title: "Robotics & Control",
    icon: CircleStackIcon,
    skills: ["ROS 2", "PID Control", "Sensor Fusion", "Localization", "Motor Control", "Encoder Feedback"],
  },
  {
    title: "Connectivity",
    icon: SignalIcon,
    skills: ["UART", "SPI", "I2C", "BLE", "RS-485", "Modbus RTU", "MQTT", "LoRaWAN", "Zigbee"],
  },
  {
    title: "Hardware Integration",
    icon: WrenchScrewdriverIcon,
    skills: ["PCB Design", "Schematic Design", "Sensor Integration", "ADC Interfaces", "System Validation"],
  },
  {
    title: "Tools & Engineering",
    icon: ShieldCheckIcon,
    skills: ["Altium Designer", "STM32CubeIDE", "Keil µVision", "MPLAB X", "MATLAB/Simulink", "Linux", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-b border-[#173044] bg-[#04101a]">
      <div className="site-container">
        <span className="section-kicker">Capabilities</span>
        <h2 className="section-title">Firmware depth. System-level thinking.</h2>
        <p className="section-copy">
          A practical toolset for building, integrating, debugging, and validating connected embedded systems.
        </p>

        <div className="mt-9 grid border-l border-t border-[#1f3a4e] sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="border-b border-r border-[#1f3a4e] p-5 sm:p-8">
              <Icon className="h-8 w-8 text-[#2790ff]" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="border border-[#294459] bg-[#071521] px-2.5 py-1.5 text-xs text-[#afc1ce]">{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
