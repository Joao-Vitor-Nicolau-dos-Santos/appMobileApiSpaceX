//#region Comentários INSANOS que o João fez
// import React, { Component } from "react";
// import { ActivityIndicator, Keyboard } from "react-native";
// import Icon from "@expo/vector-icons/MaterialIcons";
// import api from "../services/api";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   Container,
//   Form,
//   Input,
//   SubmitButton,
//   List,
//   User as LaunchItem,
//   Avatar as PatchImage,
//   Name as MissionName,
//   Bio as Details,
//   ProfileButton,
//   ProfileButtonText,
// } from "../styles";

// export default class Main extends Component {
//   state = {
//     launches: [],
//     loading: false,
//     searchTerm: "",
//   };

//   async componentDidMount() {
//     this.loadLaunches();
//   }

//   loadLaunches = async () => {
//     this.setState({ loading: true });
//     try {
//       const response = await api.get("/launches", {
//         params: { sort: "date_unix", order: "desc", limit: 10 },
//       });
//       this.setState({ launches: response.data });
//     } catch (error) {
//       alert("Erro ao carregar lançamentos.");
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   handleSearch = async () => {
//     const { searchTerm } = this.state;
//     if (!searchTerm.trim()) return;

//     this.setState({ loading: true });
//     try {
//       const response = await api.get("/launches/query", {
//         method: "POST",
//         data: {
//           query: {
//             name: { $regex: searchTerm, $options: "i" },
//           },
//           options: { sort: { date_unix: -1 }, limit: 10 },
//         },
//       });
//       this.setState({ launches: response.data.docs });
//     } catch (error) {
//       alert("Nenhum lançamento encontrado.");
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { launches, loading, searchTerm } = this.state;

//     return (
//       <Container>
//         <Form>
//           <Input
//             autoCorrect={false}
//             autoCapitalize="none"
//             placeholder="Buscar lançamento..."
//             value={searchTerm}
//             onChangeText={(text) => this.setState({ searchTerm: text })}
//             onSubmitEditing={this.handleSearch}
//             returnKeyType="search"
//           />
//           <SubmitButton loading={loading} onPress={this.handleSearch}>
//             {loading ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Icon name="search" size={20} color="#fff" />
//             )}
//           </SubmitButton>
//         </Form>

//         <List
//           data={launches}
//           keyExtractor={(item) => item.id}
//           onRefresh={this.loadLaunches}
//           refreshing={loading}
//           renderItem={({ item }) => (
//             <LaunchItem>
//               {item.links.patch.small ? (
//                 <PatchImage source={{ uri: item.links.patch.small }} />
//               ) : (
//                 <PatchImage source={{ uri: "https://via.placeholder.com/64" }} />
//               )}
//               <MissionName>{item.name || "Sem nome"}</MissionName>
//               <Details numberOfLines={2}>
//                 {item.date_local} • {item.rocket} • {item.launchpad}
//               </Details>
//               <ProfileButton
//                 onPress={() => {
//                   this.props.navigation.navigate("user", { launch: item });
//                 }}
//               >
//                 <ProfileButtonText>Detalhes</ProfileButtonText>
//               </ProfileButton>
//             </LaunchItem>
//           )}
//         />
//       </Container>
//     );
//   }
// }
//#endregion
import React, { Component } from "react";
import { ActivityIndicator, Keyboard, View, StyleSheet } from "react-native"; // 👈 Adicione View e StyleSheet
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

export default class Main extends Component {
  state = {
    launches: [],
    loading: false,
    searchTerm: "",
  };

  async componentDidMount() {
    this.loadLaunches();
  }

  loadLaunches = async () => {
    this.setState({ loading: true });
    try {
      const response = await api.get("/launches", {
        params: { sort: "date_unix", order: "desc", limit: 10 },
      });
      this.setState({ launches: response.data });
    } catch (error) {
      alert("Erro ao carregar lançamentos.");
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = async () => {
    const { searchTerm } = this.state;
    if (!searchTerm.trim()) return;

    this.setState({ loading: true });
    try {
      const response = await api.get("/launches/query", {
        method: "POST",
        data: {
          query: {
            name: { $regex: searchTerm, $options: "i" },
          },
          options: { sort: { date_unix: -1 }, limit: 10 },
        },
      });
      this.setState({ launches: response.data.docs });
    } catch (error) {
      alert("Nenhum lançamento encontrado.");
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { launches, loading, searchTerm } = this.state;

    return (
      <Container style={localStyles.container}>
        {/* Lista de lançamentos */}
        <List
          data={launches}
          keyExtractor={(item) => item.id}
          onRefresh={this.loadLaunches}
          refreshing={loading}
          renderItem={({ item }) => (
            <LaunchItem>
              {item.links.patch.small ? (
                <PatchImage source={{ uri: item.links.patch.small }} />
              ) : (
                <PatchImage
                  source={{ uri: "https://via.placeholder.com/64" }}
                />
              )}
              <MissionName>{item.name || "Sem nome"}</MissionName>
              <Details numberOfLines={2}>
                {item.date_local} • {item.rocket} • {item.launchpad}
              </Details>
              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate("user", { launch: item });
                }}
              >
                <ProfileButtonText>Detalhes</ProfileButtonText>
              </ProfileButton>
            </LaunchItem>
          )}
          contentContainerStyle={{ paddingBottom: 80 }} // 👈 Dá espaço para o botão fixo
        />

        {/* Formulário fixo no rodapé */}
        <View style={localStyles.footer}>
          <Form style={localStyles.form}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Buscar lançamento..."
              value={searchTerm}
              onChangeText={(text) => this.setState({ searchTerm: text })}
              onSubmitEditing={this.handleSearch}
              returnKeyType="search"
            />
            {/* <SubmitButton loading={loading} onPress={this.handleSearch}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Icon name="search" size={20} color="#fff" />
              )}
            </SubmitButton> */}
            <SubmitButton loading={loading} onPress={this.handleSearch}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <View style={localStyles.searchIconContainer}>
                  <Icon name="search" size={20} color="#fff" />
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
    paddingBottom: 80, // Espaço para o footer
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0f0f0f", // Mesma cor do fundo
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
  },
});
