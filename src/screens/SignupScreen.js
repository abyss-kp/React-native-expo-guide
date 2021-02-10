import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up For Tracker</Text>
            </Spacer>
            <Input label="Email" value={email} onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={(pswd) => setPassword(pswd)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry //for hidden pswd
            />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 250,
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;
