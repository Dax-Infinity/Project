import React from 'react';
import "./index.css"
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import { Grid } from '@mui/material';
import Nav from '../Navbar/Top';
import Footer from '../Footer/Footer';
import img from './lamborghini/beyond_land_over_01.jpg'
import img1 from "./lamborghini/top_employer_22_cover.jpg";
import img2 from "./lamborghini/chasing_the_future_cover.jpg";
import img3 from "./lamborghini/race_to_inspire_cover.jpg";
import { useNavigate } from 'react-router-dom';
export default function Beyond() {
    const loginPath = useNavigate()
    return (
        <>
            <div className="beyond">
                <Nav />
                <div className="beyondface-1">
                    <div className="path">
                        <div className="pathText">
                            <span onClick={() => loginPath('/')}>HOME</span><b> / BEYOND</b>
                        </div>
                    </div>
                    <div className="face-1text">
                        <h3 className='textHead'>DRIVING HUMANS</h3>
                        <h1 className='textHead2'>BEYOND</h1>
                        <a href="/logout" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></a>
                    </div>
                </div>
                <div className="face-8">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <div className="parallelogram-container">
                                <div className="parallelogram">
                                    <img
                                        className="image"
                                        src={img}
                                        alt="Parallelogram"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <h2 className='head'>OVERVIEW</h2>
                            <p>The greatest challenge ever: moving forward and<br />
                                always raising the bar, going beyond the status<br />
                                quo to build a brand new limitless world.</p>
                            <button className='readmore'>READ MORE</button>

                        </Grid>
                    </Grid>
                </div>
                <div className="face-9">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <img src={img1} alt="" />
                        </Grid>
                        <Grid item xs={6}>
                            <p className='head'>6 MARCH 2023</p>
                            <h2>AUTOMOBILI LAMBORGHINI TOP<br /> EMPLOYER ITALY 2022</h2>
                            <button className='readmore'>READ MORE</button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={img2} alt="" />
                        </Grid>
                        <Grid item xs={6}>
                            <p className='head'>21 FEBRUARY 2023</p>
                            <h2>CHASING THE FUTURE: IKEUCHI X<br /> LAMBORGHINI</h2>
                            <button className='readmore'>READ MORE</button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={img3} alt="" />
                        </Grid>
                        <Grid item xs={6}>
                            <p className='head'>20 JANUARY 2023</p>
                            <h2>RACE TO INSPIRE: IRON DAMES <br />AND MORE</h2>
                            <button className='readmore'>READ MORE</button>
                        </Grid>
                        <Grid item xs={12}>
                            <p className='end'>More To Come</p>
                        </Grid>
                    </Grid>

                </div>
                <div className="foooter">
                    <Footer />
                </div>
            </div>
        </>
    )
}

