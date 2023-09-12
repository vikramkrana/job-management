import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "@/atoms/button";
import TextInputField from "@/atoms/Input";
import RadioInputGroup from "@/atoms/radio";

function JobForm({
  formType,
  selectedJob,
  stepCount,
  setStepCount,
  handleFormSubmit,
  loading,
}) {
  const validationSchema = Yup.object({
    job_title: Yup.string().required("Job title is required"),
    company_name: Yup.string().required("Company name is required"),
    industry: Yup.string().required("Industry is required"),
    location: Yup.string(),
    remote_type: Yup.string().required("Remote type is required"),
    experienceMin: Yup.number(),
    experienceMax: Yup.number(),
    salaryMin: Yup.number(),
    salaryMax: Yup.number(),
    total_employee: Yup.string(),
    apply_type: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        job_title: selectedJob?.job_title || "",
        company_name: selectedJob?.company_name || "",
        industry: selectedJob?.industry || "",
        location: selectedJob?.location || "",
        remote_type: selectedJob?.remote_type || "",
        experienceMin: selectedJob?.experience?.min || "",
        experienceMax: selectedJob?.experience?.max || "",
        salaryMin: selectedJob?.salary?.min || "",
        salaryMax: selectedJob?.salary?.max || "",
        total_employee: selectedJob?.total_employee || "",
        apply_type: selectedJob?.apply_type || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (stepCount === 1) {
          setStepCount(2);
        } else {
          handleFormSubmit(values, formType);
        }
      }}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
      }) => (
        <Form>
          <div className="flex flex-col gap-6">
            {stepCount === 1 ? (
              <>
                <TextInputField
                  name="job_title"
                  value={values.job_title}
                  onChange={handleChange}
                  label="Job title"
                  placeholder="ex. UX UI Designer"
                  required={true}
                  error={errors.job_title && touched.job_title}
                />
                <TextInputField
                  name="company_name"
                  value={values.company_name}
                  onChange={handleChange}
                  label="Company name"
                  placeholder="ex. Google"
                  required={true}
                  error={errors.company_name && touched.company_name}
                />
                <TextInputField
                  name="industry"
                  value={values.industry}
                  onChange={handleChange}
                  label="Industry"
                  placeholder="ex. Information Technology"
                  required={true}
                  error={errors.industry && touched.industry}
                />
                <div className="flex justify-between gap-6">
                  <TextInputField
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    label="Location"
                    placeholder="ex. Chennai"
                  />
                  <TextInputField
                    name="remote_type"
                    value={values.remote_type}
                    onChange={handleChange}
                    label="Remote type"
                    placeholder="ex. In-office"
                    required={true}
                    error={errors.remote_type && touched.remote_type}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between gap-6">
                  <TextInputField
                    name="experienceMin"
                    value={values.experienceMin}
                    onChange={handleChange}
                    label="Experience"
                    placeholder="Minimum"
                    type="number"
                  />
                  <TextInputField
                    name="experienceMax"
                    value={values.experienceMax}
                    onChange={handleChange}
                    label="Experience"
                    placeholder="Maximum"
                    labelClassName="opacity-0"
                    type="number"
                  />
                </div>
                <div className="flex justify-between gap-6">
                  <TextInputField
                    name="salaryMin"
                    value={values.salaryMin}
                    onChange={handleChange}
                    label="Salary"
                    placeholder="Minimum"
                    type="number"
                  />
                  <TextInputField
                    name="salaryMax"
                    value={values.salaryMax}
                    onChange={handleChange}
                    label="Salary"
                    placeholder="Maximum"
                    labelClassName="opacity-0"
                    type="number"
                  />
                </div>

                <TextInputField
                  name="total_employee"
                  value={values.total_employee}
                  onChange={handleChange}
                  label="Total employee"
                  placeholder="ex. 100"
                />
                <div className="mb-2 flex justify-between gap-6">
                  <RadioInputGroup
                    name="apply_type"
                    title="Apply type"
                    options={[
                      { label: "Quick apply", value: "quick" },
                      { label: "External apply", value: "external" },
                    ]}
                    selectedValue={values.apply_type}
                    onSelectionChange={(value) => {
                      setFieldValue("apply_type", value);
                    }}
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-24 flex justify-end">
            <Button
              disabled={loading}
              loading={loading}
              type="submit"
              onClick={handleSubmit}
              className="h-10 w-[68px] rounded-md bg-[#1597E4] px-4 py-2 text-base  text-white shadow-sm"
            >
              {stepCount === 1 ? "Next" : "Save"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default JobForm;
