import './Components.css'

import NavBar from './NavBar';
import Footer from './Footer';

export default function Card() {
    return (
        <div className='CardContainer'>
            <div className='CardBorder'>
                <div className='CardContainerInner'>
                    <NavBar />
                    <div className='Content'>

                        <div className="column" id='NameTag'>
                            <div className="Heading" id="Name">
                                <span>Drew Edgar</span>
                                <span id="Carat">|</span>
                            </div>
                            <div id="HRule" />
                            <span>Software Engineer / Web Developer</span>
                        </div>

                        <div className="column" id="AboutMe">
                            <span>
                            I'm a software engineer based in London, UK. I am currently attending the University of Glasgow as a Software Engineering undergraduate. 
                            <br /><br />I am experienced in developing desktop software as well as full stack web apps.
                            </span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}