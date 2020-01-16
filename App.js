/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import SignupFormComponent from 'rn-formly';
import {autocomplete, picker, checkbox} from './dummy/index';


const inputFields = [
  {
    key: 'name', 
    type: 'text', 
    label: `Your Full Name`,
    required: true,
    helper: 'Using your real name would make it more likely for you to get a match',
    templateOptions: { 
      componentProps: {
        placeholder: 'Frank Murphy'
      }
    }
  }, 
  {
    key: 'otp', 
    type: 'otp', 
    label: 'Enter OTP',
    helper: '(optional) but try to enter incorrect date', 
    templateOptions: {
      noOfTextInput: 5,
    }
  }, 
  {
    key: 'image',
    type:'image', 
    label: "Upload your cover image", 
    helper: 'You can change your profile pic anytime from settings', 
  },
  {
    key: 'images',
    type:'images', 
    label: "Upload all your images", 
    helper: 'You can change your profile pic anytime from settings', 
  }, 
  {
    key: 'dob', 
    type: 'dateTyper', //change this to Dob component
    label: 'Your Date of birth',
    helper: 'Your Birthdate will help us in connecting you with people of similar age',
    required: true
  }, 
  {
    key: 'programmingLanguage', 
    type: 'picker', // CheckBoxes should have Maximum 4 elements, for others we should use dropdown
    label: 'Faviourite Programming language',
    helper: '(Optional) Please share your favourite Programming language',
    templateOptions: {
      options: picker
    },
    helper: `Optional Field`
  }, 
  {
    key: "gender", 
    type: 'checkboxes',
    label: 'Select your Gender', 
    helper: '(Optional), Please select a gender', 
    templateOptions: {
      options: checkbox
    }
  }, 
  {
    key: 'autoComplete', 
    type: 'autoComplete', 
    label: 'Type Programming language',
    helper: "This is an example of Auto Complete Component, Don't try to make sense out of the returned data",
    templateOptions: { 
      asyncFunction: async function (text) {
        return dummyAutoCompleteSuggestion
      }
    }
  }
]

const App: () => React$Node = () => {

  const justLogDataFromForms = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
  }

  return (
    <>
      <SignupFormComponent 
      inputFields={inputFields}
      globalButtonText={'Next'}
      onButtonClick={justLogDataFromForms}
      defaultColor={'green'}
      ProgressBarProps={{
        blink: false
      }}
      /> 
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
