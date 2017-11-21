import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert';
import Card from './components/Card';
import Button from './components/Button';

class App extends Component {
  handleButtonClick() {
    console.log("Button added to app was clicked!");
  }

  render() {
    let alerts = [
      {
        id: 1,
        message: "Alert One",
        type: "success"
      },
      {
        id: 2,
        message: "Zombies Approaching!",
        type: "danger"
      }
    ]
    return (
      <div className="container">
        {alerts.map(a => <Alert key={a.id} message={a.message} type={a.type}/>)}

        <Card title="My Card" 
        imgsrc="pumpkin.jpg"
        imgalt="jack-o-lantern"
        width={300}>
          <p>This is my <strong>Card Text</strong></p>
          <p>This is <i>Another Paragraph</i></p>
          <Alert message="Alert in card" />
        </Card>

        <Button caption="Click me!"
                onClick={() => this.handleButtonClick()}
        />

      </div>
    );
  }
}

export default App;
