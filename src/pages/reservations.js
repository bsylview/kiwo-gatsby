import React, { Component } from "react";
import Helmet from "react-helmet";
import Reservation from "../components/Reservation/Reservation";
import config from "../../data/SiteConfig";

class ReservationPage extends Component {
  render() {
    return (
      <div className="reservation-container">
        <Helmet>
          <title>{`Reservation | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/reservations/`} />
        </Helmet>
        <Reservation />
      </div>
    );
  }
}

export default ReservationPage;
