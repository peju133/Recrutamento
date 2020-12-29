import React, { useEffect, useState } from 'react';
import services from '../../configs/services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, View, TitleText, ViewPosts, PostsText, ViewPost, ViewImages, Image } from './styles';
import { FlatList, ListRenderItem } from 'react-native';
import Effects from '../../configs/LayoutsUtils/Effects';
import { heightPercentageToDP } from '../../configs/LayoutsUtils/StylesUtil';

const PageLayout: React.FC<IPages> = ({content, icon}) => {

  const [ state , setSate ] = useState<boolean>(false);

  useEffect(() => {
    //Only for first page load
  setTimeout(()=>{
    setSate(true)

  },1000)
  }, [state]);
  

  const _renderItem:ListRenderItem<IPagesContent> = ({item})=>{
    
      return(
        <View>
           <TitleText>{item.title}</TitleText>
           {(item.type == "post" && item.posts) &&
             item.posts.map((p, index)=>(
               <ViewPosts key={index}>
                 <ViewPost>
                   <Icon name={icon} size={heightPercentageToDP('3')} color="#000" style={{paddingRight:5}}/>
                   <PostsText>{p.title}</PostsText>
                 </ViewPost>
               </ViewPosts>
               ))
           }
           {(item.type == "image" && item.posts) &&
             item.posts.map((p, index)=>(
               <ViewPosts key={index}>
                 <ViewPost>
                   <Icon name={icon} size={heightPercentageToDP('3')} color="#000" style={{paddingRight:5}}/>
                   <PostsText>{p.title}</PostsText>
                 </ViewPost>
                 <ViewImages>
                 {p.content && p.content.map((i, index )=>(
                     <Image key={index} source={{uri:i.link}} resizeMode="cover" />
                     ))}
                  </ViewImages>
               </ViewPosts>
               ))
           }
         </View> 
       )
    
    };

  const _renderItemEmpty:ListRenderItem<IPagesContent> = ()=>(
    <View>
      <TitleText>Em Breve =D</TitleText>
    </View> 
  );

  return(
  <Container>
    <Effects>
     <FlatList data={content}
      keyExtractor={(item, idx)=> idx.toString()} 
      renderItem={_renderItem}
      ListEmptyComponent={_renderItemEmpty}
      />
    </Effects>
  </Container>

  ) 
}

export default PageLayout;