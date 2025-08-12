import {colors} from '@/constants/colors';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface InputFieldProps extends TextInputProps {
  error?: string;
}

function InputField({error, ...props}: InputFieldProps) {
  return (
    <View>
      <TextInput
        style={[styles.input, Boolean(error) && styles.inputError]}
        {...props}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: colors.BLACK,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    paddingTop: 5,
    fontSize: 12,
  },
});

export default InputField;
