import React, { useState } from "react";
import {
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  Button
} from "react-native";
import Modal from "./components/Modal";
import { appStyles } from "./styles/commonStyle";
function App() {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const addTodoHandler = () => {
    setTodo((todo) => [...todo, inputText]);
    setInputText((inputText) => "");
    setIsVisible(false)
  };
  const removeTodo = (index) => {
    const filteredList = todo.filter((_, i) => i !== index);
    setTodo((todo) => filteredList);
  };
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Button onPress={() => setIsVisible(true)} title="Add Todo" />
      <Modal 
        setInputText={setInputText} 
        addTodoHandler={addTodoHandler} 
        inputText={inputText} 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <ScrollView style={appStyles.scrollView} alwaysBounceVertical={true}>
        {todo.map((data, i) => (
          <Pressable 
            key={"todo" + i} 
            onPress={() => removeTodo(i)}
            // android_ripple={{ color: "red" }}
            style={({ pressed }) => pressed && appStyles.pressedItem}
          >
            <Text
              style={appStyles.todoItem}
            >
              {data}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
