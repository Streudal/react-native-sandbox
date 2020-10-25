import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Button, View, Text, LogBox, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FloatingAction } from 'react-native-floating-action';
import Property from "./Property";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Text>Basemap Layers</Text>
        <DrawerItem
          label="Dark"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Light"
          onPress={() => props.navigation.closeDrawer()}
        />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerPosition="right" overlayColor={0} drawerStyle={{ backgroundColor: '#c6cbef', width: 240 }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3"
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  mainContainer: {
    marginTop: 20,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    marginTop: 10,
  },
  title: {
    paddingLeft: 16,
    color: '#979797',
    textTransform: 'uppercase',
  },
});

const App: () => React$Node = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']); // Ignores bug logs for Animations.
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
        <ActionButton position="left" verticalOrientation="down" buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
            <Icon name="add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </SafeAreaView>

  );
};

export default App;
