import styled from 'styled-components/native';
import { widthPercentageToDP, heightPercentageToDP } from '../../configs/LayoutsUtils/StylesUtil';


export const Container = styled.SafeAreaView`
  flex:1;
  width: 100%;
  background:rgba(245,245,245,1);
`;

export const View = styled.View`
  flex:1;
  width: 100%;
  justify-content:center;
  align-items:center;
  background:rgba(245,245,245,1);
`;

export const TitleText = styled.Text`
  width:100%;
  font-size:${heightPercentageToDP('3')}px;
  text-align:center;
  padding: 5px;
  background:rgba(245,245,245,1);
  color: #000;
`;

export const ViewPosts = styled.View`
  width: ${widthPercentageToDP('100')}px;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  background:#fff;
`;

export const ViewPost = styled.View`
  padding:10px;
  flex-direction:row;
  align-items:center;
  background:#fff;
`;

export const PostsText = styled.Text`
  font-size:${heightPercentageToDP('1.75')}px;
  color: #000;
`;

export const ViewImages = styled.View`
  flex:1;
  width:${widthPercentageToDP('100')}px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background:#fff;
  flex-wrap:wrap;
`;

export const Image = styled.Image`
  margin:10px;
  width:${widthPercentageToDP('30')}px;
  height:${heightPercentageToDP('20')}px;
`;