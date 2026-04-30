import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  title,
  onPress,
  loading = false,
  fullWidth = false,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.primary,
        padding: 16,
        borderRadius: theme.radius.lg,
        width: fullWidth ? "100%" : "auto",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}