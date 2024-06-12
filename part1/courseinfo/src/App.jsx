const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  );
};

const App = () => {
  // constant definitions
  const course = "Half Stack application development";
  const parts = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].part} exercises={parts[0].exercises} />
      <Content part={parts[1].part} exercises={parts[1].exercises} />
      <Content part={parts[2].part} exercises={parts[2].exercises} />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

// always must include this line for the app to work
export default App;
