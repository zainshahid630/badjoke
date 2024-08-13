import './header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import badjoke from '../../assets/Badjoke.png'

const Header = () => {
    const [sidebarDisplay, setSidebarDisplay] = useState('')
    const [sidebarWidth, setSidebarWidth] = useState('')

    const sidebarHandle = (key) => {
        switch (key) {
            case 1:
                setSidebarDisplay('sidebar_display')
                setTimeout(() => {
                    setSidebarWidth('sidebar_width')
                }, 300);
                break;
            case 2:
                setSidebarWidth('')
                setTimeout(() => {
                    setSidebarDisplay('')
                }, 300);
                break;
            default:
                break;
        }
    }

    return (
        <div className='header'>
            <div className="wrapper full">
                <div className="header-cont">
                    <div className="hamburger"
                        onClick={() => sidebarHandle(1)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="header-left">
                        <div className="header-logo">
                            <img src={badjoke} alt="" />
                        </div>
                    </div>
                    <div className={`header-right ${sidebarDisplay}`}>
                        <div className={`header-links ${sidebarWidth}`}>
                            <div className="hamburger hamburger_"
                                onClick={() => sidebarHandle(2)}>
                                <div></div>
                                <div></div>
                            </div>
                            <Link>Home</Link>
                            <Link>Features</Link>
                            <Link>Tokenomics</Link>
                            <Link>Roadmap</Link>
                        
                        </div>
                        
                    </div>
                    <button className='header-btn'>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Header