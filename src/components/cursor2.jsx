import React, { Component } from 'react'
import '../styles/css/cursor.css'
import { TweenMax } from 'gsap/TweenMax'
import { paper } from 'paper'
import SimplexNoise from 'simplex-noise'


export default class Cursor extends Component {
    

    componentDidMount() {
        //log
        console.log(this.props)
        // Declarations
        let clientX = -100
        let clientY = -100
        const innerCursor = this.refs.innerCursor
        console.log('cursor ref ', innerCursor)

        // function animation declaration
        const initCursor = () => {
            //add event listener to get mouse position
            document.addEventListener('mousemove', e => {
                clientX = e.clientX
                clientY = e.clientY
            })

            //transform the circle to current mouse position
            // cann use transform or tween max
            const render = () => {
                TweenMax.set(innerCursor, {
                    x: clientX,
                    y: clientY
                })

                requestAnimationFrame(render)
            }
            requestAnimationFrame(render)
        }
        initCursor()
        //Paper js declarations
        let lastX = 0
        let lastY = 0
        let isStuck = 0
        let showCursor = false
        let group, fillOuterColor
        let stuckX = this.props.stuckX
        let stuckY = this.props.stuckY
        console.log(stuckX)

        //preparing the canvas

        const initCanvas = _ => {
            const canvas = this.refs.canvas
            const shapeBounds = {
                height: 75,
                width: 75
            }
            paper.setup(canvas)
            const strokeColor = 'rgb(206, 122, 133)'
            const strokeWidth = 1.5
            const segments = 4
            const radius = 15

            // needed for the noisy circle
            const noiseScale = 150
            const noiseRange = 4
            let isNoisy = false

            //the base shape of the noisy circle
            const polygon = new paper.Path.RegularPolygon(
                new paper.Point(0, 0),
                segments,
                radius
            )
            polygon.strokeColor = strokeColor
            polygon.strokeWidth = strokeWidth
            polygon.smooth()
            group = new paper.Group([polygon])
            group.applyMatrix = false

            const noiseObjects = polygon.segments.map(() => new SimplexNoise())
            let bigCoordinates = []

            //function for linear interpolation of values
            const lerp = (a, b, n) => {
                return (1 - n) * a + n * b
            }

            //function to map one range of value to another range
            const map = (value, in_min, in_max, out_min, out_max) => {
                return ((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
            }

            //the draw loop of paperjs
            // 60fps with requestFrameAnimation under the hood
            paper.view.onFrame = event => {
                //using linear interpolation the circle will move 20%
                //of the distance between it and the mouse coordinates per frame
                lastX = lerp(lastX, clientX, 0.01)
                lastY = lerp(lastY, clientY, 0.01)
                group.position = new paper.Point(lastX, lastY)

                // stuck stuff
                if (!this.props.isStuck) {
                    //move circle around normally
                    lastX = lerp(lastX, clientX, 0.2)
                    lastY = lerp(lastY, clientY, 0.2)
                    group.position = new paper.Point(lastX, lastY)
                }
                else if (this.props.isStuck) {
                    //fix the position of circle i.e sticky it
                    lastX = lerp(lastX, this.props.stuckX, 0.2)
                    lastY = lerp(lastY, this.props.stuckY, 0.2)
                    group.position = new paper.Point(lastX, lastY)
                }
                if (this.props.isStuck && polygon.bounds.width < shapeBounds.width) {
                    polygon.scale(1.08)
                }
                else if (!this.props.isStuck && polygon.bounds.width > 30) {
                    //remove noisy
                    if (isNoisy) {
                        polygon.segments.forEach((segment, i) => {
                            segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
                        })
                        isNoisy = false
                        bigCoordinates = []
                    }
                    //scale down the shape
                    const scaleDown = 0.92
                    polygon.scale(scaleDown)
                }

                //while stuck and big add simplex noise to the polygon
                if (this.props.isStuck && polygon.bounds.width >= shapeBounds.width) {
                    isNoisy = true
                    //first get the coordinates of the big circle
                    if (bigCoordinates.length === 0) {
                        polygon.segments.forEach((segment, i) => {
                            bigCoordinates[i] = [segment.point.x, segment.point.y]
                        })
                    }
                    //loop all over polygon points
                    polygon.segments.forEach((segment, i) => {

                        //get new noise value
                        //we divide  event.count by noise scale to get a very smooth value
                        const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
                        const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

                        //map the value of the defined range
                        const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
                        const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

                        //apply distortions to coordinates
                        const newX = bigCoordinates[i][0] + distortionX;
                        const newY = bigCoordinates[i][1] + distortionY;

                        segment.point.set(newX, newY)
                    })
                }
                polygon.smooth()

            }//paper.view func

        }//end of the init canvas function

        initCanvas()

        //Woring on the hover states
        const initHovers = () => {
            // find the center of the link element and set stuckX and stuckY
            // they are needed to set the position of the noisy circle
            const handleMouseEnter = e => {
                const navItem = e.currentTarget
                const navItemBox = navItem.getBoundingClientRect()
                stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
                stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
                isStuck = true
            }
            //reset the isStuck on mouse leaving the nav item
            const handleMouseLeave = () => {
                isStuck = false
                console.log('out of link')
            }

            //add mouseenter and leave event listeners to the nav items
            /* const linkItems = document.querySelectorAll('.link')
            linkItems.forEach(item =>{
                item.addEventListener('mouseenter', handleMouseEnter)
                item.addEventListener('mouseleave', handleMouseLeave)
            }) */
            /* const linkItemSettings = this.props.forwadedref
            linkItemSettings.onmouseenter = handleMouseEnter
            linkItemSettings.onmouseleave = handleMouseLeave */

        }//end of the init hovers
        //initHovers()


    }//End of the component did mount




    render() {
        console.log(this.props)
        return (
            <div className='main'>



                {/* cursor element */}
                <div className="cursor cursor--small" ref='innerCursor'></div>
                <canvas ref='canvas' className="cursor cursor--canvas" resize='true'></canvas>



            </div>
        )
    }
}

