function Child({
  data = "Default Data",
  myName = "Chris Gayle",
  age = 20,
  friendName = "Amar Kumar",
}) {
  //   console.log();
  //   let { data, myName, age } = props;
  return (
    <div>
      <h1>I am Child Component</h1>
      <h1>{data} from Child component</h1>
      <p>This data we received from parent Component</p>
      <h3>{myName} from Child COmponent</h3>
      <p>I am {age} years old..</p>
      <h1>{friendName}</h1>
    </div>
  );
}
export default Child;
