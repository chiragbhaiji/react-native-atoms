import { Pressable, Text } from "react-native";

export default Button = ({ label, onPress }) => {
    return <Pressable style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={onPress}>
        <Text style={{ padding: 20 }}>{label}</Text>
    </Pressable>
}

