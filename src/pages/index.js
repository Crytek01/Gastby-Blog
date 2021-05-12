import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Erick's thoughts</h1>
      <h4>Posts: {data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        console.log(node)
        return (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)
export default IndexPage
export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields{
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
