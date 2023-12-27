function StarScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React React Quiz</h2>
      <h3>{numQuestions} questions to test your react mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let' start
      </button>
    </div>
  );
}

export default StarScreen;
