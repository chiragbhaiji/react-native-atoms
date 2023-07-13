import { PressableProps } from "react-native";
import { colors } from "../constants";

export interface ButtonPropsType extends PressableProps {
  label: string;
  labelColor: keyof typeof colors;
}
