//React Modules
import React from 'react' ;
import {render} from 'react-dom' ;

//Custom Components
import GameContainer from './components/GameContainer';

//Style Sheet
import './css/style.css';

//Mount
render(<GameContainer/>,document.getElementById("app"));