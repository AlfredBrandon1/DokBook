import Spreadsheet from "react-spreadsheet";
import { useState } from "react";
  
const Sheet = () => {
  const [data, setData] = useState([
    [{ value: "Date" }, { value: "Desciption" }, {value: "Diagnosis"},{value: "Prescription"},{value: "Notes"}],
    [{ value: " " }, { value: " " },{ value: " " }, { value: " " },{ value: " " }], [], [],[],[]
  ]);
  return(
    <>
      <div className="spreadsheet-container">
        <Spreadsheet data={data} onChange={setData} />
      </div> 
  </>
  )
    
};

export default Sheet