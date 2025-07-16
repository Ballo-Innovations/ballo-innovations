"use client";

import React, { useRef, useState } from "react";
import { jobPosts } from "@/constants/jobs";
import Link from "next/link";
import "./style.css";
import teamImg from "@/public/elements/team.png";
import bgImg from "@/public/elements/Management Team.png";
import brush from "@/public/elements/brush.png";
import background from "@/public/Backgrounds/About.png";
import Image from "next/image";

export default function CareersPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [submited, setSubmited] = useState(false);

  const now = new Date();
  const activeJobs = jobPosts.filter(
    (job) => job.status === "open" && new Date(job.endDate) > now
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://usebasin.com/f/c52bce6aa202", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setSubmited(true);
      } else {
        setStatus("error");
        console.error("Submission failed:", await response.text());
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div
      className="careers-page min-h-screen bg-gradient-to-b from-[#0D0E25] to-black text-white relative -mt-4 w-[100vw] overflow-hidden"
      style={{ background: `url(${background.src})`, backgroundSize: "cover" }}
    >
      <Image
        src={bgImg}
        className={
          activeJobs.length
            ? "hidden"
            : "absolute w-full object-contain h-full rotate-[145deg] -left-[15%] top-[5%] z-[0] opacity-15"
        }
        alt="Ballo Innovations team"
      />
      <div className="pt-32 pb-20 md:pb-32 md:pt-48 px-4 md:pl-20 md:pr-10 relative">
        {/* Top Section */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 md:px-5 pt-[15vh] md:pt-0 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prepare Your Brush And
              <br /> <span className="text-[darkturquoise]">Begin</span>{" "}
              Painting Your
              <br />
              Journey <span className="text-[darkturquoise]">With Us</span>!
            </h1>

            <p className="text-lg text-gray-100 mb-8">
              Ballo Innovations believes in providing equal opportunities to
              everyone, offering the right tools and opportunities. Ballo
              Innovations is prepared to be your second home.
            </p>
          </div>
          <div className="md:w-[60vw] relative">
            <Image
              src={teamImg}
              className="w-full h-full rotate-6 z-[2]"
              alt="Ballo Innovations team"
            />
          </div>
        </div>

        {/* Job Offerings Section */}
        <div>
          <h2
            className={
              !activeJobs.length
                ? "hidden"
                : "text-4xl font-semibold my-10 mx-5 text-center md:text-start"
            }
          >
            <span className="text-[darkturquoise]">Available</span> Job
            Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-[2rem] md:gap-[5rem] relative z-[1]">
            {/* <div class="e-card playing">              
              <div class="infotop">
    
                  UI / EX Designer
                <br />
                <div class="name">Lusaka, Zambia</div>
                <div class="name">Full-time</div>
                <div class="name">Posted 5 days ago</div>
              </div>
            </div> */}

            {activeJobs.map((job, index) => (
              <Link
                href={`/careers/${job.slug}`}
                key={job.slug}
                className="relative job-card-container"
              >
                <div class="parent md:min-w-[400px]">
                  <div class="job-card relative">
                    <div class="glass"></div>
                    <div class="content">
                      <div className="absolute right-8 top-5 font-semibold text-white/70 text-3xl">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 mb-2">{job.location}</p>
                      <span class="title">{job.title}</span>
                      <span class="text text-gray-800">
                        Posted {job.postedDaysAgo} days ago
                      </span>
                    </div>
                    <div class="bottom flex flex-wrap w-full">
                      <div class="tags-container">
                        <div class="tag .tag1 min-w-[6rem]">
                          <span className="badge bg-white text-sm px-3 py-1 rounded-full w-max">
                            {job.type}
                          </span>
                        </div>
                        <div class="tag .tag2 min-w-[6rem] w-max mx-5">
                          <span className="badge bg-white text-sm px-3 py-1 rounded-full w-max">
                            {job.experience} Years Min. Exp.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {!activeJobs.length && (
            <div className="relative">
              <h2 className="text-4xl font-semibold mt-10 mb-6 mx-5 text-center relative">
                We&apos;re Not Hiring Right Now
                <br />
                <span className="text-[darkturquoise] text-5xl">
                  But Stay Tuned!{" "}
                </span>
              </h2>
              <div className="w-full flex-center flex-col gap-10 relative">
                <div className="flex-1 max-w-5xl text-center">
                  <p className="text-lg text-gray-100 mb-8">
                    We’re building something meaningful, and while we don’t
                    currently have roles open, we always have space for
                    exceptional thinkers and doers. If you&apos;re creative,
                    hardworking, and passionate about technology, design, or
                    communication, we want to know you exist.
                  </p>
                  <p className="text-lg text-gray-100 mb-8">
                    If you think you could shape the future of our work, send
                    over your CV and a short note on how you’d contribute. We
                    read every message. And we respond to the ones that spark
                    something real.
                  </p>
                </div>

                <div className="p-6 rounded-lg shadow space-y-4 text-black max-w-2xl flex-1 job-form-container">
                  <h2 className="text-xl font-semibold">Application</h2>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    encType="multipart/form-data"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="First name"
                        type="text"
                        placeholder="First name *"
                        required
                        className="col-span-1 border border-gray-300 rounded px-4 py-2"
                      />
                      <input
                        name="Last name"
                        type="text"
                        placeholder="Last name *"
                        required
                        className="col-span-1 border border-gray-300 rounded px-4 py-2"
                      />
                    </div>
                    <input
                      name="Email"
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                      name="Phone numbers"
                      type="text"
                      placeholder="Phone number *"
                      required
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
                        Resume / CV *
                      </label>
                      <input
                        name="Resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
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
                          <input type="radio" name="experience" value="0-2" />{" "}
                          0–2 years
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="experience" value="3-5" />{" "}
                          3–5 years
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="experience" value="5+" /> 5+
                          years
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={submited}
                      className={`w-full text-white px-6 py-2 rounded ${
                        submited
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-black hover:bg-gray-900"
                      }`}
                    >
                      Submit Application
                    </button>
                    {status === "success" && (
                      <p className="text-green-600 text-2xl text-center font-bold mt-10">
                        Thanks! We’ve received your application.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 text-sm mt-2 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
