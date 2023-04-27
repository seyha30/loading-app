/******************************************************************************
 * @Author                : seyha30<sinseyha1x@gmail.com>                     *
 * @CreatedDate           : 2023-04-27 21:47:19                               *
 * @LastEditors           : seyha30<sinseyha1x@gmail.com>                     *
 * @LastEditDate          : 2023-04-27 21:56:25                               *
 * @FilePath              : loading-app/src/App.js                            *
 * @CopyRight             : SAMBAT FINANCE                                    *
 *****************************************************************************/

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState();
  const fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          "Successfully fetched data from a non-existent API of KindaCode.com"
        );
      }, 2000);
    });
  };

  const buttonHandler = async () => {
    // show loading
    setIsLoading(true);
    // do the fake request and wait for it to finish
    const result = await fakeRequest();
    setLoadedData(result);

    // auto hide the loading dialog when the asynchronous operation is done
    setIsLoading(false);
  };

  return (
    <>
      {/* This is the modal that is hidden by default */}
      <div style={{ display: isLoading ? "flex" : "none" }} className="modal">
        <div className="modal-content">
          <div className="loader"></div>
          <div className="modal-text">Loading...</div>
        </div>
      </div>

      {/* main content */}
      <div className="container">
        <h2>Welcome to KindaCode.com</h2>
        {/* This button is used to start the loading process */}
        <button className="button" onClick={buttonHandler}>
          Start Loading Data
        </button>
        <br />

        {/* Display loaded data if available */}
        {loadedData && <p>{loadedData}</p>}
      </div>
    </>
  );
}

export default App;
