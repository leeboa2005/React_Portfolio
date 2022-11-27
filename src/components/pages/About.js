import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';


function AboutText({ title, desc, image }){
    return (
        <div className="about">
            <div className="about-img">
                <img src={image} alt={title} />
            </div>
            <div className="about-txt">
                <h2>{title}</h2>
                <h2>{desc}</h2>
            </div>
        </div>
    )
}


const aboutMe = [
{
    id: '1',
    title: '상상한 무궁무진한 아이디어를 빌드하다.',
    desc: '상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 시도를 두려워하지 않는 프론트앤드 개발자가 되겠습니다.',
    image: 'img/aboutImg01.jpg'
},
{
    id: '2',
    title: 'somooth waters run deep',
    desc: '제가 가장 좋아하는 영어 격언 입니다. 거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트앤드 개발자로 일하고 싶습니다.',
    image: 'img/aboutimg02.jpg'
},
{
    id: '3',
    title: '나에게 정직하다.',
    desc: '정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다. 다름 사람에게도 정직해야 하지만 그 무엇보다 나 자신한테 더 정직해야 한다.',
    image: 'img/aboutImg03.jpg'
}
];

function About(){
    return (
        <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
                <section id="aboutCount">
                    <div className="container">
                        <WrapTitle text={["about","me"]}/>
                        <div className="about-cont">
                            {aboutMe.map((txt) => (
                                <AboutText 
                                    key = {txt.id}
                                    title={txt.title} 
                                    desc={txt.desc}
                                    image={txt.image}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </div>
    )
}

export default About;