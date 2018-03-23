const tagsFunction = (e) => {
    e.preventDefault();

const tagDropdown =$('<ul />').addClass('dropdown-content', 'red');
const tagRed =$('<li <a /> />').attr('href , #!').text('red');
console.log(tagRed);
    // $(e.target).parent();
     //console.log($(this).parent())
    //alert("casi borra");

$tagDropdown.append(tagRed)
}

module.exports = tagsFunction;


/*<ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>*/
