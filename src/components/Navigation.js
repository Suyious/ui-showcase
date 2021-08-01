import React, { useState } from 'react'
import "./Navigation.css";


function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Navigation">
            <nav className="boxwidth">
                <div className="logo">
                    <h1>Showcase</h1>
                </div>
                <div className="right">
                    <div onClick={()=>setMenuOpen(!menuOpen)} className="hamburger">
                        <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.21371 1.52899C4.54629 8.46237 1.93048 19.2973 0.687511 24.313C0.359142 25.638 1.40974 27 2.77485 27H5.0197C5.93743 27 6.7374 26.3754 6.95998 25.4851L12.71 2.48507C13.0256 1.22278 12.0708 0 10.7697 0H8.15765C7.23305 0 6.4299 0.630034 6.21371 1.52899Z" fill="white"/><path d="M10.5775 24.5149L16.3275 1.51493C16.5501 0.624595 17.3501 0 18.2678 0H20.8947C22.1958 0 23.1506 1.22277 22.835 2.48507L17.085 25.4851C16.8624 26.3754 16.0624 27 15.1447 27H12.5178C11.2167 27 10.2619 25.7772 10.5775 24.5149Z" fill="white"/><path d="M20.7025 24.5149L26.4525 1.51493C26.6751 0.624595 27.4751 0 28.3928 0H31.0197C32.3208 0 33.2756 1.22277 32.96 2.48507L27.21 25.4851C26.9874 26.3754 26.1874 27 25.2697 27H22.6428C21.3417 27 20.3869 25.7772 20.7025 24.5149Z" fill="white"/></svg>
                    </div>
                    <ul className={`hamburger_menu ${menuOpen? "": "menu_close"}`}>
                        <li className="hamburger_item">Developer</li>
                        <li className="hamburger_item">About</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
