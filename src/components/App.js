import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './github/Profile';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      username: 'aatha81',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  getUserData(){

    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

    getUserRepos(){

      $.ajax({
        url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({userRepos: data});
        }.bind(this),
        error: function(xhr, status, err){
          this.setState({username: null});
          alert(err);
        }.bind(this)
      });
    }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '8fd47a17e9c652cadd00',
  clientSecret: '9c8101937d9f0e77133ac7dafe560a05a4da4e9e'
}

export default App;
