import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View, Text, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { uniqueKey } from "./utils/const";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [isModalVisble, setIsModalVisble] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisble(true);
  }

  function addGoalHandler(text) {
    setGoal((prevData) => [...prevData, { text, id: uniqueKey() }]);
  }

  function deleteHandle(id) {
    setGoal((currGoal) => currGoal.filter((goal) => goal.id !== id));
  }
  function onCancelHandler() {
    setIsModalVisble(false);
  }
  return (
    <View style={styles.appContainer}>
      {/* Input Section */}
      <Button title="Add New Goal" onPress={startAddGoalHandler} />
      {isModalVisble && (
        <GoalInput
          goal={goal}
          addGoalHandler={addGoalHandler}
          isModalVisble={isModalVisble}
          onCancel={onCancelHandler}
        />
      )}
      {/* Goals List */}

      {goal.length === 0 ? (
        <Text>your Goal is Empty</Text>
      ) : (
        <FlatList
          style={styles.goalContainer}
          data={goal}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem goalData={itemData.item} deleteGoal={deleteHandle} />
            );
          }}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingBottom: 8,
  },
  goalContainer: {
    flex: 1,
  },
});
