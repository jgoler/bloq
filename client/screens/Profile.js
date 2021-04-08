import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { FontAwesome5 } from '@expo/vector-icons';


const { width } = Dimensions.get("window");
const height = width * 100 / 60;

const images = [
  'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102',
  'https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg',
  'https://s.abcnews.com/images/Business/elon-musk-tesla-cybertruck-broken-windows-02-ap-jc-191122_hpMain_4x3_992.jpg',
  'https://cdn.geekwire.com/wp-content/uploads/2018/11/181112-elon-fh21.jpg',
  'https://pyxis.nymag.com/v1/imgs/e0e/11b/93a73ed12f25f2fdcc4f5473fc9460a2ff-elon-musk.rsquare.w1200.jpg'
]

const Profile = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

  if (!fontsLoaded) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.otherHeaderPart}>

        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.otherHeaderPart}>
          <FontAwesome5 name="user-edit" size={25} color="black" />
        </View>
      </View>
      <View style={styles.photos}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}>

          {
            images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image} />
            ))
          }
        </ScrollView>
      </View>
      <View style={styles.bio}>
        <ScrollView >
          <View>
            <Text style={styles.name}>Elon Musk</Text>
          </View>
          <View>
            <Text style={styles.gradeNumber}>Grade 12</Text>
          </View>
          <View>
            <Text style={styles.userDescriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit tincidunt nunc, iaculis imperdiet nisl feugiat ac. Vivamus vel ante nec justo consectetur fringilla ac at lectus. Nunc consequat orci nunc
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#e64951'
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  otherHeaderPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '85%',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%'
  },
  photos: {
    flex: 8,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
    //borderTopLeftRadius: 40,
    //borderTopRightRadius: 40,
    // borderRadius: 40,
  },
  bio: {
    flex: 2,
  },
  name: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  gradeNumber: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 20,
    color: 'gray'
  },
  userDescriptionText: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 15
  },
});


/*
 <View
        style={{
          width: '100%', flex: 3, alignItems: 'center', justifyContent: 'center',
        }}
      >
        <View style={{ width, flex: 3 }}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width, height }}>
            {
              images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.image} />
              ))
            }
          </ScrollView>
        </View>
      </View>
      <View style={{ flex: 1.5 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.userInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Elon Musk</Text>
          </View>
          <View>
            <Text style={styles.gradeNumber}>Grade: 12</Text>
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.userDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit tincidunt nunc, iaculis imperdiet nisl feugiat ac. Vivamus vel ante nec justo consectetur fringilla ac at lectus. Nunc consequat orci nunc</Text>
          </View>
        </ScrollView>
        <View style={{ flex: .7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={styles.firstIconContainer}>
            <Foundation name="x" size={50} color="black" />
          </View>
          <View style={styles.secondIconContainer}>
            <Entypo name="check" size={50} color="black" />
          </View>
        </View>
      </View>
    */

export default Profile;