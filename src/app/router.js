import { StackNavigator } from 'react-navigation';

// components
import Home from '../components/Home';
import Detail from '../components/Detail';

const AppNavigator = StackNavigator({
    Home: { screen: Home },
    Detail: { screen: Detail },
},
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default AppNavigator;
