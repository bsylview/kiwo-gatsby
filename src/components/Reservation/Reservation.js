import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import config from "../../../data/SiteConfig";
import "./Reservation.scss";

class Reservation extends Component {
  render() {
    return (
      <div className="Reservation-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="reservation-wrapper">
            <img
              src={config.resevationTablePlan}
              className="reservation-img"
              alt={config.reservationTablePlanDescription}
            />
            <CardText>
              <p className="reservation-text md-body-1">
                {config.reservationDescription}
              </p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Reservation;

