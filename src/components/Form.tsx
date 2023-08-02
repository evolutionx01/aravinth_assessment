import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { Radio } from "./Radio";

const baseURL = "https://64c109c9fa35860bae9fd211.mockapi.io/api/job";

export const Form = ({ onClose, job }: FormProps) => {
  const [step, setStep] = useState(1);
  const [page, setPage] = useState("create");
  const [editJob, setEditJob] = useState(job);

  const methods = useForm<FormInputs>({ mode: "onChange" });
  const { handleSubmit, trigger, setValue } = methods;

  useEffect(() => {
    let array: any = [];
    if (Object.keys(editJob).length > 0) {
      setPage("edit");
      array = Object.keys(editJob).map((key) => {
        return { name: key, value: editJob[key] };
      });
      array.forEach(({ name, value }: any) => setValue(name, value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editJob]);

  const onSubmit = (data: FormInputs) => {
    if (page === "create") {
      axios.post(baseURL, data).then((response) => {
        if (response.status === 201) {
          onClose();
        }
      });
    } else {
      axios.put(`${baseURL}/${job.id}`, data).then((response) => {
        if (response.status === 200) {
          setEditJob({});
          onClose();
        }
      });
    }
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="container flex flex-col  w-[577px] h-[564px] p-[32px]"
      >
        <div className="flex justify-between items-center mb-[24px]">
          <h1 className="text-[20px] font-medium">
            {page === "create" ? "Create a job" : "Edit job"}
          </h1>
          <p className="text-[16px] font-medium">Step {step}</p>
        </div>
        {step === 1 && (
          <>
            <div className="mb-auto">
              <Input
                label="Title"
                type="text"
                id="title"
                placeholder="ex. UX UI Designer"
                isMandatory={true}
              />
              <Input
                label="Company"
                type="text"
                id="company"
                placeholder="ex. Google"
                isMandatory={true}
              />
              <Input
                label="Industry"
                type="text"
                id="industry"
                placeholder="ex. Information Technology"
                isMandatory={true}
              />
              <div className="flex flex-row gap-6">
                <Input
                  label="Location"
                  type="text"
                  id="location"
                  placeholder="ex. Chennai"
                  isMandatory={false}
                />
                <Input
                  label="Remote Type"
                  type="text"
                  id="remoteType"
                  placeholder="ex. In-office"
                  isMandatory={false}
                />
              </div>
            </div>
            <div className="flex justify-end mt-auto">
              <button
                onClick={handleNext}
                className="px-[16px] py-[8px] bg-[#1597E4] font-medium text-white rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-auto">
              <div className="flex flex-row gap-6">
                <Input
                  label="Experience"
                  type="text"
                  id="minExperience"
                  placeholder="Minimum"
                  isMandatory={false}
                />
                <Input
                  label=""
                  type="text"
                  id="maxExperience"
                  placeholder="Maximum"
                  isMandatory={false}
                />
              </div>
              <div className="flex flex-row gap-6">
                <Input
                  label="Salary"
                  type="text"
                  id="minSalary"
                  placeholder="Minimum"
                  isMandatory={false}
                />
                <Input
                  label=""
                  type="text"
                  id="maxSalary"
                  placeholder="Maximum"
                  isMandatory={false}
                />
              </div>
              <Input
                label="Total Employee"
                type="text"
                id="totalEmployee"
                placeholder="ex. 100"
                isMandatory={false}
              />
              <label className="text-[14px] font-medium capitalize">
                Apply Type
              </label>
              <div className="flex flex-row gap-4">
                <Radio
                  label="Quick Apply"
                  type="radio"
                  id="applyType"
                  value="internal"
                  isMandatory={false}
                />
                <Radio
                  label="External Apply"
                  type="radio"
                  id="applyType"
                  value="external"
                  isMandatory={false}
                />
              </div>
            </div>
            <div className="flex justify-end mt-auto gap-4">
              <button
                onClick={handleBack}
                className="px-[16px] py-[8px] bg-[#1597E4] font-medium text-white rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit(onSubmit)}
                className="px-[16px] py-[8px] bg-[#1597E4] font-medium text-white rounded"
              >
                {page === "create" ? "Save" : "Update"}
              </button>
            </div>
          </>
        )}
      </form>
    </FormProvider>
  );
};

type FormInputs = {
  title: string;
  company: string;
  industry: string;
  location: string;
  remoteType: string;
  minExperience: string;
  maxExperience: string;
  minSalary: string;
  maxSalary: string;
  totalEmployee: string;
  applyType: string;
};

type FormProps = {
  onClose: () => void;
  job: any;
};
