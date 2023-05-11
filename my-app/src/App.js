import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ImgMediaCard from './ImgMediaCard.js'
import { Stack, Grid } from '@mui/material';
import data from './data.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
      </body>    
    </div>
  );
}

export default App;
