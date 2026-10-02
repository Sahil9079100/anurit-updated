interface ContactFieldProps {
  label: string;
  line: string;
  lineWidth: number;
  className?: string;
}

export default function ContactField({ label, line, lineWidth, className = "" }: ContactFieldProps) {
  return (
    <div className={className}>
      <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#878787] mb-1">{label}</p>
      <div className="relative h-0">
        <img alt="" className="block" style={{ width: lineWidth, height: 1 }} src={line} />
      </div>
    </div>
  );
}
