import { UploadIcon } from "../../assets/Icon/UploadIcon";

export const InputFile = (props) => {
  const { label, name, id, onChange, p, value } = props;

  const isFileUploaded = value !== null;

  return (
    <div className="mb-4 text-xs lg:mx-4 2xl:mx-0">
      <p className="text-gray-800 sm:mb-2 text-center">{p}</p>
      <label
        htmlFor={id}
        className=" bg-gray-800 hover:bg-gray-700 text-white  px-2 py-2 outline-none rounded-md w-max cursor-pointer flex justify-center items-center font-poppins"
      >
        <UploadIcon />
        {label}
        <input
          type="file"
          id={id}
          name={name}
          onChange={onChange}
          className="hidden"
        />
      </label>
      {isFileUploaded && (
        <span className="text-green-500 text-xs font-bold ml-2">
          File Uploaded
        </span>
      )}
    </div>
  );
};
