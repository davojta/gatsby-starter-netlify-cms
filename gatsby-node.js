const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allBehanceProjects(sort: { fields: [published], order: DESC }) {
        edges {
          node {
            id
            name
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
    }
    
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const id = edge.node.id
      const { slug } = edge.node.fields;
      if (slug === '/portfolio/') {
        console.log('products/')
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            projects: result.data.allBehanceProjects.edges,
          },
        })
        result.data.allBehanceProjects.edges.map((project) => {
          console.log('product page', `${edge.node.fields.slug}${project.node.id}/`)
          createPage({
            path: `${edge.node.fields.slug}${project.node.id}/`,
            component: path.resolve(
              `src/templates/project-page.js`
            ),
            // additional data can be passed via context
            context: {
              projectId: project.node.id,
              id,
            },
          })
        })
      } else {
        console.log('other slug', slug);
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }

    })
    const portPageContext = {
      images: [],
    };
    result.data.allBehanceProjects.edges.forEach((edge) => {
        const { node } = edge;
        const {
          name,
          url,
          covers,
        } = node;
        const { size_original } = covers;

        const image = {
          url: size_original,
          alt: name,
        };

        portPageContext.images.push(image);

        // console.log('image', image);
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
