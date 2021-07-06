# JavaScript: Password Generator
# client-password-generator

## Description

In this project I modified starter code to create an application that enables a client to generate random passwords based on criteria that they’ve selected. This app will run in the browser from the index.html and features dynamically updated HTML and CSS that is powered by the JavaScript logic. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include lowercase, uppercase, numeric, and special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation. The Javascript uses the .fromCharCode method to calculate each symbol using Math.random.

## Link
GitHub URL: https://purpleamaranth.github.io/client-password-generator/

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Ideas

Future Projects:
Add check box section for different functionality:
<!-- Sample HTML:
          <p>Please select your password criteria:</p>
          <!-- <form>
            <input type="checkbox" name="criteria" value="lowercase">Lowercase
            <input type="checkbox" name="criteria" value="uppercase">Uppercase
            <input type="checkbox" name="criteria" value="numerical">Numeric
            <input type="checkbox" name="criteria" value="special">Special
            <input type="checkbox" name="criteria" value="punctuation">Punctuation
            <div>
              <br/>
              Password Length:<input type="number" name="criteria" value="length">
              <button id="submit">Submit</button>
            </div>
            <hr />
          <script src="script.js"></script>
        </form> -->

## User Flow

```
*** Instructions ***

To generate a secure password:

Click the red "generate" button to generate a password.
Click through the series of prompts for password criteria.
Choose a length of at least 8 characters and no more than 128 characters.
Choose between including lowercase, uppercase, numeric, and/or special characters.

*** The input is validated and at least one character type should be selected
or the prompts will cycle back through until a favorable answer is made. ***

A password is then generated that matches the selected criteria and is displayed in the generator box.
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./assets/images/javascript-demo.png)
