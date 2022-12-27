import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Compete() {
  return (
    <>
    < Header />
    <section className="container mt-2">
    <div className="d-flex flex-wrap">
        <div className="starter_card p-3 mx-3 text-light rounded" 
        >
            <h3>Starters 70</h3>
            <h5 className="mt-3">21 Dec 2022</h5>
            <p>08:00 PM to 11:00 PM IST</p>
            <p>Contest Duration : 3 hrs</p>
        </div>

        <div className="starter_card p-3 mx-3 text-light rounded-2 ">
            <h3>Starters 71</h3>

            <h5>28 Dec 2022</h5>
            <p>08:00 PM to 11:00 PM IST</p>
            <p>Contest Duration : 3 hrs</p>
        </div>

        <div className="d-flex flex-column mx-3 ">
            <div className="games_sec p-2 rounded my-1 rounded-2  tohover text-light" >
                <h4>1v1 Games</h4>
                <p>Play challenges and puzzles</p>
            </div>
            <div className="upsolve p-2 rounded my-1 tohover rounded-2 text-light" >
                <h4>Upsolve In</h4>
                <p>Practice</p>
            </div>
        </div>
    </div>

</section>
<section className="container mt-3">

    <div>

        <div className="p-1">
            <h2>Ongoing Contests</h2>
            <hr className="anyhr" />
            <div className="contest row" >
                <div className="col-md-2 p-2">
                    <p>Code</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Name</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>Starts</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Duration</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Ends in</p>
                </div>
            </div>
            <div className="row  shadow">
                <div className="col-md-2 p-2">
                    <p>GAMES</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>1v1 Games by codechef</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>10 Oct 2022 Mon 12:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>NA</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>NA</p>
                </div>
            </div>
            
        </div>

        <div className="p-1 mt-3">
            <h2>Upcoming Contests</h2>
            <hr className="anyhr" />
            <div className="contest row" >
                <div className="col-md-2 p-2">
                    <p>Code</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Name</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>Starts</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Duration</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Ends in</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START70</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 70</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>21 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>2 Days 3 hrs</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START71</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 71</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
             </div>
        </div>

        <div className="p-1 mt-3">
            <h2>Past Contests</h2>
            <hr className="anyhr" />
            <div className="row contest" >
                <div className="col-md-2 p-2">
                    <p>Code</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Name</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>Starts</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Duration</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Ends in</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START69</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 70</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>21 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>2 Days 3 hrs</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START68</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 71</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
             </div>

             <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>DEC222</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>December Long</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>21 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>2 Days 3 hrs</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START67</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 67</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START66</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 66</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>

            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>NOV221</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>November Long Challenge</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>
            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START65</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 65</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>
            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START64</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 64</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>
            <div className="row  shadow mt-1">
                <div className="col-md-2 p-2">
                    <p>START63</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>Starters 63</p>
                </div>
                <div className="col-md-3 p-2">
                    <p>28 Dec 2022 Wed 20:00</p>
                </div>
                <div className="col-md-2 p-2">
                    <p>3 Hrs </p>
                </div>
                <div className="col-md-2 p-2">
                    <p>9 Days 3 Hrs</p>
                </div>
            </div>
        </div>

    </div>

</section>
    < Footer />
    </>
  )
}

export default Compete