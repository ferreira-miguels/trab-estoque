import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import { theme } from "../../src/constants/theme";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: "center",
      }}
    >
      {/* LOGO */}
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24 }}>📦</Text>
        </View>

        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          ProEstoque
        </Text>
        <Text style={{ color: theme.colors.gray }}>
          Bem-vindo de volta
        </Text>
      </View>

      {/* FORM */}
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() => router.push("/(auth)/recuperar-senha")}
        style={{ alignSelf: "center" }}
      >
        <Text style={{ color: theme.colors.primary }}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Button
        title="Entrar"
        fullWidth
        onPress={() => router.replace("/(tabs)")}
      />

      <TouchableOpacity
        onPress={() => router.push("/(auth)/cadastro")}
        style={{ marginTop: 20, alignItems: "center" }}
      >
        <Text>
          Não tem conta?{" "}
          <Text style={{ color: theme.colors.primary }}>
            Cadastrar
          </Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}