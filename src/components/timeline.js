import React from 'react'; 
// import axios from 'axios';
const axios = require('axios');

let info = {}; 

function getFacts() {
  // axios.get('https://api.spacexdata.com/v4/history').then(console.log('got the data')); 
  axios({
    method: 'get',
    url: 'https://api.spacexdata.com/v4/history'
  }).then(res => {
    console.log(res.data);
    for (let i = 0; i<res.data.length; i++) {
      info[res.data[i].id] = res.data[i]; 
      // console.log(res.data[i]);
      
      let b = document.createElement('button'); 
      b.id = res.data[i].id; 
      b.style.height = '20px';
      b.style.width = '20px';
      b.style.borderRadius = '50%'; 
      b.style.backgroundColor = 'black';       
      b.className = 'factButton';
      document.getElementById('timeInfo').appendChild(b); 
      b.addEventListener('click', () => {
        console.log(info[b.id]);
      })

      document.getElementById('timeInfo').appendChild(document.createTextNode(res.data[i].title));
      document.getElementById('timeInfo').appendChild(document.createElement('p'));
    }
  }); 
}

function consoleInfo() {
  console.log(info);
}

const Timeline = () => {
  return (
    <div id='timeline'> 
      <h2>Space X Historical Timeline</h2> 
      <button onClick={getFacts}>Fetch Historical Data</button>
      <div id='timeInfo'></div>

      <button onClick={consoleInfo}>See Info in Console</button>
    </div>
  )
}

export default Timeline; 