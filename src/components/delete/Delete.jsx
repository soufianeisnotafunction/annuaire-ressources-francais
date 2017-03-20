import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Delete extends React.Component {

  deleteUser() {
  return axios.delete(`/api/ress/${this.props.id}`);
}

  render() {
    const {titre } = this.props;
    return (
        <div className="card-block mb-4">

            <h2 className='text-center'>{titre}</h2>
            <button onClick={() =>this.deleteUser()} className="btn btn-danger">Danger</button>

        </div>

    );
  }

}

export default Delete;
