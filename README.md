# chainjs
a data based html link system for page navigation

USAGE:
to use chain js first download the chainjs file and include it in your html project

  EX:
  <script src="chain.js"></script>

after doing this you may ade chain links. chain links are links to html code files that may be loaded in or out of a project

"https://user-images.githubusercontent.com/76224503/144657515-e8012d3c-a816-471b-9b29-84f467ecee03.PNG"

once you have added your html files you may link them to the index using chain-link elements

  EX:
  <chain-link link="test.html"></chain-link>
  
you may pass parameters for if you want your page to be loaded with the "if" statement

  EX:
   <chain-link if="0 === 0" link="test.html"></chain-link>
   
you may also use varibles with the chain-var element

  EX:
  <chain-var id="var_id" val=0></chain-var>
  <chain-link var="var_id" varif=0 link="test.html"></chain-link>
