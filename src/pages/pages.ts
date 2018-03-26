// The page the user lands on after opening the app and without a session
import {HomePage} from "./home/home";

export const FirstRunPage = 'WelcomePage';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'TabsPage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = HomePage;
export const Tab2Root = HomePage;
export const Tab3Root = 'SettingPage';
export const Tab4Root = 'BluetoothPage';
export const Tab5Root = 'RaspiPage';

