import React from "react";

const MissedGoal = () => {
  return <h1>MISSED!</h1>;
}

const MadeGoal = () => {
  return <h1>Goal!</h1>;
}

const Goal = (props) => {
  const isGoal = props.isGoal;
  
  // if COndition
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;

    // Ternary Operator
    return (
        <>
            { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    );
}

export default Goal;
