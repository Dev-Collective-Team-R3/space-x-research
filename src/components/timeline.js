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
    document.getElementById('timeInfo').innerHTML = '' 
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
        let date = JSON.stringify(info[b.id].event_date_utc);
        date = date.slice(1,date.length - 1); 
        let article = ''; 
        if (JSON.stringify(info[b.id].links.article) !== 'null') {
          article = JSON.stringify(info[b.id].links.article);
          article = article.slice(1,article.length-1); 
        }
        let details = JSON.stringify(info[b.id].details); 
        details = details.slice(1,details.length-1);
        if (article) document.getElementById('timeInfo').innerHTML = date + '<a href=' + article + '>' + article + '</a>' + details;
        else document.getElementById('timeInfo').innerHTML = date + details;
        document.getElementById('timeInfo').style.justifyContent = 'center'; 
      })
      document.getElementById('timeInfo').appendChild(document.createTextNode(res.data[i].title));
    }
  }); 
}

function consoleInfo() {
  console.log(info);
}

const Timeline = () => {
  return (
    <div style={{backgroundColor: 'green', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20vh'}}>
      <h1>Space X Historical Timeline</h1> 
      <button style={{border: 'solid black 2px'}} onClick={getFacts}>Fetch Historical Data</button>
      <button style={{ border: 'solid black 2px' }} onClick={consoleInfo}>See Info in Console</button>

    <div id='timeline' style={{height: '100vh', width: '100vw', backgroundColor: 'green', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '15vh'}}> 
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'green', objectFit: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}} id='timeInfo'> </div>
    </div>
    </div>
  )
}

export default Timeline; 