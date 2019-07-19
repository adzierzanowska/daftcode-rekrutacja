function filterFunction() {
  let input, filter, table, td, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  td = table.getElementsByTagName('td');

  
  for (let i = 0, row; row = table.rows[i]; i++) {
    a = table.rows[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
  }
}
