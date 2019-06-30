# All screens

Splash
Login
Signup
Main
List
Upload
Profile
Messages

# Structure

App = MainAppContainer (SwitchNavigator)
    Login
    Register
    Home = TopTabContainer (TopNavigator)
        Profile
        Settings
        Main = BottomTabContainer (BottomNavigator)
            Upload
            Home = DataSearch
                Search
                Filter
