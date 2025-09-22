import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User as LaunchItem,
  Avatar as PatchImage,
  Name as MissionName,
  Bio as Details,
  ProfileButton,
  ProfileButtonText,
} from "../styles";

const STORAGE_KEY = "@launches:saved";

export default class Main extends Component {
  state = {
    launches: [], // só os lançamentos que o usuário adicionou
    loading: false,
    searchTerm: "",
  };

  async componentDidMount() {
    await this.loadSavedLaunches();
  }

  loadSavedLaunches = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) {
        const launches = JSON.parse(raw);
        this.setState({ launches });
      }
    } catch (err) {
      console.warn("Erro ao carregar lançamentos salvos:", err);
    }
  };

  saveLaunchesToStorage = async (launches) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(launches));
    } catch (err) {
      console.warn("Erro ao salvar lançamentos:", err);
    }
  };

  handleAddLaunch = async () => {
    const { searchTerm, launches } = this.state;
    const term = searchTerm.trim();
    if (!term) {
      return Alert.alert("Aviso", "Digite o nome do lançamento para adicionar.");
    }

    this.setState({ loading: true });
    try {
      // Tenta buscar na API por nome (usa POST /launches/query)
      const body = {
        query: { name: { $regex: `^${term}$`, $options: "i" } }, // correspondência exata/insensível a maiúsculas
        options: { sort: { date_unix: -1 }, limit: 5 },
      };

      const res = await api.post("/launches/query", body);

      const docs = res?.data?.docs || [];
      if (docs.length === 0) {
        // Não encontrou: avisa e não adiciona
        Alert.alert("Aviso", "Este lançamento não existe");
        this.setState({ loading: false });
        return;
      }

      // Se encontrou múltiplos, escolhemos o primeiro (ou você pode abrir um modal para o usuário escolher)
      const found = docs[0];

      // Verifica duplicata (por id)
      if (launches.find((l) => l.id === found.id)) {
        Alert.alert("Já existe", "Esse lançamento já foi adicionado.");
        this.setState({ loading: false });
        return;
      }

      const newList = [found, ...launches];
      this.setState({ launches: newList, searchTerm: "" });
      await this.saveLaunchesToStorage(newList);
      Keyboard.dismiss();
    } catch (err) {
      console.error("Erro ao buscar lançamento na API:", err);
      Alert.alert("Erro", "Ocorreu um erro ao consultar a API. Tente novamente.");
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemove = async (id) => {
    Alert.alert(
      "Remover",
      "Deseja remover este lançamento?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: async () => {
            const newList = this.state.launches.filter((l) => l.id !== id);
            this.setState({ launches: newList });
            await this.saveLaunchesToStorage(newList);
          },
        },
      ],
      { cancelable: true }
    );
  };

  render() {
    const { launches, loading, searchTerm } = this.state;

    return (
      <Container style={localStyles.container}>
        {/* Lista só com os lançamentos adicionados */}
        <List
          data={launches}
          keyExtractor={(item) => String(item.id)}
          // recarrega do storage (não faz fetch global da API)
          onRefresh={this.loadSavedLaunches}
          refreshing={loading}
          renderItem={({ item }) => (
            <LaunchItem>
              {item.links?.patch?.small ? (
                <PatchImage source={{ uri: item.links.patch.small }} />
              ) : (
                <PatchImage source={{ uri: "https://via.placeholder.com/64" }} />
              )}

              <MissionName>{item.name || "Sem nome"}</MissionName>
              <Details numberOfLines={2}>
                {item.date_local} • {item.rocket} • {item.launchpad}
              </Details>

              <View style={{ flexDirection: "row" }}>
                <ProfileButton
                  onPress={() => {
                    this.props.navigation.navigate("user", { launch: item });
                  }}
                >
                  <ProfileButtonText>Detalhes</ProfileButtonText>
                </ProfileButton>

                <ProfileButton
                  onPress={() => this.handleRemove(item.id)}
                  style={{ marginLeft: 8 }}
                >
                  <ProfileButtonText>Remover</ProfileButtonText>
                </ProfileButton>
              </View>
            </LaunchItem>
          )}
          contentContainerStyle={{ paddingBottom: 120 }}
        />

        <View style={localStyles.footer}>
          <Form style={localStyles.form}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Adicionar lançamento pelo nome..."
              value={searchTerm}
              onChangeText={(text) => this.setState({ searchTerm: text })}
              onSubmitEditing={this.handleAddLaunch}
              returnKeyType="done"
            />

            <SubmitButton loading={loading} onPress={this.handleAddLaunch}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <View style={localStyles.searchIconContainer}>
                  <Icon name="add" size={20} color="#fff" />
                </View>
              )}
            </SubmitButton>
          </Form>
        </View>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    paddingBottom: 120, // espaço maior pro footer
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0f0f0f",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIconContainer: {
    paddingHorizontal: 10,
  },
});
