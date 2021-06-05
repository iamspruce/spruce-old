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
        <Msg msgTitle="#Oopsie!" msg="you seems to have stumbled on a page still under development, please check back later" icon="sad-emoji" type="warning" />
        <Layout>
        <BlogHero />
            <div className="wrapper">
            <BlogList />
            </div>
        </Layout>
        </div>
    )
}

export default blog
