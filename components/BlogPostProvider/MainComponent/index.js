import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from '../Context/BlogContext';
const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  console.log(data);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add Post" />
      <FlatList
        data={data}
        keyExtractor={value => value.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
export default IndexScreen;
