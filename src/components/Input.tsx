import { useFormContext } from "react-hook-form";
import { ErrorMessages } from "./ErrorMessages";

export const Input = ({
  label,
  type,
  id,
  placeholder,
  isMandatory,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="flex flex-col mb-[24px] w-full relative">
        {label !== "" ? (
          <label htmlFor={id} className="text-[14px] font-medium capitalize">
            {label} {isMandatory && <span className="text-red-700">*</span>}
          </label>
        ) : (
          <label className="h-[21px]"></label>
        )}
        <input
          id={id}
          type={type}
          className="border border-gray-700 px-[12px] py-[7px] rounded text-[14px]"
          placeholder={placeholder}
          {...register(id, { required: isMandatory })}
        />
        <ErrorMessages field={label} type={errors[id]?.type} />
      </div>
    </>
  );
};

type InputProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  isMandatory: boolean;
};
