/* const cardStyle = {
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
      }; */

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProductList from "./components/ProductList";
import Card, { InfoCard, WarningCard } from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      name: "Shirt",
      price: 299,
      category: "Clothing",
      onSale: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Pants",
      price: 450,
      category: "Clothing",
      onSale: true,
      inStock: false,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1299,
      category: "Electronics",
      onSale: false,
      inStock: true,
    },
    {
      id: 4,
      name: "Mousepad",
      price: 129,
      category: "Misc",
      onSale: false,
      inStock: true,
    },
  ];

  function showName(name) {
    alert(name);
  }

  return (
    <main>
      <section className="card-container">
        <ProfileCard
          name="Isabelle"
          title="Student"
          desc="Lorem ipsum dolor sit amet"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oR8vvfmKtC7123X2Oq2yefmkpMde6Y75tg&s"
          alertName={showName}
        />
        <ProfileCard
          name="Mimer"
          title="Cat"
          desc="Does nothing"
          img="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          alertName={showName}
        />
        <ProfileCard
          name="Pedro Pascal"
          title="Actor"
          desc="Acts in stuff"
          img="https://primary.jwwb.nl/public/o/e/c/temp-jqisaigwopnxxlyuaxqc/pedropascalmeme.jpg"
          alertName={showName}
        />
        <ProfileCard
          name="Harry Potter"
          title="Wizard"
          img="https://www.gamereactor.se/media/99/_3999933.jpg"
          alertName={showName}
        />
      </section>
      <section className="list-container">
        <ProductList products={products} />
      </section>
      <section className="base-card-container">
        <Card title="Jane Doe">
          <h3>Teacher</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
            quidem.
          </p>
        </Card>
        <Card title="Adipower Weightlifting">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8004cd534fac4dc0a5fd02ac3dadfcd8_9366/Adipower_Weightlifting_3_Skor_Vit_JP9872.jpg"
            alt="Adipower Weightlifting"
          />
          <p>
            Den perfekta grunden för tunga lyft. De här högteknologiska Adipower
            Weightlifting 3-skorna från adidas har en tålig textilovandel som
            fixerar foten med rem och snören
          </p>
        </Card>
        <Card title="Contact Form">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </Card>
        <WarningCard>
          <p>Varning</p>
        </WarningCard>
        <InfoCard>
          <p>Information</p>
        </InfoCard>
      </section>
    </main>
  );
}

export default App;
