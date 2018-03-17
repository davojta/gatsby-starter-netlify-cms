import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div className="page-wrapper">
    <Helmet title="1 Knikni студия дизайна 1" />
    <Navbar />
    <div className={''}>{children()}<div class="push"></div></div>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p> Copyright © kniknistudio 2018</p>
                <p>
                    With help from <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
                </p>
            </div>
        </div>
    </footer>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
