import React, { Component } from "react";
import {
  Container,
  Header,
  AvatarPerfil as PatchImage,
  NamePerfil as Title,
  BioPerfil as Description,
  Stars as DetailsList,
  Starred,
  Info,
  Title as Label,
  Author as Value,
} from "../styles";

export default class LaunchDetails extends Component {
  render() {
    const { route } = this.props;
    const { launch } = route.params;

    const details = [
      { label: "Data (UTC)", value: launch.date_utc },
      { label: "Local", value: launch.launchpad },
      { label: "Foguete", value: launch.rocket },
      { label: "Sucesso?", value: launch.success ? "Sim" : "Não" },
      { label: "Detalhes", value: launch.details || "N/A" },
    ];

    return (
      <Container>
        <Header>
          {launch.links.patch.small ? (
            <PatchImage source={{ uri: launch.links.patch.small }} />
          ) : (
            <PatchImage source={{ uri: "https://via.placeholder.com/100" }} />
          )}
          <Title>{launch.name}</Title>
          <Description>{launch.date_local}</Description>
        </Header>

        <DetailsList
          data={details}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Starred>
              <Info>
                <Label>{item.label}</Label>
                <Value>{item.value}</Value>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}