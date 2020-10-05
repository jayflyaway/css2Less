# css2Less
Front-End based on https://github.com/sshmyg/css2less
Converts css strings to less

Test it here: https://jayflyaway.github.io/css2Less/

### additional functions:

- textfield for input
- alert on a non valid css operation


### todos: 
- make options as checkboxes
- print out custom error messages

-------
### Options:
#### options.indentSize
Type: `Number`  
Default value: `1`  
Desc: Indent size.

#### options.vendorPrefixesList
Type: `Array`  
Default value: `["-moz", "-o", "-ms", "-webkit"]`  
Desc: List of vendor prefixes.

#### options.indentSymbol
Type: `String`  
Default value: `\t`  
Desc: Indent symbol.

#### options.selectorSeparator
Type: `String`  
Default value: `,\n`  
Desc: Selector separator.

#### options.blockFromNewLine
Type: `Bolean`  
Default value: `false`  
Desc: Start first '{' from the new line

#### options.blockSeparator
Type: `String`  
Default value: `\n`  
Desc: Separator between blocks.

#### options.updateColors
Type: `Bolean`  
Default value: `false`  
Desc: Use variables for colors.

#### options.vendorMixins
Type: `Boolean`  
Default value: `true`  
Desc: Create function for vendor styles.
