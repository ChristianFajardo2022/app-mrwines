import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
    TouchableHighlight,
    Dimensions,
    Button,
    Alert,
  } from "react-native";
  import botella from "../../assets/botellavino2.png";
  import { FontAwesome5 } from '@expo/vector-icons';
  import {connect} from "react-redux"
  import wineActions from "../pages/redux/actions/wineActions"
  import { useLinkProps } from "@react-navigation/native";
  import React, {useEffect, useState} from "react"
  import { Entypo } from '@expo/vector-icons';
  import {useDispatch, useSelector} from 'react-redux'
  import { useNavigation } from "@react-navigation/native";


  
  function Detail(props) {

    const navigation = useNavigation()
    
  
      const {id} = props.route.params
      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(wineActions.oneWine(id))
    },[])
  
    const oneWine = useSelector(store => store.wineReducer.onlyWine)
    console.log(oneWine)

    const showAlert = () =>
  Alert.alert(
    "Alert",
    "You has deleted a item",
    [
      {
        text: "Ok",
        onPress: ()=> {navigation.navigate("Shop")},
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
  const showAlert2 = () =>
  Alert.alert(
    "Alert",
    "check the email to finalize the purchase",
    [
      {
        text: "Ok",
        onPress: ()=> {navigation.navigate("Shop")},
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
  
    return (
        <ImageBackground
        style={styles.imageBackgroundContainer}
        source={require("../../assets/botellas.jpg")}
      >
        <View style={styles.view1}>
          <Text style={styles.text1}>Basket</Text>
        </View>
      
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Image style={styles.customImg} source={{uri: oneWine.photo}} />
          </View>
          <View style={styles.view4}>
            <View>
              <Text style={styles.textname}>  {oneWine.nameWine}</Text>
            </View>
            <View>
              <Text>{oneWine.type} - {oneWine.variety}</Text>
            </View>
          </View>
          <View style={styles.view5}>
            <Text>{oneWine.price} U$D</Text>
          </View>
          <View style={styles.view6}>
            <TouchableHighlight
              type="submit"
              onPress={showAlert}
            >
              <Text style={styles.Submit}>
                Delet
              </Text>
               
              
            </TouchableHighlight>
          </View>
        </View> 
     
        <View style={styles.view7}>
          <View style={styles.view8}>
            <Text style={styles.text2}>Subtotal: {oneWine.price}U$D</Text>
          </View>
          <View style={styles.view9}>
            <Text style={styles.text2}>Total: {oneWine.price}U$D</Text>
          </View>
          <View style={styles.view10}>
          <TouchableHighlight
              type="submit"
              onPress={showAlert2}
            >
              <Text style={styles.textSubmit}>
                Checkout
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              type="submit"
              onPress={()=>{navigation.navigate("Shop")}}
            >
              <Text style={styles.textSubmit2}>
                Keep buying
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
  
  const mapDispatchToProps = {
      oneWine: wineActions.oneWine
  }
  
  export default connect(null, mapDispatchToProps)(Detail)

  const styles = StyleSheet.create({
    imageBackgroundContainer: {
      height: "100%",
    },
    view1: {
      height: 100,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    Submit:{
        backgroundColor: "brown",
        marginBottom: 10,
        padding: 10,
        width: "100%",
        borderRadius: 10
    },
    text1: {
      fontSize: 40,
      fontWeight: "bold",
      color: "red",
      textShadowColor: "black",
      textShadowRadius: 5,
    },
    textname:{
        fontSize: 25,
    },
    view2: {
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      height: 300,
      width: "94%",
      marginTop: 20,
      marginLeft: 10,
      borderRadius: 10,
      flexDirection: "row",
    },
    view3: {
      width: "23.5%",
      justifyContent: "center",
    },
    view4: {
      width: "29.5%",
      justifyContent: "center",
      alignItems: "center",
    },
    view5: {
      width: "23.5%",
      justifyContent: "center",
      alignItems: "center",
    },
    view6: {
      width: "23.5%",
      justifyContent: "center",
      alignItems: "center",
    },
    customImg: {
      width: null,
      resizeMode: "contain",
      height: 250,
    },
    view7: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black",
      height: 220,
      marginTop: 10,
      width: "94%",
      marginLeft: 10,
      borderRadius: 10,
    },
    view8: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      height: 60,
      justifyContent: "center",
      alignItems: "center"
    },
    view9:{
      borderBottomColor: "black",
      borderBottomWidth: 1,
      height: 60,
      justifyContent: "center",
      alignItems: "center"
    },
    text2: {
      fontSize: 18,
    },
    textSubmit: {
      backgroundColor: "brown",
      marginBottom: 10,
      padding: 15,
      width: "100%",
      borderRadius: 10
    },
    textSubmit2: {
      backgroundColor: "brown",
      marginBottom: 10,
      padding: 15,
      width: "100%",
      borderRadius: 10
    },
    view10: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: 98
    },
  view11:{
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black",
      justifyContent: "center",
      alignItems: "center",
      width: "94%",
      marginLeft: 10,
      borderRadius: 10,
      marginTop:"20%",
  }
  });
