import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ addGoalHandler, isModalVisible, onCancel }) {
  const [text, setText] = useState("");

  function onAddGoal() {
    if (text.trim() === "") {
      alert("Field cannot be empty");
      return;
    }
    addGoalHandler(text);
    setText("");
    onCancel();
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goals"
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color="#862d2d" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#999" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 16,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "white",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "45%",
  },
});
