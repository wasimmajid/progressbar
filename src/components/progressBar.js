import React from "react";
const { forwardRef, useImperativeHandle, useState } = React;

const ProgressBar = forwardRef((props, ref) => {
  const [progress, setProgress] = useState(props.progressed);
  useImperativeHandle(ref, () => ({
    updateProgress(change) {
      let newProgress = parseInt(progress) + parseInt(change);
      newProgress = newProgress < 0 ? 0 : newProgress;
      setProgress(newProgress);
    },
  }));

  const progressbarcompletion = `test-progress-bar${props.name}`;
  const progressbarcolor = `test-progress-bar-color${props.name}`;
  const progressBarClassName =
    progress > 100 ? "progress-bar bg-danger" : "progress-bar bg-info";
  const progressPercentage = `${progress}%`;
  return (
    <div>
      <div className="progress" data-testid="test-progress-bar">
        <div
          data-testid={progressbarcolor}
          className={progressBarClassName}
          role="progressbar"
          style={{ width: progressPercentage }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div data-testid={progressbarcompletion} className="progress-text">
        {progressPercentage}
      </div>
    </div>
  );
});

export default ProgressBar;
