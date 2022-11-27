import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import WrapTitle from "../basics/WrapTitle";

function ScriptText({ source, title, desc1, desc2 }) {
  return (
    <div className="script__cont__wrap">
      <div className="script__cont__img">
        <iframe title={title} src={source}></iframe>
      </div>
      <div className="script__cont__txt">
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc2}</p>
      </div>
    </div>
  );
}
const scriptInfo = [
  {
    id: 1,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    source:
      "http://richclub9.dothome.co.kr/script/effectParallax/parallaxEffect-cover.html",
  },
  {
    id: 2,
    image: "../img/video02.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    source:
      "http://richclub9.dothome.co.kr/script/effectMouse/mouseEffect-cover.html",
  },
  {
    id: 3,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    source:
      "http://richclub9.dothome.co.kr/script/effectSlider/sliderEffect-cover.html",
  },
];

function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="scriptCont">
          <div className="container">
            <WrapTitle text={["Script", "book"]} />

            <div className="script__cont">
              {scriptInfo.map((text) => (
                <ScriptText
                  key={text.id}
                  source={text.source}
                  title={text.title}
                  desc1={text.desc1}
                  desc2={text.desc2}
                />
              ))}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

export default Script;