import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

const ContactsPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default ContactsPagePreview
