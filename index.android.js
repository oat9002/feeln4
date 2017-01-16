/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,Navigator } from 'react-native';
import Main from './app/Main';

//import MyScene from './app/MyScene';
var MyScene = require('./app/MyScene');

export default class feeln4 extends Component {
  render() {
    return (
      <Main></Main>
    // <MyScene />
      // <Navigator
      //   initialRoute={{ title: 'My Initial Scene', index: 0 }}
      //   renderScene={(route, navigator) => {
      //   return <MyScene title={route.title} />
      // }}
      // />
      
    );
  }
}
 renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'MyScene') {
      return (
        <MyScene
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }



// export default class feeln4 extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute={{ title: 'My Initial Scene', index: 0 }}
//         renderScene={(route, navigator) =>
//           <Main
//             title={route.title}

//             // Function to call when a new scene should be displayed
//             onForward={() => {    
//                navigator.push({
//                title: 'NextScene',
//                index:1,
//               });
//               navigator.pop();//
//             }}

//             // Function to call to go back to the previous scene
//             onBack={() => {
//               if (route.index > 0) {
//                 navigator.pop();
//               }
//             }}
//           />
//         }
//       />
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('feeln4', () => feeln4);
