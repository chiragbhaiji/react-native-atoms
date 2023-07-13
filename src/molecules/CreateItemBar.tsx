import React, { useState } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Button, Input } from "../atoms";

export interface CreateItemBarPropsType extends ViewProps {
  onAdd: (text: string) => void;
}

export const CreateItemBar: React.FC<CreateItemBarPropsType> = ({
  onAdd,
  ...rest
}) => {
  const [value, setValue] = useState<string>("");

  const handleOnChangeText = (text: string) => {
    setValue(text);
  };

  const handleOnPressAdd = () => {
    if (value.trim() === "") return;
    onAdd(value);
    resetInput();
  };

  const resetInput = () => {
    setValue("");
  };

  return (
    <View style={[styles.container, rest.style]} {...rest}>
      <Input value={value} onChangeText={handleOnChangeText} />
      <Button
        label="Add"
        labelColor="primary"
        onPress={handleOnPressAdd}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    marginLeft: 8,
  },
});
