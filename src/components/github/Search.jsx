import React, {Component} from 'react';
import '../../App.css';

class Search extends Component{
  render(){
    return(
        <div>
          <form onSubmit={this.onSubmit.bind(this)}></form>
        </div>
    )
  }
}


export default Search;
