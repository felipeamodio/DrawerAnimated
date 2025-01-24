import { ReactNode } from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer"; //saber o progresso da abertura do menu

export function DrawerSceneWrapper({ children }: { children: ReactNode }) {
  const progress = useDrawerProgress()

  const animatedStyled = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolation.CLAMP
        ),
      },
      {
        translateX: interpolate(
            progress.value,
            [0, 1],
            [0, 200],
            Extrapolation.CLAMP
        )
      },
      {
        rotateY: interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) + "deg"
      }
    ],
    borderRadius: 20,
    overflow: "hidden"
  }));
  return <Animated.View style={[{ flex: 1 }, animatedStyled]}>{children}</Animated.View>
}

// Extrapolation.CLAMP = respeita os limites que colocamos

// [1, 0.8] = aqui quero q a escala da tela seja 1 e quando tiver aberto quero q seja 0.8 (80%)
