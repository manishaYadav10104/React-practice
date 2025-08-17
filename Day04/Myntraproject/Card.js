
 export default function Card(props) {
    return (
        <div className="card" style={{ border: "2px solid black" }}>
            <img
                src={props.image}
                height="200px"
                width="200px"
            />
            <div style={{ textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h3>Shop Now</h3>
            </div>
        </div>
    );
}