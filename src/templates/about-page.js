import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section--gradient">
      <div className="container">
        <div className="section" style={{padding: '1.5rem 1.5rem'}}>
          <div className="columns">
            <div className="page-content column is-10 is-offset-1">
              <h2 className="title is-bold-light has-text-weight-semibold is-size-2">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
