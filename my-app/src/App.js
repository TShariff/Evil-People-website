import logo from './logo.svg';
import './App.css';
import * as react from 'react';
import CardActionArea from './ImgMediaCard.js'
import { Stack, Grid, Paper, Box, styled } from '@mui/material';
import data from './data.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>
            Evil People
        </h1>
        <h1 className='title2'>
            Login
        </h1>
        <h1 className='title3'>
            Setting
        </h1> 
        <h1 class="wrap">
          <h1 class="search">
            <input type="text" class="searchTerm" placeholder="Search"/>
            
          </h1>
        </h1>
        <div class="line"></div>
      </header>
      <body>
        <h1 class = "imagebox">
        </h1>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="logo512.png" alt="Avatar" style={{width:"300px",height:"300px"}}/>
            </div>

            <div class="flip-card-back">
              <h1>Bad People</h1> 
              <p>Desicp</p> 
              <p>.....</p>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
