<template>
  <img src="/banner.svg" style="width: 100%" />
  <img src="/Logo.png" style="margin-bottom: 20px" />
  <authenticator
    :services="services"
    initial-state="signIn"
    :form-fields="formFields"
    :sign-up-attributes="['email', 'username', 'nickname']"
    :confirm-sign-up="[]"
  >
    
    
    <template v-slot="{ user, signOut }">
      <h1>Hi {{ user.username }}!</h1>
      
        <p>&nbsp;</p>
<p style="text-align: center;"><span data-contrast="none">Congratulations you have successfully generated a new secure storage location and will soon receive an email with your personalised storage bucket and Amazon credentials.</span><span data-ccp-props="{&quot;134233117&quot;:true,&quot;134233118&quot;:true,&quot;201341983&quot;:0,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559739&quot;:160,&quot;335559740&quot;:240}">&nbsp;</span></p>
<p style="text-align: center;"><span data-contrast="none">Please be aware that this location will only remain active for 30 days. If you require any assistance please contact </span><a href="mailto:AusSeabed@ga.gov.au"><span data-contrast="none">AusSeabed@ga.gov.au</span></a><span data-contrast="none">&nbsp;</span><span data-ccp-props="{&quot;134233117&quot;:true,&quot;134233118&quot;:true,&quot;201341983&quot;:0,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559739&quot;:160,&quot;335559740&quot;:240}">&nbsp;</span></p>
<p style="text-align: center;"><span data-contrast="none">In the meantime please find some useful links that should help you get started.</span><span data-ccp-props="{&quot;134233117&quot;:true,&quot;134233118&quot;:true,&quot;201341983&quot;:0,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559739&quot;:160,&quot;335559740&quot;:240}">&nbsp;</span></p>
<p style="text-align: left; padding-left: 80px;">&nbsp;</p>
<p><span data-ccp-props="{&quot;134233117&quot;:true,&quot;134233118&quot;:true,&quot;201341983&quot;:0,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559739&quot;:160,&quot;335559740&quot;:240}">&nbsp;</span></p>
<p style="text-align: left; padding-left: 120px;"><strong><span data-contrast="none">Useful links</span></strong><span data-ccp-props="{&quot;134233117&quot;:true,&quot;134233118&quot;:true,&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:240}">&nbsp;</span></p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider">&nbsp;</span><span class="x_ui-provider"><strong>AusSeabed&nbsp;Incoming&nbsp;Data&nbsp;Policies&nbsp;and&nbsp;Procedures</strong></span><span class="x_ui-provider">&nbsp;</span></p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider"><a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/overview" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="3">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview&nbsp;</a></span></p>
<p style="text-align: left; padding-left: 120px;">&nbsp;</p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider">&nbsp;</span><span class="x_ui-provider"><strong>How&nbsp;do&nbsp;I&nbsp;submit&nbsp;my&nbsp;data&nbsp;-&nbsp;Help&nbsp;Guides</strong></span><span class="x_ui-provider">&nbsp;</span></p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider">&nbsp;<a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/pages/743964697" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="4">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697&nbsp;</a></span></p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider">This includes links to useful software (and guides) for connecting to AWS s3 buckets</span></p>
<p style="text-align: left; padding-left: 120px;">&nbsp;</p>
<p style="text-align: left; padding-left: 120px;">&nbsp;<span class="x_ui-provider"><strong>What&nbsp;data&nbsp;and&nbsp;formats&nbsp;-&nbsp;Product&nbsp;Specifications</strong></span><span class="x_ui-provider">&nbsp;</span></p>
<p style="text-align: left; padding-left: 120px;"><span class="x_ui-provider">&nbsp;</span><span class="x_MsoHyperlink"><a href="https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5">https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications&nbsp;</a></span></p>
<p class="x_MsoListParagraph" style="text-align: left; padding-left: 120px;">&nbsp;</p>
      
      <button @click="signOut">Sign Out</button>
    </template>
    
    <template v-slot:confirm-sign-up-header>
      <div class="amplify-flex" style="flex-direction: column;">
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl) ; color: red"
        >
          NO CODE IS SENT OUT
        </h3>
      
      </div>
      
    </template>
   
    
    <template v-slot:confirm-sign-up-footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
      <p class="amplify-text" style="color: var(--amplify-colors-red-80)">
      <button @click="signInButton()">Return to Sign In</button>
      </p>
      </div>
    </template>
  
    <template v-slot:sign-up-footer>
      <div style="padding: var(--amplify-space-large); text-align: justify">
        <p class="amplify-text" style="color: var(--amplify-colors-red-60) ;font-size: var(--amplify-font-sizes-small)">
          * Password Requirments: Minimum 8 characters in length and containing at least, 1 Uppercase, 1 Lowercase, 1 Special character 
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
    window.open('https://trial-vue.vercel.app/', '_self', '');
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
