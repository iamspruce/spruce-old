import React from 'react'
import { BlogList } from '../components/BlogList'
import Layout from '../components/Layout'
import Msg from '../components/Msg'

const blog = () => {
    return (
        <>
        <Msg msgTitle="#Oopsie!" msg="you seems to have stumbled on a page still under development, please check back later" icon="sad-emoji" type="warning" />
        <Layout>
            <div className="wrapper">
            <BlogList />
            </div>
        </Layout>
        </>
    )
}

export default blog
