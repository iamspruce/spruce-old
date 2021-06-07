import React from 'react'
import BlogHero from '../components/BlogHero'
import { BlogList } from '../components/BlogList'
import Layout from '../components/Layout'
import Msg from '../components/Msg'
import Head from "../components/Head";


const blog = () => {
    return (
        <div className="blog-page">
        <Head title="Articles" />
        <Layout>
            <div className="section-side-pad">
        <BlogHero />
            <BlogList />
            </div>
        </Layout>
        </div>
    )
}

export default blog
