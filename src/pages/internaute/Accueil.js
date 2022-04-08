import React, {Component} from 'react'
import InterHeader from '../../layout/internaute/InterHeader';
import Interfooter from '../../layout/internaute/InterFooter';
import InterMain from '../../layout/internaute/InterMain';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <InterHeader/> 
        <br/>
        <InterMain/>
        <Interfooter/>
      </div>
    )
  }
}
