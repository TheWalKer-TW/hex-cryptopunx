// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';


import "./Navbar.css"
import { isMobile } from 'react-device-detect';
// import NavItems from './NavItems'
import SocialMedia from './SocialMedia'
// import Metamask from "../../assets/logos/metamask-fox.svg"
// import { init, handleMetaMask } from "../Metamask/Metamask"




const Navbar = ({}) => {
 
    return (
        <div>
            {!isMobile &&
                <div className='navbar'>
                    <div className='nav-social-media'>
                        {SocialMedia.socialmedia.map((mediaitem) => (
                            <a id={mediaitem.name} href={mediaitem.url} target="_blank" rel="noreferrer">
                                {(mediaitem.iconType === 'fontawesome') &&
                                    <FontAwesomeIcon icon={mediaitem.icon} className='nav-icon'></FontAwesomeIcon>
                                }
                                {(mediaitem.iconType === 'svg') &&
                                    <img src={mediaitem.icon} alt={mediaitem.name} className='nav-icon'/>
                                }
                            </a>
                        ))}
                    </div>
                </div>
            }
            {isMobile &&
                <div className='navbar_M'>
                    <div className='nav-social-media_M'>
                        {SocialMedia.socialmedia.map((mediaitem) => (
                            <a id={mediaitem.name} href={mediaitem.url} target="_blank" rel="noreferrer">
                                {(mediaitem.iconType === 'fontawesome') &&
                                    <FontAwesomeIcon icon={mediaitem.icon} className='nav-icon_M'></FontAwesomeIcon>
                                }
                                {(mediaitem.iconType === 'svg') &&
                                    <img src={mediaitem.icon} alt={mediaitem.name} className='nav-icon_M' />
                                }
                            </a>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar
