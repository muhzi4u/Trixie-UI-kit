import React, {
  Component,
  PropTypes
} from 'react';
import ReactNative, {
  Image,
  Text,
  BackHandler,
  TouchableHighlight,
  View
} from 'react-native';

import componentStyle from './style/component';

export default class PillPrimary extends Component {
  propTypes: {
    text: PropTypes.string,
  }

  defaultProps: {
    text: ''
  }

  render = () => {
    const { text } = this.props;
    return(
      <TouchableHighlight
        style={[componentStyle.actionButton,componentStyle.mt10]}
        underlayColor='#f1f1f1'
      >
        <View>
          <Text style= {componentStyle.actionButtonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
