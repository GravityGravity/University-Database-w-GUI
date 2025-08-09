import { useState, useEffect } from "react";
import gpacalccss from "./GPACalcPage.module.css";
import data from "./studentcoursegrades.json";
import { createRoot } from "react-dom/client";

function GpaCalc() {
  const [gpaTool, setGpaTool] = useState("Viewing GPA");

  const handleChange = (event: any) => {
    setGpaTool(event.target.value);
  };

  return (
    <>
      <div className={gpacalccss.selectcont}>
        <select className="form-select" onChange={handleChange}>
          <option className={gpacalccss.options}>Viewing GPA</option>
          <option className={gpacalccss.options}>Predicting GPA</option>
        </select>
      </div>
      <GpaToolView tool={gpaTool}></GpaToolView>
      <hr></hr>
      <div className="container">
        <table className="table table-striped table-bordered table-hover px-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course ID</th>
              <th scope="col">Credit Hours</th>
              <th scope="col" className={gpacalccss.gradeheader}>
                Grade
              </th>
            </tr>
          </thead>

          <tbody>
          <GpaTableCreate></GpaTableCreate>
          </tbody>
        </table>
      </div>

      <hr></hr>

      <div className={gpacalccss.calculations}>
        <h3>
          {" "}
          3 + 4 + 4 + 2 + 1 + 4 + 4 + 4 + 3 + 1 + 1 = (30) / 10 &gt;&gt;&gt; GPA
          avg 3.00{" "}
        </h3>
      </div>
    </>
  );
}

function GpaToolView({ tool }: { tool: any }) {
  if (tool == "Viewing GPA") {
    return (
      <>
        <header className={gpacalccss.head}>
          <h1>GPA Viewer</h1>
        </header>
      </>
    );
  }
  if (tool == "Predicting GPA") {
    return (
      <>
        <header className={gpacalccss.head}>
          <h1>GPA Predicting Calculator</h1>
        </header>
        <div className={gpacalccss.inputs}>
        <div className={gpacalccss.topinputcon}>
          <div className={gpacalccss.input}>
            <input type="userID" placeholder="Course To Add"></input>
          </div>

          <div className={gpacalccss.input}>
            <input type="UserID" placeholder="Grade"></input>
          </div>

          <div className={gpacalccss.input}>
            <input type="userID" placeholder="Grade-Point"></input>
          </div>
        </div>
        <button type="button" className="btn btn-info mx-auto">
          Submit
        </button>
      </div>
      </>
    );
  }
}

function GpaTableCreate () {
    let studentmap = data.map((thing, index) => (
      <tr>
        <td scope="row">{index + 1}</td>
        <td>{thing.courseID}</td>
        <td>{thing.credithours}.00</td>
        <td className={gpacalccss.gradecolumn}>{thing.grade}</td>
      </tr>
    ))
  return (<>{studentmap}</>) ;
}

export default GpaCalc;
