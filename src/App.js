/* Demo for FinTech@SG Course 
Retrieving JSON data from Server in a Tabular form
Author: Prof Bhojan Anand */
import React from 'react';
import stepsLogo from './assets/steps.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Plot from 'react-plotly.js';
import smiley from './assets/smiley.svg'


// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { data: [] };
  }

 callAPIServer() {
  // when component mounted, start a GET request
  // to specified URL
  fetch("https://nusstore.glitch.me/items")
    // when we get a response map the body to json
    .then(response => response.json())
    // and update the state data to said json
    .then(data => this.setState({ data }));
 }


  componentDidMount() {   // react lifecycle method componentDidMount() 
                        //will execute the callAPIserver() method after the component mounts.
      this.callAPIServer();
      //console.log(this.serverResObjArr);
  }
  /* Replace the table with paragraph below if you need paragraph
    <p className="App-intro">{JSON.stringify(this.state.data)}</p>
  */

  render() 
  
  {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={stepsLogo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Jabir's App</h1>
              </header>
              
<div className='div1 bg-danger p-5'>
    {(this.state.data).map( (item) => {
      return (
        <div className='card text-white bg-primary mb-3'>
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                  <h5 className="card-title">ID:{item.itemId}</h5>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
              )
            })}         
</div>

<div className='div2 bg-dark'>
        <Plot className='p-5'
        data={[
          {type: 'bar', 
          x: ['Vaccum Cleaner', 'Mini Fridge', 'Electric Toothbrush', 'Free Gift', 'Toilet Paper', 'Call of Duty', 'Fake Bag'], 
          y: [200, 500, 220, 100, 300, 50, 400]},
        ]}
        layout={{width: 600, height: 600, title: 'Prices of all items'}}
      /> 
</div>

<div className='div3 bg-success'>
  <p className='container text-light justify-content-center align-text-center p-5'>
  Though i have some programming and front-end knowledge, in this 2 days of devToolKit 1, I have learned alot from Prof 
    Anand Bhojan. With his knowledgeable and experience, he is able to answer the qestions in layman terms which make easier to learn
    In this class, I have to learn and apply topics that I do not like such as template literals. I am looking forward to devToolKit 2 and devOps 
    class in the upcoming weeks.
    <img src={smiley} className="" alt="smiley" />
  </p>
</div>


        </div>


      );
  }
}

export default App;


