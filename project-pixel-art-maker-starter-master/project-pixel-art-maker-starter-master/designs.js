window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
 
    document.getElementById("sizePicker").addEventListener("submit", function(e) {
        e.preventDefault();

        //This gets the height the user put in which is the same as the row.
        var rows = document.getElementById('inputHeight').value;

        //This gets the width the user put in which is the same as the column.
        var columns = document.getElementById('inputWidth').value;

        //This gets the table object from the page.
        var table = document.getElementById('pixelCanvas');
      //This clears the table
        table.innerHTML = "";
        
        // This loop creates a row of cells.
        for (var i = 1; i <= rows; i++) {
          var row =  document.createElement("tr");

          // This loop creates a column for the row.
          for (var j = 1; j <= columns; j++) {
            // This loop adds cells after every row
            var col = document.createElement("td");
            col.style.backgroundColor = "rgb(255, 255, 255)";
            col.addEventListener("click",function(e){
                var color = document.getElementById('colorPicker').value;
                // Toggle color.
                e.target.style.backgroundColor = 
                 e.target.style.backgroundColor  === "rgb(255, 255, 255)"? color : "rgb(255, 255, 255)";
                color;
                console.log(color);
            });
            row.append(col);
            
          }
          table.append(row);
        }
    
    });
});







