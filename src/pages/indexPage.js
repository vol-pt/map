import React from 'react';
import { Grid } from 'semantic-ui-react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import bbox from '@turf/bbox';

class M extends React.Component {
    componentDidMount() {
        this.map = this.mapInstance.leafletElement;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps) {
            if (prevProps.currentPoly !== this.props.currentPoly) {
                const b = bbox(this.props.currentPoly);
                const corner1 = [b[1], b[0]];
                const corner2 = [b[3], b[2]];
                this.map.flyToBounds([corner1, corner2]);
            }
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Row centered>
                    <Map
                        ref={e => {
                            this.mapInstance = e;
                        }}
                        boundsOptions={{ padding: [50, 50] }}
                        maxBounds={[[48.94, 13.89], [54.99, 24.13]]}
                        bounds={[[48.94, 13.89], [54.99, 24.13]]}
                        zoom={13}
                        minZoom={6}
                        useFlyTo={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <GeoJSON key={uuid()} data={this.props.currentPoly} />
                    </Map>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    currentPoly: state.searchReducer.currentPoly || [],
});

export default connect(mapStateToProps)(M);
