import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchResultBox from "./SearchResultBox";

const MyHeader = () => {
  const [showResult, setShowResult] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropDownRef = useRef();

  const focusHandler = () => {
    setShowResult(true);
  };
  const closeDropdown = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setShowResult(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-full p-2 flex justify-center items-center flex-col relative overflow-visible h-16">
      <div
        onFocus={focusHandler}
        className="relative bg-gray-200 w-2/3 px-2 py-1 focus-within:border-gray-400 focus-within:border rounded-md flex justify-start items-center"
      >
        <input
          type="text"
          onChange={changeHandler}
          className="focus:outline-none border-none bg-transparent flex-grow"
        />
        <label className="absolute right-2 my-auto">
          <IoIosSearch />
        </label>
      </div>
      {/* this is the div that has overflow hidden  */}
      <div
        ref={dropDownRef}
        className={`w-2/3 p-2 overflow-x-auto absolute mx-auto rounded-md z-10 top-14 bg-white transition-all duration-500 ${
          showResult
            ? " max-h-96 opcaity-100  shadow border "
            : " opacity-0 border-gray-200 border-0 max-h-0 "
        }`}
      >
        <SearchResultBox value={inputValue} />
      </div>
    </div>
  );
};

export default MyHeader;
