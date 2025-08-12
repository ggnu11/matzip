import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>로그인으로 이동</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
