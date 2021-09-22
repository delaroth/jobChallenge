
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const c = canvas.getContext('2d')

        // set location of first corner of triangle
        let x = 0
        let y = 0

        //set size of triangle 
        let size = 1




        //started by setting base coordinates for a משולש שווה צלעות

        let x1 = x
        let y1 = y
        let x2 = 10 * size + x
        let y2 = 40 * size + y
        let x3 = 40 * size + x
        let y3 = 10 * size + y









        //When i click the mouse a timer starts which counts how long ive held it for and when i realease the 
        //mouse update the size value of my triange coordinates
        //based on the length of time the mouse has been held down. I then draw a circle using that size value      


        // this is how i figure out how long i clicked for

        let clicked = false
        let timeMouseClicked = 0
        let timer

        canvas.addEventListener('mousedown', () => {
            timer = setInterval(() => {
                timeMouseClicked += 0.03
                // console.log(timeMouseClicked)
            }, 1)

        })
        canvas.addEventListener('mouseup', () => {
            // console.log(timeMouseClicked)
            size = 1
            size += timeMouseClicked
            // here i stop the interval and set the size based on how long the mouse was held down
            clearInterval(timer)
            // i also reset the variable that stores the amount of time the mouse was held down
            timeMouseClicked = 0
            // console.log(size)

            //then i draw the triangle with the updated size value
            if (clicked === false) {

                c.beginPath()
                c.moveTo(x1, y1)
                c.lineTo(x2 * size + x, y2 * size + y)
                c.lineTo(x3 * size + x, y3 * size + y)
                c.closePath()
                c.strokeStyle = 'black'
                c.stroke()
                clicked = true

            }
            else if (clicked === true) {
                c.clearRect(0, 0, canvas.width, canvas.height)

                clicked = false
            }
        })







    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas