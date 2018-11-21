import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  //cardDateFormat - need for timestaamp from published
  cardDateFormat = (date) => {
    const currentMoment = moment.utc();
    const dateMoment = moment.utc(date);
    const diff = currentMoment.diff(dateMoment, 'days', true);
    if (diff > 7 || diff < 0) {
      return dateMoment.format('D MMM YYYY').replace(/\./gi, '');
    }
    else {
      return dateMoment.fromNow();
    }
  }
  render() {
    const { image, firstName, lastName, company, desc, email, linkedin, timestaamp, navigate } = this.props;
    const imagePreset = !!image ? { uri: image } : require('../../assets/noavatar.png');
    const shortDesc = desc.replace(/^(.{60}).+/, "$1…"); // reuces long description to 50 chars
    const dateFrom = this.cardDateFormat(timestaamp);
    const propsToPass = { imagePreset, firstName, lastName, company, desc, email, linkedin, dateFrom };
    const onPress = () => {
      navigate('Detail', propsToPass);
      this.setState({
        hover: true,
      });
    };

    return (
      <TouchableOpacity style={[styles.cardBox, {borderColor: this.state.hover ? '#1cc8bc' : '#e1e7e9'}]} onPress={onPress}>
        <View style={styles.imgBox}>
          <View style={styles.roundAvatar}>
            <Image resizeMode={'contain'} source={imagePreset} style={styles.image} />
          </View>
        </View>
        <View style={styles.textBox}>
          <View style={styles.textTopBox}>
            <Text style={styles.userName}>
              {firstName} {lastName}
            </Text>
            <TouchableOpacity style={styles.messageButton}>
              <Icon name='chat-bubble' size={10} color={'#1cc8bc'} style={styles.icon}/>
              <Text style={styles.messageButtonText}>
                Message
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textBottomBox}>
            <View style={styles.companyBox}>
              <Text style={styles.companyBoxText}>
                {company}
              </Text>
            </View>
            <View style={styles.descBox}>
              <Text style={styles.decsriptionBoxText}>
                {shortDesc}
              </Text>
            </View>
            <View style={styles.dateBox}>
              <Icon name='access-time' size={10} color={'#abb4b5'} style={styles.icon}/>
              <Text style={styles.dateBoxText}>
                 {dateFrom}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  image: null,
};

export default Card;
