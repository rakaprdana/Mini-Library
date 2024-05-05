export const InputNumber = (props) => {
  const { label, name, value, onChange } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full  md:my-2">
      <label className="font-poppins font-semibold pb-1 text-sm">{label}</label>
      <input
        className="bg-transparent text-sm border border-gray-900 focus:outline-none  rounded-md pl-2 w-4/5 h-7 flex items-center focus:shadow-md focus:shadow-slate-600 md:py-1"
        type="number"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
