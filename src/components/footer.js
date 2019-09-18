import React, { Component } from 'react'
import cheers from '../data/cheers.json'
import lottie from 'lottie-web'
import '../styles/css/app.css'

export default class Footer extends Component {
  constructor(props){
    super(props)
    this.playAnimation = this.playAnimation.bind(this)
    this.footerRef = React.createRef()
    this.anim = null
  }

  componentDidMount(){
    //loading the animation
       this.anim = lottie.loadAnimation({
      container: document.getElementById('cheers'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: cheers
    })
    // scroll event listener
    window.addEventListener('scroll', this.playAnimation)
  }

  playAnimation(){
    let scroll  = window.scrollY
    let entire = document.body.scrollHeight
     if(scroll > ((entire - window.innerHeight)-50) ){
       this.anim.play()
     }
  }
  render() {
    return (
      <footer ref = {this.footerRef}>
        <div id = 'cheers' className="foot"></div>
      </footer>
    )
  }
}

