import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { PreviewAtribut } from "../../constants/Dummy";

export default function FotoAtribut({ isMan }) {
  const [data, setData] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const Cowo = () => {
    return <div className='w-fit my-8 mx-auto'>
      <img src='/assets/images/atributCowo.png'/> 
    </div>
  }

  const Cewe = () => {
    return <div className='w-fit my-8 mx-auto'>
      <img className='grow' src='/assets/images/atributCewe1.png'/> 
    </div>
  }

  return (
    <div className='my-8'>
      {/* <Cewe/> */}
      {isMan ? <Cowo/> : <Cewe/>}
    </div>
  );
}
