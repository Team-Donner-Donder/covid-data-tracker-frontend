import React, { Component } from "react";
// import Image from 'react-bootstrap/Image'


export default class About extends Component {
  render() {
    return (
      <div className="about">

      <div className="side-by-side">
      <div className="half-width">
        <h2>Michael Milsap</h2>
        <h5>Hello everyone, my name is Michael Milsap, I was an electronics technician in the navy. I like collaborative problem solving and the feeling of being on a team and have been influenced by friends of mine that found their path into the software industry. I've done my fair share of self teaching python,javascript and struggled to get over that initial hump and take it to the next step. With my technical background and experience fixing digital and analog systems that I can combine the two worlds</h5>
        </div>
          <div className="headshot" id="milsap"></div>
        </div>

        <div className="side-by-side">
          <div className="headshot" id="matt"></div>
          <div className="half-width">
            <h2>Matt Miguel</h2>
            <h5>My name is Matt Miguel, and I am a software developer with experience in Customer Service and Home Pricing based in Seattle, WA. My job and life experience has taught me to never underestimate the ability of a team working together to achieve the same goal. That’s what brought me to programming, the collaborative work involved to develop a meaningful product. I studied hospitality and have held customer facing roles for most of my career. I made the shift to home pricing, working closely with data analytics and machine learning, in early 2020 to better flex my skills as an analytical person. I was most recently a Pricing Analyst in the acquisitions team for Zillow Group but have made the transition to Code Fellows fulltime. During my spare time I like to snowboard, cook meals for others, as well as spend time with my wife and 2 dogs. My goal is to become a full stack developer with a tight knit team where I can use my customer centric aptitudes to help better their online experience and general accessibly.
            </h5>
          </div>
        </div>

        <div className="side-by-side">
          <div className="half-width">
            <h2>Chris Harden</h2>
            <h5>I’m Chris Harden and currently a student at CodeFellows, learning full stack development with a focus on JavaScript. I have almost a decade of professional tech experience. I first began working on computer systems and radios while serving in the Marines for 5 years. My next tech role was for a Fortune 100 gas & oil company, performing as an Infrastructure Specialist. This transition to code development will help me into an ever-growing career with limitless possibilities.</h5>
          </div>
          <div className="headshot" id="chris"></div>
        </div>

        <div className="side-by-side">
          <div className="headshot" id="jacob"></div>
          <div className="half-width">
        <h2>Jacob Choi</h2>
        <h5>Hello, my name is Jacob Choi and I am a student at Code Fellows currently in the 301 course. I recently medically retired out of the US Army after 8 years in the service. I decided to learn Software Development to pursue a career in becoming a web developer as I was curious and heavily influenced by couple of friends who are currently software engineers. My ideal environment to use these skills are at a tech company that are influenced by fashion and those that strive to be the global platform for luxury fashion, connecting creators, curators and consumers. As for my previous experiences, I believe my experiences of being in the military will allow me to have the discipline as well as the soft skills that’ll boost my new career in tech.</h5>
        </div>
        </div>

        <div className="side-by-side">
          <div className="half-width">
            <h2>Beau Hibbert</h2>
            <h5>Hello, my name is Beau Hibbert and I attended Washington State University to study economics and eventually got a job in the banking industry. After working for a couple of years, I came to the conclusion that the banking industry was not the right fit for me and decided that becoming a software engineer would be a smart move as it's one of the fastest growing industries. I really enjoy doing research and applying that newfound knowledge to increase performance in myself and others. With my background in economics and now software engineering, I am looking towards finding a role where I can continue to develop my skills and solve complex problems.
            </h5>
          </div>
          <div className="headshot" id="beau" ></div>
        </div>
      </div>
    );
  }
}

