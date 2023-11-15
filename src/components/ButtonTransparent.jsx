export default function ButtonTransparent({ title, textColor }) {
  return (
    <div
      className={`text-${textColor} md:font-bold flex justify-center items-center text-[18px] outline outline-2 outline-[${textColor}] rounded-md px-16 py-6`}
    >
      {title}
    </div>
  );
}
