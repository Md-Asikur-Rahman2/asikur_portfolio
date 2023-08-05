import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import "./about.css";
import Tilt from "react-parallax-tilt";
const About = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBtn(true);
    }
  }, [btn]);
  return (
    <>
      {/* <Head>
        <title>Asikur -About</title>
      </Head> */}
      {btn ? (
        <div className="about">
          <div className="container">
            <Tilt>
              {" "}
              <motion.h1
                className="main-title"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scaleX: 1.2 }}
              >
                {" "}
                <span>Who</span> I AM<span>?</span>
              </motion.h1>
            </Tilt>

            <div className="about-main">
              <motion.div
                className="about-img"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.06 }}
              >
                {/* <img src="/blob1.svg" alt="" className="asik-blob" /> */}
                <Tilt>
                  <img src="/about1.png" alt="" className="asik-img" />
                </Tilt>{" "}
                {/*asik6.jpg*/}
              </motion.div>
              <Tilt>
                <div className="about-content">
                  <p>Hi I Am.</p>
                  <h3>Md Asikur Rahman</h3>
                  <h1>
                    <span>Full-Stack</span> Web Developer <span>MERN</span>
                  </h1>

                  <p>
                    {/* I am a computer science graduate and a full stack developer with over 3
                years of experience. Learning computer technologies and acquiring new
                skills is my passion. */}
                    I am an experienced full-stack web developer mern and professional
                    tutor. I have worked in multiple technologies to build websites and
                    web applications. For me as professional web developer, learning new
                    technologies in web is my passion. I have worked in node js , react js
                    and now in MONGODB. Right now, I am working as MERN stack engineer on
                    different platform. Just to inform you, JavaScript is my love. I love
                    to code in JavaScript, build projects in JavaScript and tutor in
                    JavaScript.
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      ) : (
        <div className="about">
          <div className="container">
            <Tilt>
              {" "}
              <motion.h1
                className="main-title"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scaleX: 1.2 }}
              >
                <span>Who</span> I AM<span>?</span>
              </motion.h1>
            </Tilt>
            <div className="about-main">
              <motion.div
                className="about-img"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  opacity: { duration: 1 },
                  x: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {/* <img src="/blob1.svg" alt="" className="asik-blob" /> */}
                <Tilt>
                  {" "}
                  <img src="/about1.png" alt="" className="asik-img" />
                </Tilt>{" "}
                {/*asik6.jpg*/}
              </motion.div>

              <motion.div
                className="about-content"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  opacity: { duration: 1 },
                  x: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeOut",
                }}
              >
                <Tilt>
                  <p>Hi I Am.</p>
                  <h3>Md Asikur Rahman</h3>
                  <h1>
                    <span>Full-Stack</span> Web Developer <span>MERN</span>
                  </h1>

                  <p>
                    {/* I am a computer science graduate and a full stack developer with over 3
                years of experience. Learning computer technologies and acquiring new
                skills is my passion. */}
                    I am an experienced full-stack web developer mern and professional
                    tutor. I have worked in multiple technologies to build websites and
                    web applications. For me as professional web developer, learning new
                    technologies in web is my passion. I have worked in node js , react js
                    and now in MONGODB. Right now, I am working as MERN stack engineer on
                    different platform. Just to inform you, JavaScript is my love. I love
                    to code in JavaScript, build projects in JavaScript and tutor in
                    JavaScript.
                  </p>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
