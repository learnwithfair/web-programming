

<?php
    $sum = null;
    $opa = null;
    $x   = 0;
    $y   = 0;

    if ( isset( $_POST["ADD"] ) ) {
        $x   = $_POST['fnum'];
        $y   = $_POST['snum'];
        $opa = $_POST["ADD"];
        $sum = $x + $y;
    } else if ( isset( $_POST["SUB"] ) ) {
        $x   = $_POST['fnum'];
        $y   = $_POST['snum'];
        $opa = $_POST["SUB"];
        $sum = $x - $y;
    } else if ( isset( $_POST["MUL"] ) ) {
        $x   = $_POST['fnum'];
        $y   = $_POST['snum'];
        $opa = $_POST["MUL"];
        $sum = $x * $y;
    } else if ( isset( $_POST["DIV"] ) ) {
        $x   = $_POST['fnum'];
        $y   = $_POST['snum'];
        $opa = $_POST["DIV"];
        $sum = $x / $y;
        $sum = number_format( $sum, 3 ); //this method will show only 3 number after float point
    }
?>
<html>
<head>
<style>

body{
	background-color:#ddd;
	font-size:30px;
	}
	.div2
	{
		height:80%;
		width:45%;
		float:left;
		font-size:30px;
		margin:auto;
	}
	.div1
	{
		height:80%;
		width:50%;
		float:right;
	}
	.cal
	{
         height:20%;
		font-size:50px;
		color:blue;
		margin:auto;

	}
	input{
			font-size:30px;
	}
	textarea
	{
		font-size:30px;
	}

label{
	color:red;
}
.v {
  border-right: 2px solid black;
  height: 250px;
}
</style>

</head>
<body>
<div class="cal">
<center>
    Calculator
</center>
<hr/>
</div>
<div class="div1">

  <label>Result </label> <hr/>

  <textarea rows="3"cols="33">
  <?php
      if ( $sum == null ) {
          echo "$sum";
      } else {
          echo " $x $opa $y=$sum";
      }

  ?>
  </textarea>
 </div>
 <div class="div2">
 <div class="vl">
<form method="post" action="">
<label>Input </label> <hr/>
Enter 1st number <input type="text" name="fnum" required/><br/><br/>
Enter 2nd number <input type="text" name="snum" required/><hr/>
<input type="submit" name="ADD" value="ADD"/>
<input type="submit" name="SUB" value="SUB"/>
<input type="submit" name="MUL" value="MUL"/>
<input type="submit" name="DIV" value="DIV"/>
</form>
</div>
</div>
</body>
</html>