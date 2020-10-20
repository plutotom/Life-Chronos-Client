import React from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TopNavBar from "../NavBar/TopNavBar";

const PublicHomePage = () => {
  return (
    // var NewComponent = React.createClass({
    //   render: function() {
    // return (
    <div>
      <TopNavBar />
      <title>W3.CSS Template</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\nbody,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}\nbody {font-size: 16px;}\nimg {margin-bottom: -8px;}\n.mySlides {display: none;}\n',
        }}
      />

      {/* The App Section */}
      <div className="w3-padding-64 w3-white">
        <div className="w3-row-padding">
          <div className="w3-col l8 m6">
            <h1 className="w3-jumbo">
              <b>Life Chronos</b>
            </h1>
            <h1 className="w3-xxxlarge w3-text-green">
              <b>What is it?</b>
            </h1>
            <p>
              <span className="w3-xlarge">Know what happens in your day</span>
              After finiahsing a long day you look back on that day or week and
              ask "waht did I do?" How many times have you not been able to
              ansower this questions? This is waht Life Chronos is here to help
              with.
            </p>
            <a href="https://github.com/plutotom/Life-Chronos-Client/tags">
              <button
                className="w3-button w3-light-grey w3-padding-large w3-section w3-hide-small"
                onclick="document.getElementById('download').style.display='block'"
              >
                <i className="fa fa-download" /> Download Application
              </button>
            </a>
            <p>
              Available for{" "}
              <i className="fa fa-windows w3-xlarge w3-text-blue" />
            </p>
          </div>
          <div className="w3-col l4 m6">
            {/* photo on right of title */}
            {/* <img
              src="/w3images/img_app.jpg"
              className="w3-image w3-right w3-hide-small"
              width={335}
              height={471}
            /> */}
            <div className="w3-center w3-hide-large w3-hide-medium">
              <button
                className="w3-button w3-block w3-padding-large"
                onclick="document.getElementById('download').style.display='block'"
              >
                <i className="fa fa-download" /> Download Application
              </button>
              <img
                src="/w3images/img_app.jpg"
                className="w3-image w3-margin-top"
                width={335}
                height={471}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {/* <div id="download" className="w3-modal w3-animate-opacity">
        <div className="w3-modal-content" style={{ padding: "32px" }}>
          <div className="w3-container w3-white">
            <i
              onclick="document.getElementById('download').style.display='none'"
              className="fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge"
            />
            <h2 className="w3-wide">DOWNLOAD</h2>
            <p>Download the app in AppStore, Google Play or Microsoft Store.</p>
            <i className="fa fa-android w3-large" />{" "}
            <i className="fa fa-apple w3-large" />{" "}
            <i className="fa fa-windows w3-large" />
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
              />
            </p>
            <button
              type="button"
              className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
              onclick="document.getElementById('download').style.display='none'"
            >
              Fake Download
            </button>
          </div>
        </div>
      </div> */}
      {/* Clarity Section */}
      <div className="w3-padding-64 w3-light-grey">
        <div className="w3-row-padding">
          <div className="w3-col l4 m6">
            <img
              className="w3-image w3-round-large w3-hide-small w3-grayscale"
              src="https://a.slack-edge.com/ce67d/marketing/img/stories/singlethread/customer-story.png"
              alt="App"
              width={335}
              height={471}
            />
          </div>
          <div className="w3-col l8 m6">
            <h1 className="w3-jumbo">
              <b>Clarity</b>
            </h1>
            <h1 className="w3-xxxlarge w3-text-red">
              <b>Pixels, who?</b>
            </h1>
            <p>
              <span className="w3-xlarge">A revolution in resolution.</span>{" "}
              Sharp and clear photos with the world's best photo engine,
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="w3-container w3-padding-64 w3-dark-grey w3-center">
        <h1 className="w3-jumbo">
          <b>Features</b>
        </h1>
        {/* <p>This app is just so lorem ipsum.</p> */}
        <div className="w3-row" style={{ marginTop: "64px" }}>
          <div className="w3-col s3">
            <i className="fa fa-bolt w3-text-orange w3-jumbo" />
            <p>Fast</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-heart w3-text-red w3-jumbo" />
            <p>Loved</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-camera w3-text-yellow w3-jumbo" />
            <p>Clarity</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-battery-full w3-text-green w3-jumbo" />
            <p>Power</p>
          </div>
        </div>
        <div className="w3-row" style={{ marginTop: "64px" }}>
          <div className="w3-col s3">
            <i className="fa fa-diamond w3-text-white w3-jumbo" />
            <p>Sharp</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-cloud w3-text-blue w3-jumbo" />
            <p>Cloud</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-globe w3-text-amber w3-jumbo" />
            <p>Global</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-hdd-o w3-text-cyan w3-jumbo" />
            <p>Storage</p>
          </div>
        </div>
        <div className="w3-row" style={{ marginTop: "64px" }}>
          <div className="w3-col s3">
            <i className="fa fa-user w3-text-sand w3-jumbo" />
            <p>Safe</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-shield w3-text-orange w3-jumbo" />
            <p>Stabile</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-wifi w3-text-grey w3-jumbo" />
            <p>Connected</p>
          </div>
          <div className="w3-col s3">
            <i className="fa fa-image w3-text-pink w3-jumbo" />
            <p>HD</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-padding-32 w3-light-grey w3-center w3-xlarge">
        <div className="w3-section">
          {/* <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" /> */}
        </div>
        <p className="w3-medium">
          template by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            className="w3-hover-text-green"
          >
            w3.css
          </a>
          <br />
          created by Isaiah Proctor
        </p>
      </footer>
    </div>
  );
};
//     }
//     );
//   );
// };

export default PublicHomePage;
