
import dataeditcss from "./DataEditPage.module.css";
import { useMemo } from "react";
import { createColumnHelper, useReactTable } from "@tanstack/react-table";
import data from "./studentcoursegrades.json";

type StudentInfo = {
  course: number;
  courseID: string;
  credithours: number;
  grade: string;
  gradepoint: number;
}

function DataEditPage () {


  return (
    <>

<div className="alert alert-danger text-center mx-auto" role="alert">
          Error #99: Database Denied Request (Query)
        </div>

    <header className={dataeditcss.head}>  <h1>DATA EDIT</h1> </header>
      <div className={dataeditcss.inputs}>
        <div className={dataeditcss.topinputcon}>
          <div className={dataeditcss.input}>
            <input type="userID" placeholder="Action"></input>
          </div>

          <div className={dataeditcss.input}>
            <input type="UserID" placeholder="UserID"></input>
          </div>
        </div>

        <div className={dataeditcss.bottominputcon}>
          <div className={dataeditcss.input}>
            <input type="userID" placeholder="Parameter"></input>
          </div>

          <div className={dataeditcss.input}>
            <input type="UserID" placeholder="Parameter"></input>
          </div>

          <div className={dataeditcss.input}>
            <input type="userID" placeholder="Parameter"></input>
          </div>
        </div>
        <button type="button" className="btn btn-info mx-auto">Submit</button>
      </div>

      <hr></hr>

      {/* <div className="Table">
        <div className="tableHeader"></div>
        <div className="tableFormat"></div>
      </div> */}
    </>
  );
}

function basicTable () {


  const columnHelper = createColumnHelper<StudentInfo> ();

  const columns = [
    columnHelper.accessor("course", {
      cell: info => info.getValue(),
      header: () => <span>Course</span>
    }),
    columnHelper.accessor("courseID", {
      cell: info => info.getValue(),
      header: () => <span>courseID</span>
    }),
    columnHelper.accessor("credit hours", {
      cell: info => info.getValue(),
      header: () => <span>Credit Hours</span>
    }),
    columnHelper.accessor("grade", {
      cell: info => info.getValue(),
      header: () => <span>Grade</span>
    }),
    columnHelper.accessor("grade-point", {
      cell: info => info.getValue(),
      header: () => <span>Grade-Point</span>
    })
  ]
  
  const table = useReactTable({
    data,
    columns
  })
    


}

export default DataEditPage;
