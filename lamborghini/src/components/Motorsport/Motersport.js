import React from 'react'
import Nav from '../Navbar/Top'
import Footer from '../Footer/Footer'
import "./Motorsport.css"
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import { Grid } from '@mui/material';
import card1 from './lamborghini/privitello_cover.jpg'
import card2 from './lamborghini/dtm_victory_cover.jpg'
import card3 from './lamborghini/sc63_imola_cover.jpg'
import qudra from './lamborghini/motor_landing_over_01.jpg'
import sc63img from './lamborghini/gateway_motorsport.jpg'
import sc6elogo from './lamborghini/Lamborghini_20SC_2063.png'
import stimg1 from './lamborghini/motorsport_landing_s_01_m.jpg'
import stimg2 from './lamborghini/motorsport_landing_s_02.jpg'
import stimg3 from './lamborghini/s_03_gateway_motorsport_m.jpg'
import stimg4 from './lamborghini/5.jpg'
import stlogo from './lamborghini/LB_SC_SuperTROFEO_2017.jpg'
import msdimg1 from './lamborghini/7_b.jpg'
import msdimg2 from './lamborghini/motorsport_landing_s2_02.jpg'
import expimg from './lamborghini/motorsport_reverse_overview_02_m.jpg'
import partner1 from './lamborghini/roger_20dubuis.png'
import partner2 from './lamborghini/hankook.png'
import partner3 from './lamborghini/LOGO_FASTRON.png'
import partner4 from './lamborghini/BMC_air_filter3.png'
import partner5 from './lamborghini/capristo_0.png'
import partner6 from './lamborghini/HP_composites4.png'
import partner7 from './lamborghini/OMP.png'
import { useNavigate } from 'react-router-dom';
export default function Motersport() {
    const loginPath = useNavigate()
    const cardData = [{
        "img": card1,
        "data": "30 AUGUST 2023",
        "text": "SUPER TROFEO STORIES: PRIVITELIO; LIKE FATHER, LIKE SON LAMBORGHINI FOURTH DTM VICTORY"
    }, {
        "img": card2,
        "data": "24 AUGUST 2023",
        "text": "BORTOLOTTI GIVES LAMBORGHINI FOURTH DTM VICTORY OF THE SEASON IN SECOND LAUSITZRING RACE"
    }, {
        "img": card3,
        "data": "21 AUGUST 2023",
        "text": "LAMBORGHINI IRON LYNX COMPLETES HISTORIC MAIDEN TEST FOR SC63 PROTOTYPE AT IMOLA"
    }]
    const fstline = [{
        "logo": partner1
    }, {
        "logo": partner2
    }, {
        "logo": partner3
    }]
    const secline = [{
        "logo": partner4
    }, {
        "logo": partner5
    }, {
        "logo": partner6
    }, {
        "logo": partner7
    }]
    return (
        <>
            <div className="motorsport">
                <Nav />
                <div className="beyondface-1">
                    <div className="path">
                        <div className="pathText">
                            <span onClick={() => loginPath('/')}>HOME</span><b> / MOTOSPORT</b>
                        </div>
                    </div>
                    <div className="face-1text">
                        <h3 className='textHead'>LAMBORGHINI</h3>
                        <h1 className='textHead2'>SQUADRA CORSE</h1>
                        <a href="/logout" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></a>
                    </div>
                    <div className="sideText">
                        <p href="/logout" ><NextPlanOutlinedIcon className='nextIcon' fontSize='2vh' /></p>
                        <p className='Text1'>MODELS OVERVIEW</p><br />
                        <p className='Text2'>All Lamborghini Models</p>
                    </div>
                </div>
                <div className="cardgrp">
                    <div className="motorNews">
                        <h2>MOTORSPORT NEWS</h2>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {cardData.map((user) => (<>
                            <Grid item xs={4}>
                                <div class="card">
                                    <img className="card-img-top" src={user.img} alt="card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.data}</h5>
                                        <p className="card-text">{user.text}</p>
                                        <a href="/" className="btn btn-primary">READ MORE</a>

                                    </div>
                                </div>
                            </Grid>
                        </>))}
                    </Grid>
                </div>
                <div className="squadacorsa">
                    <div className="face-8">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="parallelogram-container">
                                    <div className="parallelogram">
                                        <img
                                            className="image"
                                            src={qudra}
                                            alt="Parallelogram"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h2 className='head'>SQUADCORSA CORSE</h2>
                                <p>Squadra Corse is the name of Automobili<br />
                                    Lamborghini’s motorsport department. It was<br />
                                    created to offer unparalleled support to<br />
                                    Automobili Lamborghini’s customers in the field.<br />
                                    The cars that compete in the most prestigious GT<br />
                                    championships all over the world are designed<br />
                                    and produced in-house by Squadra Corse. It also<br />
                                    organizes the Lamborghini Super Trofeo: the <br />
                                    fastest one-make championship in the world.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="sc63">
                    <div className="urus">
                        <div className="revuelto2">
                            <div className="parallelogram-container">
                                <div className="parallelogram">
                                    <img
                                        className="image"
                                        src={sc63img}
                                        alt="Parallelogram"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="revueltoText">
                            <div className="nextgrp">
                                <div className="face-8">
                                    <h2 className='head'><img src={sc6elogo} alt="" /></h2>
                                    <p>SC63 is the really first LMDh class hybrid prototype<br />
                                        designed by Lamborghini Squadra Corse. The car will<br />
                                        race in the FIA World Endurance Championship 2024<br />
                                        Hypercar class, including the 24 Hours of Le Mans,<br />
                                        and in the GTP class of the IMSA WeatherTech<br />
                                        Sports Car Championship Endurance Cup. The SC63<br />
                                        is the most complex racing car Lamborghini has ever<br />
                                        produced and follows the ‘Direzione Cor Tauri’ drawn<br />
                                        up by the car maker for the electrification of the<br />
                                        range.</p>
                                    <p class="hover-underline-animation">SC63</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="superTrophy">
                    <div className="models">
                        <div className="revuelto">
                            <div className="parallelogram-container">
                                <div className="parallelogram">
                                    <img
                                        className="image"
                                        src={stimg1}
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
                                        src={stimg2}
                                        alt="Parallelogram"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="revueltoText">
                            <div className="nextgrp">
                                <div className="face-8">
                                    <h2 className='head'><img src={stlogo} alt="" /></h2>
                                    <p>The Revuelto is the beginning of a new era for Lamborghini, who has harnessed<br />
                                        the power of hybridization technology to create the first HPEV (High Performance<br />
                                        Electrified Vehicle). Responding to the need for sustainability and powerful<br />
                                        performance, the Lamborghini Revuelto rewrites all paradigms and represents a<br />
                                        technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds<br />
                                        a new life in this futuristic automotive masterwork that delivers unparalleled<br /> performance and driving emotions.</p>
                                    <div className="face-4">
                                        <div className="links">
                                            <div className="left-links">
                                                <p class="hover-underline-animation">GT3 CHAMPIONSHIP</p><br />
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
                                                src={stimg3}
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
                                                src={stimg4}
                                                alt="Parallelogram"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="revueltoText">
                                <div className="nextgrp">
                                    <div className="face-8">
                                        <h2 className='head'>GT CUSTOMER RACING</h2>
                                        <p>In contrast with the Super Trofeo, GT3 championships are open to a range of<br />
                                            constructors. There are more than 20 Automobili Lamborghini customer teams<br />
                                            who have chosen to compete in Huracán GT3 EVO race cars. Since the Huracán<br />
                                            GT3 launch in 2015, the cars have claimed more than 40 titles on a global scale.<br />
                                            What better calling card could there be for Automobili Lamborghini on the GT<br />
                                            racing scene?</p>
                                        <div className="face-4">
                                            <div className="links">
                                                <div className="left-links">
                                                    <p class="hover-underline-animation">GT3 CHAMPIONSHIP</p><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="msmodels">
                    <div className="limited">
                        <div className="limitedgrp">
                            <div className="revueltoText">
                                <div className="nextgrp">
                                    <div className="face-8">
                                        <h2 className='head'>MOTORSPORT MODELS</h2>
                                        <p className='text'>Lamborghini Squadra Corse’s cars for motorsport customers are<br />
                                            designed and produced in-house. The construction approach used in<br />
                                            Automobili Lamborghini supercars is also applied to race models.<br />
                                            Concepts such as superior technology and attention to detail are<br />
                                            taken to peerless heights for customers who compete on race tracks<br />
                                            all over the world.</p>
                                        <p class="hover-underline-animation">RACE CARS</p><br />
                                        <p class="hover-underline-animation">ONE-OFFS</p><br />


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
                                                            src={msdimg2}
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
                                                            src={msdimg1}
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
                <div className="experience">
                    <div className="urus">
                        <div className="revuelto2">
                            <div className="parallelogram-container">
                                <div className="parallelogram">
                                    <img
                                        className="image"
                                        src={expimg}
                                        alt="Parallelogram"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="revueltoText">
                            <div className="nextgrp">
                                <div className="face-8">
                                    <h2 className='head'>EXPERIENCE</h2>
                                    <p className='text'>Become a Lamborghini Super Trofeo driver thanks to<br />
                                        the official Lamborghini Pilota driving course, or<br />
                                        enjoy the exclusive experience of a Super Trofeo race<br />
                                        weekend in the glamorous atmosphere of<br />
                                        Lamborghini Hospitality.</p>
                                    <p className="hover-underline-animation line">LAMBORGHINI EXPERIENCE</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="container">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                                <h2>PARTNERS</h2>
                            </Grid>
                            {fstline.map((user) => (<>
                                <Grid item xs={4}>
                                    <img className="card-img-top " src={user.logo} alt="card" />
                                </Grid>
                            </>))}
                            {secline.map((user) => (<>
                                <Grid item xs={3}>
                                    <img className="card-img-top sec" src={user.logo} alt="card" />
                                </Grid>
                            </>))}
                        </Grid>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
