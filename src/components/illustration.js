import React, { Component } from 'react'
import {TimelineLite, Power1} from 'gsap/all'

export default class Illustration extends Component {
    constructor(props){
        super(props);
        this.windowRef = React.createRef()
        this.shadowRef = React.createRef()
        this.handsRef = React.createRef()
        this.svgRef = React.createRef()
        
    }
componentDidMount(){
    var tl = new TimelineLite()
        .from(this.handsRef.current,2,{y:-100, ease: Power1.easeInOut})
        .from(this.shadowRef.current,2,{transform: 'scaleX(.6)',  ease: Power1.easeInOut }, '+=-2')
        .from(this.windowRef.current,2,{y:-100, ease: Power1.easeInOut}, '+=-1.9')

    var tl2 = new TimelineLite({paused:true})
        .to(this.handsRef.current,2,{y:-100, repeat:-1, yoyo:true, ease: Power1.easeInOut})
        .to(this.shadowRef.current,2,{transform: 'scaleX(.6)', repeat:-1, yoyo:true, ease: Power1.easeInOut }, '+=-2')
        .to(this.windowRef.current,2,{y:-100,repeat: -1, yoyo:true, ease: Power1.easeInOut}, '+=-1.9')

    this.svgRef.current.onmouseenter =()=>{
      tl2.play()
    }
    this.svgRef.current.onmouseleave =()=>{
      tl2.pause()
    }
}
  render() {
    return (
      <div className = 'illustration'>
        <svg height ='430px'  ref = {this.svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 741.89"><title>Artboard 3</title>
        <g ref = {this.handsRef} id="hands">
        <g id="hands-2" data-name="hands"><g id="Group_53" data-name="Group 53"><path id="Path_147" data-name="Path 147" className="cls-1" d="M410.81,241.29c-6.92-17.2-13.58-12.34-18.1-9C390.2,234.09,384.29,253,384,257c-.63,9,1.31,13.08-1.3,36s-3.45,52.68-3.46,53A47.92,47.92,0,0,0,384,355.7a47.92,47.92,0,0,1-4.76-9.76h0a71,71,0,0,1-4.39-24.89c0-21.57-1.16-100.76-11.77-118.33-6-10,0-27.46-18.95-26.15s-13.08,59.49-15,79.1-2.37,78.44-2.37,78.44a10.16,10.16,0,0,0,3.28.49,10.16,10.16,0,0,1-3.28-.49h0a9,9,0,0,1-5.48-4.56c-9.4-18.18-1.3-117-3.92-136s-5.88-40.54-11.11-41.84-17.66-5.89-22.23,0-11.77,77.79-11.12,92.83c.64,14.62-2.59,75-11.79,85h0a5.55,5.55,0,0,1-.8.73,5.55,5.55,0,0,0,.8-.73c0-.15-.63-59.5,1.33-80.39s2-55.57,0-67.35-4.57-14.38-11.77-12.42-32,45.77-34.65,114.41c-1.91,50.16-4.1,89.93-.76,110.51-1.77,5.43-19.1,0-19.1,0a63.72,63.72,0,0,0,31,9.78,63.72,63.72,0,0,1-31-9.78h0c-.36-.22-.71-.44-1.06-.68-15.69-10.46-44.38-46-62.41-49.12-16.75-2.93-35,14.51-29.72,18.87,8.23,6.84,42.34,49.57,49.61,72.06,2.47,7.64,29.81,65.94,45.79,80.45,39.21,35.61,35.38,72.46,41.85,115.72.55,3.74,18.3,28.11,81.06,25.49s73.22-24.19,73.22-24.19-.65-57.53,0-75.83,14.39-59.5,19-84.34c2.2-11.94,6.87-56.56,1.44-104.12C409,316.89,418.31,259.94,410.81,241.29ZM280.69,525.39s19.29,3.05,6.09-45.69-60.92-48.09-60.92-48.09,47.72-.65,60.92,48.09S280.69,525.39,280.69,525.39Zm45-76.8c-16.39,27.18,6.56,67.94,6.56,67.94s-22.94-40.76-6.56-67.94,49.62-33,49.62-33-19.41-4.85-32-6.8-31.06,0-51.88,0-27.52-14.49-27.52-14.49,6.69,14.49,27.52,14.49,39.26-1.94,51.88,0,32,6.8,32,6.8-33.24,5.82-49.62,33Z"/></g><g id="Group_54" data-name="Group 54"><path id="Path_148" data-name="Path 148" className="cls-2" d="M731.74,368.46c-11.11-3.92-33.1-2.06-50.09,8.4-14.34,8.83-26.53,17.23-40.2,20.44h0a51,51,0,0,1-7.78,1.23c-17,1.31-19.61.66-19.61.66s2.61.65,19.61-.66a51,51,0,0,0,7.78-1.23c-.23-.18-4.66-3.62-10.39-13.8C625.17,373,635,258.63,634.33,244.9S622.56,187.37,618,178.76s-11.11-7.73-17.65-7.67-7.85,13.67-9.81,56.82-5.11,80.47-5.11,80.47c-6.53-1.31-9.27-17.71-6-32.09s-2-81.72-2-94.8-2.91-22.06-6.57-27.71c-1.72-2.67-15-5.05-20.24,2.21-5.48,7.67-12.42,42.5-14.38,58.19-1.9,15.18,5.3,77.27-3,88.59h0a5.57,5.57,0,0,1-.9,1c-1.29,1.07-6.59,2.94-6.59,2.94s5.3-1.87,6.59-2.94a5.57,5.57,0,0,0,.9-1c-5.23-9.15-4.82-27.14-6.3-43.48s-4.13-28.56-1.79-41.19c1.35-7.25,1.31-6.54,0-25.5s-1.31-23.53-4.58-26.8-7.84-3.92-13.73,0-13.07,38.57-17,59.49c-3.46,18.53-4.38,54.49-5.91,75.19h0c-.19,2.67-.4,5.1-.62,7.19-2,18.3-7.19,20.92-7.19,20.92s5.23-2.62,7.19-20.92c.22-2.1.43-4.52.62-7.19-2.46-4.18-4.08-18-3.85-22.36s-.46-15.77-.93-22.5,2.79-21.8,3.71-28.06-3.25-13.22-5.8-19.26-10.75,0-10.75,0c-3.93,7.84-9.16,7.84-15,45.11s4.58,58.84,0,73.22-14.05,79.1-13.56,96.76,4.86,67,14.29,77.79c10.16,11.67,14.27,18.31,14.27,23.1,0,19.62-1.92,92.62,5.27,102.43s21.57,32.69,75.83,27.46,75.19-28.11,75.19-28.11-15.69-70,3.27-105.26,11.76-30.73,24.84-39.23,31-38.77,53.61-58.76c19.73-17.47,48.38-30.15,48.38-30.15S742.86,372.38,731.74,368.46ZM512.28,500.18s11.25-17.5,6.88-42.5S486,405.17,486,405.17s28.75,27.51,33.13,52.51S512.28,500.18,512.28,500.18Zm29.38-121.26c-23.13-1.87-43.75,17.68-43.75,17.68s20.62-19.55,43.75-17.68,47.5,8.78,47.5,8.78-24.38-6.9-47.5-8.78Zm17.5,88.13c-14.38-36.25,36-51.88,36-51.88s-50.4,15.63-36,51.88Z"/></g></g></g>

        <g ref = {this.windowRef} id="window">
        <rect className="cls-3" x="260.57" y="334.38" width="324.3" height="189.1"/>
        <path className="cls-4" d="M331.82,375.89a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M376.78,362.32a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M352.18,403.88a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M319.1,398.79a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M431.06,445a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M533.27,386.07a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M377.62,437.39a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M311.7,464.54l.42.85a1.7,1.7,0,0,0,2.32.6,1.73,1.73,0,0,0,.61-2.31l-.43-.85a1.71,1.71,0,0,0-2.31-.61,1.73,1.73,0,0,0-.61,2.32Z"/>
        <path className="cls-4" d="M434,500.15a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M527.33,469.19a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M535.39,400.91a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M417.07,406.85a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M281.35,353h.43a1.7,1.7,0,0,0,0-3.39h-.43a1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M305.1,445.44a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M401.8,397.94a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M484.92,363.59a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M363.2,490.4a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M280.93,486.58a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M493.83,499.73a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M502.73,424.66a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-5" d="M459.48,434a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M360.24,420.85a.85.85,0,0,0,0-1.7.85.85,0,0,0,0,1.7Z"/>
        <path className="cls-5" d="M369.14,459.44a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M409.43,459.86a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M464.14,397.1a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M306,414.49a.85.85,0,0,0,0-1.7.85.85,0,0,0,0,1.7Z"/>
        <path className="cls-5" d="M291.11,390.31a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M357.69,439.08a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M477.29,381.41a.85.85,0,0,0,0-1.7.85.85,0,0,0,0,1.7Z"/>
        <path className="cls-5" d="M431.91,353.84a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M428.52,413.21a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M515.46,422.54a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M532,461.56a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M493.83,466.65a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M442.94,474.28a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M501,491.25a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M568.47,426.36a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M565.5,344.93a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M501,382.25a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M314.86,497.19a.85.85,0,0,0,0-1.7.85.85,0,0,0,0,1.7Z"/>
        <path className="cls-5" d="M284.74,445.45a.85.85,0,0,0,0-1.7.85.85,0,0,0,0,1.7Z"/>
        <path className="cls-5" d="M565.5,500.58a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M579.07,389.89a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M548.11,495.91a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M350.06,509.06a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M265.66,524.33a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M260.57,348.75a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M261,408.55a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M412,392a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M403.92,363.17a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M392.89,483.19a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M343.27,453.08a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M328.43,426.36a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M556.17,353a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M538.36,509.06a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-5" d="M451,522.21a.85.85,0,0,0,0-1.69.85.85,0,0,0,0,1.69Z"/>
        <path className="cls-6" d="M375.5,385.65a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M415.79,448.84a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M521.4,377.59a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M402.65,413.64h-.43a.43.43,0,0,0,0,.85h.43a.43.43,0,0,0,0-.85Z"/>
        <path className="cls-6" d="M299.16,390.74a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M336.06,358.93a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M328,459.87a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M477.71,475.13a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M426,358.08a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M451,376.32a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M553.2,399.64a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M574.83,458.17a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M517.58,451a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M551.51,504.82a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M465,434.84a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M451,460.71a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M442.94,419.15a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M493,407.7a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M483.65,444.6a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M445.48,417.46a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M444.21,388.19a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M423,395a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M387,437.39a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M274.57,417.46a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M344.54,373.77a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M337.33,392a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M323.34,389a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M326.31,403.46a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M407.31,397.52a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M494.68,384.8a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M479.83,420.42a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M431.48,442.9a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M402.22,437.81a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M393.74,404.73a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M537.09,483.62a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M369.14,487a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M348.78,466.65a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M298.32,371.65a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M336.91,353.84a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M311.46,392.43a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M265.66,367.41a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M293.65,393.28a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M267.36,380.13a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M310.62,350.87a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M403.49,350a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M578.65,375.47a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M511.22,348.75a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M529.45,347.05a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M565.5,409a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-6" d="M577.8,479a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M529,428.91a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M546.84,428.06a.43.43,0,0,0,0-.85.43.43,0,0,0,0,.85Z"/>
        <path className="cls-6" d="M554.05,463.68a.42.42,0,0,0,0-.84.42.42,0,0,0,0,.84Z"/>
        <path className="cls-4" d="M587.75,346.8a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M552.43,428.59a1.7,1.7,0,0,0,0-3.39,1.7,1.7,0,0,0,0,3.39Z"/>
        <path className="cls-4" d="M557.63,497a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M557.26,463.16a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M263.2,442.34a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-4" d="M432.72,378.77a1.69,1.69,0,0,0,0-3.38,1.69,1.69,0,0,0,0,3.38Z"/>
        <path className="cls-7" d="M579.77,307.42c-6-1.85-46-.28-49.84,0s-8.18.89-10.22,0c-1.23-.53-11.66-1.26-15.17-1.21-2.47,0-4.82.42-11.66.72-4,.17-8.45-1-11.82-.48s-5.22-.81-8-.88-11.13-1-15-1-10.83.43-16.37.43-12.24-.83-15.22-.83l-12,0c-3,0-10.21,1.16-12.77.74s-7.67.67-11.93-.18-15.86.39-23.1,0-12.62-.22-23.27-.22-21.18-1.06-27.57.22-7.4.95-12.94.95-41-3.87-46.87,9.77c-2.07,4.78-1.7,13.89-2.44,20.71s2.44,27.68.74,36.63,0,29.81.7,37.91,0,20.53,0,28.11,2.07,43.95,1,48.13c-.78,2.91.15,38.34,0,43.45-.37,12.51,21.3,11.07,26.83,12s22.15.34,26,0,60.48-.51,64.32-.06,36.63-1.73,39.61-1.73,28.66.12,37.6.54,20.24.24,25.78-.62,14.52.19,18.78,0,25.17-.59,32.41-1.44,15.63-.48,17.9-.61c5.67-.33,33.84-.64,42.79-2.34s7.2-7.08,8.32-10c1-2.56.64-17.82.73-23,.09-5.34.55-34.91.55-40.45s2-9.8,1.17-14.48.13-23.78,0-29,.81-12.69.85-18.31c0-5.13-.88-15.78,0-22.17s.83-18.85.41-21,.56-16.48,1-20.32-.66-19.21-2.79-23S585.73,309.27,579.77,307.42Zm-.37,24.41c-1-.07-2.17-.1-3.27-.12H575c-2.62,0-5.68,0-8.35.19,2.67-.2,5.73-.2,8.35-.19h1.09C577.23,331.73,578.36,331.76,579.4,331.83Zm-2.08-3.1-1.07,0c-3.22-.06-6.28-.06-9.53.13,3.25-.19,6.31-.19,9.53-.13l1.07,0c.7,0,1.39.08,2.06.14C578.71,328.81,578,328.76,577.32,328.73Zm-10.61-3a77.39,77.39,0,0,1,9.3.09c.57.06,1.14.1,1.7.12a13.07,13.07,0,0,0,1.66,0,13.07,13.07,0,0,1-1.66,0c-.56,0-1.13-.06-1.7-.12A77.39,77.39,0,0,0,566.71,325.71Zm2.15-3.22-2.19,0c2.69,0,5.14,0,7.85,0l1.49,0,1.7,0,1.67.05-1.67-.05-1.7,0-1.49,0c-2,0-3.78,0-5.66,0m-26.28,1.57a1.14,1.14,0,0,1,.92-.78l3.85-.56a.5.5,0,0,0,.38-.27l1.72-3.49a1.14,1.14,0,0,1,2,0l1.72,3.49a.5.5,0,0,0,.38.27l3.85.56a1.14,1.14,0,0,1,.92.78,1.16,1.16,0,0,1-.29,1.17l-2.78,2.71a.5.5,0,0,0-.15.45l.66,3.83a1.13,1.13,0,0,1-.45,1.11,1.12,1.12,0,0,1-.67.22,1.09,1.09,0,0,1-.53-.13l-3.45-1.81a.47.47,0,0,0-.46,0l-3.45,1.81a1.14,1.14,0,0,1-1.65-1.2l.66-3.83a.5.5,0,0,0-.15-.45l-2.78-2.71A1.16,1.16,0,0,1,542.58,324.06Zm-22.78.35a7.53,7.53,0,0,1,.47-1.46c1.9-4.12,8-6,11.71-3.51a11.81,11.81,0,0,1,3,5,7.71,7.71,0,0,1,.15,1.53,7.77,7.77,0,0,1-1.58,4.66,1,1,0,0,0,.09,1.3l.65.66a.59.59,0,0,1,.15.71.62.62,0,0,1-.6.39h-4.5a.62.62,0,0,1-.45-.19.61.61,0,0,1-.19-.45v-3.8a3.46,3.46,0,0,0,.25-1.2c.62-.61,1.23.61,1.76,1a.6.6,0,0,0,.91-.08,4.78,4.78,0,0,0,.7-1.39,4.27,4.27,0,0,0-.92-5,5.21,5.21,0,0,0-8.62,5.7,5.15,5.15,0,0,0,1.48,1.8.29.29,0,0,1,.12.23.38.38,0,0,1-.09.25l-1.38,1.38a.29.29,0,0,1-.21.09.33.33,0,0,1-.23-.07,7.7,7.7,0,0,1-2.78-5.94A7.71,7.71,0,0,1,519.8,324.41Zm-159.43-6.19c1.19-2.72,19.73-.88,22.87-.81,3.65.09,15.49-1.36,18-.63s12.28.09,15.51,0,14.9.82,19.49.78,13.43.55,16.83,0,10-.12,11.9,0,11.23-.46,12.93,0,4.25-.63,8.33,0,8-.72,8.5,4.38.17,11.73-3.06,12.07-12.31.18-17.24.35-16.23-.35-20.31-.69-23.83.17-25.53.34-20.52.56-26.64.19-14.3-.75-16.72-.53c-3.3.31-12.19.92-15.85.53-2.73-.3-7.61.62-8.46-1.27C359.89,330.56,360.37,318.22,360.37,318.22Zm-49.08,1.12c2.36-.94,5.67-.94,7.16,1.73a8.17,8.17,0,0,1,.95,1.33c1.34,1.2,1.34,3.09.87,5a7.46,7.46,0,0,1-5.2,4.73,6.84,6.84,0,0,1-6.62-2.84C305.62,325.49,307,320.29,311.29,319.34ZM301,321.15a7,7,0,0,1,.84,1.27c2.34,4.57-1.44,9.77-6.65,9.77a7.56,7.56,0,0,1-6.14-7.09C289.54,319.9,297.58,316.11,301,321.15Zm-26.13-.76c3.3-2.37,8-1.89,10.08,1.75a6.74,6.74,0,0,1,.76,1.63,6.91,6.91,0,0,1-3.75,8c-3.31.95-6.15-.47-8.51-2.83A6.67,6.67,0,0,1,274.89,320.39ZM579,390.62c-1.05,3.92-2.62,34.23-1.31,43.38s.26,75.52-1.83,78.39-8,4.53-24,3.66c-16.71-.91-64.28,3.58-75.78,1.27s-51.48,2.41-57.49,1.71a75.74,75.74,0,0,0-18.29.09c-6.8.77-73.43,3.46-81.27,2.42s-21.32-.48-28.38-1-14.48,1.26-15.78-3.71c0,0,.26-36.06.26-42.59A146.72,146.72,0,0,0,273,451.77c-1.05-5.23-.27-18.29,0-21.69s-1.88-37.62-1.55-41.61c.36-4.22-.17-8.38.36-10.73s.14-20.57-.12-21.61.11-9.5,1.83-10.19c3.59-1.46,84.14-2.1,97.47,0s71.86-.69,75.26-.74,69.25.41,81.79-.74,46-2.25,49.65,0S580,386.7,579,390.62Z"/><path className="cls-8" d="M369.42,334.19c3.66.39,12.55-.22,15.85-.53,2.42-.22,10.6.15,16.72.53s24.94,0,26.64-.19,21.45-.68,25.53-.34,15.37.86,20.31.69,14,0,17.24-.35,3.57-7,3.06-12.07-4.42-3.74-8.5-4.38-6.63.47-8.33,0-11.06.13-12.93,0-8.5-.55-11.9,0-12.24,0-16.83,0-16.25-.87-19.49-.78-13,.73-15.51,0-14.39.72-18,.63c-3.14-.07-21.68-1.91-22.87.81,0,0-.48,12.34.59,14.7C361.81,334.81,366.69,333.89,369.42,334.19Z"/><path className="cls-9" d="M282,331.73a6.91,6.91,0,0,0,3.75-8,6.74,6.74,0,0,0-.76-1.63c-2.05-3.64-6.78-4.12-10.08-1.75a6.67,6.67,0,0,0-1.42,8.51C275.83,331.26,278.67,332.68,282,331.73Z"/><path className="cls-10" d="M295.21,332.19c5.21,0,9-5.2,6.65-9.77a7,7,0,0,0-.84-1.27c-3.44-5-11.48-1.25-11.95,4A7.56,7.56,0,0,0,295.21,332.19Z"/><path className="cls-11" d="M315.07,332.11a7.46,7.46,0,0,0,5.2-4.73c.47-1.89.47-3.78-.87-5a8.17,8.17,0,0,0-.95-1.33c-1.49-2.67-4.8-2.67-7.16-1.73-4.26,1-5.67,6.15-2.84,9.93A6.84,6.84,0,0,0,315.07,332.11Z"/><path className="cls-7" d="M522.43,331.88a.33.33,0,0,0,.23.07.29.29,0,0,0,.21-.09l1.38-1.38a.38.38,0,0,0,.09-.25.29.29,0,0,0-.12-.23,5.15,5.15,0,0,1-1.48-1.8,5.21,5.21,0,0,1,8.62-5.7,4.27,4.27,0,0,1,.92,5,4.78,4.78,0,0,1-.7,1.39.6.6,0,0,1-.91.08c-.53-.35-1.14-1.57-1.76-1a3.46,3.46,0,0,1-.25,1.2V333a.61.61,0,0,0,.19.45.62.62,0,0,0,.45.19h4.5a.62.62,0,0,0,.6-.39.59.59,0,0,0-.15-.71l-.65-.66a1,1,0,0,1-.09-1.3,7.77,7.77,0,0,0,1.58-4.66,7.71,7.71,0,0,0-.15-1.53,11.81,11.81,0,0,0-3-5c-3.68-2.45-9.81-.61-11.71,3.51a7.53,7.53,0,0,0-.47,1.46,7.81,7.81,0,0,0,.58,4.82A7.58,7.58,0,0,0,522.43,331.88Z"/><path className="cls-12" d="M545.65,327.94a.5.5,0,0,1,.15.45l-.66,3.83a1.14,1.14,0,0,0,1.65,1.2l3.45-1.81a.47.47,0,0,1,.46,0l3.45,1.81a1.09,1.09,0,0,0,.53.13,1.12,1.12,0,0,0,.67-.22,1.13,1.13,0,0,0,.45-1.11l-.66-3.83a.5.5,0,0,1,.15-.45l2.78-2.71a1.16,1.16,0,0,0,.29-1.17,1.14,1.14,0,0,0-.92-.78l-3.85-.56a.5.5,0,0,1-.38-.27L551.49,319a1.14,1.14,0,0,0-2,0l-1.72,3.49a.5.5,0,0,1-.38.27l-3.85.56a1.14,1.14,0,0,0-.92.78,1.16,1.16,0,0,0,.29,1.17Z"/></g>

        <g ref = {this.shadowRef} id="shadow"><ellipse className="cls-13" cx="427.33" cy="706.33" rx="258.66" ry="9.35"/></g></svg>
            
      </div>
    )
  }
}
