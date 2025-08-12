import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';

function RootNavigation() {
  const isLogin = false;

  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
}

export default RootNavigation;
