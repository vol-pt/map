import React from 'react';
import { Button, Divider, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchResults from './searchComponentPresenter';
import { doResetSearchReducer, doSearchRequest, doSetPoly } from '../action_creators';
import { bind } from '../../../utils/decorators';

class SearchComponent extends React.Component {
    static propTypes = {
        search: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        results: PropTypes.array,
        resetReducer: PropTypes.func.isRequired,
    };

    state = {
        query: '',
        admin_level: 8,
    };

    onButtonClick = (e, { admin_level }) => {
        this.setState({ admin_level });
    };

    search_node = React.createRef();

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    @bind
    handleClick(e) {
        const { results } = this.props;
        if (!this.search_node.current.contains(e.target)) {
            if (results && results.length === 0) {
                this.setState({ query: '' });
                this.props.resetReducer();
            }
        }
    }

    @bind
    handleChange(e, { value }) {
        this.setState({ query: value });
        this.props.search(value, this.state.admin_level);
    }

    @bind
    handleLinkClick(poly) {
        this.props.resetReducer();
        this.setState({ query: '' });
        this.props.setPoly(poly);
    }

    VButton = (admin_level, text) => {
        return (
            <Button
                active={admin_level === this.state.admin_level}
                content={text}
                admin_level={admin_level}
                onClick={this.onButtonClick}
                inverted
                color="blue"
            />
        );
    };

    render() {
        const { results, isLoading, opened } = this.props;
        return (
            <div id="search_input" ref={this.search_node}>
                <Input
                    placeholder="..."
                    loading={isLoading}
                    size="huge"
                    value={this.state.query}
                    onChange={this.handleChange}
                    style={{ width: '600px' }}
                />
                <Divider />
                {this.VButton(8, 'miasto')}
                {this.VButton(7, 'gmina')}
                {this.VButton(6, 'powiat')}
                {!isLoading && results && opened ? (
                    <SearchResults results={results} handleLinkClick={this.handleLinkClick} />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.searchReducer.isLoading,
    results: state.searchReducer.results,
    opened: state.searchReducer.opened,
});

const mapDispatchToProps = dispatch => ({
    search: (query, admin_level) => dispatch(doSearchRequest(query, admin_level)),
    resetReducer: () => dispatch(doResetSearchReducer()),
    setPoly: poly => dispatch(doSetPoly(poly)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);
