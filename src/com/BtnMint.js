import React from "react"
import { connect } from 'react-redux';
import Button from "./Button"
import { log, logwarn, logerror } from "../std"

import { toast } from 'react-toastify';

import { connectWeb3, CHAINS } from "../store/web3Store";


class Mint extends React.Component {
    state = {
    }
    render() {
        return (
            <Button>
                mint</Button>
        )
    }
}

export default Mint;