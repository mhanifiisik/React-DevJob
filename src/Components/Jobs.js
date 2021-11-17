import React from "react";
import { useParams } from "react-router-dom";

function Jobs({ data }) {
  let { id } = useParams();
  var jobid = parseInt(id);
  const filterdata = data.find((job) => job.id === id);

  return (
    <div className="xl:mx-auto max-w-4xl">
      {data
        .filter((job) => job.id === jobid)
        .map((job, index) => (
          <article
            key={index}
            className="flex flex-col gap-10 mx-5 dark:border-black dark:text-white "
          >
            <div className="flex flex-col md:flex-row md:justify-between border justify-center items-center rounded-lg gap-5 p-5 mt-10">
              <img
                className=" object-contain rounded-lg w-16 h-16 md:w-36 md:h-36	"
                src={`.${job.logo}`}
                style={{ backgroundColor: `${job.logoBackground}` }}
              />
              <div className="flex flex-col gap-5  justify-center items-center md:justify-start">
                <h2 className="font-bold text-xl">{job.company}</h2>
                <a className="text-gray-500 text-lg cursor-pointer">
                  {job.website}
                </a>
              </div>
              <a
                className="border p-2 md:px-4 md:py-5 rounded-lg font-bold text-base bg-indigo-100 text-indigo-500 hover:bg-indigo-300"
                href={job.website}
                target="_blank"
              >
                Company Site
              </a>
            </div>
            <div className="flex flex-col gap-5 border p-5 ">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-start items-center gap-3">
                  <p>{job.postedAt}</p>
                  <span className="rounded-full  w-1 h-1 bg-black"></span>
                  <p>{job.contract}</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center   gap-4 ">
                  <div className="flex flex-col gap-3">
                    <h2 className="font-bold capitalize text-xl">
                      {job.position}
                    </h2>
                    <h3 className="capitalize  text-indigo-500 font-bold text-sm ">
                      {job.location}
                    </h3>
                  </div>
                  <div className="mt-5 md:mt-0">
                    <a className="bg-indigo-500 w-full py-3 px-5 md:py-5 md:px-7  rounded cursor-pointer text-white font-bold hover:bg-indigo-400">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <p className="py-5">{job.description}</p>
              <div className="flex flex-col gap-4">
                <h3 className="font-extrabold	 text-xl">Requirements</h3>
                <p>{job.requirements.content}</p>
                <ul class="list-disc pl-5">
                  {job.requirements.items.map((item) => (
                    <li className="pb-5">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-extrabold text-xl">What You Will Do</h3>
                <p>{job.role.content}</p>
                <ul className="list-decimal pl-3">
                  {job.role.items.map((item) => (
                    <li className="pb-5">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="w-full bg-indigo-600 md:flex md:Flex-row md:justify-between md:items-center text-white text-lg md:bg-white dark:bg-dark-card rounded-lg text-center font-bold p-2 md:p-5">
                <div className="hidden md:flex md:flex-col md:justify-start ">
                  <h3 className="text-black font-bold text-xl dark:text-white">
                    {job.position}
                  </h3>
                  <p className="text-left">{job.company}</p>
                </div>
                <a
                  href={job.apply}
                  className="md:bg-indigo-600 md:px-12 md:rounded-lg md:py-3 "
                  target="_blank"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}

export default Jobs;
