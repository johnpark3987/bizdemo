import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// export default class Header extends Component<{}> {
//   render() {
//     const { textStyle, viewStyle } = styles;
//     return (
//       <View style={viewStyle}>
//         <Text style={textStyle}>{this.props.headerText}</Text>
//       </View>
//     );
//   }
// }

const Header = (props) => {
  return (
      <View style={styles.viewStyle} >
        <Text style={styles.textStyle} >{props.headerText}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

// export default Header;
export { Header };
