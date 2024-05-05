export const InputDosenPenguji = (props) => {
  const { label, placeholders, names, values, onChange } = props;
  return (
    <div className="flex flex-col my-1 md:my-2 justify-center w-4/5 ">
      <label className="font-poppins font-semibold text-sm">{label}</label>
      {placeholders.map((placeholder, index) => (
        <input
          key={index}
          className="bg-transparent my-1 text-sm border border-gray-900 focus:outline-none rounded-md pl-2 w-full h-7 flex items-center focus:shadow-md focus:shadow-slate-600 md:py-1"
          type="text"
          placeholder={placeholder}
          name={names[index]}
          value={values[index]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
