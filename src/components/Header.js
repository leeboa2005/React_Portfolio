import React from 'react';
import { Link } from "react-router-dom";

function Header( { info }){
    return (
        <header id="header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="header__inner__logo">
          <Link to="/">BoaLee</Link>
        </div>
        <div className="header__inner__menu">
          <Link to="#">
            <span className="sr-only">menu</span>
          </Link>
        </div>
      </div>
      <div className="header__nav demo">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
          <li>
            <Link to="/youtube">Skill</Link>
          </li>
          <li>
            <Link to="/script">Script</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
      </div>
      <div className="header__info" id={info}>
        <div>
          <h4>email</h4>
          <p>
            <a href="mailto:webstoryboy@naver.com">leeboa2003@naver.com</a>
          </p>
        </div>
        <div>
          <h4>kakao</h4>
          <p>
            <a href="/">webstupids</a>
          </p>
        </div>
        <div>
          <h4>social</h4>
          <ul>
            <li>
              <a href="/">Instargram</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <a href="/">Gitbook</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    )
}

export default Header;