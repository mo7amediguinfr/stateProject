import React,{Component} from "react";

import './App.css';
class App extends Component{
  constructor(props){
      super(props);
      this.state={
        person:{
          fullName:'Mohamed Iguinfr',
          bio:'Hi there, I am a Junior Developer',
          profession:'Web Devolper',
          imgSrc:'https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-768x768.jpg',
        },
        show:false,
        mountTime: new Date(),
        interval: 0,
      }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { mountTime } = this.state;
      const currentTime = new Date();
      const interval = Math.floor(
        (currentTime.getTime() - mountTime.getTime()) / 1000
      );
      this.setState({ interval });
    }, 1000);
  }


  showHide=()=>{
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render(){
      return(
        <div>
          <button className="btnHS" onClick={this.showHide}>Hide/Show</button>
          {this.state.show &&(
          <div className="main">
                <img  src={this.state.person.imgSrc} alt="profile" className="myImg" />
                <p className="fullName">{this.state.person.fullName}</p>
                <p className="fullName">{this.state.person.bio}</p>
                <p className="profession">{this.state.person.profession}</p>
          </div>)}
          <p className="Componentmounted ">Component mounted {this.state.interval} seconds ago.</p>
        </div>
      )
  }
}
export default App;





