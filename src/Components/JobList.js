import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Filter from "../Components/Filter";
function JobList({ data }) {
  const [datas, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchLoc, setsearchLoc] = useState("");
  useEffect(() => {
    setData(data);
  }, []);
  console.log(datas);
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-row justify-between rounded-xl border  m-14 p-5 gap-2 bg-light-card ">
        <div className="flex flex-row justify-center items-center gap-1 flex-1 bg-light-card ">
          <i class="ri-search-line"></i>
          <input
            className="p-2  w-11/12 bg-light-card focus:outline-none "
            type="text"
            placeholder="Search a job"
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-1 flex-1 bg-light-card ">
          <i class="ri-map-pin-line"></i>
          <input
            className="p-2 w-11/12 bg-light-card focus:outline-none "
            type="text"
            placeholder="Search a job with location"
            onChange={(e) => setsearchLoc(e.target.value)}
          />
        </div>
      </div>
      <div className="grid  mx-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-3 gap-10 mt-10">
        {datas
          .filter((data) => {
            if (searchTerm == "" && searchLoc == "") {
              return data;
            } else if (
              data.position.toLowerCase().includes(searchTerm.toLowerCase()) &&
              data.location.toLowerCase().includes(searchLoc.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => (
            <Link to={`/job/${data.id}`} key={data.id}>
              <article className=" bg-light-card shadow px-5  rounded-xl dark:bg-dark-card dark:border-none ">
                <div className="flex relative flex-col justify-center text-center align-center gap-2 py-5 ">
                  <img
                    className="w-12 h-12 object-contain rounded-lg absolute -top-5 left-1/2 "
                    src={data.logo}
                    style={{ backgroundColor: `${data.logoBackground}` }}
                  />

                  <div className="flex flex-row justify-start items-center gap-1 text-black dark:text-white">
                    <p>{data.postedAt}</p>
                    <span className="rounded-full  w-1 h-1 bg-black"></span>
                    <p>{data.contract}</p>
                  </div>
                  <h2 className="font-bold capitalize text-xl my-6 dark:text-white">
                    {data.position}
                  </h2>
                  <div className="flex flex-row justify-between  text-center items-center">
                    <p className="capitalize text-black  flex justify-center items-center gap-1 dark:text-white">
                      <i class="ri-building-2-line"></i>
                      {data.company}
                    </p>
                    <h3 className="capitalize flex justify-center items-center gap-1 text-indigo-500 font-bold ">
                      {data.location}
                      <i class="ri-map-pin-line"></i>
                    </h3>
                  </div>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default JobList;
