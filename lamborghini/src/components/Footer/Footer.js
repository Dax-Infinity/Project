import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InterestsIcon from '@mui/icons-material/Interests';
import TagIcon from '@mui/icons-material/Tag';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <div className="left-links">
                    <a href="/">COMPANY</a>
                    <a href="/">CAREERS</a>
                    <a href="/">CONTACT US</a>
                    <a href="/">SUSTAINABILITY</a>
                    <a href="/">MEDIA CENTER</a>
                    <a href="/">PRIVACY & LEGAL</a><br />
                    <a href="/">COOKIE SETTINGS</a>
                    <a href="/">SITEMAP</a>
                    <a href="/">NEWSLETTER</a>
                    <a href="/">ACCESSIBILITY</a>
                </div>
            </div>
            <div className="icon">
                <a href="/" ><InstagramIcon className='icon1' /></a>
                <a href="/" ><FacebookIcon className='icon1' /></a>
                <a href="/" ><YouTubeIcon className='icon1' /></a>
                <a href="/" ><TwitterIcon className='icon1' /></a>
                <a href="/" ><LinkedInIcon className='icon1' /></a>
                <a href="/" ><PinterestIcon className='icon1' /></a>
                <a href="/" ><InterestsIcon className='icon1' /></a>
                <a href="/" ><TagIcon className='icon1' /></a>
                <a href="/" ><PlayCircleOutlineIcon className='icon1' /></a>
                <a href="/" ><WhatsAppIcon className='icon1' /></a>
            </div>
            <p className='text'>*  The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are<br />
                incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p>
            <div className="subtext">
                <p className='sub'>Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
                <p className='sub'>All rights reserved. VAT no. IT 00591801204</p>
                <p className='sub'>WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.</p>
                <p className='sub'>Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and</p>
                <p className='sub'>originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.</p>
            </div>
        </div>
    )
}
