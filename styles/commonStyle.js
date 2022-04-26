import { StyleSheet } from "react-native";
export const appStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 10
  },
  addTodoModal: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10
  },
  todoInputView: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  todoButtonView: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "45%",
    marginHorizontal: 5
  },
  scrollView: {
      width: "100%",
  },
  todoItem: {
    backgroundColor: "lightgreen",
    borderRadius: 5,
    padding: 15,
    margin: 5,
    flex: 1,
  },
  pressedItem: {
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    zIndex: 1,
    borderRadius: 5,
  }
});
