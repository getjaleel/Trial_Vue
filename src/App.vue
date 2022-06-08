<template>
  <img src="/banner.svg" style="width: 100%" />
  <img src="/Logo.png" style="margin-bottom: 20px" />
  <authenticator
    :services="services"
    initial-state="signIn"
    :form-fields="formFields"
    :sign-up-attributes="['email', 'username', 'nickname']"
  >
    
    
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <div><p style="text-align: center; color: #005078;">Congratulations you have successfully generated a new secure storage location and will soon receive an email with your personalised storage bucket and Amazon credentials.&nbsp;</p><p style="text-align: center; color: #005078;">Please be aware that this location will only remain active for 30 days. If you require any assistance please contact <a href="mailto:AusSeabed@ga.gov.au">AusSeabed@ga.gov.au</a>&nbsp;&nbsp;</p><p style="text-align: center; color: #005078;">In the meantime please find some useful links that should help you get started.&nbsp;</p><table><tbody><tr><td><p><strong>Useful links</strong>&nbsp;</p></td></tr></tbody></table><table style="margin-left: auto; margin-right: auto;"><tbody><tr><td><p style="padding-left: 80px; text-align: left;">&nbsp;<strong>AusSeabed&nbsp;Incoming&nbsp;Data&nbsp;Policies&nbsp;and&nbsp;Procedures</strong>&nbsp;</p><p style="padding-left: 80px; text-align: left;"><a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/overview" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="3">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview&nbsp;</a></p><p style="padding-left: 80px; text-align: left;">&nbsp;<strong>How&nbsp;do&nbsp;I&nbsp;submit&nbsp;my&nbsp;data&nbsp;-&nbsp;Help&nbsp;Guides</strong>&nbsp;</p><p style="padding-left: 80px; text-align: left;">&nbsp;<a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/pages/743964697" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="4">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697&nbsp;</a></p><p style="padding-left: 80px; text-align: left;">This includes links to useful software (and guides) for connecting to AWS s3 buckets</p><p style="padding-left: 80px; text-align: left;">&nbsp;<strong>What&nbsp;data&nbsp;and&nbsp;formats&nbsp;-&nbsp;Product&nbsp;Specifications</strong>&nbsp;</p><p style="padding-left: 80px; text-align: left;">&nbsp;<a href="https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5">https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications&nbsp;</a></p></td></tr></tbody></table></div>
      <button @click="signOut">Sign Out</button>
    </template>
    <template v-slot:confirm-sign-up-header>
      <h3
        class="amplify-heading"
        style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl); color: red"
      >
        NO CODE IS SENT OUT
      </h3>
    </template>
    
    <template v-slot:confirm-sign-up>
      <div style="padding: var(--amplify-space-large); text-align: center">
      <h1>Thankyou for registring with Ausseabed.</h1>
      <p>WATCH OUT FOR THE APPROVAL EMAIL IN YOUR INBOX AND PROCEED TO SIGN IN PAGE WITH SET CREDENTIALS.CLICK ON RETURN TO SIGN IN BUTTON BELOW</p>
      <p class="amplify-text" style="color: var(--amplify-colors-red-80)">
      <button @click="signInButton()">Return to Sign In</button>
      </p>
      </div>
    </template>
  
    <template v-slot:sign-up-footer>
      <div style="padding: var(--amplify-space-large); text-align: justify">
        <p class="amplify-text" style="color: var(--amplify-colors-red-60) ;font-size: var(--amplify-font-sizes-small)">
          * Password Requirments: Minimum 8  and Maximum of 14 characters  in length and containing at least, 1 Uppercase, 1 Lowercase, 1 Special character & 1 Number
        </p> 
      </div>
    </template>
    
  </authenticator>

 
</template>




<script setup>
import { onMounted } from "vue";
import {
  Authenticator,
  AuthenticatorSignUpFormFields
} from "@aws-amplify/ui-vue";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);


// import './styles.css';


const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "firstname.lastname",
      isRequired: true,
      label: "Username [ lower case ]",
    },
  },
  signUp: {
    username: {
      labelHidden: false,
      placeholder: "firstname.lastname",
      isRequired: true,
      label: "Username",
    },
  },
  
  confirmSignUp: {
    confirmation_code: {
      labelHidden:false,
      label: "WATCH OUT FOR THE APPROVAL EMAIL IN YOUR INBOX AND PROCEED TO SIGN IN PAGE WITH SET CREDENTIALS.CLICK ON RETURN TO SIGN IN BUTTON BELOW",
      placeholder: "NO CODE HERE!!",
      isRequired: false,
    },
  },
};

const services = {
  async handleSignUp(formData) {
    let { username, password, attributes } = formData;
    // custom username
    username = username.toLowerCase();
    attributes.email = attributes.email.toLowerCase();
    // check if you are able to get custom attribute name at back end
    // attributes.organization = attributes.nickname.toLowerCase();
    //attributes.nickname = attributes.nickname.toLowerCase();
    console.log(attributes);
    return Auth.signUp({
      username,
      password,
      attributes,
    });
  },
};

window.addEventListener("load", function () {
  document.getElementsByTagName("input")[4].placeholder = "Organization";
  document.getElementsByTagName("label")[4].innerText = "Organization";
});

window.addEventListener("click", function () {
  document.getElementsByTagName("input")[4].placeholder = "Organization";
  document.getElementsByTagName("label")[4].innerText = "Organization";
});

function signInButton() {
    window.open('https://www.datasubmission.ausseabed.gov.au/', '_self', '');
    window.close();
    
 };
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

