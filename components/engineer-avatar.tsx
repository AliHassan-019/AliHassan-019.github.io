import Image from "next/image";

export default function EngineerAvatar({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/images/avatar.png"
      alt="Ali Hassan"
      width={size}
      height={size}
      className="rounded-full border border-[#3c6685] bg-[#e7f3fb] object-cover"
      priority
    />
  );
}
