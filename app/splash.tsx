import { router } from "expo-router";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Splash() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)");
    }, 400);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>the creator of ooga booga beats</Text>
    </View>
  );
}
