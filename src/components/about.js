import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props);
    this.aboutRef= React.createRef()
    this.mobile ={
      position: 'static'
    }
    this.default = {
      position: 'absolute',
      top:0,
      left:0
    }
    this.state = {
      style: this.default
    }
  }
  componentDidMount(){
    if(window.innerWidth > 960){
      this.setState({style:this.default})
    }
    else{
      this.setState({style:this.mobile})
    }
    window.addEventListener('resize', ()=>{
      if(window.innerWidth < 960){
          this.setState({style:this.mobile})
      }
    })
    window.addEventListener('scroll', ()=>{
      if(window.innerHeight < window.scrollY && window.innerWidth > 960 && window.scrollY < this.aboutRef.current.clientHeight ){
        //console.log('hey', window.scrollY)
        this.setState({style:{
          position: 'fixed',
          top: 0,
          left:0
        }})
      }
      else if(window.scrollY > this.aboutRef.current.clientHeight && window.innerWidth > 960 ){
        //console.log('ELSEEEE')
        this.setState({style:{
          position:'absolute',
          bottom: 0
          
        }})
      }
      else if(window.innerWidth > 960){
        this.setState({style:this.default})
      }
      else{
        this.setState({style:{
          position:'relative'
        }})
      }
    })
   //console.log('this',this.aboutRef.current.clientHeight)
  }
    render() {
        return (
            
            <div ref ={this.aboutRef} id = 'about' className="about">
            <div className="left" style ={this.state.style}><h1>ABOUT</h1></div>
            <div className="right">
           <div className="right-content">
                
                  <p className = 'about-bold'>I’m Sam.  Web developer with UI/UX skills</p>
                  <p>Having a background in computer science and art I thought Web
                     development an ideal new dimension of artistic expression
                      through code. This makes it so that I am always making art,
                       be it with a pencil or my keyboard.</p>
                

                
                  <h5>UI DESIGN</h5>
                  <p>
                    This was very important for me to explore because I wanted to be
                    the kind of developer that was deeply familiar with their work from start
                    to finish. Having proir experience as a graphic designer helped me more easily adapt
                    to making beautiful UI and functional user experiences.
                  </p>
                  <h6>Tools</h6>
                  
                  <ul className = 'tools'>
                    <li> <span>Adobe Xd</span> </li>
                    <li> <span>Adobe illustrator</span> </li>
                    <li> <span>Adobe Photoshop</span> </li>
                    <li> <span>Adobe After Effects</span> </li>
                  </ul>
               

                <h5>WEB DEVELOPMENT</h5>
                <p>
                  What pushed me toward web development over the alternatives for a computer science major was its
                  ability to converge most of my skills and interest. It allows me to 
                  enjoy every step of the process from drawing th design on paper to refining it digitally 
                  to animating it to coding it.
                </p>
                <h6>React js</h6>
                <p>
                  This was the first ever front-end framework I ever taught myself and though I continue to explore
                  other frameworks like Vue js, I am very comfortable and happy with React and 
                  will continue to seek mastery in it. I am primarily  a front-end developer, however, an intermendiate knowledge
                  of back-end devlopment is availably when required.
                </p>

                <h5>PROCESS</h5>
                <p>
                  The process I have settled on when developing web apps and designing UIs is significantly centered around 
                  communication. I always like to think that anything can be developed when the developer has a good understanding as possible 
                  of what it is. For this reason, I like to make sure that my client and I are on the same page every step of the way.
                </p>
                <ul className = 'process'>
                  <li>
                    <h6> <span>1.</span> Discover</h6>
                  </li>
                  <li>
                    <h6><span>2.</span> Plan</h6>
                  </li>
                  <li>
                    <h6><span>3.</span> Design</h6>
                  </li>
                  <li>
                    <h6><span>4.</span> Develop</h6>
                  </li>
                </ul>
                  <p>For the reasons above, the secret ingredient to this whole process is communication throughout.</p>

                 </div>
                  </div>
            </div>
          
            
        );
    }
}


export default About;