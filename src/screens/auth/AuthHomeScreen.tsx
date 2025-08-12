import CustomButton from '@/components/CustomButton';
import {AuthStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <CustomButton
        label="이메일 로그인"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
