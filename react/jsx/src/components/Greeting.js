function nameFormatter(name) {
  return name[0].toUpperCase() + name.slice(1);
}

export default function Greeting(props) {
  const user = {
    name: "james",
    age: 22,
    active: props.activeStatus
  };

  return (
    <h1 style={{ fontSize: "5em", fontWeight: "400" }} className={user.active}>
      Howdy, {nameFormatter(user.name)}
    </h1>
  );
}
