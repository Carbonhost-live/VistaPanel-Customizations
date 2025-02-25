# cPanel Logo to Copyright

## What does it do?  
It changes the cPanel logo at the footer to your company logo.

## Where should I put it?  
You can put it anywhere, although we recommend to put it on the Footer Advert Area.  

## How can I install it?   
Create a script tag with `src` pointing to `cpanel-logo-to-copyright.js` or `cpanel-logo-to-copyright.min.js` for the minified version.

In case you do not know how to do that or are too lazy to do it, we have provided a ready code below.

### How to initialize it?
An object called "b" (lowercase) must be initialized with the following variables:  

    * company_name -> Company Name  
    * company_logo -> Company Logo  
    * company_started -> Year Company Started Exsisting or Publicablly Announced  
    * prm_site -> Primary site URL (With HTTP:// or HTTPS://)  

Example :  
    ```
    var b = {  
        company_name : "Planet Cloud Hosting",  
        company_logo : "http://planetcloudhosting.cf/images/logo.png",  
        company_started : "2017",  
        prm_site : "http://planetcloudhosting.cf",  
    }  
    ```

###  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
To solve this, we need an external service which adds the correct type, like jsDelivr, or our CDN.

The full code, using jsDelivr:

```html
<script type="text/javascript">  

    var b = {  
        company_name : "Your company name",  
        company_logo : "Your company logo",  
        company_started : "What year did your company start?",  
        prm_site : "Your Primary site URL (With HTTP:// or HTTPS://)",  
    }  

</script>  
<script src="https://cdn.jsdelivr.net/gh/WybeNetwork/VistaPanel-Customizations@2.3.0/cpanel-logo-to-copyright/cpanel-logo-to-copyright.js" type="text/javascript"></script>  
```
Alternatively, you can use our CDN:
```html
<script type="text/javascript">  

    var b = {  
        company_name : "Your company name",  
        company_logo : "Your company logo",  
        company_started : "What year did your company start?",  
        prm_site : "Your Primary site URL (With HTTP:// or HTTPS://)",  
    }  

</script>  
<script src="https://vpc.cdn.wybenetwork.com/cpanel-logo-to-copyright/cpanel-logo-to-copyright.js" type="text/javascript"></script>  
```