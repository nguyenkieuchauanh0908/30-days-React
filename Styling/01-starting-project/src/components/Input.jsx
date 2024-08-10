export default function Input({ label, invalid = false, ...props }) {
  let labelClasses = "px-4 py-2 rounded font-semibold uppercase";
  let inputClasses =
    "w-full px-2 py-3 leading-tight text-gray-700 border rounded shadow";
  if (invalid) {
    labelClasses += "text-red-400";
    inputClasses += inputClasses + "text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += "text-stone-900";
    inputClasses += inputClasses + "text-gray-700 bg-stone-300";
  }

  return (
    <p className="flex flex-col">
      <label className={labelClasses}>{label}</label>
      <input {...props} className={inputClasses} />
    </p>
  );
}
