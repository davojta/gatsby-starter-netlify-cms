import React from 'react'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage,
  projects,
  menu,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="portfolio-layout column is-10 is-offset-1">
            <div className="content">
              <div className="sec-menu">
                <aside className="menu">
                  <p className="menu-label">
                    Animation
                  </p>
                  <ul className="menu-list">
                    {menu.animation.map((menuItem) => {

                      return (<li><Link to={`/products/${menuItem.id}`} className="project-link">{menuItem.name}</Link></li>)
                    })}
                  </ul>
                </aside>
              </div>
              <h2 className="has-text-weight-semibold is-size-2">
                {title}
              </h2>
              <p>{description}</p>

              <div className="projects-list columns is-multiline">
                {projects.map(project => {
                  const { node } = project;
                  return (

                  <div key={node.covers.size_original} className="column is-6">
                    <section className="section">
                      <p className="has-text-centered">

                        <figure className="image">
                          <img alt={`${node.name} image`} src={node.covers.size_original} />
                          <figcaption><Link to={`/products/${node.id}`} className="project-link">{node.name} / {node.description} </Link></figcaption>
                        </figure>
                      </p>
                    </section>
                  </div>
                  );
                })}
              </div>
              <ul>
                {projects.map((project) => {
                    return (
                      <li>{project.node.name} </li>
                    )
                })}
              </ul>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ({ data, projectId }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.allBehanceProjects;

  console.log('data', data);
  console.log('projectId', projectId);

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      main={frontmatter.main}
      menu={frontmatter.menu}
     projects={edges}
    />
  )
}

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
  allBehanceProjects(sort: { fields: [published], order: DESC }) {
       edges {
        node {
          id
          name
          description
          published
          url
          areas
          covers {
            size_original
          }
          stats {
            views
            appreciations
            comments
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        menu {
          animation {
            name
            id
          }
        }
      }
    }
  }
`
