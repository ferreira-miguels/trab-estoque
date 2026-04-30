import { Text, TextInput, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
}: Props) {
  return (
    <View style={{ marginBottom: 16 }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: theme.colors.white,
          borderWidth: 1,
          borderColor: error ? theme.colors.error : theme.colors.lightGray,
          padding: 14,
          borderRadius: theme.radius.lg,
          fontSize: 16,
        }}
      />

      {error && (
        <Text style={{ color: theme.colors.error, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
}