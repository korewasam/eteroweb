import React, { Component } from 'react';
import biblew from  '../img/biblew.svg'
import moto from  '../img/moto.svg'
import {TimelineLite, TweenMax} from 'gsap/all'


class Work extends Component {
    constructor(props){
        super(props);
        //Refs
        this.workRef = React.createRef()
        this.workbackRef1 = React.createRef()
        this.workbackRef2 = React.createRef()
        this.buttRef = React.createRef()
        this.workRef = React.createRef()
        this.circle1 = React.createRef()
        this.circle2 = React.createRef()
        this.circle3 = React.createRef()
        this.circle4 = React.createRef()
        this.circle5 = React.createRef()
        this.circle6 = React.createRef()
        this.circle7 = React.createRef()
        this.circle8 = React.createRef()
        this.motoC1 = React.createRef()
        this.motoC2 = React.createRef()
        this.motoC3 = React.createRef()
        this.motoC4 = React.createRef()
        this.motoC5 = React.createRef()
        this.motoC6 = React.createRef()
        this.motoC7 = React.createRef()
        this.motoC8 = React.createRef()
        

        // Work Style Variables
        this.fullscreen={
            position: 'absolute',
            top:0,
            left:0
        }
        this.mobile ={
            position: 'static',
            
        }

        //state
        this.state= {
            style: this.mobile,
            
        }
    }

