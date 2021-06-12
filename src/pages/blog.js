import React from 'react'
import BlogHero from '../components/BlogHero'
import { BlogList } from '../components/BlogList'
import Layout from '../components/Layout'
import SEO from '../components/SEO';


const blog = () => {
    return (
        <div className="blog-page">
            <SEO title="Blog" image="https://iamspruce.dev/img/spruce.webp" />
        <Layout>
        <BlogHero />
        <div className="section-side-pad">
            <BlogList />
            </div>
        </Layout>
        </div>
    )
}

export default blog
