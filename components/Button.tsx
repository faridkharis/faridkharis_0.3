import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title?: string,
  icon?: string,
  variant: 'btn_navy' | 'btn_amber' |'btn_navy_outline' |'btn_amber_outline'
  full?: boolean
}

export default function Button({
  type, title, icon, variant, full,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variant} ${full && 'w-full'} px-5 py-2.5 rounded-xl font-medium whitespace-nowrap`}
    >
      {icon && <Image src={icon} alt={type} width={24} height={24} />}
      {title && <label className="cursor-pointer">{title}</label>}
    </button>
  );
}
