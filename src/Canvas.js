
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const c = canvas.getContext('2d')

        // set location of first corner of triangle

        //set size of triangle 








        // this is how i figure out how long i clicked for

        let timeMouseClicked = 0
        let timer

        canvas.addEventListener('mousedown', (e) => {
            let size = 1
            //base coordinates for equal sided triangle are (0,0), (10,40), (40,10)

            timer = setInterval(() => {
                // every 0.2 seconds i count the time clicked and add it to size
                // I then use the click location for the first corner and use
                // size to calculate where the other corners should be

                timeMouseClicked += 0.02
                size += timeMouseClicked
                console.log(timeMouseClicked)
                //i draw and erase the triangle every 0.2 seconds so you see
                //the triangle growing
                c.clearRect(0, 0, canvas.width, canvas.height)
                c.beginPath()
                c.moveTo(e.x, e.y)
                c.lineTo(10 * size + e.x, 40 * size + e.y)
                c.lineTo(40 * size + e.x, 10 * size + e.y)
                c.closePath()
                c.strokeStyle = 'black'
                c.stroke()

            }, 30)


        })
        canvas.addEventListener('mouseup', () => {

            // here i stop the interval and set the size based on how long the mouse was held down
            clearInterval(timer)
            // i also reset the variable that stores the amount of time the mouse was held down
            timeMouseClicked = 0
        })







    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas