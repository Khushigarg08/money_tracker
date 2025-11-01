import { use, useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({name, description, datetime})
    }).then(response => {
      response.json(),then(json => {
        console.log('result', json);
      })
    })
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className= "basic">
          <input type = "text"
                 value = {name}
                 onChange={ev => setName(ev.target.value)}
                 placeholder={'+200 new samsung tv'}/>
          <input value = {datetime}
                 onChange={ev => setDatetime(ev.target.value)} 
                 type = "datetime-local"/>
        </div>
        <div className="description">
          <input type = "text" 
                 value = {description}
                 onChange={ev => setDescription(ev.target.value)}
                 placeholder={'description'}/>
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
