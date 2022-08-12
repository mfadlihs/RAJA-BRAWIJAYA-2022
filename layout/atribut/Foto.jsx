import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { PreviewAtribut } from "../../constants/Dummy";

export default function FotoAtribut({ isMan }) {
  const [data, setData] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shrink-0 w-fit md:w-auto mx-auto rounded-3xl p-3 border-orange border-4">
      <img
        src={PreviewAtribut(isMan)[data].image}
        className="object-fill mb-4 h-[420px] lg:w-[300px]"
      />
      <div className="relative">
        <button
          className="bg-orange hover:bg-orange text-white flex justify-between relative  w-full px-5 rounded-md py-2"
          fullWidth
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <div>{PreviewAtribut(isMan)[data].title}</div>
          <KeyboardArrowDownIcon />
        </button>
        <div
          className={`absolute top-10 bg-yellow w-full  left-0 right-0 rounded-lg ${
            isExpanded ? "block" : "hidden"
          }`}
          onClick={() => {
            setIsExpanded(false);
          }}
        >
          {PreviewAtribut(isMan).map((item, index) => {
            return (
              <button
                className="bg-yellow hover:bg-yellow text-white w-full rounded-md py-2"
                onClick={() => {
                  setData(index);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
