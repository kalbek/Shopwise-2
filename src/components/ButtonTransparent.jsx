export default function ButtonTransparent({ title, textColor }) {
  return (
    <div
      className={`text-${textColor} flex justify-center items-center text-[24px] outline rounded w-[184px] h-[56px]  `}
    >
      {title}
    </div>
  );
}
