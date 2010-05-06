ColoredTable.prototype=new Table;
//*************************
function Table_colorWrite(doc)
{
doc.write("<TABLE BORDER="+this.border+" bordercolor="+this.bordercolor+" WIDTH="+this.width+">")
doc.write("<TR>")
doc.write('<TD>')
doc.write("<TABLE BGCOLOR="+this.bgColor+" WIDTH="+this.width+" CELLSPACING="+this.cellspacing+">")
doc.write('<caption>')
doc.write(this.caption)
doc.write('</caption>')
for(var i=0;i<this.rows;++i)
{
doc.write("<TR>")
for(var j=0;j<this.columns;++j)
{
if(this.header[i*this.columns+j])
{
doc.write("<TH>")
doc.write(this.data[i*this.columns+j])
doc.write("</TH>")
}
else
{
doc.write('<td width="33%"><div align="center">')
doc.write(this.data[i*this.columns+j])
doc.write("</div></td>")
}
}
doc.writeln("</TR>")
}
doc.writeln("</TABLE>")
doc.write('</TD>')
doc.write("</TR>")
doc.writeln("</TABLE>")
}
//***************************
function Table_colorsave()
{
var text="";
text+="<TABLE BORDER="+this.border+" bordercolor="+this.bordercolor+" WIDTH="+this.width+">"
text+="<TR>"
text+='<TD>'
text+="<TABLE BGCOLOR="+this.bgColor+" WIDTH="+this.width+" CELLSPACING="+this.cellspacing+">"
text+='<caption>'
text+=this.caption
text+='</caption>'
for(var i=0;i<this.rows;++i)
{
text+="<TR>"
for(var j=0;j<this.columns;++j)
{
if(this.header[i*this.columns+j])
{
text+="<TH>"
text+=this.data[i*this.columns+j]
text+="</TH>"
}
else
{
text+='<td width="33%"><div align="center">'
text+=this.data[i*this.columns+j]
text+="</div></td>"
}
}
text+="</TR>"
}
text+="</TABLE>"
text+='</TD>'
text+="</TR>"
text+="</TABLE>"
return text
}
//***************************
function ColoredTable(rows,columns,bgColor)
{
this.rows=rows
this.columns=columns
this.bgColor=bgColor
this.width=200;
this.cellspacing=10;
this.caption="";
this.bordercolor="#000000"
this.data=new Array(rows*columns)
this.header=new Array(rows*columns)
this.write=Table_colorWrite
this.setwidth=Table_setwidth
this.setcaption=Table_setcaption
this.savetable=Table_colorsave
}
//***************************
function Table_setwidth(value)
{
	this.width=value
}
//***************************
function Table_setcaption(value)
{
	this.caption=value
}
//***************************
