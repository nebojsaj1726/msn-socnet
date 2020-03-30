import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import NavbarLanding from "./NavbarLanding";
import Footer from "./Footer";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <NavbarLanding />
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-left landing-hero">
                  <h1 className="display-3 mb-2 font-weight-bold">msn</h1>
                  <p className="lead">
                    {" "}
                    The easiest way to connect with people
                  </p>
                  <Link to="/register" className="btn btn-info btn-land px-4">
                    Sign Up
                  </Link>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
