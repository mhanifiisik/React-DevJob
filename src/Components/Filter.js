import React, { useState } from "react";

function Filter() {
  return (
    <div className="w-full h-16 relative mt-10">
      <div className="max-w-7xl h-full	mx-auto border rounded-xl shadow bg-white flex flex-row justify-between items-center px-5">
        <div className="flex flex-row items-center w-11/12">
          <i class="ri-search-line"></i>
          <input
            type="text"
            placeholder="Enter job"
            class="flex flex-row-reverse w-full "
          />
        </div>
        <i class="ri-filter-line"></i>
      </div>
    </div>
  );
}

export default Filter;
