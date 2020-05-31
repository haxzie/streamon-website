const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve("src/templates/BlogTemplate/index.jsx")

  return graphql(
    `
      {
        allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/contents/blogs/.*/.*[.]md$/"}}) {
          nodes {
            id
            frontmatter {
              layout
              slug
              published
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    console.log(res.data)
    res.data.allMarkdownRemark.nodes.forEach(item => {
      if (item.frontmatter.published) {
        // pick only blogs which has published set to true
        switch (item.frontmatter.layout) {
          case "blog":
            createPage({
              path: item.frontmatter.slug,
              component: BlogTemplate,
              context: {
                id: item.id,
              },
            })
            breakl
        }
      }
    })
  })
}
