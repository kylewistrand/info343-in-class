import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello, React!",
      curTime: new Date(),
      tasks: [
        {key: 0, title: "Learn stateful react components"},
        {key: 1, title: "Buy the iSchool a building"}
      ],
      newTaskTitle: ""
    };
    this.nextKey = this.state.tasks.length;
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.setState({greeting: "Hello, React! " + new Date().toLocaleTimeString(), curTime: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let task = {
      key: this.nextKey++,
      title: this.state.newTaskTitle
    };
    this.setState({
      tasks: this.state.tasks.concat(task),
      newTaskTitle: ""
    });

  }

  toggleDone(taskToToggle) {
    let newTasks = this.state.tasks.map(task => {
      if (task === taskToToggle) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }

  handlePurge() {
    let newTasks = this.state.tasks.filter(task => !task.done);
    this.setState({tasks: newTasks});
  }

  render() {
    let doneTaskStyles = {
      color: "#AAA",
      textDecoration: "line-through"
    }
    return (
      <div className="Container">
        <h2>Clock</h2>
        <p>{this.state.greeting}</p>
        <p>{this.state.curTime.toLocaleTimeString()}</p>

        <h2>Tasks</h2>

        <form onSubmit={evt => this.handleSubmit(evt)}>
          <input type="text" className="form-control" value={this.state.newTaskTitle} onInput={(evt) => this.setState({newTaskTitle: evt.target.value})}/>
        </form>

        <ul>
          {this.state.tasks.map(task =>
            <li key={task.key}
              onClick={() => this.toggleDone(task)}
              style={task.done ? doneTaskStyles : undefined}>
                {task.title}
            </li>)}
        </ul>
        <Button caption="Purge Completed"
                onClick={() => this.handlePurge()}
        />
      </div>
    );
  }
}

export default App;
