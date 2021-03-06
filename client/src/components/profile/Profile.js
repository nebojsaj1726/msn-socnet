import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <ProfileHeader profile={profile} />
          <hr />
          <ProfileAbout profile={profile} />
        </div>
      );
    }
    return (
      <div className="profile">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-12 mt-3">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
