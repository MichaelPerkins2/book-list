import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}


let btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    });
});

export default App;
