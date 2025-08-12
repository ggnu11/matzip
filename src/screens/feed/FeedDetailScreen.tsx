import {SafeAreaView, Text} from 'react-native';
import {FeedStackParamList} from '@/types/navigation';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<FeedStackParamList, 'FeedDetail'>;

function FeedDetailScreen({route}: Props) {
  const {id} = route.params;
  return (
    <SafeAreaView>
      <Text>FeedDetailScreen {id}</Text>
    </SafeAreaView>
  );
}

export default FeedDetailScreen;
