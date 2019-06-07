import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Apogee Media - Digital Media Consulting"
                    meta={[
                        { name: 'description', content: 'Apogee Media Digital Marketing Consulting' },
                        { name: 'keywords', content: 'Apogee Media, Digial Marketing, Web Design, Applciation Development, E-Commerce Consulting, Web App Integrations' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Web Design</h3>
                                <p>Progressive Sites for the new Web</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Cloud Integrations</h3>
                                <p>Go serverless with your applications</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Project Management</h3>
                                <p>Coordinate your next move with us</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Tracking and Integrations</h3>
                                <p>Understand your audience</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>E-Commerce Consulting</h3>
                                <p>Find new aveneues for your business</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Application Development</h3>
                                <p>Tools to scale your ambitions</p>
                            </header>
                            <Link to="#contact" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Why use Apogee Media?</h2>
                            </header>
                            <p> We are an organization focused on bringing results and setting up everyone for success in the new age of advertising. There are many paths to take along the road of Digital Marketing. Apogee will take you further than you have ever gone before.</p>
                            <ul className="actions">
                                {/* <li><Link to="/" className="button next">Get Started</Link></li> */}
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex