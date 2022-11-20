import React from "react";
import { useState, useRef } from "react";
import ProgressBar from "./progressBar";
import { ProgressBarData, Buttons } from "./configdata";

const App = () => {
  const [barIndex, setBarIndex] = useState(0);
  const refArray = useRef([]);

  const changeBar = (e) => {
    setBarIndex(e.target.selectedIndex);
  };

  return (
    <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h1 className="border-bottom border-gray pb-2 mb-0">
          Progress Bar Demo
        </h1>
        {ProgressBarData.map((bar, index) => (
          <div key={index} className="media text-muted pt-3">
            <ProgressBar
              progressed={bar.value}
              name={bar.name}
              ref={(ref) => {
                refArray.current[index] = ref;
              }}
            ></ProgressBar>
          </div>
        ))}

        <div className="media text-muted pt-3"></div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <select
                className="form-control"
                data-testid="progress-dropdown"
                onChange={(e) => changeBar(e)}
              >
                {ProgressBarData.map((bar, index) => (
                  <option value={index} key={index}>
                    {bar.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              {Buttons.map((button, index) => (
                <button
                  key={index}
                  className="btn btn-primary"
                  type="button"
                  onClick={() =>
                    refArray.current[barIndex].updateProgress(button.value)
                  }
                >
                  {button.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
