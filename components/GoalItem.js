import { Pressable, StyleSheet, Text } from "react-native";

function GoalItem({ goalData, deleteGoal }) {
  const { text, id } = goalData;

  return (
    <Pressable
      onPress={() => deleteGoal(id)}
      android_ripple={{ color: "#4b2f7f" }}
      style={({ pressed }) => [
        styles.goalItem,
        pressed && { opacity: 0.8 }, // visible feedback in Expo Go
      ]}
    >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  );
}


export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 6,
    backgroundColor: "#e4e4e4",
    padding: 10,
    borderRadius: 6,
    overflow: "hidden", // ✅ important for ripple to stay inside rounded corners
  },
  goalText: {
    color: "#333",
  },
});
