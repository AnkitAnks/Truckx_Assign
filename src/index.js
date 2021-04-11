import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class HomePage extends React.Component
{
  render()
  {
    
    return(
      <App/>
      
    );
    
  }
}

ReactDOM.render(<HomePage/>,
  document.getElementById('root')
);

