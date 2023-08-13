import react, { useEffect } from "react";
import { SafeAreaView, TextInput, View } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useEffect();

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholeder="Name..."
          value={name}
          onChangeText={setName}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
