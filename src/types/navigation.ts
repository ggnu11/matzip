import {NavigatorScreenParams} from '@react-navigation/native';

export type MapStackParamList = {
  MapHome: undefined;
  AddLocation: undefined;
  SearchLocation: undefined;
};

export type AuthStackParamList = {
  AuthHome: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type FeedStackParamList = {
  FeedHome: undefined;
  FeedDetail: {id: number};
  FeedFavorite: undefined;
  EditLocation: {id: number};
};

export type MainDrawerParamList = {
  Map: NavigatorScreenParams<MapStackParamList>;
  Feed: NavigatorScreenParams<FeedStackParamList>;
  Calendar: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainDrawerParamList {}
  }
}
