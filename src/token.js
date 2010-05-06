//--Identify a new type called Token to use as token in analyser(This object contains 2 attributes & 5 methods)--

function Token(num)
{
	if(num>0)
	{
		this.data=new Array(1);
		this.type=new Array(1);
	}
	this.getdata=Token_getdata
	this.gettype=Token_gettype	
	this.setdata=Token_setdata
	this.settype=Token_settype
	this.length=Token_length
}
//*************************************
function Token_getdata(num)
{	
	return this.data[num]
}
//*************************************
function Token_gettype(num)
{
	return this.type[num]
}
//*************************************
function Token_setdata(num,value)
{
	this.data[num]=value
}
//*************************************
function Token_settype(num,value)
{
	this.type[num]=value
}
//*************************************
function Token_length()
{
	return this.data.length;
}
