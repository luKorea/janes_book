import React, { PureComponent }  from 'react';
import * as Detail from './styles';
import { connect } from 'react-redux'
import {action} from './store'
import { withRouter } from 'react-router-dom'
class Details extends PureComponent {

    componentDidMount() {
        this.props.getDetailsDatas(this.props.match.params.id);
    }

    render() {
        const { title, content } = this.props;
        return (
            <Detail.DetailWrapper>
                <Detail.Header>{title}</Detail.Header>
                <Detail.Content dangerouslySetInnerHTML={{ __html: content }}></Detail.Content>
            </Detail.DetailWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});
const mapDispatchToProps = (dispatch) => ({
    getDetailsDatas (id) {
        dispatch(action.getDetailsData(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));
