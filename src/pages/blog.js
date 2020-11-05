import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import blogM from './blog.module.scss'



const Blog = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost (sort:{fields: date, order: DESC}){
                edges{
                    node{
                        title
                        slug
                        date (formatString: "MMMM Do, YYYY")
                    }
                }
            }
    }`)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogM.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    console.log(edge)
                    return (
                        <li className={blogM.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog