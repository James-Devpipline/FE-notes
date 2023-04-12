export default function CountControls(props) {
  // console.log("controls props: ", props);
  return (
    <>
      <button onClick={props.handleClick}>Add</button>
      <button onClick={props.handleReset}>Reset</button>
    </>
    // review what ryan said at 4:38pm on april 6 lecture
  );
}
