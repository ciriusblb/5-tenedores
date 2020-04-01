import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";

export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);

async function login() {
    try {
      await Facebook.initializeAsync(FacebookApi.application_id);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });


      if (type === 'success') {
        setIsLoading(true);
        // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        const credentials = firebase.auth.FacebookAuthProvider.credential(token);
        await firebase
            .auth()
            .signInWithCredential(credentials)
            .then(() => {
            navigation.navigate("Mi cuenta");
            })
            .catch(() => {
            toastRef.current.show(
                "Error acdediendo con Facebook, intentelo más tarde"
            );
            });
      } else if (type === "cancel") {
            toastRef.current.show("Inicio de sesion cancelado");
        } else {
            toastRef.current.show("Error desconocido, intentelo más tarde");
        }
        setIsLoading(false);
    } catch ({ message }) {
      console.log(message)
    }
  }

//   const login = async () => {
//     const { type, token } = await Facebook.logInWithReadPermissionsAsync(
//       FacebookApi.application_id,
//       { permissions: FacebookApi.permissions }
//     );
//     console.log(type)
//     console.log(token)


//     if (type === "success") {
//       setIsLoading(true);
//       const credentials = firebase.auth.FacebookAuthProvider.credential(token);
//       await firebase
//         .auth()
//         .signInWithCredential(credentials)
//         .then(() => {
//           navigation.navigate("MyAccount");
//         })
//         .catch(() => {
//           toastRef.current.show(
//             "Error acdediendo con Facebook, intentelo más tarde"
//           );
//         });
//     } else if (type === "cancel") {
//       toastRef.current.show("Inicio de sesion cancelado");
//     } else {
//       toastRef.current.show("Error desconocido, intentelo más tarde");
//     }
//     setIsLoading(false);
//   }

  return (
    <>
      <SocialIcon
        title="Iniciar sesión con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isLoading} text="Iniciando sesión" />
    </>
  );
}
