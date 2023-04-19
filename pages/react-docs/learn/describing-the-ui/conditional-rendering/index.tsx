function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function Item1({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <div className="item">{name}</div>;
}

function Item2({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✔" : name}</li>;
}

function Item3({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

function Item4({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && " ✔"}
    </li>
  );
}

function Item5({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <h2>Conditionally returning JSX </h2>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
      <h2>Conditionally returning nothing with null </h2>
      <ul>
        <Item1 isPacked={true} name="Space suit" />
        <Item1 isPacked={true} name="Helmet with a golden leaf" />
        <Item1 isPacked={false} name="Photo of Tam" />
      </ul>
      <h2>Conditionally including JSX </h2>
      <h2>Conditional (ternary) operator (? :)</h2>
      <ul>
        <Item2 isPacked={true} name="Space suit" />
        <Item2 isPacked={true} name="Helmet with a golden leaf" />
        <Item2 isPacked={false} name="Photo of Tam" />
      </ul>
      <ul>
        <Item3 isPacked={true} name="Space suit" />
        <Item3 isPacked={true} name="Helmet with a golden leaf" />
        <Item3 isPacked={false} name="Photo of Tam" />
      </ul>
      <h2>Logical AND operator (&&) </h2>
      <ul>
        <Item4 isPacked={true} name="Space suit" />
        <Item4 isPacked={true} name="Helmet with a golden leaf" />
        <Item4 isPacked={false} name="Photo of Tam" />
      </ul>
      <h2>Conditionally assigning JSX to a variable </h2>
      <ul>
        <Item5 isPacked={true} name="Space suit" />
        <Item5 isPacked={true} name="Helmet with a golden leaf" />
        <Item5 isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
