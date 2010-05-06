function Type()
{
	this.type=0;
	this.gettype=Type_gettype;
	this.settype=Type_settype;
}
//*********************************
function Type_gettype()
{
	return this.type;
}
//*********************************
function Type_settype(value)
{
	this.type=value;
}
