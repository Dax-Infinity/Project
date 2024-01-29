import React from 'react'
import Nav from '../Navbar/Top'
import Footer from '../Footer/Footer'
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import "./Ownership.css"
import img from './lamborghini/gate_ownership_over_01_0.jpg'
import img2 from './lamborghini/gate_ownership_s1_02.jpg'
import img3 from './lamborghini/gate_ownership_s1_03.jpg'
import img4 from './lamborghini/gate_ownership_s3_02.jpg'
import img5 from './lamborghini/gate_ownership_s3_03.jpg'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Ownership() {
    const loginPath = useNavigate()
    return (
        <>
            <div className="ownership">
                <Nav />
                <div className="beyondface-1">
                    <div className="path">
                        <div className="pathText">
                            <span onClick={() => loginPath('/')}>HOME</span><b> / OWNERSHIP</b>
                        </div>
                    </div>
                    <div className="face-1text">
                        <h3 className='textHead'>LAMBORGHINI</h3>
                        <h1 className='textHead2'>OWNERSHIP</h1>
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
                            <h2 className='head'>CONNECTIVITY</h2>
                            <p>Lamborghini connected services can be used<br />
                                from the moment you get in the car via the<br />
                                Lamborghini Infotainment System (LIS), an<br />
                                intuitive system that accesses information<br />
                                directly from the Web and allows you to manage it<br />
                                quickly and easily.</p>
                            <div className="face-4">
                                <div className="links">
                                    <div className="left-links">
                                        <a href="/">Discover More</a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="nextgrp">
                    <div className="face-8">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <h2 className='head'>CUSTOMER APP</h2>
                                <p>Lamborghini UNICA is an exclusive app reserved for Lamborghini<br /> customers, enabling them to connect to the Sant’Agata Bolognese-<br />
                                    based automaker at a simple tap of a finger.</p>
                                <div className="face-4">
                                    <div className="links">
                                        <div className="left-links">
                                            <a href="/">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="parallelogram-container">
                                    <div className="parallelogram">
                                        <img
                                            className="image"
                                            src={img2}
                                            alt="Parallelogram"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="nextgrpapp">
                        <div className="parallelogram-container">
                            <div className="parallelogram">
                                <img
                                    className="image"
                                    src={img3}
                                    alt="Parallelogram"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="classics">
                    <div className="face-8">
                        <h2 className='head'>CLASSICS</h2>
                        <p>With its new Polo Storico, Automobili Lamborghini sets out to keep<br />
                            its heritage and exclusive know-how intact. There are many services<br />
                            created ad hoc to preserve the integrity of the historic vehicles, with<br />
                            maintenance and restoration aimed at faithfully following the original<br />
                            characteristics of the car. The Lamborghini Historic Archive, which<br />
                            preserves all documents made by the House of the Raging Bull over<br />
                            its long history, is also of enormous value.</p>
                        <div className="face-4">
                            <div className="links">
                                <div className="left-links">
                                    <a href="/">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lastgrp">
                    <div className="face-8">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="img4">
                                    <div className="parallelogram-container">
                                        <div className="parallelogram">
                                            <img
                                                className="image"
                                                src={img5}
                                                alt="Parallelogram"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="img5">
                                    <div className="parallelogram-container">
                                        <div className="parallelogram">
                                            <img
                                                className="image"
                                                src={img4}
                                                alt="Parallelogram"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
