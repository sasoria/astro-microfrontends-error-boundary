import React from "react";
import "./App.css";

const App = () => {
    throw new Error("Throwing error from microfrontend");

    return (
        <section className="app-a">
            <h1>App a</h1>
        </section>
    )
};

export default App;
