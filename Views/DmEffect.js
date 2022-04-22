import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default DmEffect = () => {
  //1. useEffect(callback)
  // --gọi callback mỗi khi components re-render
  // gọi callback sau khi component thêm element vào DOM
  // TH ít dùng
  //2. useEffect(callback, [])
  //chỉ gọi callback 1 lần sau khi components mounted
  //3. useEffect(callback, [deps])
  //callback sẽ được gọi lại mỗi khi deps thay đổi

  //---------
  //1. Callback luôn được gọi sau components mounted

  const tabs = ["posts", "comments", "albums"];
  const [posts, setPosts] = useState({});
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((e) => e.json())
      .then((rep) => {
        setPosts(rep);
      });
  }, [type]);

  //ưu tiên luồng ui chạy trước
  return (
    <View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "#EEEEEE", marginTop: 30, paddingVertical: 20 }}>
          {tabs.map((tab) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 7,
                backgroundColor: type === tab ? "#357" : null
              }}
              onPress={() => setType(tab)}
            >
              <Text style={{fontSize: 14, color: type === tab ? "white" : "black", fontWeight: "bold"}}>{tab.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={{borderWidth: 1, margin: 10, borderRadius: 8, padding: 7}}>
                <Text style={{ fontWeight: "bold"}}>{item.id}</Text>
                <Text>{item.title || item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};
