import { Button, Text, View } from "react-native";
import { useEffect } from "react";

export default function ReceiveScreen() {
  useEffect(() => {});
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Upload a file</Text>
    </View>
  );
}
