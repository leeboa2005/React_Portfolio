import React from "react";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";

// function ReferDetail(props) {
//   console.log(props);
//   return <span>props</span>;
// }

class ReferDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/reference");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id="wrap" className="light">
          <Header />
          <Layout>
            <section id="referCont">
              <div className="container">
                <WrapTitle text={["Reference", "Detail"]} />
                <div className="refer-cont">
                  <div>{location.state.title}</div>
                  <div>{location.state.desc}</div>
                  <div>{location.state.category}</div>
                  <div>{location.state.property}</div>
                  <div>{location.state.element}</div>
                  <div>{location.state.tag}</div>
                  <div>{location.state.version}</div>
                </div>
              </div>
            </section>
          </Layout>
          <Footer />
        </div>
      );
    }
  }
}

export default ReferDetail;