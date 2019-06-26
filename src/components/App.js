import React, { Component } from 'react';
import '../styles/css/app.css';
import logo from '../img/logo.svg'
import About from './about';
import Work from './work';
import Contacts from './contacts';
import Footer from './footer';
import Illustration from './illustration';
import {TimelineLite} from 'gsap/all'


class App extends Component {
  constructor(props){
    super(props);
    this.backLeftRef = React.createRef()
    this.backRightRef = React.createRef()
    this.bottomLeftRef = React.createRef()
    this.bottomRightRef = React.createRef()
    this.topLeftRef = React.createRef()
    this.topRef = React.createRef()
    this.topRightRef = React.createRef()
    this.middleRef = React.createRef()
    this.welRef = React.createRef()
    this.comeRef = React.createRef()
    this.tl = new TimelineLite({paused:true})
    this.state={
      vh: window.innerHeight,
      scrl: window.scrollY
    }
  }
  

  componentDidMount(){
    window.addEventListener('resize',()=>{
      this.setState({vh: window.innerHeight})
    })
    this.tl
      .addLabel('start')
      .from(this.backLeftRef.current, 1, {filter:'blur(0px)'},'2')
      .from(this.backRightRef.current, 1, {filter:'blur(0px)'}, '-=1')
      .from(this.welRef.current, .8, {filter: "blur(2px)"}, 'start + .5')
      .from(this.comeRef.current, .8 , {filter: "blur(2px)"}, 'start+1')
      .from(this.topRightRef.current, 1.5 , {filter: "blur(2px)"}, 'start')
      .from(this.middleRef.current, 1.5 , {filter: "blur(2px)"}, 'start')
      .from(this.bottomRightRef.current, 1.5 , {filter: "blur(2px)"}, 'start')
      .play()
    /*window.addEventListener('scroll', ()=>{
      //console.log('posi', window.scrollY)
      //console.log('posi', window.innerHeight)
      if(window.innerHeight < Math.floor(window.scrollY)){
        console.log('Hey!')
      }
    })*/
   
  }
  render() {
   
        const herStyle= {
          minHeight: this.state.vh
        }
        
        
    return (
      <div className="App">
        <main className="hero" style = {herStyle}>
          <div className="logo"><img src={logo} alt=""/></div>
          <img ref = {this.backLeftRef} id = "back-left" src={require('../img/landing/back-left.png')} alt=""/>
          <img ref = {this.backRightRef} id = "back-right" src={require('../img/landing/back-right.png')} alt=""/>
          <img ref = {this.bottomLeftRef} id = "middle-bottomleft" src={require('../img/landing/middle-bottomleft.png')} alt=""/>
          <img ref = {this.bottomRightRef} id = "middle-bottomright" src={require('../img/landing/middle-bottomright.png')} alt=""/>
          <img ref = {this.topRef} id = "middle-top" src={require('../img/landing/middle-top.png')} alt=""/>
          <img ref = {this.topLeftRef} id = "middle-topleft" src={require('../img/landing/middle-topleft.png')} alt=""/>
          <img ref = {this.topRightRef} id = "middle-topright" src={require('../img/landing/middle-topright.png')} alt=""/>
          <img ref = {this.welRef} id = "wel" src={require('../img/landing/wel.png')} alt=""/>
          <img ref = {this.middleRef} id = "middle" src={require('../img/landing/middle.png')} alt=""/>
          <img ref = {this.comeRef} id = "come" src={require('../img/landing/come.png')} alt=""/>
          <nav className="links">
            <ul>
              <li><a href=""> HOME</a></li><span>|</span>
              <li><a href="#about"> ABOUT</a></li><span>|</span>
              <li><a href="#work"> WORK </a></li><span>|</span>
              <li><a href="#contacts"> CONTACTS </a></li>
            </ul>
          </nav>
        </main>
        <About />
        <Work />
        <Contacts />
        <Footer/>
      </div>
    );
  }
}

export default App;
