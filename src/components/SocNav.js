import React from 'react'
import { withPrefix } from 'gatsby-link'

// import { config } from 'config'
import Ink from 'react-ink'

// import './style.scss'
// import iconYoutube from '../../static/img/youtube.svg'
import iconFb from '../../static/img/fb.svg'
import iconInstagram from '../../static/img/instagram.svg'

const fbUrl = 'https://www.facebook.com/kniknistudio/';
const instaUrl = 'https://www.instagram.com/knikni_studio/';

class SocNav extends React.Component {
    render() {

        return (
            <div className='socnav'>

                <a href={ fbUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={iconFb }/>
                    <Ink />
                </a>
                

                <a href={ instaUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ iconInstagram }/>
                    <Ink />
                </a>
            </div>
        );
    }
}

export default SocNav
