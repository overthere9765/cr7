import React from "react"
import Mint from "./BtnMint";

class NewCollection extends React.Component {
    render() {
        return (
            <div className="layout_padding collection_section">
                <div className="container">
                    <h1 className="new_text"><strong>New Collection</strong></h1>
                    <p className="consectetur_text">Each CR7 Mystery Box contains one of two mystery box-exclusive Ronaldo NFT statues.</p>
                    <div className="collection_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-img">
                                    <button className="new_bt">New</button>
                                    <div className="shoes-img"><img src="images/basic-nft.png" /></div>
                                    <p className="sport_text">The First Step (Basic)</p>
                                    <Mint />
                                    {/* <div className="dolar_text">$<strong style={{ "color": "#f12a47" }}>90</strong> </div> */}
                                    <div className="star_icon">
                                        <ul>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <button className="seemore_bt">See More</button> */}
                                <img src="images/logowc2022.png" style={{ width: 200 }} />

                            </div>
                            <div className="col-md-6">
                                <div className="about-img2">
                                    <div className="shoes-img2"><img src="images/common-nft.png" /></div>
                                    <p className="sport_text">Men Sports</p>
                                    <Mint />
                                    {/* <div className="dolar_text">$<strong style={{ "color": "#f12a47" }}>90</strong> </div> */}
                                    <div className="star_icon">
                                        <ul>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                            <li><a href="#"><img src="images/star-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCollection;