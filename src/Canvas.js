import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const c = canvas.getContext('2d')



        const finishedTriangles = []

        function Triangle(x, y, size) {

            this.x1 = x
            this.y1 = y
            this.x2 = 1 * size + x
            this.y2 = 4 * size + y
            this.x3 = 4 * size + x
            this.y3 = 1 * size + y

            this.drawn = false

            this.draw = function () {
                c.moveTo(this.x1, this.y1)
                c.lineTo(this.x2, this.y2)
                c.lineTo(this.x3, this.y3)
                c.closePath()
                c.strokeStyle = 'black'
                c.stroke()
            }
        }
        //started by setting base coordinates for a משולש שווה צלעות



        //set size of triangle 
        let size = 1


        let timeMouseClicked = 0
        let timer


        canvas.addEventListener('mousedown', (e) => {
            size = 1
            timer = setInterval(() => {
                //when clicked, timer will start
                timeMouseClicked += 0.05
                size += timeMouseClicked
                // let drawingTriangle = new Triangle(e.x, e.y, size)
                // c.clearRect(0, 0, canvas.width, canvas.height)
                // drawingTriangle.draw()

                // console.log(timeMouseClicked)
            }, 10)

        })
        canvas.addEventListener('mouseup', (e) => {
            // console.log(timeMouseClicked)
            // here i stop the interval and set the size based on how long the mouse was held down
            finishedTriangles.push(new Triangle(e.x, e.y, size))
            c.clearRect(0, 0, canvas.width, canvas.height)
            console.log(finishedTriangles)
            clearInterval(timer)
            // i also reset the variable that stores the amount of time the mouse was held down
            timeMouseClicked = 0
            // console.log(size)

            //then i draw the triangle with the updated size value

            animate()
        })




        function animate() {
            c.clearRect(0, 0, canvas.width, canvas.height)
            finishedTriangles.forEach(triangle => {
                if (triangle.drawn === false) {
                    triangle.draw()
                    triangle.drawn = true
                }

            })




        }






    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas