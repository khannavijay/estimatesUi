 //gets table
 var oTable = document.getElementById('itemsList');

 //gets rows of table
 var rowLength = oTable.rows.length;

 //loops through rows    
 for (i = 1; i < rowLength; i++){

   //gets cells of current row  
    var oCells = oTable.rows.item(i).cells;

    //gets amount of cells of current row
    var cellLength = oCells.length;

    //loops through each cell in current row
    for(var j = 0; j < cellLength; j++){

           // get your cell info here

           var cellVal = oCells.item(j).innerHTML;
        //    alert(cellVal);
        }
 }


 function addToTable(){
       let catogary =  document.getElementById("categoryDataList").value;
       let item = document.getElementById("itemDataList").value;
       let size = document.getElementById("sizeDataList").value;
       let qty = document.getElementById("inputQty").value;
       let price = document.getElementById("inputPrice").value;
       let amount = qty*price;
       let ItemRemarks = document.getElementById("ItemRemarks").value;

       let invoiceBody = document.getElementById("invoiceBody");

       rowLength = oTable.rows.length;
       console.log(rowLength);
       
       var row = invoiceBody.insertRow(-1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       var cell8 = row.insertCell(7);

       cell1.innerHTML = rowLength;
       cell2.innerHTML = catogary;       
       cell3.innerHTML = item;
       cell4.innerHTML = size; 
       cell5.innerHTML = qty;
       cell6.innerHTML = price; 
       cell7.innerHTML = amount;
       cell8.innerHTML = ItemRemarks; 

       document.getElementById("entryForm").reset();
 }