import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  BackHandler,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import {useBackHandler} from '@react-native-community/hooks';
import {CheckBox} from 'react-native-elements';
import {navigationRef} from '../../../services/Navigation/Reference';
import I18n from '../../../handler/Language';
import {Colors} from '../../../theme/Colors';
import {errorHandler} from '../../../handler/Error';
import StaticVariables from '../../../preference/StaticVariables';
import DoubleButtonModal from '../../Common/DoubleButtonModal';
import styles from './style';
import {useScreenContext} from '../../../services/Context';

const LoginForm = React.memo(props => {
  const {
    userName,
    changeUserName,
    password,
    changePassword,
    isRemember,
    changeRemember,
    forgotPassword,
    validateLogin,
    createAccount,
    ssoLogin,
    showAndCodeForm,
    existingLogin,
  } = props;
  const [isVisible, setVisible] = useState(false);
  const dualModelContent = {
    hederText: I18n.t('SafeTappV2_Home.lblExitSentence'),
    infoText: I18n.t('SafeTappV2_Home.lblExitConfirmSentence'),
    confirmText: I18n.t('SafeTappV2_Home.lblLogoutButton'),
    cancelText: I18n.t('SafeTappV2_Home.lblCancelButton'),
    onConfirm: 'exitApp',
  };
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
    screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],
  );

  useBackHandler(() => {
    try {
      const state = navigationRef.current.getRootState();
      const route = state.routes[state.index];
      if (
        route.state.routes[route.state.index].name ===
        StaticVariables.PAGE_LOGIN
      ) {
        setVisible(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      const errorInfo = {
        errorFunction: 'LoginFormUseBackHandler',
        errorData: error,
      };
      errorHandler(errorInfo);
    }
  });

  const exitApp = () => {
    try {
      setVisible(false);
      setTimeout(() => {
        BackHandler.exitApp();
      }, 1000);
    } catch (error) {
      const errorInfo = {
        errorFunction: 'LoginFormExitApp',
        errorData: error,
      };
      errorHandler(errorInfo);
    }
  };

  const hideModel = () => {
    try {
      setVisible(false);
    } catch (error) {
      const errorInfo = {
        errorFunction: 'LoginFormHideModel',
        errorData: error,
      };
      errorHandler(errorInfo);
    }
  };

  return (
    <React.Fragment>
      {isVisible && (
        <DoubleButtonModal
          isVisible={isVisible}
          data={dualModelContent}
          onConfirm={exitApp}
          onCancel={hideModel}
        />
      )}
      <View style={screenStyles.outerContainer}>
        <View style={screenStyles.mainTextbox}>
          <TextInput
            mode="outlined"
            label={I18n.t('SafeTappV2_Login.lblUserNamePlaceholder')}
            value={userName}
            style={
              Platform.OS === StaticVariables.PLATFORM_ANDROID
                ? screenStyles.textInputContainer
                : screenStyles.textInputIOSContainer
            }
            textColor={Colors.name.black}
            dense={true}
            disableFullscreenUI={true}
            theme={{
              colors: {
                background: Colors.name.redWhite,
                primary: Colors.name.darkGrey,
                text: Colors.name.black,
                placeholder: Colors.name.borderGrey,
              },
            }}
            onChangeText={text => changeUserName(text)}
          />
        </View>
        <View style={screenStyles.mainTextbox}>
          <TextInput
            mode="outlined"
            label={I18n.t('SafeTappV2_Login.lblPasswordPlaceholder')}
            secureTextEntry={true}
            value={password}
            style={
              Platform.OS === StaticVariables.PLATFORM_ANDROID
                ? screenStyles.textInputContainer
                : screenStyles.textInputIOSContainer
            }
            textColor={Colors.name.black}
            dense={true}
            disableFullscreenUI={true}
            theme={{
              colors: {
                background: Colors.name.redWhite,
                primary: Colors.name.darkGrey,
                text: Colors.name.black,
                placeholder: Colors.name.borderGrey,
              },
            }}
            onChangeText={text => changePassword(text)}
          />
        </View>
        <View style={screenStyles.selectionContainer}>
          <View style={screenStyles.leftSection}>
            <CheckBox
              title={I18n.t('SafeTappV2_Login.lblRememberMeBox')}
              textStyle={screenStyles.checkBoxTitle}
              containerStyle={screenStyles.checkBox}
              checkedColor={Colors.theme.backgroundSecondary}
              checked={isRemember}
              onPress={changeRemember}
              size={
                screenContext[
                  screenContext.isPortrait ? 'windowWidth' : 'windowHeight'
                ] * (screenContext.isTypeTablet ? 0.045 : 0.055)
              }
            />
          </View>
          <TouchableOpacity
            style={screenStyles.rightSection}
            onPress={forgotPassword}>
            <Text style={[screenStyles.sectionText, screenStyles.loginHelp]}>
              {I18n.t('SafeTappV2_Login.lblLoginHelpButton')}?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={screenStyles.buttonContainer}
          onPress={validateLogin}>
          <Text style={screenStyles.buttonText}>
            {I18n.t('SafeTappV2_Login.lblLoginButton')}
          </Text>
        </TouchableOpacity>
        <View>
          {!existingLogin ? (
            <Text style={screenStyles.orText}>
              {I18n.t('SafeTappV2_Login.lblORSentence')}
            </Text>
          ) : null}
          <TouchableOpacity
            style={[screenStyles.buttonContainer, screenStyles.codeButtonColor]}
            onPress={() =>
              showAndCodeForm(existingLogin ? 'loginBack' : 'code')
            }>
            <Text style={screenStyles.buttonText}>
              {existingLogin
                ? I18n.t('SafeTappV2_Login.lblBackButton')
                : I18n.t('SafeTappV2_Login.lblEnterCodeSentence')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={screenStyles.selectionContainer}>
          <TouchableOpacity
            style={screenStyles.leftSection}
            onPress={createAccount}>
            <Text style={screenStyles.sectionText}>
              {I18n.t('SafeTappV2_Login.lblCreateAccountButton')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.rightSection}
            onPress={ssoLogin}>
            <Text style={screenStyles.sectionText}>
              {I18n.t('SafeTappV2_Login.lblSsoLoginButton')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
});

// Proptype validation
LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  isRemember: PropTypes.bool.isRequired,
  changeRemember: PropTypes.func.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  validateLogin: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  ssoLogin: PropTypes.func.isRequired,
  existingLogin: PropTypes.bool.isRequired,
};

export default LoginForm;
