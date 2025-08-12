import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function SignupScreen() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleChangeValue = (name: string, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={values.email}
          touched={touched.email}
          onChangeText={text => handleChangeValue('email', text)}
          onBlur={() => handleBlur('email')}
          error="이메일을 입력해주세요."
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호"
          value={values.password}
          touched={touched.password}
          onChangeText={text => handleChangeValue('password', text)}
          onBlur={() => handleBlur('password')}
          error="비밀번호를 입력해주세요."
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          value={values.passwordConfirm}
          touched={touched.passwordConfirm}
          onChangeText={text => handleChangeValue('passwordConfirm', text)}
          onBlur={() => handleBlur('passwordConfirm')}
          error="비밀번호를 입력해주세요."
        />
      </View>
      <CustomButton label="회원가입" variant="filled" size="large" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignupScreen;
