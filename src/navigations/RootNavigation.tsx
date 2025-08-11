import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';

function RootNavigation() {
  const isLogin = true;

  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
}

export default RootNavigation;
