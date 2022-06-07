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
        <p><img src="https://raw.githubusercontent.com/getjaleel/Ausseabed-Prod-CDP/main/src/assets/banner.svg" alt="Banner-line" width="600" height="18"/></p><p>&nbsp;</p><p><img src="https://raw.githubusercontent.com/getjaleel/Ausseabed-Prod-CDP/main/src/assets/Australian-Government-Logo.svg" alt="Australian Government logo" width="132" height="66"/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://raw.githubusercontent.com/getjaleel/Ausseabed-Prod-CDP/main/src/assets/logo.png" alt="Ausseabed-Logo" width="153" height="71"/></p><p>&nbsp;</p><p>Hi,</p><p>&nbsp;</p><table style="height: 56px; width: 533px; margin-left: auto; margin-right: auto;" border="1" cellpadding="15"><tbody><tr style="height: 28px;"><td style="width: 98.7656px; text-align: center; height: 28px;"><strong>Bucket Name</strong></td><td style="width: 122.898px; text-align: center; height: 28px;"><strong>Access Keys</strong></td><td style="width: 175.336px; text-align: center; height: 28px;"><strong>Secret Access Key</strong></td></tr><tr style="height: 28px;"><td style="width: 98.7656px; height: 28px;"><div><div style="text-align: center;">{userBucket}</div></div></td><td style="width: 122.898px; text-align: center; height: 28px;"><div><div>{userAccessKey}</div></div></td><td style="width: 175.336px; text-align: center; height: 28px;"><div><div>{userSecretAccessKey}</div></div></td></tr></tbody></table><p style="text-align: center;">&nbsp;</p><table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 708.109px;"><p><span style="text-decoration: underline;"><strong><span class="x_ui-provider">Useful&nbsp;links</span></strong></span><br aria-hidden="true"/><br aria-hidden="true"/></p><p><span class="x_ui-provider">&nbsp; &nbsp; &nbsp;</span><span class="x_ui-provider"><strong>AusSeabed&nbsp;Incoming&nbsp;Data&nbsp;Policies&nbsp;and&nbsp;Procedures</strong></span><span class="x_ui-provider">&nbsp;</span></p><p style="padding-left: 40px;"><span class="x_ui-provider">(link is&nbsp;<a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/overview" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="3">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/overview</a>)</span></p><p><span class="x_ui-provider">&nbsp; &nbsp; &nbsp;</span><span class="x_ui-provider"><strong>How&nbsp;do&nbsp;I&nbsp;submit&nbsp;my&nbsp;data&nbsp;-&nbsp;Help&nbsp;Guides</strong></span><span class="x_ui-provider">&nbsp;</span></p><p style="padding-left: 40px;"><span class="x_ui-provider">(link is&nbsp;<a title="https://asbdatamanagement.atlassian.net/wiki/spaces/aidpp/pages/743964697" href="https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="4">https://asbdatamanagement.atlassian.net/wiki/spaces/AIDPP/pages/743964697</a>)</span></p><p style="padding-left: 40px;">&nbsp; <span class="x_ui-provider">This includes links to useful software (and guides) for connecting to AWS s3 buckets</span></p><p>&nbsp; &nbsp; &nbsp; <span class="x_ui-provider"><strong>What&nbsp;data&nbsp;and&nbsp;formats&nbsp;-&nbsp;Product&nbsp;Specifications</strong></span><span class="x_ui-provider">&nbsp;</span></p><p style="padding-left: 40px;"><span class="x_ui-provider">(link is </span><span class="x_MsoHyperlink"><a href="https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="5">https://asbdatamanagement.atlassian.net/wiki/spaces/AF/pages/946176043/Landing+Page+-+Product+Specifications</a>)</span></p><p class="x_MsoListParagraph">&nbsp;</p><p class="x_MsoListParagraph">&nbsp;</p><p class="x_MsoListParagraph">&nbsp;</p><p class="x_MsoListParagraph">Regards,</p><p class="x_MsoNormal"><span class="x_ui-provider">The&nbsp;AusSeabed&nbsp;Team</span><br aria-hidden="true"/><span class="x_ui-provider">eMail:&nbsp;AusSeabed@ga.gov.au</span><br aria-hidden="true"/><span class="x_ui-provider">web:&nbsp;<a title="https://www.ausseabed.gov.au/" href="https://www.ausseabed.gov.au/" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-linkindex="1">https://www.ausseabed.gov.au</a></span></p><p style="text-align: justify;">Geoscience Australia acknowledges the Traditional Custodians of Country throughout Australia and recognises the continuing connection to lands, waters, and communities. We pay our respects to Aboriginal and Torres Strait Islanders cultures; and to elders past, present, and emerging.</p></td></tr></tbody></table><div><div><div><div><div><div><table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td><div><p style="text-align: justify;">********************************************************************** <br/>IMPORTANT: This e-mail is for the use of the intended recipient only and may contain information that is confidential, commercially valuable and/or subject to legal or parliamentary privilege. If you are not the intended recipient you are notified that any review, re-transmission, disclosure, dissemination or other use of, or taking of any action in reliance upon, this information is prohibited and may result in severe penalties. If you have received this e-mail in error please notify the sender immediately and delete all electronic and hard copies of this transmission together with any attachments. Please consider the environment before printing this e-mail <br/>**********************************************************************</p></div></td></tr></tbody></table></div></div></div></div></div></div><div><div><div>&nbsp;</div></div></div><p>&nbsp;</p>
      </div>
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

