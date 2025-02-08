import { router } from "expo-router";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the settings page</Text>
    </View>
  );
}
