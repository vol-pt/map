import React from 'react';
import { Dimmer, Icon, Image } from 'semantic-ui-react';
import { bind } from '../../../utils/decorators';
import PropTypes from 'prop-types';

export class DimmedImage extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    };
    state = { loading: true };

    @bind
    imageLoaded() {
        this.setState({ loading: false });
    }

    render() {
        const content = <Icon loading size="large" name="sun" />;
        const { loading } = this.state;
        const { src, height, width } = this.props;
        return (
            <Dimmer.Dimmable
                as={Image}
                src={src}
                style={{ width: width, height: height }}
                dimmer={{ active: loading, content }}
                onLoad={this.imageLoaded}
            />
        );
    }
}
