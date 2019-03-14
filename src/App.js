import React, {Component} from 'react';
import Header from "./component/header/header";
import SortHeader from "./component/sort-header/sort-header";
import SortFooter from "./component/sort-footer/sort-footer";
import SortPreview from "./component/sort-preview/sort-preview";
import SortCards from "./component/sort-cards/sort-cards";
import SortDeck from "./component/sort-deck/sort-deck";
import {connect} from "react-redux";
import {data} from './redux/Action/data';
import {preloader} from "./redux/Action/preloader";
import {api} from './artifact_api'
import Preloader from "./component/preloader/preloader";
import PopupError from "./component/popup-error/popup-error";

class App extends Component {
  componentDidMount() {
    api().then(response => {
      return [this.props.data(response.data.card_set), this.props.preloader(false)];
    });

  }

  render() {
    const {preloaderBool, popup} = this.props;
    return (
      <React.Fragment>
        {preloaderBool ? <Preloader/> :
        <>
          {popup ? <PopupError/> : ''}
          <Header/>
          <SortHeader/>
          <div className="container">
            <SortPreview/>
            <SortCards/>
            <SortDeck/>
          </div>
          <SortFooter/>
        </>
        }
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  preloaderBool: state.preloader,
  popup: state.popupError
}),{preloader,data})(App);

