# PHP

<hr>

### Hodiny structure
1) Proměnné + základy
2) Práce s formulářem, Cookies, Sessions
3) Práce se soubory a API
4) Práce s databázemi
5) Opakování, Demo a příklady
### PHP Basics
*Source: W3schools.com*
##### What is PHP
- Server side scripting language, scripts are excecuted on the server
- Enables automatization
- Extension .php
- Can generate dynamic page content, can collect data, sends and recieves cookies, etc...
##### Setup
- XAMPP (Horizon built in)
  - C\:XAMPP\htdost...
- VSCODE Extension PHP
  - PHP (DEVSENSE)
##### Structure
- PHP Script is located in <? php ... ?>
  - `< ?php echo ``Hello world``;? >`
- Is not case sensitive
  - ECHO and echo are the exact same
- Variables saved using $
  - `$color = "red";`
  - Variables ARE case sensitive
  - They cannot start with a number
  - The $ sign has to be written down every time when mentioning a variable
- Comments can be written down using // /**/ and #
- Supported data types: String, Int, Float, Bool, Array, Object, Null
  - Same as JavaScript, excluding the split of Number into Int and Float (resembling c#)
- Variables have different scopes just like JavaScript
  - Static variables have static written down before declaration
  - PHP equivalent of a const variable
  - `static $variable = 0`
##### Basic commands
- **var_dump($variable)** - PHP equivalent of `typeof(variable)`; gets the data type of the provided variable
  - More data identification functions: `is_int(), is_float(), etc...`
- **echo / print (variable)** - Simple print command for PHP, the () can actually be excluded from the command - `echo "string";`
  - Able to concat strings with dots - `echo "string".$variable."string";`
  - Also able to append a string after a different one using .= `echo "string" .= "string";`
- **String and math functions**
  - String operating and math functions, very similar to JavaScript `TBA`
- **(data_type)$variable** - PHP casting - `(string), (int), (float), etc...`
- **define(CONSTANT_NAME, value)** - Constants
- **Loops, conditions and switches**
  - Only change for conditions is that else if turns into elseif `if, else, elseif`
  - Loops and switches are the exact same as JavaScript
- **RegEx**
  - Same as JavaScript, RegEx is availiable for PHP
- **Functions**
  - Once again, the same as JavaScript `function myFunction($variable){}`