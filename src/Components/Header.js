import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import './css/home.css';

class Header extends Component {
  render() {

    if(this.props.data){
      var facebook = this.props.data.facebook;
      var instagram = this.props.data.instagram;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Espaço/Equipamentos</a></li>
            <li><a className="smoothscroll" href="#portfolio">Links Úteis</a></li>
            <li><a className="smoothscroll" href="#contact">Contato</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a target="_blank" href={facebook} className="button btn facebook-btn"><i className="fa fa-facebook fa-2x"></i>Facebook</a>
               <a target="_blank" href={instagram} className="button btn instagram-btn"><i className="fa fa-instagram fa-2x"></i>Instagram</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
