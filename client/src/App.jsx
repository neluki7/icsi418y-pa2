import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <div className="app">
            <h1>Welcome</h1>
            <p className = "subtitle">
                Please log in or sign up to continue.
            </p>
            
            <div className="forms">
                <Signup />
                <Login />
            </div>

        </div>
    );
}

export default App;