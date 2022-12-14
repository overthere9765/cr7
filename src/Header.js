import React from "react"
import { log, logwarn, logerror } from "./std"
import Wallet from "./com/Wallet";
import BtnMint from "./com/BtnMint";
import BtnInvite from "./com/BtnInvite";

class Header extends React.Component {
    render() {
        return (
            <div className="header_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="logo"><a href="/"><img src="images/logo.png" /></a></div>
                        </div>
                        <div className="col-sm-9">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        {/* <a className="nav-item nav-link" href="index.html">Home</a> */}
                                        <Wallet />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="banner_section">
                    <div className="container-fluid">
                        <section className="slide-wrapper">
                            <div className="container-fluid">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                        <li data-target="#myCarousel" data-slide-to="3"></li>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row justify-content-center">
                                                {/* <div className="col-sm-2 padding_0">
                                                    <p className="mens_taital">Men Shoes</p>
                                                    <div className="page_no">0/2</div>
                                                    <p className="mens_taital_2">Men Shoes</p>
                                                </div> */}
                                                <div className="col-sm-5">
                                                    <div className="banner_taital">
                                                        <h1 className="banner_text">FOOTBALL FEVER 2022</h1>
                                                        <h1 className="mens_text"><strong>Claim Your NFT Passport to Join Now</strong></h1>
                                                        <p className="lorem_text">Share $1,000,000 Worth of Rewards and Win Exclusive Prizes
                                                        </p>
                                                        <BtnMint>Mint Now</BtnMint> &nbsp;
                                                        <BtnInvite />
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="shoes_img"><img src="images/cup.png" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;