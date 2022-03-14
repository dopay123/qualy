import React from "react";

function Fiat() {
  return (
    <iframe
      src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
      height="595px"
      width="440px"
      title="Onramper widget"
      frameborder="0"
      allow="accelerometer;
  autoplay; camera; gyroscope; payment"
      style="box-shadow: 1px 1px 1px 1px
  rgba(0,0,0,0.1);"
    >
      <a href="https://widget.onramper.com" target="_blank">
        Buy crypto
      </a>
    </iframe>
  );
}

function App() {
  return (
    <div className="App">
      <p>Iframes in React</p>
      <iframe>
        <MyComponent />
      </iframe>
    </div>
  );
}

export default App;
