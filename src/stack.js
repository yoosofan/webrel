function Stack(num)
{
	this.type=new Array(num);
	for(var r=0;r<num;r++)
		this.type[r]=new Type();
	this.simple_value=new Array(num);
	this.relation=new Array(num);
	for(var k=0;k<num;k++)
		this.relation[k]=new Relation(1,1);
	this.commalist=new Array(num);
	for(var i=0;i<num;i++)
	{	
		this.commalist[i]=new Array();
		for(var j=0;j<20;j++)
			this.commalist[i][j]=new Array();
	}
	this.tdarray=new Array(num);
	for(var t=0;t<num;t++)
		this.tdarray[t]=new Array();
	this.t=new Array(num);
	for(var d=0;d<num;d++)
		this.t[d]=new Token(1);
	
	
		
	this.str_name=new Array(num)
		
	this.pushs=Stack_push;
	this.pops=Stack_pop;
	this.tos=Stack_tos;
}
//******************************
function Stack_push(type,value,name)
{
	if(type=="number")
	{
		this.type[sp].settype(type);
		this.simple_value[sp]=value;		
		this.str_name[sp]=name;
	}
	else if(type=="simple_variable")
	{
		this.type[sp].settype(type);
		this.simple_value[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="opr_variable")
	{
		this.type[sp].settype(type);
		this.simple_value[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="relation")
	{
		this.type[sp].settype(type);
		this.relation[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="index")
	{
		this.type[sp].settype(type);
		this.simple_value[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="array_two")
	{
		this.type[sp].settype(type);
		this.commalist[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="simple_two")
	{
		this.type[sp].settype(type);
		this.tdarray[sp]=value;
		this.str_name[sp]=name;
	}
	else if(type=="token")
	{
		this.type[sp].settype(type);
		this.t[sp]=value;
		this.str_name[sp]=name;
	}
	sp++;
}
//******************************
function Stack_pop()
{
	sp--;
	if(this.type[sp].gettype()=="number")
		return this.simple_value[sp];
	else if(this.type[sp].gettype()=="simple_variable")
		return this.simple_value[sp];
	else if(this.type[sp].gettype()=="opr_variable")
		return this.simple_value[sp];
	else if(this.type[sp].gettype()=="relation")
		return this.relation[sp];
	else if(this.type[sp].gettype()=="index")
		return this.simple_value[sp];
	else if(this.type[sp].gettype()=="array_two")
		return this.commalist[sp];
	else if(this.type[sp].gettype()=="simple_two")
		return this.tdarray[sp];
	else if(this.type[sp].gettype()=="token")
		return this.t[sp].getdata(0);
}
//*********************************
function Stack_tos()
{
	if(this.type[sp-1].gettype()=="number")
		return this.simple_value[sp-1];
	else
		return this.str_name[sp-1];
	/*else if(this.type[sp].gettype()=="opr_variable")
		return this.simple_value[sp-1];
	else if(this.type[sp].gettype()=="relation")
		return this.relation[sp-1];
	else if(this.type[sp].gettype()=="index")
		return this.simple_value[sp-1];
	else if(this.type[sp].gettype()=="array_two")
		return this.commalist[sp-1];
	else if(this.type[sp].gettype()=="simple_two")
		return this.tdarray[sp-1];
	else if(this.type[sp].gettype()=="token")
		return this.t[sp-1];*/	
}