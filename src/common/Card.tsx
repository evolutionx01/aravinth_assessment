import jobLogo from "../assets/netflix.png";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

export const Card = ({ jobs, onEdit, onDelete }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs.length > 0 &&
        jobs.map((data: any) => (
          <>
            <div
              className="flex gap-2 bg-white rounded p-[16px] border border-solid border-[#E6E6E6]"
              key={data.id}
            >
              <div className="logo">
                <img
                  className="w-[48px] h-[48px] rounded"
                  alt="logo"
                  src={jobLogo}
                />
              </div>
              <div className="mr-auto">
                <div className="mb-[24px]">
                  <h1 className="text-[24px] font-[400] leading-8">
                    {data.title}
                  </h1>
                  <p className="text-[16px] font-[400] leading-6">
                    {data.company} - {data.industry}
                  </p>
                  <p className="text-[16px] font-[400] leading-6 text-[#646464]">
                    {data.location} ({data.remoteType})
                  </p>
                </div>

                <div className="mb-[24px]">
                  <p className="text-[16px] font-[400] leading-6 mb-[8px]">
                    Part-Time (9.00 am - 5.00 pm IST)
                  </p>
                  <p className="text-[16px] font-[400] leading-6 mb-[8px]">
                    Experience ({data.minExperience} - {data.maxExperience}{" "}
                    years)
                  </p>
                  <p className="text-[16px] font-[400] leading-6 mb-[8px]">
                    INR (₹) {data.minSalary} - {data.maxSalary} / Month
                  </p>
                  <p className="text-[16px] font-[400] leading-6 mb-[8px]">
                    {data.totalEmployee} employees
                  </p>
                </div>

                <div>
                  {data.applyType === "internal" ? (
                    <button className="px-[16px] py-[8px] bg-[#1597E4] font-medium text-white rounded">
                      Apply Now
                    </button>
                  ) : (
                    <button className="px-[16px] py-[6.55px] font-medium text-[#1597E4] border-solid border-2 border-[#1597E4] rounded">
                      Expernal Apply
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-2 ml-auto items-start">
                <button
                  className="border border-[#E6E6E6] p-2 "
                  title="edit"
                  onClick={() => onEdit(data.id)}
                >
                  {" "}
                  <img
                    className="w-[20px] h-[20px] rounded"
                    alt="logo"
                    src={editIcon}
                  />
                </button>
                <button
                  className="border border-[#E6E6E6] p-2"
                  title="delete"
                  onClick={() => onDelete(data.id)}
                >
                  {" "}
                  <img
                    className="w-[20px] h-[20px] rounded"
                    alt="logo"
                    src={deleteIcon}
                  />
                </button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};
