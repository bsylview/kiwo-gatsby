import React from "react";
import {StyleRoot} from 'radium';
import Coverflow from 'react-coverflow';

class RestaurantImages extends React.Component {
  getImageList() {
    const imageList = [];
    this.props.images.forEach(image => {
      imageList.push(
          {
              url: image.url,
              alt: image.name
          });
    });
    return imageList;
  }

  render() {
    const imageList = this.getImageList();
    return (
      <div className="md-cell--middle">
        <StyleRoot>
          <Coverflow 
            displayQuantityOfSide={2} 
            navigation 
            enableHeading 
            active={0} 
            media={{
                '@media (max-width: 900px)': {
                    width: '280px',
                    height: '200px'
                },
                '@media (min-width: 900px)': {
                    width: '960px',
                    height: '300px'
                }
                }}
          >
            {imageList.map(image =>
              <img alt={image.alt} src={image.url} />
            )}
          </Coverflow>    
        </StyleRoot>        
      </div>
    );
  }
}

export default RestaurantImages;
