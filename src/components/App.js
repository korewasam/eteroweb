import React, { Component } from 'react';
import '../styles/css/app.css';
import logo from '../img/logo.svg'
import About from './about';
import Work from './work';
import Contacts from './contacts';
import Footer from './footer';
import { TimelineLite, TimelineMax, TweenLite } from 'gsap/all'
import Cursor from './cursor2';
import charming from 'charming'
import { Power4, Power1 } from 'gsap/TweenMax';
import Parallax from 'parallax-js'


class App extends Component {
  constructor(props) {
    super(props);
    //functions
    //this.handleEnter = this.handleEnter.bind(this)
    //REFS
    //
    this.scene = React.createRef()
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
    this.tl = new TimelineLite({ paused: true })
    this.linkTl = new TimelineLite({ paused: true })
    //this.parallaxScene = new Parallax(this.scene)

    this.setFixedLink = this.setFixedLink.bind(this)

    //STATE
    this.state = {
      vh: window.innerHeight,
      scrl: window.scrollY,
      currentLink: this.about,
      isStuck: false,
      stuckX: null,
      stuckY: null
    }
  }


  //COMPONENT DID MOUNT
  componentDidMount() {

    console.log(this.scene)
    let scene = document.getElementById('scene')


    //adapt height on resize
    window.addEventListener('resize', () => {
      this.setState({ vh: window.innerHeight })
    })

     this.tl
      .addLabel('start')
      .from(this.topLeftRef.current, .8, {opacity: 0, scale: 2.5, x: -50, y: '-200%', ease: Power4.easeOut })
      .fromTo(this.topRef.current, .8, {opacity: 0, scale: 2,  y: '-170%', ease: Power4.easeOut },{opacity: 1, scale: 1,y:'0%', x:'-50%'}, '-=0.7')
      .from(this.topRightRef.current, .8, { opacity: 0,scale: 1.8, x: 50, y: '-170%', ease: Power4.easeOut },'-=.7')
      .fromTo(this.bottomLeftRef.current, .95, {opacity: 0, scale: 1.5,  y: '-70%', ease: Power4.easeOut },{opacity: 1, scale: 1,y:'0%', x:'-50%'}, '-=0.6')
      .from(this.bottomRightRef.current, 1, { opacity: 0,scale: 1.8, x: 50, y: '-170%', ease: Power4.easeOut },'-=.5')
      .fromTo(this.welRef.current, 2, {opacity: 0, ease: Power4.easeOut , x:'-100%'},{opacity:1, x:'-55%',ease: Power4.easeOut}, '-=1')
      .fromTo(this.middleRef.current, .9, {opacity: 0, scale: 1.5,  y: '-70%', ease: Power4.easeOut },{opacity: 1, scale: 1,y:'0%', x:'-50%'}, '-=1.9')
      .fromTo(this.comeRef.current, 2, {opacity: 0, ease: Power4.easeOut , x:'60%'},{opacity:1, ease: Power4.easeOut, x:'-55%'}, '-=1.8')
      .from(this.backLeftRef.current, 2, {x:'-50%',rotation: 50, opacity: 0, ease: Power4.easeOut}, '-=1')
      .from(this.backRightRef.current, 2, {x:'50%',rotation: -50, opacity: 0, ease: Power4.easeOut}, '-=1.4')
      .eventCallback('onComplete', ()=>{
        if(window.innerWidth > 1000){const paralaxInstance = new Parallax(scene)}
      })
      .play() 

    

    // hovers
    const initHovers = () => {
      // find the center of the link element and set stuckX and stuckY
      // they are needed to set the position of the noisy circle
      const handleMouseEnter = e => {
        const navItem = e.currentTarget
        const navItemBox = navItem.getBoundingClientRect()
        this.setState({ stuckX: Math.round(navItemBox.left + navItemBox.width / 2) })
        this.setState({ stuckY: Math.round(navItemBox.top + navItemBox.height / 2) })
        this.setState({ isStuck: true })
        charming(navItem)
        let letters = []
        letters = [...navItem.children]
        console.log('letters', letters)
        letters.sort(() => Math.round(Math.random()) - 0.5)
        console.log('letters sorted', letters)
        const selectLetters = letters.filter(_ => Math.random() < 0.5)
        console.log('selected', selectLetters)

        // animation
        new TimelineMax()
          .staggerTo(selectLetters, 0.2, {
            ease: Power1.easeIn,
            y: '-100%',
            opacity: 0
          }, 0.04, 0)
          .staggerTo(selectLetters, 0.6, {
            ease: Power4.easeOut,
            startAt: { y: '35%' },
            y: '0%',
            opacity: 1
          }, 0.04, 0.2);


        //letter initialization

      }
      //reset the isStuck on mouse leaving the nav item
      const handleMouseLeave = () => {
        this.setState({ isStuck: false })
      }

      //add mouseenter and leave event listeners to the nav items
      const linkItems = document.querySelectorAll('.link')
      linkItems.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
      })

    }//end of the init hovers
    initHovers()

    //trigger leaving he hero section 

    document.addEventListener('scroll',this.setFixedLink)


  }

  setFixedLink(){
    let scroll = window.scrollY

    if(scroll> window.innerHeight){
      
      if(this.refs.fixed.style.bottom !== '0px'){
        TweenLite.to(this.refs.fixed, 1, {bottom: 0, ease: Power4.easeOut})
      }
    }
    else{
      if(this.refs.fixed.style.bottom === '0px'){
        TweenLite.to(this.refs.fixed, .5, {bottom: '-100%', ease: Power4.easeIn})
      }
    }
  }

  scrollto() {
    TweenLite.to(window, 2, { scrollTo: 400 })
  }






  render() {

    const herStyle = {
      minHeight: this.state.vh,
      width: '100%'
    }


    return (
      <div className="App">
        <Cursor ref={this.state.currentLink} isStuck={this.state.isStuck} stuckX={this.state.stuckX} stuckY={this.state.stuckY} />
        <main className="hero" style={herStyle}>
          <div onClick={() => { this.scrollto() }} className="logo"><img src={logo} alt="" /></div>
          {/* <div className="window"></div> */}
          <div data-hover-only={true} id='scene' ref={this.scene}>
            <div data-depth='0.1' className="scene_container"><img ref={this.backLeftRef} id="back-left" src={require('../img/landing/back-left.png')} alt="" /></div>
            <div data-depth='0.1' className="scene_container"><img ref={this.backRightRef} id="back-right" src={require('../img/landing/back-right.png')} alt="" /></div>
            <div data-depth='0.15' className="scene_container"><img ref={this.bottomLeftRef} id="middle-bottomleft" src={require('../img/landing/middle-bottomleft.png')} alt="" /></div>
            <div data-depth='0.15' className="scene_container"><img ref={this.bottomRightRef} id="middle-bottomright" src={require('../img/landing/middle-bottomright.png')} alt="" /></div>
            <div data-depth='0.13' className="scene_container"><img ref={this.topRef} id="middle-top" src={require('../img/landing/middle-top.png')} alt="" /></div>
            <div data-depth='0.11' className="scene_container"><img ref={this.topLeftRef} id="middle-topleft" src={require('../img/landing/middle-topleft.png')} alt="" /></div>
            <div data-depth='0.15' className="scene_container"><img ref={this.topRightRef} id="middle-topright" src={require('../img/landing/middle-topright.png')} alt="" /></div>
            <div data-depth='0.18' className="scene_container"><img ref={this.welRef} id="wel" src={require('../img/landing/wel.png')} alt="" /></div>
            <div data-depth='0.25' className="scene_container"><img ref={this.middleRef} id="middle" src={require('../img/landing/middle.png')} alt="" /></div>
            <div data-depth='0.35' className="scene_container"><img ref={this.comeRef} id="come" src={require('../img/landing/come.png')} alt="" /></div>
          </div>
          <nav className="links">
            <ul>
              <li><a className='link' href="#about">ABOUT</a></li><span>|</span>
              <li><a href="#work" className='link'>WORK</a></li><span>|</span>
              <li><a href="#contacts" className='link'>CONTACTS</a></li>
            </ul>
          </nav>
          <nav ref  = 'fixed' className="links fixed">
            <ul>
              <li><a className='link' href="#about">ABOUT</a></li><span>|</span>
              <li><a href="#work" className='link'>WORK</a></li><span>|</span>
              <li><a href="#contacts" className='link'>CONTACTS</a></li>
            </ul>
          </nav>
        </main>
        <About />
        <Work />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