    setvalues = ()=>
    {
        TweenMax.set(this.circle1.current,{y:40})
        TweenMax.set(this.circle2.current,{y:90})
        TweenMax.set(this.circle3.current,{y:20})
        TweenMax.set(this.circle4.current,{y:125})
        TweenMax.set(this.circle5.current,{y:70})
        TweenMax.set(this.circle6.current,{y:150})
        TweenMax.set(this.circle7.current,{y:35})
        TweenMax.set(this.circle8.current,{y:45})
        TweenMax.set(this.motoC1.current,{y:40})
        TweenMax.set(this.motoC2.current,{y:90})
        TweenMax.set(this.motoC3.current,{y:20})
        TweenMax.set(this.motoC4.current,{y:125})
        TweenMax.set(this.motoC5.current,{y:70})
        TweenMax.set(this.motoC6.current,{y:150})
        TweenMax.set(this.motoC7.current,{y:35})
        TweenMax.set(this.motoC8.current,{y:45})
    }
    componentDidMount(){
        //button set values
        this.setvalues()
        var tlnbb = new TimelineLite({paused:true})
                .to(this.circle1.current, 2, {y:0, opacity:0, repeat:-1})
                .to(this.circle2.current, 2, {y:0, opacity:0, repeat:-1},'-=1.5')
                .to(this.circle3.current, 1, {y:0, opacity:0, repeat:-1},'-=2')
                .to(this.circle4.current, 3, {y:0, opacity:0, repeat:-1},'-=3')
                .to(this.circle5.current, 1, {y:0, opacity:0, repeat:-1},'-=2.5')
                .to(this.circle6.current, 3, {y:0, opacity:0, repeat:-1},'-=2')
                .to(this.circle7.current, 2, {y:0, opacity:0, repeat:-1},'-=4')
                .to(this.circle8.current, 2, {y:0, opacity:0, repeat:-1},'-=3')
        var tlmoto = new TimelineLite({paused:true})
                .to(this.motoC1.current, 2, {y:0, opacity:0, repeat:-1})
                .to(this.motoC3.current, 1, {y:0, opacity:0, repeat:-1},'-=3')
                .to(this.motoC2.current, 2, {y:0, opacity:0, repeat:-1},'-=1.5')
                .to(this.motoC5.current, 1, {y:0, opacity:0, repeat:-1},'-=2.5')
                .to(this.motoC4.current, 3, {y:0, opacity:0, repeat:-1},'-=3')
                .to(this.motoC8.current, 2, {y:0, opacity:0, repeat:-1},'-=3')
                .to(this.motoC7.current, 2, {y:0, opacity:0, repeat:-1},'-=4')
                .to(this.motoC6.current, 3, {y:0, opacity:0, repeat:-1},'-=2')
        //button hover
        this.workbackRef1.current.onmouseenter = ()=>
        {
            tlnbb.play()
            
        }

        this.workbackRef1.current.onmouseleave = ()=>{
            tlnbb.reverse(2.5)
        }
        this.workbackRef2.current.onmouseenter = ()=>
        {
            tlmoto.play()
            
        }

        this.workbackRef2.current.onmouseleave = ()=>{
            tlmoto.reverse(2.5)
        }

        
        console.log('scroll position', this.workRef.current.offsetTop)
        console.log('height', this.workRef.current.clientHeight)

        window.addEventListener('resize', ()=>{
            if(window.innerWidth<960){
                this.setState({style: this.mobile})
                
            }
            else if(window.innerWidth > 960){
                this.setState({style: this.fullscreen})
                
            }
        })
            
        window.addEventListener('scroll', ()=> {
            let bottom = this.workRef.current.offsetTop + window.innerHeight
            if(window.innerWidth > 960)
            {if(window.scrollY > this.workRef.current.offsetTop && window.innerWidth > 960 && window.scrollY < bottom){
                this.setState({style:{
                    position:'fixed',
                    top:0,
                    left:0
                }})
            }
            else if(window.scrollY >= bottom){
                this.setState({style:{
                    position:'absolute',
                    bottom:0,
                    left:0
                }})
            }
            else{
                this.setState({style:this.fullscreen})
            }}
        })
    }
    render() {
        return (
            <div ref= {this.workRef} id = 'work' className= 'work'>
                <div style = {this.state.style} className="workLabel">
                    <h1>WORK</h1>
                </div>
                
                <div className="workContent">
                    <div ref={this.workbackRef1} className="workBack">
                        <div className="work1">
                        <div className = 'nairobi' >
                            <figure><img src={biblew} alt=""/></figure>
                            <h2>Nairobi Bold Believers</h2>
                            <a href="http://nbbelievers.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309 219.12">
                                <title>more </title>
                                <g id="Layer_2" data-name="Layer 2">
                                <g ref = {this.circle1} id="circle1"><circle className="cls-1" cx="33.7" cy="123.95" r="13.3"/></g>
                                <g ref = {this.circle2} id="circle2"><circle className="cls-2" cx="77.12" cy="81.03" r="14.51"/></g>
                                <g ref = {this.circle3} id="circle3"><circle className="cls-3" cx="102.75" cy="139.51" r="13.3"/></g>
                                <g ref = {this.circle4} id="circle4"><circle className="cls-1" cx="128.73" cy="37.95" r="13.3"/></g>
                                <g ref = {this.circle5} id="cirlce5"><circle className="cls-1" cx="164.15" cy="93.04" r="14.51"/></g>
                                <g ref = {this.circle6} id="circle6"><circle className="cls-2" cx="196.67" cy="18.51" r="14.51"/></g>
                                <g ref = {this.circle7} id="cirlce7"><circle className="cls-1" cx="196.75" cy="123.4" r="10.48"/></g>
                                <g ref = {this.circle8} id="circle8"><circle className="cls-4" cx="260.81" cy="114.33" r="10.48"/></g>
                                <g ref = {this.buttRef} id="button"><rect className="cls-1" y="144.12" width="309" height="75" rx="9.76" ry="9.76"/>
                                <path className="cls-5" d="M134.78,171.28h2.52v17.63h-2.85V177.26l-4.65,8.8h-2.15L123,177.38l0,11.53h-2.85V171.28h2.55l6,11.53Z"/>
                                <path className="cls-5" d="M144.51,188a7.29,7.29,0,0,1-2.91-3.15,11.81,11.81,0,0,1,0-9.58,7.2,7.2,0,0,1,2.91-3.14,9.63,9.63,0,0,1,8.94,0,7.29,7.29,0,0,1,2.9,3.14,11.81,11.81,0,0,1,0,9.58,7.37,7.37,0,0,1-2.92,3.15,8.57,8.57,0,0,1-4.43,1.1A8.67,8.67,0,0,1,144.51,188Zm8.25-3.15a9.06,9.06,0,0,0,0-9.58,5.16,5.16,0,0,0-7.6,0,9.12,9.12,0,0,0,0,9.58,5.14,5.14,0,0,0,7.6,0Z"/>
                                <path className="cls-5" d="M175.37,188.91h-3.5l-3-5.63a2.55,2.55,0,0,0-1-1.12,3.36,3.36,0,0,0-1.58-.33h-2.44v7.08H160.6V171.28h7.8a6.84,6.84,0,0,1,4.56,1.34,4.81,4.81,0,0,1,1.57,3.86,4.9,4.9,0,0,1-1.14,3.34,5.4,5.4,0,0,1-3.21,1.71,3.65,3.65,0,0,1,2.25,2Zm-4.75-10.24a2.54,2.54,0,0,0,.85-2.11,2.49,2.49,0,0,0-.85-2.11,4.26,4.26,0,0,0-2.67-.67h-4.2v5.58H168A4.19,4.19,0,0,0,170.62,178.67Z"/>
                                <path className="cls-5" d="M178,188.91V171.28h11.81v2.55h-8.66v4.85h8.16v2.53h-8.16v5.15h8.66v2.55Z"/></g></g>
                                </svg>
                                </a>
                                </div>
                        </div>
                    </div>
                    <div ref = {this.workbackRef2} className="workBack2">
                        <div className="work2">
                            <div className="motogas" ><figure><img src={moto} alt=""/></figure>
                             <a href="https://motogas3.firebaseapp.com/" target= '_blank'><svg width="309" height="220" viewBox="0 0 309 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="motobutt">
                                <g ref = {this.motoC1} id="circle1">
                                <path id="Vector" d="M33.7 137.25C41.0454 137.25 47 131.295 47 123.95C47 116.605 41.0454 110.65 33.7 110.65C26.3546 110.65 20.4 116.605 20.4 123.95C20.4 131.295 26.3546 137.25 33.7 137.25Z" fill="#DE4C6F"/>
                                </g>
                                <g ref = {this.motoC2} id="circle2">
                                <path id="Vector_2" d="M77.12 95.54C85.1337 95.54 91.63 89.0436 91.63 81.03C91.63 73.0163 85.1337 66.52 77.12 66.52C69.1064 66.52 62.61 73.0163 62.61 81.03C62.61 89.0436 69.1064 95.54 77.12 95.54Z" stroke="#DE4C6F" strokeWidth="8" strokeMiterlimit="10"/>
                                </g>
                                <g ref = {this.motoC3} id="circle3">
                                <path id="Vector_3" d="M102.75 152.81C110.095 152.81 116.05 146.855 116.05 139.51C116.05 132.165 110.095 126.21 102.75 126.21C95.4046 126.21 89.45 132.165 89.45 139.51C89.45 146.855 95.4046 152.81 102.75 152.81Z" stroke="#DE4C6F" strokeWidth="5" strokeMiterlimit="10"/>
                                </g>
                                <g ref = {this.motoC4} id="circle4">
                                <path id="Vector_4" d="M128.73 51.25C136.075 51.25 142.03 45.2954 142.03 37.95C142.03 30.6046 136.075 24.65 128.73 24.65C121.385 24.65 115.43 30.6046 115.43 37.95C115.43 45.2954 121.385 51.25 128.73 51.25Z" fill="#DE4C6F"/>
                                </g>
                                <g ref = {this.motoC5} id="cirlce5">
                                <path id="Vector_5" d="M164.15 107.55C172.164 107.55 178.66 101.054 178.66 93.04C178.66 85.0263 172.164 78.53 164.15 78.53C156.136 78.53 149.64 85.0263 149.64 93.04C149.64 101.054 156.136 107.55 164.15 107.55Z" fill="#DE4C6F"/>
                                </g>
                                <g ref = {this.motoC6} id="circle6">
                                <path id="Vector_6" d="M196.67 33.02C204.684 33.02 211.18 26.5237 211.18 18.51C211.18 10.4963 204.684 4 196.67 4C188.656 4 182.16 10.4963 182.16 18.51C182.16 26.5237 188.656 33.02 196.67 33.02Z" stroke="#DE4C6F" strokeWidth="8" strokeMiterlimit="10"/>
                                </g>
                                <g ref = {this.motoC7} id="cirlce7">
                                <path id="Vector_7" d="M196.75 133.88C202.538 133.88 207.23 129.188 207.23 123.4C207.23 117.612 202.538 112.92 196.75 112.92C190.962 112.92 186.27 117.612 186.27 123.4C186.27 129.188 190.962 133.88 196.75 133.88Z" fill="#DE4C6F"/>
                                </g>
                                <g ref = {this.motoC8} id="circle8">
                                <path id="Vector_8" d="M260.81 124.81C266.598 124.81 271.29 120.118 271.29 114.33C271.29 108.542 266.598 103.85 260.81 103.85C255.022 103.85 250.33 108.542 250.33 114.33C250.33 120.118 255.022 124.81 260.81 124.81Z" stroke="#DE4C6F" strokeWidth="6" strokeMiterlimit="10"/>
                                </g>
                                <g id="button">
                                <path id="Vector_9" d="M299.24 144.12H9.76C4.3697 144.12 0 148.49 0 153.88V209.36C0 214.75 4.3697 219.12 9.76 219.12H299.24C304.63 219.12 309 214.75 309 209.36V153.88C309 148.49 304.63 144.12 299.24 144.12Z" fill="white"/>
                                <path id="Vector_10" d="M134.78 171.28H137.3V188.91H134.45V177.26L129.8 186.06H127.65L123 177.38V188.91H120.15V171.28H122.7L128.7 182.81L134.78 171.28Z" fill="#DE4C6F"/>
                                <path id="Vector_11" d="M144.51 188C143.246 187.266 142.232 186.168 141.6 184.85C140.931 183.342 140.585 181.71 140.585 180.06C140.585 178.41 140.931 176.778 141.6 175.27C142.229 173.952 143.244 172.857 144.51 172.13C145.889 171.407 147.423 171.03 148.98 171.03C150.537 171.03 152.071 171.407 153.45 172.13C154.709 172.863 155.719 173.957 156.35 175.27C157.019 176.778 157.365 178.41 157.365 180.06C157.365 181.71 157.019 183.342 156.35 184.85C155.711 186.167 154.694 187.263 153.43 188C152.08 188.76 150.549 189.141 149 189.1C147.431 189.146 145.88 188.766 144.51 188ZM152.76 184.85C153.655 183.413 154.13 181.753 154.13 180.06C154.13 178.367 153.655 176.707 152.76 175.27C152.277 174.744 151.689 174.324 151.035 174.036C150.381 173.749 149.674 173.601 148.96 173.601C148.246 173.601 147.539 173.749 146.885 174.036C146.231 174.324 145.643 174.744 145.16 175.27C144.271 176.71 143.801 178.368 143.801 180.06C143.801 181.752 144.271 183.41 145.16 184.85C145.642 185.379 146.228 185.801 146.883 186.09C147.537 186.38 148.245 186.529 148.96 186.529C149.675 186.529 150.383 186.38 151.037 186.09C151.692 185.801 152.278 185.379 152.76 184.85V184.85Z" fill="#DE4C6F"/>
                                <path id="Vector_12" d="M175.37 188.91H171.87L168.87 183.28C168.657 182.815 168.308 182.425 167.87 182.16C167.378 181.923 166.836 181.81 166.29 181.83H163.85V188.91H160.6V171.28H168.4C170.031 171.167 171.649 171.643 172.96 172.62C173.494 173.104 173.913 173.703 174.185 174.371C174.456 175.039 174.574 175.76 174.53 176.48C174.578 177.696 174.172 178.887 173.39 179.82C172.55 180.744 171.416 181.348 170.18 181.53C170.676 181.684 171.133 181.942 171.521 182.287C171.909 182.632 172.219 183.056 172.43 183.53L175.37 188.91ZM170.62 178.67C170.916 178.409 171.147 178.082 171.294 177.715C171.442 177.349 171.502 176.954 171.47 176.56C171.506 176.166 171.448 175.769 171.3 175.402C171.152 175.035 170.919 174.709 170.62 174.45C169.829 173.937 168.89 173.702 167.95 173.78H163.75V179.36H168C168.926 179.426 169.847 179.184 170.62 178.67V178.67Z" fill="#DE4C6F"/>
                                <path id="Vector_13" d="M178 188.91V171.28H189.81V173.83H181.15V178.68H189.31V181.21H181.15V186.36H189.81V188.91H178Z" fill="#DE4C6F"/>
                                </g>
                                </g>
                        </svg></a>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Work;