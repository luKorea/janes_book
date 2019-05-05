import React, { PureComponent } from 'react';
import List from './component/List'
import Topic from './component/Topic'
import Writer from './component/Writer'
import Recommed from './component/Recommed'
import * as Homes from './styles';
import { connect } from 'react-redux'
import { action } from './store'

class Home extends PureComponent {

    handleTop () {
        window.scrollTo(0, 0)
    }
    addEventListener () {
        window.addEventListener("scroll", this.props.changeScrollTop)
    }

    render() {
        return (
            <Homes.HomeWrapper>
                <Homes.HomeLeft>
                    <img
                        className='banner_img'
                        src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""
                    />
                    <Topic />
                    <List />
                </Homes.HomeLeft>
                <Homes.HomeRight>
                    <Recommed />
                    <Writer />
                </Homes.HomeRight>
                {
                    this.props.showTop ? <Homes.BackTop onClick={this.handleTop.bind(this)}>回到顶部</Homes.BackTop> :null
                }
            </Homes.HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeInfo();
        this.addEventListener();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTop);
    }
}
const mapStateToProps = (state) => ({
   showTop: state.getIn(['home', 'showTop'])
});
const mapDispatchToProps = (dispatch) => ({
    getHomeInfo () {
        dispatch(action.getHomeList());
    },
    changeScrollTop () {
        if (document.documentElement.scrollTop > 400) dispatch(action.changeScroll(true));
        else dispatch(action.changeScroll(false));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
