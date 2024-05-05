export const InputText = (props) => {
  const { label, placeholder, name, value, onChange } = props;
  return (
    <div className="flex flex-col my-1 md:my-2 w-4/5">
      <label htmlFor={name} className="font-poppins font-semibold pb-1 text-sm">
        {label}
      </label>
      <input
        className="bg-transparent text-sm border border-gray-900 focus:outline-none  rounded-md pl-2 w-full h-7 flex items-center focus:shadow-md focus:shadow-slate-600 md:py-1"
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
