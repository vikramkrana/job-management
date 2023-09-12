import React from "react";

import { Icon } from "@iconify/react";

import Button from "@/atoms/button";

function Confirmation({
  setOpenDeleteModal,
  setSelectedJob,
  loading,
  selectedJob,
  handleDeleteJob,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Icon icon="ph:x-circle-light" color="#d86161" width="70" />

      <div className="flex flex-col justify-center gap-4 text-center">
        <h2 className="text-2xl">Are you sure?</h2>
        <p className="text-sm md:text-base">
          Do you really want to delete this job? This process cannot be undone.
        </p>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() => {
            setOpenDeleteModal(false);
            setSelectedJob(null);
          }}
          className="h-8 w-20 rounded-md border border-[#1597E4] bg-white px-4 py-1 text-xs text-[#1597E4] shadow-sm md:h-10 md:w-[100px] md:py-2 md:text-base"
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          loading={loading}
          onClick={() => {
            handleDeleteJob(selectedJob.id);
          }}
          className="h-8 w-20 rounded-md bg-[#D86161] px-4 py-1 text-xs text-white shadow-sm md:h-10 md:w-[100px]  md:py-2 md:text-base"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Confirmation;
