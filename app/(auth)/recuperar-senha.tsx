import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../constants/theme";

export default function RecuperarSenha() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: "center",
      }}
    >
      {enviado ? (
        <>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            E-mail enviado com sucesso!
          </Text>

          <Button
            title="Voltar ao Login"
            onPress={() => router.push("/login")}
            fullWidth
          />
        </>
      ) : (
        <>
          <Text style={{ marginBottom: 10 }}>
            Informe seu e-mail e enviaremos um link de recuperação
          </Text>

          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            title="Enviar"
            onPress={() => setEnviado(true)}
            fullWidth
          />

          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{ marginTop: 20, alignSelf: "center"}}
          >
            <Text style={{ color: theme.colors.primary }}>
              Voltar ao login
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}