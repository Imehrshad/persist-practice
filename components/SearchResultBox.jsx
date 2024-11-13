import React, { useEffect, useState } from "react";
import { GET } from "@/repository/FetchGet";
import SearchSingleItem from "./SearchSingleItem";

const SearchResultBox = ({ value }) => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const getData = async () => {
    const response = await GET("/products");
    const result = await response.json();
    setData(result);
    setDisplayData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const search = setTimeout(() => {
      if (value === "") {
        setDisplayData(data);
        setIsInputEmpty(true);
      } else {
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setDisplayData(filteredData);
        setIsInputEmpty(false);
      }
    }, 500);

    return () => clearTimeout(search);
  }, [value, data]);

  return (
    <>
      {" "}
      {/* this is the div that has textra width i want handle with scroll bar  */}
      <div className="flex justify-end items-center  gap-2 overflow-x-auto w-full" >
        {isInputEmpty ? (
          <div className="flex justify-center items-center w-full">
            <h2>جستجو کنید...</h2>
          </div>
        ) : (
          displayData.map((item) => (
            <SearchSingleItem key={item.id} item={item} />
          ))
        )}
      </div>
    </>
  );
};

export default SearchResultBox;
