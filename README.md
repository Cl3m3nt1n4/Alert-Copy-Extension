# Alert-Copy-Extension
### Allows to copy alerts with linebreaks by converting them to prompts! on Chrome

This Chrome extension was created because many web applications send alerts with linebreaks. This makes them impossible to copy on Chrome and sometimes they have useful information, thus this workaround extension was born. Fixes temporarily the issue until it is fixed on the app side.

This works by intercepting the alert() and converting it to a prompt(). Since the last can have a default answer written on an writable field, the content of the first is set as that default. To help this information is already select so to copy just our CTRL+C is needed. After that you may Ok/Cancel the prompt. 

This WA works for most applications, however in certains scenarios this may result in the app hanging indefinitely, rendering it useless. 

WARNING: Prolonged usage of this extensions may result or be the result of a layzy devolpment team :) 
