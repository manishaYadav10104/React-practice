import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./component/Header";
import Card from "./component/Card";
import arr from "./component/utills/dummy";
import Footer
    from "./component/footer";







function App() {
    return (<>

        <Header />
        {/* //body */}
        <div className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {arr.map((value, index) => (
                <Card key={index}
                    image={value.image}
                    cloth={value.cloth}
                    offer={value.Offer} />
            ))}
        </div>

        <Footer />
    </>
    );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
