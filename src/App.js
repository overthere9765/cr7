import React from "react"
import { log, logwarn, logerror } from "./std"
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import './App.scss';

import Signin from "./Signin";
import { connectWeb3 } from "./store/web3Store";
import 'react-toastify/dist/ReactToastify.css';
import NewCollection from "./com/NewCollection";
import OneCollection from "./com/OneCollection";
import Products from "./com/Products";


class App extends React.Component {
  state = {
  }
  render() {
    return (
      <>
        <Header />
        <NewCollection />
        <OneCollection />
        <Products />

        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  web3: state.web3Store.web3,
  accounts: state.web3Store.accounts,
  // contract: state.Contract.contract,
  // owner: state.Contract.owner,
});

export default connect(mapStateToProps, {
  connectWeb3: connectWeb3,
  // connectContract: connectContract,
})(App);