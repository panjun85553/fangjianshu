import styled from 'styled-components';
import logoPic from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
export const HeaderWrapper = styled.div`
position: relative;
height: 56px;
border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
position: absolute;
height: 56px;
top: 0;
left: 0;
background: url(${logoPic});
background-size: contain; 
display: block;
width: 100px;
`
export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0 auto;
padding-right: 70px;
box-sizing: border-box;
`
export const NavItem = styled.div`
line-height: 56px;
font-size: 17px;
padding:0 15px;
color: #333;
&.right{
float: right;
color: #969696;
}
&.left{
float: left;
}
&.active{
color: #ea6f5a;
}
`
export const SearchWrapper = styled.div`
z-index: 1;
position: relative;
float: left;
.zoom {
position: absolute;
right: 5px;
bottom: 5px;
width: 30px;
line-height: 30px;
border-radius: 15px;
text-align: center;
&.focused {
background: #777;
color: #fff;
}
`
export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
background: #ffffff;
box-shadow: 0 0 8px rgba(0,0,0,.2)
`

export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`

export const SearchInfoSwitch = styled.div`
float: right;
cursor: pointer;
font-size: 13px;
.spin{
font-size: 12px;
margin-right: 2px;
display: block;
float: left;
transition: all 0.2s ease-in;
transform-origin: center center;
}
`

export const SearchInfoItem = styled.a`
display: block;
line-height: 20px;
font-size: 12px;
float: left;
padding: 0 5px;
margin-right: 10px;
margin-bottom: 15px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
box-sizing: border-box;
padding: 0 30px 0 20px;
margin-left: 20px;
width: 160px;
height: 38px;
border: none;
margin-top: 9px;
outline: none;
border-radius: 19px;
background: #eee;
color: #777;
&.slide-enter{
transition: all .2s ease-out;
}
&.slide-enter-active{
width: 240px;
}
&.slide.exit{
transition: all 0.2s ease-out;
}
&.slide.exit.active{
width: 160px;
}
&::placeholder {color: #999}
&.focused{
width: 240px;
}
`
export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
height: 50px
`
export const Button = styled.button`
float: right;
margin-top: 9px;
line-height: 38px;
border-radius: 19px;
border: 1px solid #ec6149;
margin-right: 20px;
font-size: 14px;
padding: 0 20px;
&.reg{
color: #ec6149;
}
&.writting{
color: #fff;
display: flex;
background: #ec6149; 
}
`
