import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--6">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <div>
                <span className="about-conv-p">  
                  <h3><FontIcon>person</FontIcon> {config.userDescription}</h3>
                </span>
              </div>

              <div>
                <span className="about-conv-v">
                  <h3>I need to make a reservation <FontIcon>person</FontIcon> </h3>
                </span>
              </div>   
              
              <div>
                <span className="about-conv-p">
                  <h3><FontIcon>person</FontIcon> Great! Here is the <a href="tel:+123456789">phone number</a> </h3>
                </span>
              </div>   

              <div>
                <span className="about-conv-v">
                  <h3>Awesome! Thanks! <FontIcon>person</FontIcon> </h3>
                </span>
              </div>   
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;