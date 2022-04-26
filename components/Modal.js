import { TextInput, Button, View, Modal as ReactModal } from "react-native";
import { appStyles } from "../styles/commonStyle";
const Modal = ({ setInputText, addTodoHandler, inputText,isVisible, setIsVisible }) => {
    return (
        <ReactModal
            visible={isVisible}
            animationType="slide"
        >
            <View style={appStyles.addTodoModal}>
                <View style={appStyles.todoInputView}>
                    <TextInput
                        placeholder="Add Todos"
                        onChangeText={setInputText}
                        value={inputText}
                    />
                </View>
                <View style={appStyles.todoButtonView}>
                    <View style={appStyles.button}>
                        <Button title="Cancel" onPress={() => setIsVisible(false)} />
                    </View>
                    <View style={appStyles.button}>
                        <Button title="Add" onPress={addTodoHandler} />
                    </View>
                </View>
            </View>
        </ReactModal>
    );
}

export default Modal;