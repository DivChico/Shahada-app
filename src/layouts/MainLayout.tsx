import React from "react";

const MainLayout = () => {
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  return (
    <>
      <div className="max-w-5xl mx-auto p-8 text-center">
        <h1 onClick={handleClick}>dark light mode</h1>
      </div>
    </>
  );
};

export default MainLayout;
