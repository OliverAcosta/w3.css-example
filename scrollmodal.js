function makeScrollItems()
{
    var tdTabs = "<tr>";
    var i = 0;
    var colorsArray = ["w3-green","w3-red","w3-yellow","w3-blue","w3-black"];
    var currentColor = 0;
    for(;i<500; i++)
    {
        if(i> 0 && i % 5 == 0)
        {
            tdTabs += "</tr>";
            tdTabs += "<tr>";
        }
       
        if(i > 0 && i % 100 == 0)
        {
            currentColor++;
        }
       
        tdTabs += '<td class="'+colorsArray[currentColor]+'" > current row' + i + '</td>';
    }
    console.log(tdTabs);
    document.getElementById("table-content").innerHTML = tdTabs;
}

window.onload = function()
{
    makeScrollItems();
}
