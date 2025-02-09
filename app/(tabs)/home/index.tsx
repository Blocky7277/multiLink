import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

export default function HomeScreen() {
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset | null>(
    null
  );
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });

      if (result.canceled) return; // Handle cancelation

      const pickedFile = result.assets[0]; // Access the selected file

      setFile(pickedFile);
      console.log("File picked:", pickedFile);
    } catch (err) {
      console.error("File picking error:", err);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Upload a file</Text>
      <Button title="Pick a File" onPress={pickFile} />
      {file && (
        <Text>Picked File: {file.name ? file.name : "No file found"}</Text>
      )}
      <Button title="Send File" onPress={() => {}} disabled={!file} />
    </View>
  );
}
