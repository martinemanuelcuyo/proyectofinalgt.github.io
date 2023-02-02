function color() {
    var selectValue = document.getElementById("myseleccion").value;
    document.getElementById("dummy");
    document.body.style.backgroundColor = selectValue;
}
function imprim1(imp1){
    var printContents = document.getElementById('imp1').innerHTML;
    w = window.open();
    w.document.write(printContents);
    w.document.close(); // necessary for IE >= 10
    w.focus(); // necessary for IE >= 10
    w.print();
    w.close();
    return true;
  }