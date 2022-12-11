import React from "react"
import Mint from "./BtnMint";


class OneCollection extends React.Component {
    render() {
        return (
            <div className="collection_section">
                <div className="container">
                    <h1 className="new_text"><strong>FOOTBALL BOOTS</strong></h1>
                    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
                <div className="container">
                    <div className="racing_shoes">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="shoes-img3"><img src="https://toumumsckjb4yohyspbesiznsf2jcc6ikg6w4jp53bayziweg42q.arweave.net/m6jKMkJSQ8w4-JPCSSMtkXSRC8hRvW4l_dhBjKLENzU" /></div>
                            </div>
                            <div className="col-md-5">
                                <div className="sale_text">
                                    <strong>MINT <br /><span style={{ "color": "#FEFEFE" }}>FOOTBALL<br />SHOES</span> 
                                    </strong><br />
                                    {/* <div className="number_text"><strong>$ <span style={{ color: "#FEFEFE" }}>100</span></strong></div> */}
                                    {/* <button className="seemore">MINT</button> */}
                                    <Mint />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default OneCollection;