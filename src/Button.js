import "./Button.css";

function Button(props) {
  let idx = 0;

  function whenButtonPressed() {
    const randomMessage = [
      "He who controls the spice controls the whole universe!",
      "The spice must flow",
      "Fear is the mind-killer",
    ];

    idx++;

    if (idx === 3) {
      idx = 0;
    }

    // console.log(randomMessage[idx]);
  }

  return (
    <>
      <button className="duneButton" onClick={whenButtonPressed}>
        {props.buttonText + props.appendMessage}
      </button>
    </>
  );
}

export default Button;
