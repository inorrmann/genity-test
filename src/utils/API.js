import axios from 'axios';

export default {
  getServices: function() {
    return axios.get('https://cors-anywhere.herokuapp.com/https://5f416e83d4b4790016fd720f.mockapi.io/users');
  }
}