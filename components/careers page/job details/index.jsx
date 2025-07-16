"use client";

import React, { useRef, useState } from "react";
import { notFound } from "next/navigation";

export default function JobDetailsPage({ job }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  if (!job) return notFound();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://usebasin.com/f/c52bce6aa202", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white pt-32 text-lg">
      <div className="mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 md:p-8">
          {/* Job Info */}
          <div className="md:col-span-3 space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-800">
                  💼 {job.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-800">
                  🌍 {job.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white">
                  {job.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-700 text-white">
                  📅 Apply by {new Date(job.endDate).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-100 whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Extra Sections */}
            {job.responsibilities && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🧩 Responsibilities
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.coreRequirements && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🧱 Core Requirements
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.coreRequirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.niceToHave && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🌟 Nice to Have
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.niceToHave.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.softSkills && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🤝 Soft Skills
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.softSkills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  📌 Requirements
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.benefits && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🎁 Benefits
                </h2>
                <ul className="list-disc space-y-2 ml-5 text-gray-100">
                  {job.benefits.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.assessment && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  🧪 Assessment: {job.assessment.title}
                </h2>

                {job.assessment.task && (
                  <>
                    <h3 className="text-white font-semibold">Required Tasks</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-100">
                      {job.assessment.task.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.assessment.bonus && (
                  <>
                    <h3 className="text-white font-semibold mt-4">
                      Bonus Points
                    </h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-100">
                      {job.assessment.bonus.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.assessment.evaluationCriteria && (
                  <>
                    <h3 className="text-white font-semibold mt-4">
                      Evaluation Criteria
                    </h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-100">
                      {Object.entries(job.assessment.evaluationCriteria).map(
                        ([key, val], idx) => (
                          <li key={idx}>
                            <strong>{key}:</strong> {val}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}

                {job.assessment.mockAPIs && (
                  <>
                    <h3 className="text-white font-semibold mt-4">Mock APIs</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-100">
                      {job.assessment.mockAPIs.map((api, idx) => (
                        <li key={idx}>{api}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {job.howToApply && (
              <div className="mt-6 bg-black bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  📬 How to Apply
                </h3>
                <p className="text-sm text-gray-100">{job.howToApply}</p>
              </div>
            )}
          </div>

          {/* Application Form */}
          <div className="md:col-span-2 md:max-h-[80vh] md:sticky md:top-32 bg-gray-50 p-1 rounded-lg shadow space-y-4 text-black overflow-hidden">
            <div className="p-6 h-fit md:max-h-[80vh] md:overflow-auto">
              <h2 className="text-xl font-semibold mb-5">Application</h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    name="First name"
                    type="text"
                    placeholder="First name"
                    required
                    className="col-span-1 border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    name="Last name"
                    type="text"
                    placeholder="Last name"
                    required
                    className="col-span-1 border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <input
                  name="Phone numbers"
                  type="text"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <textarea
                  name="Message"
                  placeholder="What would you like us to know about you?"
                  rows="5"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <input
                    name="Resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full border border-dashed border-gray-300 p-3 rounded bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max. file size: 4MB
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How much experience do you have?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="0-2" /> 0–2
                      years
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="3-5" /> 3–5
                      years
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="5+" /> 5+
                      years
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-900"
                >
                  Submit Application
                </button>
                {status === "success" && (
                  <p className="text-green-600 text-sm mt-2">
                    Thanks! We’ve received your application.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
