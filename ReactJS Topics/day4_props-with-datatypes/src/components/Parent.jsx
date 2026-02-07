import React from "react";
import Child from "./Child";

const Parent = () => {
  //   let childName = "Ben 10";
  //   let age = 22;
  //   let isMarried = true;
  //   let haveKids = false;
  //   let isPlaced = null;
  //   let girlfriends = undefined;

  let arr = ["Sundari", "Babygirl", "Mala", "Leela", "Shakeela"];

  let obj = {
    username: "Sundari",
    friend: "Babygirl",
    boyfriend: "Babyboy",
    age: 20,
  };

  return (
    <div>
      <h1>I am Parent Component</h1>
      {/*Primitive Datatypes with Props  */}
      {/* <Child
        data={childName}
        age={age}
        isMarried={String(isMarried)}
        haveKids={haveKids}
        isPlaced={isPlaced}
        girlfriends={girlfriends}
      ></Child> */}
      {/*==========Non-Primitive Datatypes with Props===========  */}
      <Child arr={arr} obj={obj} />
    </div>
  );
};

export default Parent;
