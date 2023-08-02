import { useFormContext } from "react-hook-form";
import { ErrorMessages } from "./ErrorMessages";

export const Radio = ({ label, type, id, value, isMandatory }: RadioProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="flex flex-col relative">
        <div>
          <input
            id={id}
            type={type}
            value={value}
            {...register(id, { required: isMandatory })}
          />{" "}
          <label>{label}</label>
        </div>
        <ErrorMessages field={label} type={errors[id]?.type} />
      </div>
    </>
  );
};

type RadioProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  isMandatory: boolean;
};
