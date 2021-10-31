import './App.css';
import {Component} from "react";
import GetHTML from "./GetHTML";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      html: ''
    }
  }

  async componentDidMount() {
    setTimeout(function(){
      window.location.reload();
    },300000);
    this.setState({loading: true, html: await GetHTML()})
  }

  render() {
    const text = (this.state.html !== '') ? this.state.html : '...loading'
    const htmlObject = document.createElement('div');
    htmlObject.innerHTML = text;
    console.log(htmlObject);
    return (
        <div
        dangerouslySetInnerHTML={{
          __html: htmlObject.innerHTML
        }}>
    </div>);
  }
}

export default App
