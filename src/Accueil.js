import React, { Component } from 'react';

class Accueil extends Component {
  render() {
    return (
      <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom:"1rem", marginTop:'1rem'}}>
       <p>Hello World</p>
      </div>
    );
  }
}

export default Accueil;