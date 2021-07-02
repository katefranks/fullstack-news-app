import React from 'react';

class ProfileDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing : false,
      display_name : this.props.profile.display_name,
      // avatar: null,

    }

  }
}
export default ProfileDetail;
