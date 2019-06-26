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
                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit soluta
                  distinctio! Quis illo libero repudiandae quibusdam
                  iste omnis est sed similique nesciunt!</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit djsdsds</p>
                </section>
                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit soluta
                  distinctio! Quis illo libero repudiandae quibusdam
                  iste omnis est sed similique nesciunt!</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit djsdsds</p>
                </section>
                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit djsdsds</p>
                </section>
                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit</p>
                </section>

                <section>
                  <h1>HI My Name is MUS</h1>
                  <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Laboriosam ipsa veritatis 
                  quam sint minima obcaecati corporis velit djsdsds</p>
                </section>
                 </div>
                  </div>
            </div>
          
            
        );
    }
}


export default About;