import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="section-shell bg-[#04101a]">
      <div className="site-container">
        <div className="border border-[#234157] bg-[#071521] px-5 py-8 sm:px-10 sm:py-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-14 lg:py-14">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Let’s build reliable systems together.</h2>
            <p className="section-copy">
              I’m interested in embedded, firmware, and robotics opportunities where strong integration and careful validation matter.
            </p>
            <a href="mailto:alihassan.pk019@gmail.com" className="button-primary mt-7 w-full sm:w-auto">
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              Start a conversation
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <address className="mt-10 space-y-4 border-t border-[#294459] pt-7 not-italic lg:mt-0 lg:min-w-[300px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <a href="mailto:alihassan.pk019@gmail.com" className="flex min-w-0 items-center gap-3 text-sm text-[#bdcbd5] hover:text-white">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              <span className="break-all">alihassan.pk019@gmail.com</span>
            </a>
            <a href="tel:+33745578166" className="flex items-center gap-3 text-sm text-[#bdcbd5] hover:text-white">
              <PhoneIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              +33 7 45 57 81 66
            </a>
            <p className="flex items-center gap-3 text-sm text-[#bdcbd5]">
              <MapPinIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              Lyon, France
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/alihassan019" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center border border-[#31526e] text-[#dce7ef] hover:border-[#2790ff] hover:text-[#2790ff]">
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://github.com/AliHassan-019" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center border border-[#31526e] text-[#dce7ef] hover:border-[#2790ff] hover:text-[#2790ff]">
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
