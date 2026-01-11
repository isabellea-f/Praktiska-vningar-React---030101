// enkel komponent som visar ert namn och en kort
// Experimentera med att lägga till styling, både inline-styles och genom
// att modifiera App.css

import "./App.css";

const cardStyle = {
  backgroundColor: "#ffffff",
  textAlign: "center",
  padding: "24px",
  borderRadius: "12px",
  maxWidth: "400px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e0e0e0",
  fontFamily: "sans-serif",
  color: "black",
};

const Card = () => {
  return (
    <>
      <div style={cardStyle}>
        <h1>Isabelle</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          soluta pariatur eum suscipit illo autem quidem animi saepe possimus
          odio amet deserunt voluptas ut sapiente, est consequatur laudantium
          porro? Libero!
        </p>
      </div>
    </>
  );
};

function App() {
  return (
    <main>
      <Card></Card>
    </main>
  );
}

export default App;
