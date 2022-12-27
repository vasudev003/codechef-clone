import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Practice() {
  return (
    <>
    < Header />
    <section className="p-2">
    <div className="p-2 d-flex">
        <div className="p-2 mx-1">
            <h2>Practice</h2>
            <p>This is the place to hone your skills</p>
        </div>

        <div className="sty d-flex flex-column p-2 shadow-sm mx-1 bg-light" >
            <p>Popular Topics</p>
            <div className="d-flex flex-row mt-1">
                <div className="p-1 mx-1">
                    <p>Math</p>
                    <p>1967 Problem</p>
                </div>
                <div className="p-1 mx-1">
                    <p>Data Structure</p>
                    <p>1451 Problem</p>
                </div>
                <div className="p-1 mx-1">
                    <p>Dynamic Programming</p>
                    <p>631 Problem</p>
                </div>
            </div>

            <hr className="mt-1" />
            <h4 className="text-primary mt-2">See More -&gt;</h4>
        </div>

        <div className="styl p-3 rounded mx-1 bg-secondary tohover" >
            <h4>Learning Paths</h4>

            <p>Structure topic-wise focus on learning with hand picked problem. </p>

            <h4 className="mt-5 ">View -&gt;</h4>
        </div>

        <div className="d-flex flex-column mx-1 ">
            <div className="p-2 rounded my-1  bg-secondary tohover">
                <h4>1v1 Games</h4>
                <p>Play challenges and puzzles</p>
            </div>
            <div className="p-2 rounded my-1  bg-secondary tohover">
                <h4>Upcoming Contest</h4>
                <p>Starters 70</p>
            </div>
        </div>
    </div>
</section>
    < Footer />
    </>
  )
}

export default Practice