import React from 'react';
import Delete from './Delete.jsx'


class DeleteList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

  }
  componentDidMount(){

    fetch(`${window.location.origin}/api/ress`)
    .then((res) =>{
      return res.json();
    })
    .then((json) =>{
      this.setState({
        data:json
      });
    });
  }

  renderCards(){
    return this.state.data.map((el, i) => {
      return(
       <Delete key={i} titre={el.titre} id={el._id}  />
      )
    })
  }

  render() {
    let list = this.renderCards();
    return (
      <div>
          {list}
      </div>
    );
  }

}

export default DeleteList;
