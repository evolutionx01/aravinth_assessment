import { Form } from "./Form";

export const Model = ({ visible, onClose, job }: ModelProps) => {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center ">
          <div className="bg-white rounded ">
            <Form onClose={onClose} job={job}></Form>
          </div>
        </div>
      )}
    </>
  );
};

type ModelProps = {
  visible: boolean;
  onClose: () => void;
  job: any;
};
