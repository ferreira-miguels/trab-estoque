import { useMemo, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { theme } from "../../src/constants/theme";
import { PRODUTOS_MOCK } from "../../src/data/mockData";

export default function Produtos() {
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtos = PRODUTOS_MOCK;

  const categorias = ["Todos", ...new Set(produtos.map(p => p.categoria))];

  const produtosFiltrados = useMemo(() => {
    return produtos.filter(p => {
      const matchNome = p.nome.toLowerCase().includes(busca.toLowerCase());
      const matchCategoria =
        categoriaSelecionada === "Todos" ||
        p.categoria === categoriaSelecionada;

      return matchNome && matchCategoria;
    });
  }, [busca, categoriaSelecionada]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Buscar produto..."
        value={busca}
        onChangeText={setBusca}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />

      {/* CATEGORIAS */}
      <View style={styles.categorias}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategoriaSelecionada(cat)}
            style={[
              styles.chip,
              categoriaSelecionada === cat && styles.chipAtivo,
            ]}
          >
            <Text>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Nenhum produto encontrado</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.categoria}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  categorias: {
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: theme.colors.lightGray,
    padding: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipAtivo: {
    backgroundColor: theme.colors.primary,
  },
  item: {
    backgroundColor: theme.colors.white,
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
});