import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as Lists from '../styles'
import { action } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { list, getMove, articlePage } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail' + item.get('id')}>
                            <Lists.ListItem>
                                <img
                                    className='pic'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                <Lists.ListInfo>
                                    <h2 className='title'>{item.get('title')}</h2>
                                    <p className='desc'>{item.get('desc')}</p>
                                </Lists.ListInfo>
                            </Lists.ListItem>
                            </Link>
                        )
                    })
                }
                <Lists.LoadMore onClick={() => getMove(articlePage)}>阅读更多</Lists.LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
});
const mapDispatchToProps = (dispatch) => ({
    getMove (articlePage) {
        dispatch(action.getMoveList(articlePage))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List)
