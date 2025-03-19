import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function renderMessage() {
    if (isLoggedIn) {
      return <h1>Welcome back, User!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  }

  return (
    <div>
      {renderMessage()}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;


