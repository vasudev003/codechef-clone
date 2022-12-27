import React from 'react'
import "./Style.css"
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'


function Dashboard() {
  return (
    <>
        <Header /><br /><br />
        <Carousel />
        <section className="mt-5 p-5 section1 bg-light">
        <div className="d-flex p-1 sectiondiv">
            <div className="p-1 sec1">
                <h2>Learn</h2>
                <hr className="anyhr" />
                <span className="fs-4">
                    <i className="fa-solid fa-graduation-cap"></i>
                    Rating based learning paths
                </span>
                <p className="ms-4">Hand-picked problems to speed up your rating improvement</p>
                <span className="fs-4">
                    <i className="fa-solid fa-graduation-cap"></i>
                    Topical learning paths
                </span>
                <p className="ms-4">Structured, topic-wise focus on learning</p>

                <button className="btn btn-primary mt-5">Go to Learn -&gt;</button>

            </div>
            <div className="p-2">
                <img className="pic1 mt-3" src="images/pic1.png" alt="" />
            </div>
        </div>
    </section>
    <section className="p-5 section2  border-bottom border-4">
        <div className="d-flex p-1 sectiondiv">
            
            <div className="p-3 sec2">
                <h2>Learn</h2>
                <hr className="anyhr" />
                <span className="fs-4 my-4">
                    <i className="fa-solid fa-laptop-code"></i>
                    Problems for everyone
                </span>
                <p className="ms-4">Includes Beginners to Experienced programmers</p>
                <span className="fs-4 my-4">
                    <i className="fa-solid fa-laptop-code"></i>
                    3000+ Problems
                </span>
                <p className="ms-4">Practice more than 3000 problems across varying Difficulty ratings and Popular topics.</p>
                <span className="fs-4 my-4">
                    <i className="fa-solid fa-laptop-code"></i>
                    Learn and Debug your errors faster with:
                </span>
                <ul>
                    <li><span><i className="fa-regular fa-circle-check"></i> Video Editorials</span></li>
                    <li><span><i className="fa-regular fa-circle-check"></i> Debug your code</span></li>
                    <li><span><i className="fa-regular fa-circle-check"></i> Get Hints for Problems</span></li>
                    <li><span><i className="fa-regular fa-circle-check"></i> Chat Based Doubt Support</span></li>
                </ul>
                <button className="btn btn-primary mt-5">Go to Practice -&gt;</button>
            </div>
        </div>
    </section>
    <section className="mt-4 p-4 section6">
        <div className="d-flex p-1 sectiondiv">
            <div className="p-1 sec1">
                <h2>Compete</h2>
                <hr className="anyhr" />
                <span className="fs-4">
                    <i className="fa-solid fa-trophy"></i>
                    Starters 70
                    <div className="upcoming bg-success rounded fs-6 text-white text-center " >
                        Upcoming
                    </div>
                </span>
                <span>
                    <i className="fa-solid fa-calendar-days"></i>
                    Starts on 21 Dec
                    <i className="fa-regular fa-clock"></i>
                    08:00 PM IST
                    <p className="text-primary">Set Reminder -&gt;</p>
                </span>
                
                <span className="fs-4">
                    <i className="fa-solid fa-trophy"></i>
                    Rated Contest
                </span>
                <ul>
                    <li><span><i className="fa-regular fa-circle-check"></i> Compete with over 20,000 enthusiasts in each contest</span></li>
                    <li><span><i className="fa-regular fa-circle-check"></i> Participate in 6+ contests each month, on every Wednesday and the Weekends</span></li>
                    <li><span><i className="fa-regular fa-circle-check"></i> Four distinct Divisions grouping similarly skilled programmers together</span></li>
                </ul>

                <button className="btn btn-primary mt-5">Go to Contest -&gt;</button>

            </div>

            <div className=" p-2">
                <div className="p-2 pic2 text-center">
                    <h2>All Rated Contests</h2>
                    <p>Starts at 08:00 PM IST (+5:30 GMT)</p>

                    <h2>Rated Contest on Every Wednesday</h2>
                    <button className="btn starter-btn">Starters</button>

                </div>
            </div>
        </div>
    </section>
    <br /> <br /> <br /> 
      <Footer />  
    </>
  )
}

export default Dashboard