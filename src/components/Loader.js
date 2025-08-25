import LottieView from 'lottie-react-native';
import Layout from './Layout';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

const Loader = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <LottieView
          source={require('../assets/animations/Magma.json')}
          autoPlay
          style={{ width: 550, height: 470 }}
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/loaderMan.png')}
            style={{ width: 440, height: 500, top: -40 }}
          />
          <LottieView
            source={require('../assets/animations/Spinner.json')}
            autoPlay
            style={styles.spinner}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: height * 0.05 },
  logo: { position: 'absolute', top: 110 },
  spinner: { width: 380, height: 230, position: 'absolute', top: 160 },
});

export default Loader;
