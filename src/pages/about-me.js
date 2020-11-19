import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import "./about-me.scss"

export default() => {
  return (
    <Layout>
      <section class="about-me-intro">
        <h1 className="about-me-title">About me</h1>
        <div className="about-me-intro-content">
          <div className="about-me-intro-inner">
            <p>Hello! I'm Rabea. I am a full-stack software engineer based in Singapore.</p>
            <p>I currently work remotely as a JavaScript developer, using React and Node. I also have experience with Ruby, TypeScript, Java and other languages.</p>
            <p>I spent three years working as a consultant at <a href="http://8thlight.com">8th Light</a> in London before making the switch to working remotely for a product company.</p>
            <p>This website is a bit of a <Link to="/blog-index/">collection of older and newer blog posts</Link> and <Link to="/til-index/">snippets of things that I learnt</Link>.</p>
          </div>
        </div>
      </section>
      <h2>My journey</h2>
      <div className="my-journey-container">
        <section className="journey-box">
          <div className="journey-box-inner">
            <h3 className="journey-box-title">Learning</h3>
            <p><span>2014</span>12 week immersive web development bootcamp at General Assembly. <a href="https://rabeameetscode.wordpress.com/">I kept this blog</a>.</p>
            <p><span>2015</span>Apprenticeship at 8th Light where I learnt how to write clean code, TDD and refactoring techniques in various programming languages. <a href="http://rabeagleissner.github.io/apprenticeship/">I kept this blog</a>.</p>
            <p><span>now</span>Learning every day! <Link to="/til-index">I'm keeping this blog</Link>.</p>
          </div>
        </section>
        <section className="journey-box">
          <div className="journey-box-inner">
            <h3 className="journey-box-title" id="speaking">Some speaking</h3>
            <p><span>2018</span>
              "Help your code lead a double life" at <a href="https://www.ministryoftesting.com/dojo/lessons/of-spies-fakes-and-friends-help-your-code-lead-a-double-life-rabea-gleissner">Ministry of Testing conference</a>, <a href="https://www.youtube.com/watch?v=HVmo90XE3PM&ab_channel=Pusher">JS Monthly meetup</a> and at Edinburgh TechMeetup <a href="https://rabeagleissner.github.io/spies-fakes-and-friends/">(Slides)</a>
            </p>
            <p><span>2016</span>
              "Intro to Progressive Web Apps" at <a href="https://www.codebar.io/meetings/monthly-nov-2016">Codebar Monthly</a> <a href="https://rabeagleissner.github.io/intro-to-pwas/#/">(Slides)</a>
            </p>
            <p><span>2016</span>
              "A Software Apprenticeship" at <a href="https://www.meetup.com/Ladies-of-Code-UK/events/229486669/">Ladies of Code meetup</a> <a href="http://rabeagleissner.github.io/apprenticeship-talk/#/">(Slides)</a>
            </p>
          </div>
        </section>
        <section className="journey-box">
          <div className="journey-box-inner">
            <h3 className="journey-box-title">Teaching and Community</h3>
            <p><span>2020</span>Mentor at <a href="https://www.thinkful.com/">Thinkful</a>, a remote coding bootcamp</p>
            <p><span>2019, 2018 and 2017</span>Organised events for <a href="https://www.coderetreat.org/">Global Day of Coderetreat</a></p>
            <p><span>2018</span>Instructor at <a href="https://www.codefirstgirls.org.uk/">Code First:Girls</a>, a coding course for women</p>
            <p><span>2018</span>Taught advanced TDD at the <a href="https://www.foundersandcoders.com"> Founders &amp; Coders</a> bootcamp</p>
            <p><span>2015&ndash;2017</span>Organiser of <a href="https://www.meetup.com/ladies-of-Code-UK/">Ladies of Code</a>, a monthly tech meetup</p>
            <p><span>2016&ndash;2017</span>Mentored apprentice developers at <a href="https://8thlight.com/"> 8th Light</a></p>
            <p><span>2015&ndash;2016</span>Coach at <a href="https://codebar.io">Codebar</a>, a weekly beginners' programming workshop for minorities in tech</p>
            <p><span>2015</span>Teaching Assistant for the front-end development evening course <a href="https://generalassemb.ly/education/front-end-web-development">General Assembly</a></p>
    </div>
  </section>
        <section className="journey-box">
          <div className="journey-box-inner">
            <h3 className="journey-box-title">Working</h3>
            <p><span>2018&ndash;now</span>Full-stack JavaScript engineer at <a href="https://www.tes.com/">Tes</a></p>
            <p><span>2015&ndash;2018</span>Software consultant at <a href="https://8thlight.com/">8th Light</a></p>
            <p><span>2015</span>Junior developer at <a href="https://www.dkfindout.com/">Dorling Kindersley</a></p>
          </div>
        </section>
</div>
  </Layout>
  )
  }
