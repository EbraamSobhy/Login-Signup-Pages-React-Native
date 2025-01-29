import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("Signup");
    };

    // Firebase
    const handleSignIn = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in:', userCredential.user);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View>
                    <Image source={require("../assets/topVector.png")} style={styles.topImage} />
                </View>
                <View>
                    <Text style={styles.helloText}>Hello</Text>
                </View>
                <View>
                    <Text style={styles.signinText}>Sign in to your account</Text>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome
                        name="user"
                        size={30}
                        style={styles.inputIcon}
                    />
                    <TextInput style={styles.textInput} placeholder="Email" />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome
                        name="lock"
                        size={30}
                        style={styles.inputIcon}
                    />
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
                </View>
                <Text style={styles.forgetpassword}>Forget your password?</Text>
                <View style={styles.signInButtonContainer}>
                    <Text style={styles.signin}>Sign in</Text>
                    <View style={[styles.linearGradient, { backgroundColor: "#623AA2" }]}
                    >
                        <AntDesign
                            name="arrowright"
                            size={30}
                            color="white"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.footerText}>
                        Don't have an account? <Text style={{ textDecorationLine: "underline" }}>Create Account</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    helloText: {
        textAlign: "center",
        fontSize: 70,
        fontWeight: "500",
        color: "#262626",
    },
    signinText: {
        textAlign: "center",
        fontSize: 18,
        color: "#262626",
        marginBottom: 30,
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
    forgetpassword: {
        color: "gray",
        textAlign: "right",
        marginRight: 40,
        fontSize: 15,
        marginBottom: 20,
    },
    signin: {
        fontSize: 25,
        fontWeight: "bold",
    },
    signInButtonContainer: {
        marginTop: 50,
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
        marginTop: 20
    }
});
