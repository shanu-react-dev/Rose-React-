import React from "react";

const Child = (props) => {
  console.log(props);
  let { username, friend, boyfriend, age } = props.obj;
  return (
    <div>
      {/* <h1>I am Child Component</h1>
      <h3>Data from Parent component received: {props.data}</h3>
      <h3>Ben 10's Age is: {props.age}</h3>
      <h3>Is Married or Not: {props.isMarried}</h3>
      <h3>Have Kids: {String(props.haveKids)}</h3>
      <h3>Is placed or not: {String(props.isPlaced)}</h3>
      <h3>Does he have girlfriends: {String(props.girlfriends)}</h3> */}

      {props.arr.map(function (ele, index) {
        return <h1 key={index}>{ele}</h1>;
      })}

      <h1>Username: {username}</h1>
      <h1>Friend Name: {friend}</h1>
      <h1>BoyFriend Name: {boyfriend}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

export default Child;
