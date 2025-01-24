import { StyleSheet, Text, View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";
import { AntDesign } from "@expo/vector-icons"

const item = [
  {key: 1, text: "Você recebeu uma nova mensagem"},
  {key: 2, text: "🎉 Parabéns, você ganhou\n 1000 pontos"},
  {key: 3, text: "Nova atualização do app"},
  {key: 4, text: "Você recebeu uma nova mensagem"},
  {key: 5, text: `🚨 Lembrete 🚨 não esqueça de\npostar seu conteúdo`},
]

export default function Notifications() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.userName}>Notificações</Text>

          <DrawerToggleButton />
        </View>

        <View style={{marginTop: 40}}>
          {item.map((item) => (
            <View style={styles.containerNotifications} key={item.key}>
            <AntDesign name="message1" size={22} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
          ))}
        </View>
      </View>
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
  userName: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  containerNotifications: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    borderColor: "grey",
    marginBottom: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500"
  },
});
