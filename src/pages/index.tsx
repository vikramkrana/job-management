/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import axios from "axios";

import JobCard from "@/molecules/card";
import Confirmation from "@/molecules/confirmation";
import JobForm from "@/molecules/form";
import Button from "@/atoms/button";
import Modal from "@/atoms/modal";
import { Toast } from "@/atoms/toast";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// Define API_BASE_URL constant using an environment variable.

interface Job {
  // Define the Job interface to represent the structure of job data.
  id: string;
  job_title: string;
  company_name: string;
  industry: string;
  location: string;
  remote_type: string;
  experience: {
    min: number;
    max: number;
  };
  salary: {
    min: number;
    max: number;
  };
  total_employee: string;
  apply_type: string;
}

const App: React.FC = () => {
  //Initial states
  const [data, setData] = useState<Job[]>([]);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>("edit");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [stepCount, setStepCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJobs = async () => {
    // Define an asynchronous function 'fetchJobs' to fetch job data from the API.
    try {
      setLoading(true);
      // Set 'loading' state to true to indicate that data is being fetched.
      const response = await axios.get<Job[]>(`${API_BASE_URL}/jobs`);
      // Make a GET request to fetch job data.
      setData(response.data);
      // Update the 'data' state with the fetched job data.
    } catch (error) {
      Toast("Error fetching data:", "error");
      // Display an error toast message if fetching data fails.
    } finally {
      setLoading(false);
      // Set 'loading' state to false regardless of success or failure.
    }
  };

  useEffect(() => {
    // Use the 'useEffect' hook to run 'fetchJobs' when the component mounts.
    fetchJobs();
  }, []);

  const handleFormSubmit = async (values: any, formType: string) => {
    // Define a function 'handleFormSubmit' to handle form submissions (create/update jobs).
    try {
      setLoading(true);
      // Set 'loading' state to true to indicate that the form submission is in progress.
      const payload = {
        // Create a payload object from form values.
        job_title: values.job_title,
        company_name: values.company_name,
        industry: values.industry,
        location: values.location,
        remote_type: values.remote_type,
        experience: {
          min: values.experienceMin,
          max: values.experienceMax,
        },
        salary: {
          min: values.salaryMin,
          max: values.salaryMax,
        },
        total_employee: values.total_employee,
        apply_type: values.apply_type,
      };

      if (formType === "create") {
        await axios.post(`${API_BASE_URL}/jobs`, payload);
        // If the form type is "create," make a POST request to create a job.
        Toast("Job saved successfully", "success");
        // Display a success toast message.
      } else {
        await axios.put(`${API_BASE_URL}/jobs/${selectedJob?.id}`, payload);
        // If the form type is "edit," make a PUT request to update a job.
        Toast("Job updated successfully", "success");
        // Display a success toast message.
      }

      // Reset to default
      setStepCount(1);
      fetchJobs();
      setOpenEditModal(false);
    } catch (error) {
      Toast("Error saving job", "error");
      // Display an error toast message if there's an issue with saving/updating.
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (id: string) => {
    // Define a function 'handleDeleteJob' to handle job deletion.
    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/jobs/${id}`);
      // Make a DELETE request to delete the selected job.
      Toast("Job deleted successfully", "success");
      fetchJobs();
      // Fetch updated job data.
      setOpenDeleteModal(false);
      // Close the delete confirmation modal.
    } catch (error) {
      Toast("Error deleting job", "error");
      // Display an error toast message if there's an issue with deletion.
    } finally {
      setLoading(false);
      // Set 'loading' state to false regardless of success or failure.
    }
  };

  return (
    <div className="App max-w-[1800px] px-3 py-10 md:px-4">
      {/* Create new job */}
      <Button
        onClick={() => {
          setOpenEditModal(true);
          setFormType("create");
        }}
        className="mb-10 h-10 rounded-md bg-[#1597E4] px-4 py-2 text-base text-white  shadow-sm"
      >
        Create a job
      </Button>
      {/* list already created jobs */}
      <div className="flex flex-wrap gap-6 md:gap-10 2xl:gap-20">
        {data.map((item) => (
          <JobCard
            key={item.id}
            data={item}
            setSelectedJob={setSelectedJob}
            setOpenEditModal={setOpenEditModal}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        ))}
      </div>
      {/* create or edit modal */}
      <Modal
        open={openEditModal}
        setOpen={() => {
          setOpenEditModal(false);
          setSelectedJob(null);
          setStepCount(1);
          setFormType("edit");
        }}
        modalTitle="Create a job"
        stepCount={stepCount}
      >
        <JobForm
          stepCount={stepCount}
          setStepCount={setStepCount}
          selectedJob={selectedJob}
          handleFormSubmit={handleFormSubmit}
          formType={formType}
          loading={loading}
        />
      </Modal>
      {/* delete confirmation modal */}
      <Modal
        open={openDeleteModal}
        setOpen={() => {
          setOpenDeleteModal(false);
          setSelectedJob(null);
        }}
      >
        <Confirmation
          setOpenDeleteModal={setOpenDeleteModal}
          setSelectedJob={setSelectedJob}
          loading={loading}
          selectedJob={selectedJob}
          handleDeleteJob={handleDeleteJob}
        />
      </Modal>
    </div>
  );
};

export default App;
