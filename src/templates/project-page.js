import React from 'react'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

import Link from 'gatsby-link'

export const ProjectPageTemplate = ({
  project,
  projectId,
  menu,
}) => (
  <section className="section--gradient">
    <div className="container">
      <div className="section" style={{padding: '1.5rem 1.5rem'}}>
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
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-2">
                {project.name}
              </h2>
              <div className="behance-text">
                {project.modules
                  .filter(({type}) => type === 'text' || type === 'embed' || type === 'image')
                  .map((module) => {
                    const { type } = module;
                    if (type === 'text') {
                      return (
                        <div>
                          <div dangerouslySetInnerHTML={{__html: module.text}}></div>
                        </div>
                      );
                    } else if (type === 'embed') {
                      return (
                        <div className="embed">
                          <div dangerouslySetInnerHTML={{__html: module.embed}}></div>
                        </div>
                      );
                    } else if (type === 'image') {
                      return (
                        <div className="image" style={{maxWidth: 640 }}>
                          <img src={module.src} width={module.width} height={module.height}/>
                        </div>
                      );
                    }
                  })
                  .filter(e => e)
                }
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ({ data }) => {
  const { edges } = data.allBehanceProjects;
  const project = edges[0].node;

  const productsPage = data.allMarkdownRemark;
  const { menu } = productsPage.edges[0].node.frontmatter

  console.log('data', data);
  console.log('project', project);

  return (
    <ProjectPageTemplate
      project={project}
      menu={menu}
    />
  )
}

export const projectPageQuery = graphql`
query ProjectPage($projectId: String!) {
    allMarkdownRemark(filter: {fields: {slug: {eq: "/portfolio/"}}}) {
      edges {
        node {
          frontmatter {
            menu {
              projects {
                name
                id
              }
            }
          }
        }
      }
    }
    allBehanceProjects(filter: {id: {eq: $projectId}}, sort: { fields: [published], order: DESC }) {
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
          modules {
            id,
            type,
            src,
            text,
            text_plain,
            width,
            height,
            full_bleed,
            alignment,
            caption_alignment,
            embed
          }
        }
      }
    }
  }
`
