import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setShow(!show);
  };

  return (
    <section className="w-ful bg-indigo-700 ">
      <header className="flex flex-row justify-between items-center p-10  max-w-7xl mx-auto font-bold text-white rounded">
        <Link to="/" className="flex flex-row justify-center gap-2 text-3xl">
          <i class="ri-briefcase-line"></i>
          <h1>Dev Jobs</h1>
        </Link>
        <div>
          <button>
            {show ? (
              <i
                onClick={changeTheme}
                class="ri-sun-line text-2xl text-yellow-300"
              ></i>
            ) : (
              <i
                onClick={changeTheme}
                class="ri-moon-line text-2xl text-white"
              ></i>
            )}
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
