import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const item = [
  {key: 1, text: "Robótica", image: image1},
  {key: 2, text: "Programação", image: image2},
  {key: 3, text: "Consultoria", image: image3},
  {key: 4, text: "I.A.", image: image4},
]

export default function Index() {
  return (
    <DrawerSceneWrapper>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://github.com/felipeamodio.png" }}
            style={styles.image}
          />

          <View style={styles.user}>
            <Text style={styles.saudation}>Olá,</Text>
            <Text style={styles.userName}>Felipe Amodio</Text>
          </View>

          <DrawerToggleButton />
        </View>

        {item.map((item) => (
          <View style={styles.containerBanner} key={item.key}>
          <Text style={styles.title}>{item.text}</Text>
          <Image source={item.image} style={styles.banner} />
        </View>
        ))}
      </View>
      </ScrollView>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingTop: 32,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  user: {
    flex: 1,
    justifyContent: "center",
  },
  saudation: {
    fontSize: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
  },
  containerBanner: {
    marginTop: 50
  },
  banner: {
    width: "100%",
    height: 156,
    borderRadius: 20
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500"
  }
});
