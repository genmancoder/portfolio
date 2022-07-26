import React from 'react'

const About = () => {
  return (
    <div className="Static-div">
        <div>
        <h1 className='page-title'>about (<span className="text-primary">johnrpx</span>)</h1>
        <div className="About-primary--links">
            <ul>
                <li><a href="https://www.linkedin.com/in/john-ray-paulin-75077051/">Linkedin</a></li>
                <li><a href="https://github.com/genmancoder">Github</a></li>
                <li><a href="#">Download my CV</a></li>
            </ul>
            <p className="mt-10">Frontend developer heavily influenced by storytelling, interactions, and UX. Addicted to music, visual arts, and games.
From Philippines, based in Mati City.</p>
            <div className="text-secondary text-added-padding">
                <p>// he/him</p>
                <p>// Frontend Developer</p>
            </div>
            <div className="About-primary--skills">
                    <h2>Main Skills</h2>
                    <div className="About-primary-skills--list text-secondary">
                        <div>
                            <span>Frontend</span>
                            <span>UI/UX</span>
                            <span>Web app architecture</span>
                        </div>
                        <div>
                            <span>Javascript, CSS, HTML</span>
                            <span>ReactJS, PHP, Java, MySQL</span>
                        </div>
                        <div>
                            <span>Photoshop, Sketchup</span>
                            <span>Figma</span>
                        </div>
                        <div>
                            <span>Tailwind CSS, Bootstrap</span>
                            <span>Filezilla, GTM, GoogleAds</span>
                            <span>Shopify, Wordpress, Github CICD</span>
                        </div>
                    </div>
            </div>
            <div className="About-primary--skills">
                    <h2>Experience</h2>
                    <div className="About-primary-skills--list text-secondary">
                        <div>
                            <span className='text-experience-header'>Part-time Lecturer</span>
                            <span>@ Dorsu</span>
                            <span>* current</span>
                        </div>
                        <div>
                            <span className='text-experience-header'>Web Developer</span>
                            <span>@ Xent, LLC</span>
                            <span>2016-2021</span>
                        </div>
                        <div>
                            <span className='text-experience-header'>Graphics Designer</span>
                            <span>@ Digital Refresh</span>
                            <span>2015-2016</span>
                        </div>
                        <div>
                            <span className='text-experience-header'>Web & Mobile Developer</span>
                            <span>@ Mobi Media Associates</span>
                            <span>2012-2016</span>
                        </div>                        
                    </div>
            </div>
        </div>
        </div>
    
    </div>
  )
}

export default About