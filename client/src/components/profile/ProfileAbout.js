import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>

            {isEmpty(profile.bio) ? (
              <div className="text-center">
                <p className="lead">{firstName} does not have a bio</p>
              </div>
            ) : (
              <div className="text-center">
                <p className="lead">{profile.bio}</p>
              </div>
            )}

            {isEmpty(profile.education) ? (
              <div className="text-center"></div>
            ) : (
              <div className="text-center">
                <hr />
                <h3 className="text-center text-info">Education</h3>
                <p className="lead">
                  <span>{profile.education}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
