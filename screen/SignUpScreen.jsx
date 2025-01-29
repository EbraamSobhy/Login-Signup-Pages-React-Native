import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("Login");
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={require("../assets/topVector.png")} style={styles.topImage} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <Text style={styles.signinText}>Create Account</Text>

                    <View style={styles.inputContainer}>
                        <FontAwesome name="user" size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder="Username" />
                    </View>

                    <View style={styles.inputContainer}>
                        <FontAwesome name="lock" size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
                    </View>

                    <View style={styles.inputContainer}>
                        <Entypo name="mail" size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder="E-mail" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Entypo name="mobile" size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder="Mobile" />
                    </View>

                    <View style={styles.signInButtonContainer}>
                        <Text style={styles.signin}>Create</Text>
                        <View style={[styles.linearGradient, { backgroundColor: "#623AA2" }]}>
                            <AntDesign name="arrowright" size={30} color="white" />
                        </View>
                    </View>

                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.footerText}>
                            Already have an account? <Text style={{ textDecorationLine: "underline" }}>Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topImage: {
        width: "100%",
        height: 130,
    },
    signinText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#262626",
        marginBottom: 30,
        marginTop: 50,
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        height: 50,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5,
    },
    signin: {
        fontSize: 30,
        fontWeight: "bold",
    },
    signInButtonContainer: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        fontSize: 18,
        marginTop: 5,
        marginBottom: 50
    },
});

