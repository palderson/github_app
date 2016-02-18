var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Main = require('./app/components/main')

class githubNoteTaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  }
});

AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);
