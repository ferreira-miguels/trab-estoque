import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../constants/theme";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [loading, setLoading] = useState(false);

  const erro = senha !== confirmar ? "As senhas não coincidem" : "";

  function handleCadastro() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Criar Conta
      </Text>

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Input
        placeholder="Confirmar senha"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
        error={erro}
      />

      <Button
        title="Criar Conta"
        loading={loading}
        onPress={handleCadastro}
        fullWidth
      />

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{ marginTop: 20, alignSelf: "center"}}
      >
        <Text style={{ color: theme.colors.primary }}>
          Já tenho conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}