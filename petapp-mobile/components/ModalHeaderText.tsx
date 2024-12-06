import { Text } from "react-native";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  return (
    <Text
      style={{
        fontFamily: "mon-sb",
        fontSize: 18,
        color: Colors.dark,
        paddingHorizontal: 14,
      }}
    />
  );
};

export default ModalHeaderText;
