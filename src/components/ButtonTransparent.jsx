export default function ButtonTransparent({ title, textColor, width }) {
  return (
    <div
      className={`text-${textColor} flex justify-center items-center text-[18px] outline outline-2 outline-[${textColor}] rounded w-[${width}] h-[56px]`}
    >
      {title}
    </div>
  );
}
