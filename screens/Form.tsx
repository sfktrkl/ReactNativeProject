import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { GlobalStyles } from '../styles/Global';
import FlatButton from '../shared/FlatButton'
import { Formik } from 'formik';
import * as yup from 'yup';

export interface Review {
  title: string,
  body: string,
  rating: string,
};
export interface FormProps {
  addReview: (review: Review) => void,
};

// Set of rules defined inside an object created by the yup.
const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 to 5.', (val) => {
      if (val !== undefined)
        return parseInt(val) < 6 && parseInt(val) > 0;
      return false;
    })
});

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
        validationSchema={reviewSchema}
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
            { /*  To get a real time validation, use onBlur. So, when a field is loses its focus
                    it will trigger the onBlur function and run the validation in real time. */ }
            <TextInput 
              style={GlobalStyles.input}
              placeholder={'Review title'}
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            { /* When formik and yup used together, when validation fails yup provides formik with some
                  error messages and attaches those to the props.
                 To not show each error text at the same time, use touched. So that only the fields which
                  are changed by the user will get the error messages. */}
            <Text style={GlobalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

            <TextInput 
              multiline
              style={GlobalStyles.input}
              placeholder={'Review body'}
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={GlobalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

            <TextInput 
              multiline
              keyboardType='numeric'
              style={GlobalStyles.input}
              placeholder={'Rating 1-5'}
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating.toString()}
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={GlobalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
