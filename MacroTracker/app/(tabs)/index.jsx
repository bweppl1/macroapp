import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import { initDB } from "../../utils/database";
import { loginUser, registerUser } from "../../utils/auth";

export default function AuthScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  // Initialize DB on first render
  useEffect(() => {
    initDB();
  }, []);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const user = await loginUser(username, password);
        alert(`Welcome back ${user.username}!`);
      } else {
        await registerUser(username, password);
        alert('Account created!');
      }
    } catch (error) {
      alert(error.message || error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>{isLogin ? 'Login' : 'Register'}</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Button 
        title={isLogin ? 'Login' : 'Register'} 
        onPress={handleAuth} 
      />
      <Button
        title={isLogin ? 'Switch to Register' : 'Switch to Login'}
        onPress={() => setIsLogin(!isLogin)}
      />
    </View>
  );
}