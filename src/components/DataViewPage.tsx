import dataviewcss from "./DataViewPage.module.css";


function DataViewPage () {
    return (
        <>
          <header className={dataviewcss.head}>
            {" "}
            <h1>Data View</h1>{" "}
          </header>
          <div className={dataviewcss.inputs}>
            <div className={dataviewcss.topinputcon}>
              <div className={dataviewcss.input}>
                <input type="userID" placeholder="UserID"></input>
              </div>
    
              <div className={dataviewcss.input}>
                <input type="UserID" placeholder="Role"></input>
              </div>
    
              <div className={dataviewcss.input}>
                <input type="userID" placeholder="Major"></input>
              </div>
            </div>
            <button type="button" className="btn btn-info mx-auto">
              Submit
            </button>
          </div>
    
          <hr></hr>
          
          {/* <div className="Table">
                <div className="tableHeader"></div>
                <div className="tableFormat"></div>
              </div> */}
    
          <hr></hr>
        </>
      );

}

export default DataViewPage