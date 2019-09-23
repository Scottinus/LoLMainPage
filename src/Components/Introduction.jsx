import React, { Component } from 'react'
import ModalVideo from './Modal';


export default class Introduction extends Component{

render(){
    return(
        <div className="intro-container">
            <div className="row">
                <div className="col-5 text-intro">
                    <h1>LA VITTORIA SI CONQUISTA CON ASTUZIA E STRATEGIA</h1>
                    <p>It doesn't matter whether you want to play in <strong>Single</strong> or 
                        in <strong>Co-op</strong> with your friends: League of Legends is a frenetic 
                        and competitive action and strategy game designed for those who 
                        love difficult and satisfying challenges.</p>
                        <ModalVideo/>
                </div>
            </div>
        
        </div>
    );
}


}