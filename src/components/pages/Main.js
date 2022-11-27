import React from "react";
import Header from "../Header";
import Loader from "../basics/Loader";
import { gsap } from "gsap";

class Main extends React.Component {
  state = {
    isLoading: true,
  };

  mainStart = () => {
    gsap.to(".main__cont__title > div:nth-child(1)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".main__cont__title > div:nth-child(2)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.6,
    });
    gsap.to(".main__cont__title > div:nth-child(3)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.9,
    });
    gsap.to(".main__cont__title > div:nth-child(4)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 1.2,
    });
    gsap.to(".header__inner", {
      duration: 0.4,
      top: 0,
      opacity: 1,
      delay: 1.5,
    });
    gsap.to(".header__info", {
      duration: 0.4,
      bottom: 0,
      opacity: 1,
      delay: 1.5,
    });
  };

  getSite = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainStart();
    }, 3000);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      this.getSite();
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div id="wrap" className="lock">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main id="main">
              <section id="mainCont">
                <div className="main__cont">
                  <div className="main__cont__title">
                    <div>Hello I'm</div>
                    <div>Front-and</div>
                    <div>Developer</div>
                    <div>Boa Lee</div>
                  </div>
                </div>
              </section>
            </main>
          </>
        )}
      </div>
    );
  }
}

export default Main;