import Image from "next/image";
import React from "react";

const SearchSingleItem = ({ item }) => {
  return (
    <div className="w-2/6 flex px-2 py-3 gap-3 justify-center items-center flex-col bg-gray-200 md:h-60">
      <div className="w-full h-5/6 aspect-square bg-cover overflow-hidden flex justify-center items-center">
        <Image src={item.image} width={120} height={120}  />
      </div>
      <h1 className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
        {item.title}ّ
      </h1>
    </div>
  );
};

export default SearchSingleItem;
