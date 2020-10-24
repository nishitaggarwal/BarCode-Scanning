import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';



export default class TransactionScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            buttonState: 'normal',
            scannedData:'',
        }
    }

    getCameraPermissions = async (id) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            hasCameraPermissions: status === "granted",
            buttonState: id,
            scanned: false
        })
    }

    handleBarCodeScanned = async ({ type, data }) => {
        const { buttonState } = this.state

        if (buttonState === "BookId") {
            this.setState({
                scanned: true,
                buttonState: 'normal'
            });
        }
        else if (buttonState === "StudentId") {
            this.setState({
                scanned: true,
                buttonState: 'normal'
            })
        }
    }
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if (buttonState !== "normal" && hasCameraPermissions) {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            );
        }

        else if (buttonState === "normal") {
            return (
                <View style={styles.container}>
                    
                  <TouchableOpacity
                     style={styles.scanButton}
                     onPress={() => {
                       this.getCameraPermissions("scannedData")
                    }}>
                    <Text style={styles.buttonText}>Scan</Text>
                  </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    scanButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
      },
      buttonText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
   
  });