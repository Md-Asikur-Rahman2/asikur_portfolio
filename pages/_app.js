import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import store from "@/Store";
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeAction from "../actions/ThemeAction";
import ChatProvider from "@/message/Context/ChatProvider";
import { SessionProvider } from "next-auth/react";
import Mouse from "./mouse";
import Dropdown from "@/components/Navbar/Dropdown";
import { loadUser } from "@/actions/userAction";
import axios from "axios";
export default function App({ Component, pageProps }) {
  const themeReducer = store.getState("Theme").Theme;
  const user = store.getState().user?.user;

  const [loading, setLoading] = useState(false);

  const [user1, setUser] = useState();
  const fetchUser = async () => {
    const { data } = await axios.get("/api/auth/userDetails");

    setUser(data.user);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    store.dispatch(ThemeAction.setMode(themeClass));

    store.dispatch(ThemeAction.setColor(colorClass));
    let btnmove = document.querySelector(".common-btn");
    console.log("btnmove", btnmove);
    btnmove?.addEventListener("mousemove", (e) => {
      let rect = e.target?.getBoundingClientRect();
      let x = e.clientX - rect.left;
      btnmove.style.setProperty("--x", x + "deg");
    });
    store.dispatch(loadUser());
  }, [store.dispatch]);
  useEffect(() => {
    const buttons = document.querySelectorAll(".common-btn");
    buttons.forEach((button) => {
      button?.addEventListener("mousemove", handleMouseMove);
      return () => button?.removeEventListener("mousemove", handleMouseMove);
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    e.target.style.setProperty("--x", x + "deg");
  };
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActive(true);
    }
  }, [active]);

  return (
    <>
      <Head>
        <link
          rel="icon"
         
          href="https://res.cloudinary.com/asikur/image/upload/v1687495721/icon1_gg7gxo.png"
        />
        <meta
          name="keywords"
          content="asikur, md asikur, md ashikur, ashikur, asikur.com, ashikur.com, asikur rahman, md ashikur rahman, asikur.vercel.app, asikur vercel, asikur personal portfolio, asikur portfolio, asikur blog"
        />
        <meta
          name="keywords"
          content="asikur, asikur next.js, ashikur, react, node.js, next.js, mern, graphql, typescript, css, html, design, development, education, career, experience, skills, portfolio, blog, facebook/asikur, fiverr/asikur, freelancer/asikur, github/asikur, asikur/github"
        />
        <meta
          name="keywords"
          content="Asikur Portfolio and Blog Website, Asikur Portfolio Website, Asikur's Website, Asikur's Portfolio and Blog, Asikur's Personal Website, Asikur's Blog, Ashikur Portfolio Website, Ashikur's Portfolio and Blog, Ashikur Personal Website"
        />
        <meta
          name="keywords"
          content="asikur portfolio website,asikur portfolio, portfolio website, blog, personal blog, web developer, software engineer, developer, engineer, computer science, technology, programming, coding, js, next.js, react, node.js, graphql, typescript, css, html, design, development, education, career, experience, skills, asikur/home, asikur/portfolio, asikur/blog, asikur/account, google, google bird, ai, artificial intelligence, web development, web design, best website, showcase, popular website, facebook authentication, google authentication, full-stack, full-stack developer, next.js, asikur portfolio and blog website, mern, asikur personal portfolio and blog website,asikur blog website"
        />
        <meta name="author" content="Md Asikur Rahman, Asikur, Ashikur" />
        <meta
          name="site_name"
          content="Asikur Portfolio Website |asikur portfolio and blog website"
        />

        <meta property="og:url" content="https://asikur.vercel.app" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/asikur/image/upload/v1680710238/Screenshot_233_hbs1dm.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SessionProvider session={pageProps.session}>
        <div className={`${themeReducer.mode} ${themeReducer.color}`}>
          {/* {loading ? <Loading /> : */}
          {/* <ChatProvider> */}

          <Provider store={store}>
            <Dropdown
              user={user ? user : user1}
              notification={user?.notification ? user.notification : 0}
              messagenotification={
                user?.messagenotification ? user.messagenotification : 0
              }
            />
            {/* <Navbar /> */} <Component {...pageProps} />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Provider>

          {/* </ChatProvider> */}
          {/* } */}
          <ScrollToTop />
          {!active && <Mouse />}
        </div>
      </SessionProvider>
    </>
  );
}