import Child from "./Child";

function Parent() {
  let myChildName = "Shanu";
  return (
    <div>
      <h1>Hello, I am Parent component</h1>
      {/* <Child data={myChildName} myName="Sharanya" age={19} friendName />
      <Child data="Mahendra Bahubali" /> */}
      {/* <Child myName="Sharanya" /> */}
    </div>
  );
}

export default Parent;
