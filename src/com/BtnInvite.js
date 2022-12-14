import React from "react"
import { connect } from 'react-redux';
import Mint from "./BtnMint";
import { connectWeb3, CHAINS, switchChain } from "../store/web3Store";
import { toast } from "react-toastify";


class BtnInvite extends React.Component {
    state = {
        link: document.location.origin + "?ref=",
        icon: "fa-copy"
    }
    constructor(props) {
        super(props);
        this.refValue = React.createRef();
    }

    copyLink(e) {
        const { accounts } = this.props;
        if (accounts.length < 1) {
            toast.error("Please connect wallet")
        } else {
            const textbox = this.refValue.current;
            textbox.focus()
            textbox.select();
            textbox.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textbox.value);
            console.log(textbox.value)
            this.setState({ icon: "fa-check" })
            setTimeout(() => {
                this.setState({ icon: "fa-copy" })
            }, 1500);
        }
    }

    render() {
        const { accounts } = this.props;
        console.log(accounts);
        let link = this.state.link + accounts[0];
        return (
            <>
                <button className="mBtn" onClick={this.copyLink.bind(this)}>Invite friends &nbsp;
                    <i className={"fa " + this.state.icon}></i>
                    <input type="text" value={link} style={styles} ref={this.refValue} readOnly />
                </button>
            </>
        )
    }
}

const styles = {
    visibility: "hidden",
    width: "1px",
    height: "1px"
}

const mapStateToProps = (state, ownProps) => ({
    web3: state.web3Store.web3,
    accounts: state.web3Store.accounts,
    chainId: state.web3Store.chainId
})

export default connect(mapStateToProps, {
    connectWeb3: connectWeb3,
    switchChain: switchChain,
})(BtnInvite);