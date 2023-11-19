import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title?: string,
  icon?: string,
  variant: 'btn_navy' | 'btn_amber' |'btn_navy_outline' |'btn_amber_outline'
}

export default function Button({
  type, title, icon, variant,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variant} px-5 py-2.5 rounded-xl font-medium whitespace-nowrap w-full md:w-max flex items-center justify-center hover:-translate-y-2 duration-300`}
    >
      {icon && <Image src={icon} alt={type} width={24} height={24} />}
      {title && <label className="cursor-pointer">{title}</label>}
    </button>
  );
}
