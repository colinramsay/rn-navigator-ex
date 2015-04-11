'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} = React;


var ForRightScene = React.createClass({
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
                <Text>You came here from the "right" button!</Text>
            </View>
        );
    }
});


var ForTouchScene = React.createClass({
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
                <Text>You came here from the TouchableHighlight!</Text>
            </View>
        );
    }
});


var HomeScene = React.createClass({
    onPress() {
        this.props.navigator.push({
            title: 'From TouchableHighlight',
            component: ForTouchScene
        });
    },

    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
                <TouchableHighlight onPress={this.onPress}>
                    <Text>Welcome to the NavigatorIOS Demo. Press here!</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

var NavDemo = React.createClass({
    onRightButtonPress: function() {
        this.refs.nav.push({
            title: 'From Right',
            component: ForRightScene
        })
    },

    render () {
        return (
            <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
                component: HomeScene,
                title: 'NavigatorIOS Demo',
                rightButtonTitle: 'MORE!',
                onRightButtonPress: this.onRightButtonPress
            }} />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1
    }
});

AppRegistry.registerComponent('rctnavigator', () => NavDemo);
