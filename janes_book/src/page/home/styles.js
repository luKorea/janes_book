import styled from 'styled-components';

const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner_img {
        width: 100%;
    }
`;
const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 15px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 10px;
    padding-right: 10px;
    background-color: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
    
`;
const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
		cursor: pointer;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom: 5px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;
const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;
const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor: pointer;
`;

export {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    TopicWrapper,
    TopicItem,
    ListItem,
    ListInfo,
    RecommendWrapper,
    RecommendItem,
    WriterWrapper,
    LoadMore,
    BackTop
}
