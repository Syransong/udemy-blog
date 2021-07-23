import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button 
        title="Add Post"
        onPress={addBlogPost} // equivalent to onPress={() => addBlogPost()}
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost)=> blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;