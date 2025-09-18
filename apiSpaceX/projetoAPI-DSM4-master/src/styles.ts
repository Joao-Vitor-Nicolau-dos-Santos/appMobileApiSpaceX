// import styled from "styled-components/native";
// import { RectButton } from "react-native-gesture-handler";

// // Estilos da página Main
// export const Container = styled.View`
//   flex: 1;
//   padding: 30px;
// `;

// export const Form = styled.View`
//   flex-direction: row;
//   padding-bottom: 20px;
//   border-bottom-width: 1px;
//   border-color: #eee;
//   color: #ffffffff;
// `;

// export const Input = styled.TextInput.attrs({
//   placeholderTextColor: "#ffffffff",
// })`
//   flex: 1;
//   height: 40px;
//   background: #eee;
//   border-radius: 4px;
//   padding: 0 15px;
//   border: 1px solid #ccc;
//   color: #ffffffff;
// `;

// interface SubmitButtonProps {
//   loading?: boolean;
// }

// export const SubmitButton = styled(RectButton)<SubmitButtonProps>`
//   justify-content: center;
//   align-items: center;
//   background: #3498db;
//   border-radius: 5px;
//   margin-left: 10px;
//   padding: 0 12px;
//   opacity: ${(props) => (props.loading ? 0.7 : 1)};
// `;

// export const List = styled.FlatList.attrs({
//   showsVerticalScrollIndicator: false,
// })`
//   margin-top: 20px;
// `;

// export const User = styled.View`
//   align-items: center;
//   margin: 0 20px 30px;
// `;

// export const Avatar = styled.Image`
//   width: 64px;
//   height: 64px;
//   border-radius: 32px;
//   background: #eee;
// `;

// export const Name = styled.Text`
//   font-size: 14px;
//   color: #ffffffff;
//   font-weight: bold;
//   margin-top: 4px;
//   text-align: center;
// `;

// export const Bio = styled.Text.attrs({
//   numberOfLines: 2,
// })`
//   font-size: 13px;
//   line-height: 18px;
//   color: #ffffffff;
//   margin-top: 5px;
//   text-align: center;
// `;

// export const ProfileButton = styled(RectButton)`
//   margin-top: 10px;
//   align-self: stretch;
//   border-radius: 4px;
//   background: #3498db;
//   justify-content: center;
//   align-items: center;
//   height: 36px;
//   color: #ffffffff;
// `;

// export const ProfileButtonText = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   color: #fff;
//   text-transform: uppercase;
// `;

// // Estilos da página User
// export const Header = styled.View`
//   padding: 30px;
//   align-items: center;
//   justify-content: center;
// `;

// export const AvatarPerfil = styled.Image`
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
//   background: #eee;
// `;

// export const NamePerfil = styled.Text`
//   font-size: 16px;
//   color: #ffffffff;
//   font-weight: bold;
//   margin-top: 4px;
//   text-align: center;
// `;

// export const BioPerfil = styled.Text`
//   font-size: 15px;
//   line-height: 18px;
//   color: #999;
//   margin-top: 5px;
//   text-align: center;
// `;

// export const Stars = styled.FlatList.attrs({
//   showsVerticalScrollIndicator: false,
// })`
//   margin-top: 20px;
// `;

// export const Starred = styled.View`
//   background: #f5f5f5;
//   border-radius: 4px;
//   padding: 10px 15px;
//   margin-bottom: 20px;
//   flex-direction: row;
//   align-items: center;
// `;

// export const OwnerAvatar = styled.Image`
//   width: 42px;
//   height: 42px;
//   border-radius: 21px;
//   background: #eee;
// `;

// export const Info = styled.View`
//   margin-left: 10px;
//   flex: 1;
//   color: #ffffffff;
// `;

// export const Title = styled.Text.attrs({
//   numberOfLines: 1,
// })`
//   font-size: 15px;
//   font-weight: bold;
//   color: #333333;
// `;

// export const Author = styled.Text`
//   font-size: 13px;
//   color: #666666;
//   margin-top: 2px;
// `;

import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { colors } from './services/theme'; // 👈 Importe as cores

// Estilos da página Main
export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: ${colors.background};
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.textSecondary,
})`
  flex: 1;
  height: 40px;
  background: ${colors.inputBackground};
  border-radius: 8px;
  padding: 0 15px;
  border: 1px solid ${colors.inputBorder};
  color: ${colors.text};
  font-size: 16px;
`;

interface SubmitButtonProps {
  loading?: boolean;
}

export const SubmitButton = styled(RectButton)<SubmitButtonProps>`
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  border-radius: 8px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: ${colors.card};
`;

export const Name = styled.Text`
  font-size: 14px;
  color: ${colors.text};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: ${colors.textSecondary};
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.text};
  text-transform: uppercase;
`;

// Estilos da página User
export const Header = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPerfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: ${colors.card};
`;

export const NamePerfil = styled.Text`
  font-size: 16px;
  color: ${colors.text};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const BioPerfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.textSecondary};
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: ${colors.card};
  border-radius: 8px;
  padding: 12px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${colors.border};
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: ${colors.card};
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.text};
`;

export const Author = styled.Text`
  font-size: 13px;
  color: ${colors.textSecondary};
  margin-top: 2px;
`;