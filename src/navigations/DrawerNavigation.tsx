import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStaticNavigation} from '@react-navigation/native';
import CalendarScreen from '@/calendar/CalendarScreen';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import DrawerButton from '@/components/DrawerButton';
import {colors} from '@/constants/colors';
import {MainDrawerParamList} from '@/types/navigation';
import FeedStack from './FeedNavigation';
import MapStack from './MapNavigation';

type DrawerIconName = 'map' | 'book' | 'calendar';

function DrawerIcons(focused: boolean, routeName: keyof MainDrawerParamList) {
  let iconName: DrawerIconName;

  switch (routeName) {
    case 'Map': {
      iconName = 'map';
      break;
    }
    case 'Feed': {
      iconName = 'book';
      break;
    }
    case 'Calendar': {
      iconName = 'calendar';
      break;
    }
  }
  return (
    <FontAwesome6
      name={iconName}
      iconStyle="solid"
      size={20}
      color={focused ? colors.WHITE : colors.GRAY_300}
    />
  );
}

const MainDrawer = createDrawerNavigator({
  screenOptions: ({route}) => {
    return {
      drawerStyle: {
        width: '60%',
        backgroundColor: colors.WHITE,
      },
      drawerLabelStyle: {
        fontWeight: '600',
      },
      drawerItemStyle: {
        borderRadius: 5,
      },
      draerType: 'front',
      drawerActiveTintColor: colors.WHITE,
      drawerActiveBackgroundColor: colors.PINK_500,
      drawerInactiveTintColor: colors.GRAY_700,
      drawerInactiveBackgroundColor: colors.GRAY_100,
      drawerIcon: ({focused}) =>
        DrawerIcons(focused, route.name as keyof MainDrawerParamList),

      headerTitleAlign: 'center',
      headerBackButtonDisplayMode: 'minimal',
      headerTintColor: colors.BLACK,
      headerStyle: {
        backgroundColor: colors.WHITE,
        shadowColor: colors.GRAY_500,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    };
  },
  screens: {
    Map: {
      screen: MapStack,
      options: {
        title: '홈',
        headerShown: false,
      },
    },
    Feed: {
      screen: FeedStack,
      options: {
        title: '피드',
        headerShown: false,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      options: {
        title: '캘린더',
        headerLeft: () => <DrawerButton />,
      },
    },
  },

  drawerContent: props => <CustomDrawerContent {...props} />,
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
