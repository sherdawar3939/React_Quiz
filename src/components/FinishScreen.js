function FinishScreen({ points, maximumPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maximumPossiblePoints) * 100;
  let emoji;
  if (points === 100) emoji = "👌";
  if (points >= 80 && points < 100) emoji = "👍";
  if (points >= 50 && points < 80) emoji = "😊";
  if (points >= 40 && points < 50) emoji = "😉";
  if (points === 0) emoji = "😂";

  return (
    <>
      <p className="result">
        <strong>{emoji}</strong> you Scored <strong>{points}</strong> out of{" "}
        {maximumPossiblePoints} ({Math.ceil(percentage)})%
      </p>
      <p className="highscore">(Highscore: {highscore}) Points </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
