import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as Headers from './styles';
import { CSSTransition } from 'react-transition-group';
import { Action } from './store';
import { Link } from 'react-router-dom'
import { action as loginAction } from '../../page/login/store'

class Header extends PureComponent {

    getListArea = () => {
        const {focused, list, page, mousedIn, totalPage, handleMouseEnter, handleMouseLeave, handleSwitch} = this.props;
        const pageList = [];
        const newList = list.toJS();
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <Headers.SearchInfoItem href='#' key={newList[i]}>{newList[i]}</Headers.SearchInfoItem>
                )
            }

        }
        if (focused || mousedIn) {
            return (
                <Headers.SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Headers.SearchInfoTitle>
                        热门搜索
                        <Headers.SearchInfoSwitch
                            onClick={() => handleSwitch(page, totalPage)}
                        >
                            换一批
                        </Headers.SearchInfoSwitch>
                    </Headers.SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </Headers.SearchInfo>
            )
        } else {
            return null;
        }
    };

    render() {
        const { focused, handleFocus, handleBlur, login,layout } = this.props;
        return (
            <Headers.HeaderWrapper>
                <Link to='/'>
                 <Headers.Logo/>
                </Link>
                <Headers.Nav>
                    <Headers.NavItem className='left active'>首页</Headers.NavItem>
                    <Headers.NavItem className='left'>下载APP</Headers.NavItem>
                    {
                        login
                            ?
                            <Headers.NavItem
                                onClick={layout}
                                className='right'
                            >
                                退出
                            </Headers.NavItem>
                            :
                            <Link to='/login'>
                                <Headers.NavItem className='right'>登录</Headers.NavItem>
                            </Link>
                    }
                    <Headers.NavItem className='right'>
                        <span className="iconfont">&#xe65a;</span>
                    </Headers.NavItem>
                    <Headers.SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <Headers.NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={ handleFocus }
                                onBlur={ handleBlur }
                            >
                            </Headers.NavSearch>
                        </CSSTransition>
                        <span className={ focused ? 'focused iconfont' : 'iconfont' }>&#xe60f;</span>
                        { this.getListArea(focused) }
                    </Headers.SearchWrapper>
                </Headers.Nav>
                <Headers.Action>
                    <Link to='/writer'>
                    <Headers.Button className='write'>
                        <span className='iconfont'>&#xe635;</span>&nbsp;写文章
                    </Headers.Button>
                    </Link>
                    <Headers.Button>注册</Headers.Button>
                </Headers.Action>
            </Headers.HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mousedIn: state.getIn(['header', 'mousedIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus () {
            dispatch(Action.getList());
            dispatch(Action.changeFocused());
        },
        handleBlur () {
          dispatch(Action.changeBlurs());
        },
        handleMouseEnter () {
            dispatch(Action.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(Action.mouseLeave());
        },
        handleSwitch (page, totalPage) {
            if (page < totalPage)   dispatch(Action.switchPage(page + 1));
            else dispatch(Action.switchPage(1));
        },
        layout () {
            dispatch(loginAction.layout());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
