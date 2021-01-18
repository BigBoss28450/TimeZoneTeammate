import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addTeammates } from '../redux/actions/teammeates';
import uuid from 'uuid';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import CustomTextInput from '../components/basicComponents/CustomTextInput';
import Screen from '../components/basicComponents/Screen';
import ErrorMessage from '../components/basicComponents/ErrorMessage';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'El nombre debe tener minimo dos carcateres')
    .max(50, 'El nombre no debe exceder los 50 caracteres')
    .required('El nombre es requerido'),
  city: Yup.string().required('La ciudad es requerida'),
});

export default function AddTeammateScreen({ navigation }) {
  // REDUX
  const dispatch = useDispatch();

  // FUNCTIONS
  const handleSubmit = async (values) => {
    dispatch(addTeammates({ ...values, id: uuid.v4() }));
    navigation.goBack();
  };
  return (
    <Screen>
      <View style={{ padding: 10 }}>
        <Formik
          initialValues={{ name: '', city: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
            <View>
              <CustomTextInput
                placeholder={'Nombre'}
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <ErrorMessage error={errors.name} />
              <CustomTextInput
                placeholder={'Ciudad'}
                value={values.city}
                onChangeText={handleChange('city')}
              />
              <ErrorMessage error={errors.city} />
              {/* <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              /> */}
              <Button
                onPress={(data) => {
                  handleSubmit(data);
                }}
                title="Submit"
              />
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
