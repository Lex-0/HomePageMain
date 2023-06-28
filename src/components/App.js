import "../styles.css";
function App() {

  return (
    <div className="containers">
      <div className="container">
        <div className="conthead">
          <img src='assets/img/img1.jpg' alt="text" style={{ width: "100%", height: "50%" }} />
          <div className="contnoticias">
            <div className="aks">The Bright Future of Web 3.0?</div>
            <div className="text">
              <p>
                we dive the next evolution of the web that claims to put the
                power of the platafomrs back into the hands of the people. But
                is it really fulfilling promise?
              </p>
              <div className="btn-button">
              <button className="btn">READ MORE</button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="new">
          <div className="card">
            <h2>New</h2>
            <div className="card-titulo">
              <span>Hydrogen VS Electric Cars</span>
            </div>
            <div className="card-head">
              <span>Will hydrogen-fueled cars ever catch up to RVs?</span>
            </div>

            <hr />
            <div className="card-titulo">
              <span>The Downsides of Al Artistry </span>
            </div>
            <div className="card-head">
              <span>
                What are the possible adverse affects of on-demand Al image
                generation
              </span>
            </div>

            <hr />
            <div className="card-titulo">
              <span>Is VC Funding Drying Up</span>
            </div>
            <div className="card-head">
              <span>
                Private funding by VC firms is down 50% YOY. We take a look at
                that means
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
