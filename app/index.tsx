import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/splash");
    }, 200);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Brought to you by Blocky7277</Text>
    </View>
  );
}
