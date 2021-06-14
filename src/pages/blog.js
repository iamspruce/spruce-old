import React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';


const blog = () => {
    let title = "Articles: Written Accross The Web";
    let desc = "A list of curated articles both on this site and accross the web...";
    return (
        <div className="page">
        <SEO title="Blog" image="https://iamspruce.dev/img/spruce.webp" />
        <Layout>
        <PageHero title={`${title}`} desc={`${desc}`} />
        </Layout>
        </div>
    )
}

export default blog
