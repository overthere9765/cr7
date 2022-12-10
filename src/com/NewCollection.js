import React from "react"

class NewCollection extends React.Component {
    render() {
        return (
            <div className="layout_padding collection_section">
                <div className="container">
                    <h1 className="new_text"><strong>New Collection</strong></h1>
                    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <div className="collection_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-img">
                                    <button className="new_bt">New</button>
                                    <div className="shoes-img"><img src="images/shoes-img1.png" /></div>
                                    <p className="sport_text">Men Sports</p>
                                    <div className="dolar_text">$<strong style={{ "color": "#f12a47" }}>90</strong> </div>
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
                                <button className="seemore_bt">See More</button>
                                <img src="images/logowc2022.png" style={{ width: 200 }} />

                            </div>
                            <div className="col-md-6">
                                <div className="about-img2">
                                    <div className="shoes-img2"><img src="images/shoes-img2.png" /></div>
                                    <p className="sport_text">Men Sports</p>
                                    <div className="dolar_text">$<strong style={{ "color": "#f12a47" }}>90</strong> </div>
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