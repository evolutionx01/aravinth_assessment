export const Header = ({ handleOpenModel }: HeaderProps) => {
  return (
    <header className="flex justify-between h-[60px] bg-white drop-shadow-md px-4">
      <div className="flex items-center">
        <h1 className="text-xl font-medium">Stealth</h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleOpenModel}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 h-[40px]"
        >
          Create Job
        </button>
      </div>
    </header>
  );
};

type HeaderProps = {
  handleOpenModel: () => void;
};
