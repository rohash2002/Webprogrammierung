import './style.css';
import React from 'react';
import logo from './img/logo.png';
import frontpage from './img/frontpage.jpg';
import logo_edited from './img/logo-edited.png';
import whatwedo from './img/whatwedo.png';
import road from './img/road.png';
import camera from './img/camera.png';
import banner from './img/banner.png';
import picture from './img/picture.png';
import lightbulb from './img/lightbulb.png';
import document from './img/document.png';
import Maria from './img/Maria.jpg';
import Joanna from './img/Joanna.jpg';
import TV from './img/TV.png';
import searchicon from './img/searchicon.png';
import monitor from './img/monitor.png';
import refresh from './img/refresh.png';
import paperplane from './img/paperplane.png';
import map from './img/map.png'

function App() {
  return (
    <Webseite />
  );
}

export default App;




const Webseite = () => {
    return (
      <div>
        
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />         
       
        <header>
          <div className="container">
            <div className="head-logo">
              <a href="#"> <img src={logo} alt="logo"/> </a>
            </div>
            
            <nav>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">PRICING</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </header>
         {/*Seite 1*/}
        <main>
          <section className="slider">
            <div className="mainpage">
              <img scr={frontpage} />
              <div className="container">
                <div className="row">
                  <h1>Website / Branding / interactive </h1>
                  <p>We create beautiful, innovative and effective handcrafted brands &amp; website.</p>
                  <button href="#">View Our Work</button>
                </div>
              </div>
            </div>
          </section>
          <section className="ethanolyellow">
            <div className="container">
              <div className="yellow">
                <div className="yellowlogo">
                  <a> <img src={logo_edited} /> </a>
                </div>
                <br />
                <br />
                <p1>ethanol is a clean and simple website designed layout for multi-purpose</p1>
                <br />
                <p2>options, you can use this free psd for your works.</p2>
              </div>
            </div>
          </section>
          <section className="separation">
            <div className="container">
              <div className="separationtext">
                <h2>WHAT WE DO WITH
                  <div className="separationyellow">
                    <strong>LOVE</strong>
                  </div>
                </h2> 
                <h5>We design and build functional and beautiful websites</h5>
              </div>
              <div className="eandline">
                <img src={whatwedo}/>
              </div>
              <section className="textandsymboles">
                <div className="characteristic">
                  <div className="characteristictop">
                    <div className="top1">
                      <div className="top1text">
                        <h4> Brand Identity </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="top1picture">
                        <img src={road} />
                      </div>
                    </div>
                    <div className="top2">
                      <div className="top2text">
                        <h4> Graphic Design </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="top2picture">
                        <img src={banner} />
                      </div>
                    </div>
                    <div className="top3">
                      <div className="top3text">
                        <h4> Illustration </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="top3picture">
                        <img src={picture} />
                      </div>
                    </div>
                  </div>
                  <div className="characteristicbottom">
                    <div className="bottom1">
                      <div className="bottom1text">
                        <h4> UI/UX Design </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="bottom1picture">
                        <img src={lightbulb} />
                      </div>
                    </div>
                    <div className="bottom2">
                      <div className="bottom2text">
                        <h4> Mobile Application </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="bottom2picture">
                        <img src={document} />
                      </div>
                    </div>
                    <div className="bottom3">
                      <div className="bottom3text">
                        <h4> Videography </h4>
                        <p>aliquam ipsum ante morbi sed ipsum mollis. Sollicitudin viverra, vel varius eget sit mollis.</p>
                      </div>
                      <div className="bottom3picture">
                        <img src={camera} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="separation">
            <div className="container">
              <div className="separationtext">
                <h2>THIS IS OUR GREAT 
                <div className="separationyellow">
                    <strong>TEAM</strong>
                  </div>
                  </h2>
                <h5>The right people in the right job</h5>
              </div>
              <div className="eandline">
                <img src={whatwedo} />
              </div>
            </div>
          </section>
          <section className="picandlink">
            <div className="container">
              <ul className="memberlist">
                <li className="member">
                  <img src={Maria} />
                  <h3>Maria Shara</h3>
                  <p>FOUNDER - DEVELOPER</p>
                  <div className="slidein">
                    <p>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucibus, adipiscing neque ut bibendum, at felis nec in.</p>
                  </div>
                  <ul className="symbol">
                    <li><a><i className="fab fa-facebook-square" /></a></li>
                    <li><a><i className="fab fa-twitter-square" /></a></li>
                    <li><a><i className="fab fa-linkedin" /></a></li>
                  </ul>
                </li>
                <li className="member">
                  <img src={Joanna} />
                  <h3>Joanna Doe</h3>
                  <p>FOUNDER - DESIGNER</p>
                  <div className="slidein">
                    <p>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucibus, adipiscing neque ut bibendum, at felis nec in.</p>
                  </div>
                  <ul className="symbol">
                    <li><a><i className="fab fa-facebook-square" /></a></li>
                    <li><a><i className="fab fa-twitter-square" /></a></li>
                    <li><a><i className="fab fa-linkedin" /></a></li>
                  </ul>
                </li>
                <li className="member">
                  <img src={Maria} />
                  <h3>Serena William</h3>
                  <p>MOBILE APPS DEVELOPER</p>
                  <div className="slidein">
                    <p>Imperdiet nulla sem fringilla, purus enim amet, nascetur faucibus, adipiscing neque ut bibendum, at felis nec in.</p>
                  </div>
                  <ul className="symbol">
                    <li><a><i className="fab fa-facebook-square" /></a></li>
                    <li><a><i className="fab fa-twitter-square" /></a></li>
                    <li><a><i className="fab fa-linkedin" /></a></li>
                  </ul>
                </li>
              </ul>    
            </div>    
          </section> 
          <section className="separation">
            <div className="container">
              <div className="separationtext">
                <h2>WELCOME WE ARE 
                <div className="separationyellow">
                    <strong>           ETHANOL</strong>
                  </div>
                </h2> 
                <h5>We design and build functional and beautiful websites</h5>
              </div>
              <div className="eandline">
                <img src={whatwedo} />
              </div>
            </div>
          </section>
          <section className="accordeon">
            <div className="container">
              <div className="listleft">
                <div className="listinput">
                  <div className="figure">
                    <i className="fa fa-desktop" />
                  </div>
                  <div className="text">
                    <h5>INTERNET COMMUNICATION</h5>
                    <p>sub title here</p>
                  </div>
                </div>
                <div className="listinput">
                  <div className="figure">
                    <i className="fas fa-pencil-alt" />
                  </div>
                  <div className="text">
                    <h5>BRANDING &amp; DEVELOPMENT</h5>
                    <p>sub title here</p>
                  </div>
                </div>
                <div className="listinput">
                  <div className="figure">
                    <i className="fas fa-video" />
                  </div>
                  <div className="text">
                    <h5>MOTION GRAPHIC</h5>
                    <p>sub title here</p>
                  </div>
                </div>
                <div className="listinput">
                  <div className="figure">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="text">
                    <h5>MOBILE APPLICATION</h5>
                    <p>sub title here</p>
                  </div>
                </div>
                <div className="listinput">
                  <div className="figure">
                    <i className="fas fa-landmark" />
                  </div>
                  <div className="text">
                    <h5>CLEAN COMPANY ANALYSIS</h5>
                    <p>sub title here</p>
                  </div>
                </div>
              </div>
              <div className="listright">
                <h3> INTERNET COMMUNICATION</h3>
                <p>Vel donec et scelerisque vestibulum. Condimentum aliquam, mollit magna velit nec, tempor cursus vitae sit aliquet neque purus. Ultrices lacus proin conubia dictum tempus, tempor pede vitae faucibus, sem auctor, molestie diam dictum aliquam. Dolor leo, ridiculus est ut cubilia nec, fermentum arcu praesent.</p>
                <img src={TV} />
              </div>
            </div>
          </section>
          <section className="separation">
            <div className="container">
              <div className="separationtext">
              <h2>OUR BEST
                <div className="separationyellow">
                    <strong>WORKFLOW</strong>
                  </div>
                </h2> 
                <h5>We design and build functional and beautiful websites</h5>
              </div>
              <div className="eandline">
                <img src={whatwedo} />
              </div>
            </div>
          </section>
          <section className="process">
            <div className="container">
              <div className="lineleft" />
              <div className="process1">
                <div className="pic">
                  <img src={searchicon} />
                </div>
                <div className="text">
                  <h4>RESEARCH</h4>
                  <p>Ultrices lacus proin conubia dictum tempus, tempor pede vitae faucibus, sem auctor, molestie diam dictum aliquam. Dolor leo, ridiculus est ut cubilia nec, fermentum arcu praesent, pede etiam. Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio.</p>
                </div>
              </div>
              <div className="process1">
                <div className="pic">
                  <img src={monitor} />
                </div>
                <div className="text">
                  <h4>DESIGN &amp; DEVELOP</h4>
                  <p>Ultrices lacus proin conubia dictum tempus, tempor pede vitae faucibus, sem auctor, molestie diam dictum aliquam. Dolor leo, ridiculus est ut cubilia nec, fermentum arcu praesent, pede etiam. Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio.</p>
                </div>
              </div>
              <div className="process1">
                <div className="pic">
                  <img src={refresh} />
                </div>
                <div className="text">
                  <h4>REFINE</h4>
                  <p>Ultrices lacus proin conubia dictum tempus, tempor pede vitae faucibus, sem auctor, molestie diam dictum aliquam. Dolor leo, ridiculus est ut cubilia nec, fermentum arcu praesent, pede etiam. Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio.</p>
                </div>
              </div>
              <div className="process1">
                <div className="pic">
                  <img src={paperplane} />
                </div>
                <div className="text">
                  <h4>LAUNCH</h4>
                  <p>Ultrices lacus proin conubia dictum tempus, tempor pede vitae faucibus, sem auctor, molestie diam dictum aliquam. Dolor leo, ridiculus est ut cubilia nec, fermentum arcu praesent, pede etiam. Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio.</p>
                </div>
              </div>
            </div> 
          </section>
          <section className="separation">
            <div className="container">
              <div className="separationtext">
              <h2>FEEL FREE TO 
                <div className="separationyellow">
                    <strong> CONTACT US</strong>
                  </div>
                </h2> 
                <h5>We design and build functional and beautiful websites</h5>
              </div>
              <div className="eandline">
                <img src={whatwedo} />
              </div>
            </div>
          </section>
          <section className="map">
            <div className="container">
                    <img src={map} className="mapview"/>
                  </div>
          </section>
          <section className="contactdetails">
            <div className="container">
              <div className="lineup">
                <div className="detail1">
                  <div className="detailicon">
                    <i className="fa fa-map-marker" />
                    <h4>Jl. Pahlawan VII No.247-D Sidoarjo-Surabaya-Indonesia</h4>
                  </div>
                </div>
                <div className="detail1">
                  <div className="detailicon">
                    <i className="fa fa-envelope-o" />
                    <h4>rudhisasmito@gmail.com</h4>
                  </div>
                </div>
                <div className="detail1">
                  <div className="detailicon">
                    <i className="fa fa-phone" />
                    <h4>+613 0000 0000</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contactformular">
            <div className="container">
              <div className="row">
                <div className="formularsquares">
                  <div className="yourname">
                    <input type="text" autoComplete="off" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                  </div>
                </div>
                <div className="formularsquares">
                  <div className="yourname">
                    <input type="text" autoComplete="off" className="form-control" placeholder="Your Email *" id="name" required data-validation-required-message="Please enter your name." />
                  </div>
                </div>
                <div className="formularsquares">
                  <div className="yourname">
                    <input type="text" autoComplete="off" className="form-control" placeholder="Your Phone No. *" id="name" required data-validation-required-message="Please enter your name." />
                  </div>
                </div>
                <div className="bigsquare">
                  <textarea className="form-control" rows={7} placeholder="Your Message..." id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                </div>
                <button className="buttonformular">View Our Work</button>
              </div>
            </div>
          </section>
          <section className="end">
            <div className="container">
              2015 ethanol. All rights reserved. Theme by Rudhi Sasmito.
              <ul className="listsocialicon">
                <li>
                  <a><i className="fa fa-facebook" /></a>
                </li>
                <li>
                  <a><i className="fa fa-twitter" /></a>
                </li>
                <li>
                  <a><i className="fa fa-linkedin" /></a>
                </li>
                <li>
                  <a><i className="fa fa-pinterest" /></a>
                </li>
                <li>
                  <a><i className="fa fa-google-plus" /></a>
                </li>
                <li>
                  <a><i className="fa fa-dribbble" /></a>
                </li>
                <li>
                  <a><i className="fa fa-linkedin" /></a>
                </li>
              </ul>
            </div>    
          </section>
        </main>
      </div>
    );
  };
