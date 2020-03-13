import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Title from '../../common/components/Title';
import ClassicButton from '../../common/components/buttons/ClassicButton';
import IconButton from '../../common/components/buttons/IconButton';
import DeleteIcon from '../../common/components/buttons/icons/DeleteIcon';
import AddIcon from '../../common/components/buttons/icons/AddIcon';
import colors from '../../common/constants/colors';
import Checkbox from '../../common/components/Checkbox/index';
import CheckboxIcon from '../../common/components/Checkbox/icons/CheckboxIcon';
import CheckboxOutlineIcon from '../../common/components/Checkbox/icons/CheckboxOutlineIcon';

const MainScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <Title />

      <IconButton icon={<AddIcon color="yellow"/>} borderColor="yellow"/>
      <IconButton icon={<DeleteIcon />} borderColor={colors.DANGER}/>
      <Checkbox icon={<CheckboxIcon color="green"/>}/>
      <Checkbox icon={<CheckboxOutlineIcon color="white"/>}/>

      <View style={styles.containerButton}>
        <ClassicButton />
      </View>
    </ScrollView>
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Step One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: 500,
  },
  containerButton: {
    alignItems: 'center',
  },
});

export default MainScreen;
