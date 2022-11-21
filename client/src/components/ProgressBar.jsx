import React from 'react';
import { ChildProgress, ParentProgress, ProgressBarTitle } from '../styles/style';
function ProgressBar(props) {
  const completed = props.progress.completed;
  const AllTasks = props.progress.data;

  let calc = `${((completed * 100) / AllTasks).toFixed(1)}%`;
  return (
    <ParentProgress>
      <ChildProgress calc={calc}>
        <ProgressBarTitle>
          {completed} of {AllTasks} tasks done
        </ProgressBarTitle>
      </ChildProgress>
    </ParentProgress>
  );
}

export default ProgressBar;
