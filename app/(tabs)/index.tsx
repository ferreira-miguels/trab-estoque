import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { theme } from "../../src/constants/theme";
import { PRODUTOS_MOCK } from "../../src/data/mockData";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const produtos = PRODUTOS_MOCK;

  function onRefresh() {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }

  function getStatus(estoque: number) {
    if (estoque === 0) return "Sem estoque";
    if (estoque <= 2) return "Baixo";
    return "Normal";
  }

  function getColor(status: string) {
    if (status === "Sem estoque") return theme.colors.error;
    if (status === "Baixo") return "#FFA500";
    return theme.colors.success;
  }

  const resumo = [
    { label: "Total", valor: produtos.length },
    { label: "Alertas", valor: produtos.filter(p => p.estoque <= 2).length },
    { label: "Categorias", valor: new Set(produtos.map(p => p.categoria)).size },
    { label: "Valor", valor: produtos.reduce((acc, p) => acc + p.preco, 0) },
  ];

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 40 }}
      alwaysBounceVertical={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={
        <View>
          <Text style={styles.titulo}>Olá, Miguel 👋</Text>
          <Text style={styles.subtitulo}>
            {new Date().toLocaleDateString()}
          </Text>

          {/* CARDS */}
          <View style={styles.grid}>
            {resumo.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardValor}>{item.valor}</Text>
                <Text style={styles.cardLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* ALERTAS */}
          {produtos.some(p => p.estoque <= 2) && (
            <Text style={styles.alerta}>
              ⚠️ Produtos com estoque baixo!
            </Text>
          )}

          <Text style={styles.listaTitulo}>Produtos</Text>
        </View>
      }
      renderItem={({ item }) => {
        const status = getStatus(item.estoque);

        return (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>

            <View
              style={[
                styles.badge,
                { backgroundColor: getColor(status) },
              ]}
            >
              <Text style={styles.badgeText}>{status}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  subtitulo: {
    marginLeft: 20,
    color: theme.colors.gray,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardValor: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardLabel: {
    color: theme.colors.gray,
  },
  alerta: {
    color: theme.colors.error,
    marginLeft: 20,
    marginBottom: 10,
  },
  listaTitulo: {
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    backgroundColor: theme.colors.white,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nome: {
    fontWeight: "bold",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
  },
});