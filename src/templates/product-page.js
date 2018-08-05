import React from 'react'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'

export const ProductPageTemplate = ({
  title,
  description,
  projects = [],
  menu,
}) => (
  <section className="section--gradient">
    <div className="sec-menu">
      <aside className="menu">
        <p className="menu-label">
          Проекты
        </p>
        <ul className="menu-list">
          {menu.projects.map((menuItem) => {

            return (<li><Link to={`/portfolio/${menuItem.id}`} className="project-link">{menuItem.name}</Link></li>)
          })}
        </ul>
      </aside>
    </div>
    <div className="container">
      <div className="section" style={{padding: '1.5rem 1.5rem'}}>

        <div className="columns">
          <div className="portfolio-layout column is-10 is-offset-1">
            <div className="content">

              <h2 className="has-text-weight-semibold is-size-2">
                {title}
              </h2>
              <p>{description}</p>

              <div className="projects-list columns is-multiline">
                {projects
                  .filter(project => {
                    const { node } = project;
                    let { id } = node;
                    // id = parseInt(id);

                    const idsToShow = menu.projects.map(me => me.id)

                    console.log('idsToShow', idsToShow, id, idsToShow.includes(id));

                    return idsToShow.includes(id);
                  })
                  .map(project => {
                    const { node } = project;
                    return (
                    <div key={node.covers.size_original} className="column is-6">
                      <section className="section">
                        <p className="has-text-centered">

                          <figure className="image">
                            <img alt={`${node.name} image`} src={node.covers.size_404} />
                            <figcaption><Link to={`/portfolio/${node.id}`} className="project-link">{node.name}</Link></figcaption>
                          </figure>
                        </p>
                      </section>
                    </div>
                    );
                })}
              </div>
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

  // console.log('data', data);
  // console.log('projectId', projectId);

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
            size_404
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
        description
        menu {
          projects {
            name
            id
          }
        }
      }
    }
  }
`
