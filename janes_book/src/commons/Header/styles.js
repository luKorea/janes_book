import styled from 'styled-components';
import LogoPic from '../../statics/img/nav-logo.png';

    const HeaderWrapper = styled.div`
        position: relative;
        height: 56px;
        min-height: 50px;
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        z-index: 1;
    `;
    const Logo = styled.div`
        position: absolute;
        height: 56px;
        width: 100px;
        display: block;
        top: 0;
        left: 50px;
        background: url(${LogoPic});
        background-size: contain;
    `;
    const Nav = styled.div`
        height: 100%;
        width: 960px;
        padding-right: 70px;
        box-sizing: border-box;
        margin: 0 auto;
    `;
    const NavItem = styled.div`
        line-height: 56px;
        padding: 0 15px;
        font-size: 17px;
        color: #333;
        cursor: pointer;
        &.left { float: left; }
        &.right { float: right; color: #969696; }
        &.active { color: #ea6f5a }
    `;
    const SearchWrapper = styled.div`
        float: left;
        position: relative;
        .iconfont {
             position: absolute;
             right: 5px;
             bottom: 5px;
             width: 30px;
             line-height: 30px;
             text-align: center;
             &.focused {
                background-color: #777;
                border-radius: 15px;
             }
        }
    `;
    const SearchInfo = styled.div`
         position: absolute;
         left: 0;
         top: 56px;
         width: 300px;
         padding: 0 20px;
         border: 1px solid #ccc;
         box-shadow: 0 0 8px rgba(0,0,0,.2);
         background-color: #fff;
    `;
    const SearchInfoTitle = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 14px;
        color: #969696;
    `;
    const SearchInfoSwitch = styled.span`
        float: right;
        font-size: 13px;
        cursor: pointer;
    `;
    const SearchInfoItem = styled.a`
        display: block;
        float: left;
        line-height: 20px;
        padding: 0 6px;
        margin-right: 10px;
        margin-bottom: 15px;
        font-size: 12px;
        border: 1px solid #ddd;
        color: #787878;
        border-radius: 2px;
    `;

    const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
        height: 38px;
        width: 240px;
        line-height: 38px;
        margin-top: 9px;
        margin-left: 10px;
        padding: 0 40px 0 20px;
        border: 1px solid #eee;
        border-radius: 19px;
        font-size: 16px;
        background-color: #eee;
        cursor: pointer;
        &:: placeholder { color: #999; }
        &.focused {
            width: 300px;
        }
        &.slide-enter {
            transition: all .2s ease-out;
        }
        &.slide-enter-active {
            width: 300px;
        }
        &.slide-exit {
            transition: all .2s ease-out;
        }
        &.slide-exit-active {
            width: 240px;
        }
    `;
    const Action = styled.div`
        position: absolute;
        top:0;
        right: 0;
        cursor: pointer;
        height: 56px;
    `;
    const Button = styled.div`
        float: right;
        line-height: 38px;
        border-radius: 19px;
        padding: 0 20px;
        margin-top: 9px;
        margin-right: 10px;
        border: 1px solid #ec6149;
        color: #ec6149;
        font-size: 14px;
        cursor: pointer;
         &.write {
            background-color: #ea6f5a;
             color: white;
        }
    `;
    export {
        HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        Action,
        Button,
        SearchWrapper,
        SearchInfo,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoItem
    }
