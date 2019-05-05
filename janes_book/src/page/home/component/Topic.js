import React, {PureComponent} from 'react'
import {  connect } from 'react-redux'
import * as Topics from '../styles'

class Topic extends PureComponent {
    render() {
        return (
            <Topics.TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <Topics.TopicItem key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                {item.get('title')}
                            </Topics.TopicItem>
                        )
                    })
                }
            </Topics.TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
   list: state.getIn(['home', 'topicList'])
});
export default  connect(mapStateToProps, null)(Topic)
