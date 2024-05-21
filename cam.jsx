import React, { useEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
  useCodeScanner,
} from "react-native-vision-camera";
import { ActivityIndicator } from "react-native";

export default function Cam() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log('Code scanned:', codes)
      if (codes && codes.length > 0 && codes[0] && codes[0].value) {
        const scannedCode = codes[0].value;
        console.log(`Scanned code: ${scannedCode}`);
        //verificar se é uma URL
        if (scannedCode.startsWith('http')) {
          Linking.openURL(scannedCode).catch(err =>
            console.error('Failed to open URL', err)
          );
        } else {
          console.log('Scaned code is not a URL');
        }
      } else {
        console.log('No codes scanned');
      }
    }
  
});

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }

  console.log("has permission: ", hasPermission);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>camera</Text>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
