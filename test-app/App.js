import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TaskManager, Permissions, Location, MapView } from "expo";

TaskManager.defineTask("Background", ({ data: { locations }, error }) => {
  if (error) {
    // check `error.message` for more details.
    return;
  }
  console.log("Received new locations", locations);
});

export default class App extends React.Component {
  componentDidMount = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    Location.startLocationUpdatesAsync("Background", {
      accuracy: 1,
      foregroundService: {
        notificationTitle: "expo-location-demo",
        notificationBody: "Background location is running...",
        notificationColor: Colors.tintColor
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
