# chainjs
a data based html link system for page navigation

USAGE:
to use chain js first download the chainjs file and include it in your html project

  EX:
  ```html
  <script src="chain.js"></script>'
  ```

after doing this you may ade chain links. chain links are links to html code files that may be loaded in or out of a project

<img width="162" alt="Capture" src="https://user-images.githubusercontent.com/76224503/144658268-460e6d4b-08fc-439e-87a9-c19c6aa2e35a.PNG">

once you have added your html files you may link them to the index using chain-node elements, these with load html content without changeing the url

  EX:
  ```html
  <chain-node link="test.html"></chain-link>
  ```
  
you may pass parameters for if you want your page to be loaded with the "if" statement

  EX:
  ```html
  <chain-noode if="0 === 0" link="test.html"></chain-link>
  ```  

you may also use varibles with the chain-var element

  EX:
  ```html
  <chain-var id="var_id" val=0></chain-var>
  <chain-node var="var_id" varif=0 if="0 === 0" link="test.html"></chain-link>
  ```
  
add the "and" attribute if you would like to render the html only if both the "if" and "varif" are true
  EX:
  ```html
  <chain-var id="var_id" val=0></chain-var>
  <chain-node and="true" var="var_id" varif=0 link="test.html"></chain-link>
  ```
