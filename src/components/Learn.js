import React from 'react'
import "./Style.css"
import Footer from './Footer'
import Header from './Header'

function Learn() {
  return (
    <div>
    < Header />
    <section className="learnsection p-3">
    <p className="mt-3">Home&gt;Learn</p>
    <h4>Learn</h4>
    <p >Choose from a range of learning paths based on your rating or goal.</p>
    </section>
    <section className="p-3 learnsection2">
    <h4>Learning Paths</h4>
    <hr className="anyhr" />

    <div className="d-flex flex-wrap ">
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3>0⭐ to 1⭐</h3>
            </div>
            <div className="p-2">
                Getting Started on CodeChef
                <div className="">
                    <div className="text">
                        <i className="fa-solid fa-book"></i> 1 Topic
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bars"></i> 12 Problems
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bullseye"></i>Target 2 problems daily
                    </div>
                </div>
            </div>
        </div>

        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center" >
                <h3>1⭐ to 2⭐</h3>
            </div>
            <div className="p-2">
                Level up from 1★
                <div className="">
                    <div className="text">
                        <i className="fa-solid fa-book"></i> 5 Topics
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bars"></i> 66 Problems
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bullseye"></i>Target 2 problems daily
                    </div>
                </div>
            </div>
        </div>

        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center" >
                <h3>2⭐ to 3⭐</h3>
            </div>
            <div className="p-2">
                jump from 2★
                <div className="">
                    <div className="text">
                        <i className="fa-solid fa-book"></i> 7 Topics
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bars"></i> 77 Problems
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bullseye"></i>Target 2 problems daily
                    </div>
                </div>
            </div>
        </div>

        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center" >
                <h3>3⭐ to 4⭐</h3>
            </div>
            <div className="p-2">
                Rise From 3★
                <div className="">
                    <div className="text">
                        <i className="fa-solid fa-book"></i> 8 Topics
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bars"></i> 118 Problems
                    </div>
                    <div className="text">
                        <i className="fa-solid fa-bullseye"></i>Target 2 problems daily
                    </div>
                </div>
            </div>
        </div>

    </div>

    <h4 className="mt-4">Competition</h4><br />
    <div className="d-flex flex-wrap ">
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3>ZOC</h3>
            </div>
            <div className="p-2">
                Past ZCO Problems
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3>INOI</h3>
            </div>
            <div className="p-2">
                Past INOI Problems
            </div>
        </div>
    </div>

    <h4 className="mt-4">Interview Preparation</h4><br />
    <div className="d-flex flex-wrap ">
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3>DSA Concepts</h3>
            </div>
            <div className="p-2">
                Classical Problems
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3>Company-specific</h3>
            </div>
            <div className="p-2">
                Classical Problems
            </div>
        </div>
    </div>

    <h4 className="mt-4">Practice Topics</h4>
    <hr className="anyhr" />

    <div className="d-flex flex-auto flex-wrap">
            
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Basic Programming</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Arrays</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>strings</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Dynamic Programming</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Hashmap</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Greedy Algorithmn</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Segment Trees</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Graphs</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>

        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Sorting</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
        <div className="card d-flex flex-column mx-3">
            <div className="card_sty bg-secondary text-light text-center justify-content-center p-3" >
                <h3>Binary Search</h3>
            </div>
            <div className="p-3">
                Coming Soon
            </div>
        </div>
    </div>
    </section>
    < Footer />
    </div>
  )
}

export default Learn