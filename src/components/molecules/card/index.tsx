import React from "react";
import Image from "next/image";

import Button from "@/atoms/button";
import { Toast } from "@/atoms/toast";

import CompanyLogo from "@/assets/company.png";

function JobCard({
  data,
  setSelectedJob,
  setOpenEditModal,
  setOpenDeleteModal,
}) {
  const formatAmount = (value) => {
    if (!value) {
      return "-";
    }
    const amount = new Intl.NumberFormat("en-IN").format(value);
    return amount;
  };
  return (
    <div className="flex h-full w-full max-w-[830px] justify-between rounded-[10px] border border-[#DADEDF] bg-white px-3 py-3 md:px-6 md:py-4 lg:max-h-[320px]">
      <div className="flex gap-1 md:gap-[10px]">
        <div className="h-8 w-8 rounded-[5px]  md:h-12 md:w-12">
          <Image src={CompanyLogo} alt="logo" width={48} height={48} />
        </div>
        <div>
          <div className="mb-3 md:mb-6">
            <h2 className="text-lg capitalize text-[#212121] md:text-2xl">
              {data.job_title}
            </h2>
            <p className="text-xs capitalize text-[#212121] md:text-base">
              {data.company_name} - {data.industry}
            </p>
            <p className="text-xs capitalize text-[#7A7A7A] md:text-base">
              {data.location} ({data.remote_type})
            </p>
          </div>
          <div className="mb-3 flex flex-col gap-2 md:mb-6">
            <p className="text-xs text-[#212121] md:text-base">
              Part-Time (9.00 am - 5.00 pm IST)
            </p>
            <p className="text-xs text-[#212121] md:text-base">
              {`Experience (${data.experience.min || "0"} - ${
                data.experience.max || "0"
              } years)`}
            </p>
            <p className="text-xs text-[#212121] md:text-base">
              {`INR (₹) ${formatAmount(data.salary.min)}  - ${formatAmount(
                data.salary.max
              )} / Month`}
            </p>
            <p className="text-xs text-[#212121] md:text-base">
              {`${data.total_employee || "0"} employees`}
            </p>
          </div>
          <div>
            {data.apply_type === "quick" ? (
              <Button
                onClick={() => Toast("Job applied successfully", "success")}
                className="h-8 rounded-md bg-[#1597E4] px-4 py-1 text-xs text-white shadow-sm md:h-10  md:py-2 md:text-base"
              >
                Apply Now
              </Button>
            ) : (
              <Button
                onClick={() =>
                  Toast("Job external applied successfully", "success")
                }
                className="h-8 rounded-md border border-[#1597E4] bg-white px-4 py-1 text-xs text-[#1597E4] shadow-sm md:h-10 md:py-2 md:text-base"
              >
                External Apply
              </Button>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => {
              setOpenDeleteModal(true);
              setSelectedJob(data);
            }}
            className=""
            iconName="material-symbols:delete"
            iconColor="#D86161"
            iconWidth={24}
          />
          <Button
            onClick={() => {
              setOpenEditModal(true);
              setSelectedJob(data);
            }}
            className=""
            iconName="material-symbols:edit"
            iconColor="#1597E4D4"
            iconWidth={24}
          />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
