import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
const handleUrl = (event) => {
  console.log(event.url);
}
class Detail extends Component {
  constructor(props) {
    super(props);
    Linking.addEventListener('url', handleUrl);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', handleUrl);
  }
  openLink(navURL) {
    const hasValue = !!(navURL);
    if (hasValue) Linking.openURL(navURL);
  }

  render() {
      if (!this.props.props) { return null };
      const { imagePreset, firstName, lastName, company, desc, email, linkedin, dateFrom } = this.props.props;
      const { navigation } = this.props;
      const onPress = () => {navigation.goBack()};
      return (
        <ScrollView>
        <View style={styles.detailContainer}>
          <View style={styles.topUserImageBox}>
            <View style={styles.backImageBox}>
              <Image resizeMode={'contain'} source={imagePreset} style={styles.imageInBg} blurRadius={3} />
            </View>
            <View style={styles.userBox}>
              <View style={styles.backBox}>
                <TouchableOpacity style={styles.backButton} onPress={onPress}>
                  <Text style={styles.chatButtonText}>
                    <Icon name='arrow-back' size={30}/>
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imgBox}>
                <View style={styles.roundAvatar}>
                  <Image resizeMode={'contain'} source={imagePreset} style={styles.image} />
                </View>
              </View>
              <Text style={styles.userName}>
                {firstName} {lastName}
              </Text>
              <View style={styles.chatButtonBox}>
                <TouchableOpacity style={styles.chatButton}>
                  <Icon name='chat-bubble-outline' size={14} color={'#ffffff'}/>
                  <Text style={styles.chatButtonText}>
                    Chat with {firstName} {lastName}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.contenBox}>
            <View style={styles.listBox}>
              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Email
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.openLink(email)}>
                  <Text style={styles.link}>{email}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.textBoxWithLabel}>
              <View style={styles.labelBox}>
                <Text style={styles.label}>
                  First Name
                </Text>
              </View>
                <Text style={styles.textInList}>
                  {firstName}
                </Text>
              </View>

              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Last Name
                  </Text>
                </View>
                <Text style={styles.textInList}>
                  {lastName}
                </Text>
              </View>

              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Linkedin
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.openLink(linkedin)}>
                  <Text style={styles.link} >{linkedin}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Company
                  </Text>
                </View>
                <Text style={styles.textInList}>
                  {company}
                </Text>
              </View>

              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Description
                  </Text>
                </View>
                <Text style={styles.textInList}>
                  {desc}
                </Text>
              </View>

              <View style={styles.textBoxWithLabel}>
                <View style={styles.labelBox}>
                  <Text style={styles.label}>
                    Published
                  </Text>
                </View>
                <Text style={styles.textInList}>
                  {dateFrom}
                </Text>
              </View>

            </View>
          </View>

        </View>
        </ScrollView>
    );
  }
}

Detail.propTypes = {
  title: PropTypes.string,
};

Detail.defaultProps = {
};

export default Detail;
