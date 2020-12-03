import React, { Component } from 'react';
import { Map, TileLayer as Basemap, Popup } from 'react-leaflet';
import carto from 'carto.js';
import Layer from './Layer';
import airbnb  from '../../data/airbnb';
import { MapWrapper } from './GoogleMapStyle';
import Histogram from './Histogram';
import utils from '../../utils'
const CARTO_BASEMAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png';

let numMapClicks = 0;

class GoogleMap extends Component {
  state = {
    center: [40.42, -3.7],
    zoom: 3,
    nativeMap: undefined,
    layerStyle: airbnb.style,
    hidelayers: false,
    popup: null
  }

  cartoClient = new carto.Client({ apiKey: '087c29e87e7e8fc82e70c8b1b5b72ab2eed76fbf', username: 'viswakarthikreddy' });

  componentDidMount() {
    this.setState({ nativeMap: this.nativeMap });
  }

  
  renderHistogram = () => (
    <Histogram
      client={this.cartoClient}
      source={airbnb.source}
      nativeMap={this.state.nativeMap}
      onDataChanged={this.onHistogramChanged.bind(this)}
    />
  )

  // The widget returns an histogram, so we update the layer asigning a color to each histogram bin
  onHistogramChanged(data) {
    const newStyle = utils.buildStyle(data);
    this.setState({ layerStyle: newStyle, hidelayers: false })
  }

  addPopup = (e, show) => {
    this.setState({
      popup: show ? { 
        key: numMapClicks++,
        position: e
      }: null
    })
  }


  render() {
    const { center, nativeMap, zoom, popup } = this.state;

    return (
      <MapWrapper>
        <Map center={center} zoom={zoom} style={{height: "100%" }} ref={node => { this.nativeMap = node && node.leafletElement }}>
          <Basemap attribution="" url={CARTO_BASEMAP} />

          <Layer
            source={airbnb.source}
            style={this.state.layerStyle}
            client={this.cartoClient}
            hidden={this.state.hidelayers}
            addPopup={this.addPopup}
          />
          { popup &&
            <Popup 
              key={`popup-${popup.key}`}
              position={popup.position}
              closeButton={false}
              >
              <div>
                <p>A pretty CSS3 popup. <br/> Easily customizable.</p>
                <button onClick={this.handleClick}>Click Me!</button>
              </div>
            </Popup>
          }
        </Map>

      </MapWrapper>
    );
  }


}

export default GoogleMap;
