import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  padding-top: 30px;
  margin-left: 15px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  display: flex;
  padding-right: 10px;
  margin-left: 18px;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .Topic-img {
    margin-right: 10px;
    height: 32px;
    width: 32px;
  }
`;
export const ListItem = styled.div`
overflow: hidden;
padding: 20px 0;
border-bottom: 1px solid #dcdcdc;
.pic{
display: block;
float: right;
width: 125px;
height: 100px;
border-radius: 10px;
}

.writer,.message,.like,.diamond{
margin-right: 15px;
color: #666;
height: 18px;
line-height: 18px;
font-size:15px;
}
.diamond{
color: red;
}
`;

export const ListInfo = styled.div`
width: 500px;
float: left;
.title {
line-height: 27px;
font-szie:18px;
font-weight: bold;
color: #333;
}
.desc{
line-height: 24px;
font-size: 13px;
color: #999999;
}
`;
export const RecommendWrapper = styled.div`
margin: 30px 0;
width: 280px;
`;
export const RecommendItem = styled.div`
wdith: 200px;
height:50px;
background: url(${(props)=>props.imgUrl});
background-size: contain;
`;
export const WriterWrapper = styled.div`
width: 278px;
border: 1px solid #dcdcdc;
border-radius: 3px;
height: 300px;
line-hright: 300px;
text-align: center;
`;
export const LoadMore = styled.div`
height: 40px;
width: 100%;
line-height: 40px;
margin: 30px 0;
background: #a5a5a5;
text-align: center;
border-radius: 20px;
`;
export const BackTop = styled.div`
position: fixed;
right:100px;
bottom: 100px;
height: 60px;
width: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
font-size: 14px;
`
