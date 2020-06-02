import React, { PureComponent } from "react";
import {RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux';
class Recommend extends PureComponent {
  render() {
    return (
        <RecommendWrapper>
            {
                this.props.list.map((item) => {
                    return (
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    )
                })
            }
        </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'RecommendList'])
})
export default connect(mapStateToProps, null)(Recommend);
