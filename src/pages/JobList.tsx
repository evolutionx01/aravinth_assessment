import { useEffect, useState } from "react";
import { Card } from "../common/Card";
import { Header } from "../common/Header";
import { Model } from "../components/Model";
import axios from "axios";

const baseURL = "https://64c109c9fa35860bae9fd211.mockapi.io/api/job";

export const JobList = () => {
  const [showModel, setShowModel] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    getCompletJobList();
  }, []);

  const getCompletJobList = () => {
    axios.get(baseURL).then((response) => {
      if (response.status === 200) {
        setJobList(response.data);
      } else {
        setJobList([]);
      }
    });
  };

  const getJobById = (id: string) => {
    axios.get(`${baseURL}/${id}`).then((response) => {
      if (response.status === 200) {
        setSelectedJob(response.data);
        setShowModel(true);
      }
    });
  };

  const handleDeleteJobById = (id: string) => {
    axios.delete(`${baseURL}/${id}`).then((response) => {
      if (response.status === 200) {
        getCompletJobList();
      }
    });
  };

  const handleOnClose = () => {
    setShowModel(false);
    getCompletJobList();
    setSelectedJob({});
  };

  const handleOnOpen = () => {
    setShowModel(true);
  };

  return (
    <>
      <Header handleOpenModel={handleOnOpen}></Header>
      <div className="container mx-auto px-4 mt-6">
        <Card
          jobs={jobList}
          onEdit={getJobById}
          onDelete={handleDeleteJobById}
        ></Card>
      </div>
      <Model
        visible={showModel}
        onClose={handleOnClose}
        job={selectedJob}
      ></Model>
    </>
  );
};
