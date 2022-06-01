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
      <div>
        <h1>You will recieve an email with link for instructions to follow</h1>
      </div>
      <button @click="signOut">Sign Out</button>
    </template>
    <template v-slot:confirm-sign-up-header>
      <h3
        class="amplify-heading"
        style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
      >
        NO CODE IS SENT OUT
      </h3>
    </template>
    
    <template v-slot:confirm-sign-up-footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
      <p class="amplify-text" style="color: var(--amplify-colors-red-80)">
      Please Close This Page.
      </p>
      </div>
    </template>
  </authenticator>

 
</template>




<script setup>
import { onMounted } from "vue";
import {
  Authenticator,
  AuthenticatorSignUpFormFields,
} from "@aws-amplify/ui-vue";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
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
      labelHidden: false,
      label:
        "NO CODE IS SENT OUT, WATCH OUT FOR THE APPROVAL EMAIL IN YOUR INBOX AND PROCEED TO SIGN IN PAGE WITH SET CREDENTIALS",
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
