import React from 'react';
import { View, Button, TextInput } from 'react-native';

import { GlobalStyles } from '../styles/Global';
import { Formik } from 'formik';

export interface Review {
  title: string,
  body: string,
  rating: string,
};
export interface FormProps {
  addReview: (review: Review) => void,
};

export default function Form({ addReview }: FormProps) {
  return (
    <View style={GlobalStyles.container}>
      { /* Initial values will list the different fields which will be in this
            form and the initial values of those fields.
            On submit prop is a function which will run when the form is submit. */ }
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        onSubmit={(values: Review, actions) =>
        {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        { /* Inside the formik tag, form fields can be created. It will use a
              render function which will return some JSX and will use the formik props. */ }
        {(formikProps) => (
          <View>
            { /* onChangeText function is updating the title and property on the value
                  form a two way data binding. Hence, when the props are updated (onSubmit)
                  it will also update */}
            <TextInput 
              style={GlobalStyles.input}
              placeholder={'Review title'}
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />

            <TextInput 
              multiline
              style={GlobalStyles.input}
              placeholder={'Review body'}
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />

            <TextInput 
              multiline
              keyboardType='numeric'
              style={GlobalStyles.input}
              placeholder={'Rating 1-5'}
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating.toString()}
            />

            <Button title='Send' color='maroon' onPress={() => formikProps.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
}
