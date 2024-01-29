import React from 'react'
import Nav from '../Navbar/Top'
import Footer from '../Footer/Footer'
import './Model.css'
import img from './lamborghini/gate_models_s_01_m.jpg'
import img2 from './lamborghini/gate_models_s_02.jpg'
import revuelto from './lamborghini/revuelto.png'
import img3 from './lamborghini/gate_models_s_03_m.jpg'
import img4 from './lamborghini/gate_models_s_04.jpg'
import huracan from './lamborghini/Hurac_C3_A1n_logo.png'
import img5 from './lamborghini/gate_models_over_rev_01.jpg'
import urus from './lamborghini/Image_2034.png'
import img6 from './lamborghini/rds_02_0.jpg'
import img7 from './lamborghini/countach_01_m.jpg'
import img8 from './lamborghini/asterion_M.jpg'
import img9 from './lamborghini/S2_502326_M.jpg'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';


export default function Model() {
    const loginPath = useNavigate()
    return (
        <>
            <div className="models">
                <Nav />
                <div className="modelface-1">
                    <div className="path">
                        <div className="pathText">
                            <span onClick={() => loginPath('/')}>HOME</span><b> / MODELS</b>
                        </div>
                    </div>
                    <div className="face-1text">
                        <h3 className='textHead'>LAMBORGHINI</h3>
                        <h1 className='textHead2'>MODELS</h1>
                    </div>
                    <div className="sideText">
                        <p href="/logout" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></p>
                        <p className='Text1'>MODELS OVERVIEW</p><br />
                        <p className='Text2'>All Lamborghini Models</p>
                    </div>
                </div>
                <div className="revuelto">
                    <div className="parallelogram-container">
                        <div className="parallelogram">
                            <img
                                className="image"
                                src={img}
                                alt="Parallelogram"
                            />
                        </div>
                    </div>
                </div>
                <div className="revuelto2">
                    <div className="parallelogram-container">
                        <div className="parallelogram">
                            <img
                                className="image"
                                src={img2}
                                alt="Parallelogram"
                            />
                        </div>
                    </div>
                </div>
                <div className="revueltoText">
                    <div className="nextgrp">
                        <div className="face-8">
                            <h2 className='head'><img src={revuelto} alt="" /></h2>
                            <p>The Revuelto is the beginning of a new era for Lamborghini, who has harnessed<br />
                                the power of hybridization technology to create the first HPEV (High Performance<br />
                                Electrified Vehicle). Responding to the need for sustainability and powerful<br />
                                performance, the Lamborghini Revuelto rewrites all paradigms and represents a<br />
                                technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds<br />
                                a new life in this futuristic automotive masterwork that delivers unparalleled<br /> performance and driving emotions.</p>
                            <div className="face-4">
                                <div className="links">
                                    <div className="left-links">
                                        <a href="/">REVUELTO</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="huracan">
                    <div className="huracangrp">
                        <div className="revuelto2">
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
                        <div className="revuelto">
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
                        <div className="revueltoText">
                            <div className="nextgrp">
                                <div className="face-8">
                                    <h2 className='head'><img src={huracan} alt="" /></h2>
                                    <p>From our past, we've learned perfection. This is how the first model of the<br />
                                        Lamborghini Huracán was born. More performance, more control, more<br />
                                        innovation. The Huracán is equipped with a powerful V10 engine and the latest<br />
                                        technologies to perform at its absolute best. Engineered to guarantee the best<br />
                                        performance and control under any driving condition, it's easy to take to the limit,<br />
                                        not to mention extremely fun, thanks to technology like the Lamborghini Doppia<br />
                                        Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel<br />
                                        drive. Enjoy the best driving experience, ever. Discover all the Lamborghini<br />
                                        Huracán models.</p>
                                    <p class="hover-underline-animation">HURACÁN STERRATO</p><br />
                                    <p class="hover-underline-animation">HURACÁN TECNICA</p><br />
                                    <p class="hover-underline-animation">HURACÁN STO</p><br />
                                    <p class="hover-underline-animation">HURACÁN EVO SPYDER</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="urus">
                    <div className="revuelto2">
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
                    <div className="revueltoText">
                        <div className="nextgrp">
                            <div className="face-8">
                                <h2 className='head'><img src={urus} alt="" /></h2>
                                <p>Lamborghini Urus is the world’s first Super Sport<br />
                                    Utility Vehicle, in which luxury, sportiness and<br />
                                    performance meet comfort and versatility. It offers<br />
                                    best-in-class driving dynamics, alongside its<br />
                                    unmistakable elegance of design. Urus embodies<br />
                                    the characteristics of multiple souls: sporty, elegant<br />
                                    and off-road, and has a suitability for everyday<br />
                                    driving in a range of environments. With its<br />
                                    surprisingly distinct engine sound, combined with <br />
                                    high performance, Lamborghini Urus is anything<br />
                                    but typical.</p>
                                <p class="hover-underline-animation">URUS S</p><br />
                                <p class="hover-underline-animation">URUS PERFORMANTE</p><br />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="limited">
                    <div className="limitedgrp">
                        <div className="revueltoText">
                            <div className="nextgrp">
                                <div className="face-8">
                                    <h2 className='head'>LIMITED SERIES</h2>
                                    <p>The Limited Series Lamborghini are the most exclusive, limited<br />
                                        editions to meet a small and select number of clients. Truly<br />
                                        representing the state of the art in the domain of super cars, the<br />
                                        Limited Series models express the highest Lamborghini spirit in<br />
                                        every respect. Indeed, they are equipped with the most advanced <br />
                                        features available in the fields of design and technology.</p>
                                    <p class="hover-underline-animation">COUNTACH LPI 800-4</p><br />
                                    <p class="hover-underline-animation">SIÁN FKP 37</p><br />
                                    <p class="hover-underline-animation">SIÁN ROADSTER</p><br />

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
                                                        src={img6}
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
                                                        src={img7}
                                                        alt="Parallelogram"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="concept">
                    <div className="limited">
                        <div className="limitedgrp">
                            <div className="revueltoText">
                                <div className="nextgrp">
                                    <div className="face-8">
                                        <h2 className='head'>CONCEPT</h2>
                                        <p>The most visionary models, these unique specimens are set to<br />
                                            define the highest limits of technology and design. Unveiled at the<br />
                                            most prestigious international Motor Shows, they offer an exclusive<br />
                                            look at the most innovative solutions that Lamborghini may adopt in<br />
                                            its future series-production models.</p>
                                        <p class="hover-underline-animation">TERZO MILLENNIO</p><br />
                                        <p class="hover-underline-animation">ASTERION</p><br />
                                        <p class="hover-underline-animation">ESTOQUE</p><br />

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
                                                            src={img8}
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
                                                            src={img9}
                                                            alt="Parallelogram"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}
