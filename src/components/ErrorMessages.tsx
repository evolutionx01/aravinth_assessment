export const ErrorMessages = ({ field, type }: ErrorMessageProps) => {
  if (!type || type !== "required") return null;
  return (
    <span className="text-xs text-red-400 absolute bottom-[-15px]">{`${field} is required`}</span>
  );
};

type ErrorMessageProps = { field: string; type: any };
