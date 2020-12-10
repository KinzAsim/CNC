import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../style';
import { createDispatchHook } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Item extends React.Component{
    constructor(props) {
        super(props);
    }
//colors.primary,colors.secondary
    render() {
        const {color,duration} = this.props; 
       // console.log('messagedata',messagedata)
       //colors={["#0F5E9C",colors.secondary]}        
        return(
            <View
            style={styles.item1}>
            <View style={styles.item2}>
              <View style={[styles.item3,{backgroundColor: color === 'green' ? ('#388E3C') 
              : color === 'red' ? ('#FF0000'):('#d4a537')}]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>Color: </Text>
                <Text style={styles.item4} numberOfLines={1}>{color}</Text>
              </View>

              {/* <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>From: </Text>
                <Text style={styles.itemThreeSubtitle} numberOfLines={1}>{updated_at}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>To: </Text>
                <Text style={styles.itemThreeSubtitle} numberOfLines={1}>{created_at}</Text>
              </View> */}
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>Duration: </Text>
                <Text style={styles.itemThreeSubtitle} numberOfLines={1}>{duration}</Text>
              </View>
                <View>
                 
                </View>
              </View>
            </View>
          </View>
         
        );
    }
}
// backgroundColor : {color === 'Green' ? ('#7CFC00'): 
//color === 'Red' ? ('#FF0000'):('#d4a537')}}
export default Item;

const styles = StyleSheet.create({
  item1: {
    backgroundColor: 'transparent',
    padding: wp('3%'),
    borderRadius: wp('2.5%'),
    //width:wp('100%'),
    //shadowColor: colors.background,
    shadowOffset: {
      width: wp('0%'),
      height: hp('1%'),
    },
    //shadowOpacity: 0.25,
    //shadowRadius: wp('10%'),
    //elevation: wp('1%'),
    //marginVertical: hp('0.5%'),
    //marginHorizontal:wp('2%'),
  },
  item2: {
    flexDirection: 'row',
  },
  item3: {
    flex: 1,
    borderTopStartRadius:30,
    borderBottomEndRadius:30,
    padding: wp('5%'),
    height:hp('10%'),
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color:'#fff',
  },
  item4: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.5%'),
    color: colors.whiteOne,
    marginTop: hp(0.3)
  },
  title: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color: '#fff',
    fontWeight: 'bold'
  }
});
