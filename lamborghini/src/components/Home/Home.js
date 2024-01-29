import React from 'react'
import img1 from './lamborghini/family_chooser_sterrato.jpg'
import img2 from './lamborghini/urus_s_family_chooser.jpg'
import img3 from './lamborghini/revuelto.jpg'
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import next from './lamborghini/next.png';
import prev from './lamborghini/previous.png';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import face6img from './lamborghini/lounge_cover.jpg'
import { Grid } from '@mui/material';
import face8img1 from './lamborghini/lanzador_unveil_cover.jpg';
import face8img2 from './lamborghini/cover_desktop.jpg';
import Footer from '../Footer/Footer';
import Nav from '../Navbar/Top';
export default function Home() {
    let name = "dax"
    return (
        <>
            <Nav />
            <div className="face-1">
                <div className="face-1text">
                    <h3 className='textHead'>DESIGN BY NEW DESIRES</h3>
                    <h1 className='textHead2'>LAMBORGHINI<br />LANZADORE</h1>
                    <a href="/logout" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></a>
                </div>
            </div>
            <div className="face-2"></div>
            <div className="face-3">
                <div className="carasoul">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={img1} alt="First slide" />
                                <div className="text2">
                                    <h3 className='face-2text'>HURACÁN</h3>
                                    <h1 className='face-2text2'>BEYOND THE CONCRETE</h1>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={img2} alt="Second slide" />
                                <div className="text2">
                                    <h3 className='face-2text'>URUS</h3>
                                    <h1 className='face-2text2'>UNLOCK ANY ROAD</h1>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={img3} alt="Third slide" />
                                <div className="text2">
                                    <h3 className='face-2text'>REVUELTO </h3>
                                    <h1 className='face-2text2'>FROM NOW ON</h1>
                                </div>
                            </div>
                        </div>
                        <span aria-hidden="true"><img src={prev} alt='prev' class="carousel-control-prev next" href="#carouselExampleControls" role="button" data-slide="prev" /></span>
                        <span aria-hidden="true"><img src={next} alt="next" class="carousel-control-next prev" href="#carouselExampleControls" role="button" data-slide="next" /></span>
                        <span aria-hidden="true"><TravelExploreIcon class="carousel-control-prev explore" /></span>
                        <span aria-hidden="true"><h2 class="carousel-control-prev model" href="#carouselExampleControls">Model</h2></span>
                        <span aria-hidden="true"><h2 class="carousel-control-prev exploreText" href="#carouselExampleControls">Explore the<br />models</h2></span>
                    </div>
                </div>
            </div>
            <div className="face-4">
                <div className="face-4text">
                    <h3 className='face-4textHead'>CONFIGURATOR</h3>
                    <h1 className='face-4textHead2'>CREATE YOUR<br />REVUELTO</h1>
                    <a href="/logout" ><NextPlanOutlinedIcon className='face-4nextIcon' fontSize='2vh' /></a>
                    <div className="links">
                        <div className="left-links">
                            <a href="/">Revuelto</a>
                            <a href="/">Huracán</a>
                            <a href="/">Urus</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="face-5">
                <div className="face-1text">
                    <h3 className='textHead'>DEALER LOCATOR</h3>
                    <h1 className='textHead2'>FIND YOUR<br />COUNTRY DEALER</h1>
                    <a href="/" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></a>
                </div>
            </div>
            <div className="face-6">
                <div className="face-1text">
                    <h3 className='textHead'>NEWS</h3>
                    <h1 className='textHead2'>LAMBORGHINI WORLD</h1>
                </div>
                <img src={face6img} alt="" className='face6img' />
            </div>
            <div className="face-7">
                <p className='head'>20 AUGUST 2023</p>
                <button>Events</button>
                <h2>60TH ANNIVERSARY AT LAMBORGHINI LOUNGE<br /> MONTEREY</h2>
                <p className='sub'>Automobili Lamborghini opens the doors of the Lamborghini Lounge Monterey welcoming VIP guests for an<br />
                    exclusive brand experience in a private villa which has been transformed to reflect the Lamborghini lifestyle.</p>
                <button className='readmore'>READ MORE</button>
            </div>
            <div className="face-8">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img src={face8img1} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <p className='head'>20 AUGUST 2023</p>
                        <h2>LAMBORGHINI UNVEILS CONCEPT<br /> CAR LANZADOR AT MONTEREY CAR <br />WEEK</h2>
                        <button className='readmore'>READ MORE</button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={face8img2} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <p className='head'>20 AUGUST 2023</p>
                        <h2>LAMBORGHINI UNVEILS CONCEPT<br /> CAR LANZADOR AT MONTEREY CAR <br />WEEK</h2>
                        <button className='readmore'>READ MORE</button>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <button className='seeall'>SEE ALL</button>
                </Grid>
            </div>
            <Footer />
        </>
    )
}
