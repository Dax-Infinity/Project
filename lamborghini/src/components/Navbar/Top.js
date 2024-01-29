import React from 'react'
import logo from './lamborghini/logo.png';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import leeterL from './lamborghini/letter-l.png'
import CloseIcon from '@mui/icons-material/Close';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Nav() {
    const loginPath = useNavigate();
    const btnText = [{
        text: 'MODEL'
    }, {
        text: 'DEALERS'
    }, {
        text: 'MUSEUM AND PRODUCTION LINE'
    }, {
        text: 'AD PERSONAM'
    }, {
        text: 'WORK WITH US'
    }, {
        text: 'COMPANY AND HISTORY'
    }, {
        text: 'MASTERPIECES'
    }]
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <span onClick={() => loginPath('/')}><img className='logoimg' src={logo} alt="logo" /></span>
                </div>
                <div className="links">
                    <div className="left-links">
                        <p onClick={() => loginPath('/models')}>MODELS</p>
                        <p onClick={() => loginPath('/beyond')}>BEYOND</p>
                        <p onClick={() => loginPath('/ownership')}>OWNERSHIP</p>
                        <p onClick={() => loginPath('/motorsport')}>MOTORSPORT</p>
                    </div>
                    <div className="right-links">
                        <p href="/">DEALERSHIPS</p>
                        <p href="/">MUSEUM</p>
                        <p href="/">STORE</p>
                    </div>
                    <div className="icon">
                        <QuestionAnswerIcon className='icon1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" />
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">ASK ME</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="close"></button>
                            </div>
                            <hr className='canvasline' />
                            <div class="offcanvas-body">
                                <div className="textField1">
                                    <img src={leeterL} alt="L" />
                                    <p className='text'>I'm Lamborghini's first Artificial Intelligence, how can I help you?</p>
                                </div>
                                <div className="textField1">
                                    <img src={leeterL} alt="L" />
                                    <p className='text'>You can choose one of the suggestions or ask me a question</p>
                                </div>
                                {btnText.map((a) => (<button className="canvas-btn">{a.text}</button>))}
                            </div>
                            <div class="offcanvas-header bottom">
                                <div className="line">
                                    <hr className='bottomline' />
                                </div>
                                <input type="text" placeholder='Hey, ask me something…' />
                                <p>Send</p>
                            </div>
                        </div>
                        <SearchOutlinedIcon className='icon1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" />
                        <div class="offcanvas offcanvas-top search" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                            <div class="offcanvas-header">
                                <h3>LAMBORGHINI</h3>
                                <div className="closer">
                                    <span>ClOSE SEARCH<CloseIcon data-bs-dismiss="offcanvas" aria-label="Close" className='close-btn' /></span>
                                </div>
                            </div>
                            <div class="offcanvas-body">
                                <div className="face-1text">
                                    <h1 className='textHead2'>SEARCH IN THE <br />WEBSITE</h1>
                                </div>
                                <div className="inputs">
                                    <Input placeholder="Search on Lamborghini.com" />
                                    <p>SEARCH</p>
                                </div>
                            </div>
                        </div>
                        <MenuOutlinedIcon className='icon1' />

                    </div>
                </div>
            </nav>
        </>

    )
}
