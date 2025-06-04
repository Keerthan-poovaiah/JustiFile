import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { Audio } from 'expo-av';
import { SpeechClient } from '@google-cloud/speech';
import * as FileSystem from 'expo-file-system';

// Initialize SpeechClient with credentials
const loadCredentials = async () => {
  try {
    const credentialsPath = FileSystem.documentDirectory + 'google-credentials.json';
    const credentialsExists = await FileSystem.getInfoAsync(credentialsPath);
    
    if (!credentialsExists.exists) {
      // Copy credentials file from app bundle to document directory
      await FileSystem.copyAsync({
        from: '../google-credentials.json',
        to: credentialsPath
      });
    }
    
    const credentialsContent = await FileSystem.readAsStringAsync(credentialsPath);
    return JSON.parse(credentialsContent);
  } catch (error) {
    console.error('Error loading credentials:', error);
    return null;
  }
};

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const initSpeechClient = async () => {
      const credentials = await loadCredentials();
      if (credentials) {
        const speechClient = new SpeechClient({ credentials });
        setClient(speechClient);
      }
    };

    initSpeechClient();

    return () => {
      if (recording) {
        stopRecording();
      }
    };
  }, []);

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      });

      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY, 
        (status) => console.log(status.isRecording),
        100
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  }

  async function stopRecording() {
    try {
      if (!recording || !client) return;
      
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      
      // Get the audio file and convert it to base64
      const response = await fetch(uri);
      const blob = await response.blob();
      
      const buffer = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result;
          resolve(Buffer.from(arrayBuffer));
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      });

      // Create request for Google Cloud Speech-to-Text
      const request = {
        audio: {
          content: buffer.toString('base64'),
        },
        config: {
          encoding: 'LINEAR16',
          sampleRateHertz: 44100,
          languageCode: 'en-US',
          model: 'default',
          enableAutomaticPunctuation: true,
        },
      };

      try {
        const [response] = await client.recognize(request);
        const transcription = response.results
          .map(result => result.alternatives[0].transcript)
          .join('\n');
        setText(transcription);
      } catch (err) {
        console.error('Error during transcription:', err);
        setText('Error during transcription. Please try again.');
      }
    } catch (err) {
      console.error('Failed to stop recording:', err);
      setText('Failed to process recording. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speech to Text</Text>
      <Text style={styles.text}>{text || 'Say something...'}</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
  },
});

export default SpeechToText;
