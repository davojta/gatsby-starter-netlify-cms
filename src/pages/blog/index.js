import React from 'react'
import Link from 'gatsby-link'

export default class IndexBlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section--gradient">
        <div className="container">
          <div className="section" style={{padding: '1.5rem 1.5rem'}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-2">Последние записи</h1>
                </div>
                {posts
                  .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                  .map(({ node: post }) => (
                    <div
                      className="content"
                      style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                      key={post.id}
                    >
                      <p>
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="button is-small" to={post.fields.slug}>
                          Keep Reading →
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexBlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
