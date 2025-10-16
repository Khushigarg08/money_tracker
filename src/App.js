import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className= "basic">
          <input type = "text" placeholder={'+200 nwe samsung tv'}/>
          <input type = "datetime-local"/>
        </div>
        <div className="description">
          <input type = "text" placeholder={'description'}/>
        </div>
        <button type = "submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsumg Tv</div>
            <div className="description">time for a new tv!</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2025-10-17 01:58</div>
          </div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">gig new website</div>
            <div className="description">time for a new tv!</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2025-10-17 01:58</div>
          </div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">iphone</div>
            <div className="description">time for a new tv!</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2025-10-17 01:58</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
