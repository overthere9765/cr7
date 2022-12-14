import React from "react"
import Mint from "./BtnMint";
import shoes from "../assets/shoes.json"

class Products extends React.Component {
    render() {
        return (
            <div className="collectipn_section_3 layuot_padding">
                <div className="collection_section layout_padding">
                    <div className="container">
                        <h1 className="new_text"><strong>New Arrivals Products</strong></h1>
                        <p className="consectetur_text"> </p>
                    </div>
                </div>

                <div className="layout_padding gallery_section">
                    <div className="container">
                        <div className="row">
                            {shoes.map(v => (
                                <div className="col-sm-4">
                                    <div className="best_shoes">
                                        <div className="shoes_icon"><img src={v.src} /></div>
                                        <div className="star_text">
                                            <div className="left_part">
                                                {/* <p className="best_text">#{v.id}</p> */}
                                                <ul>
                                                    <li><a><img src="images/star-icon.png" /></a></li>
                                                    <li><a><img src="images/star-icon.png" /></a></li>
                                                    <li><a><img src="images/star-icon.png" /></a></li>
                                                    <li><a><img src="images/star-icon.png" /></a></li>
                                                    <li><a><img src="images/star-icon.png" /></a></li>
                                                </ul> &nbsp;&nbsp;<Mint /> 
                                            </div>
                                            <div className="right_part">
                                                <div className="shoes_price"><span style={{ "color": "#ffc107" }}>0.9$</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="buy_now_bt">
                            <button className="buy_text">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;