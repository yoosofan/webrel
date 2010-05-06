// JavaScript Document
function value_table(num)
{
		if(num>0)
		{
			this.name=new Array(num);
			this.relation=new Array(num);
			for(var k=0;k<num;k++)
				this.relation[k]=new Relation(1,1);	
		}
		this.setname=VT_setname;
		this.setrelation=VT_setrelation;
		this.getname=VT_getname;
		this.getrelation=VT_getrelation;
}
//*************************************************
function VT_setname(index,name)
{
	this.name[index]=name;
}
//*************************************************
function VT_setrelation(index,relation)
{
	this.relation[index]=relation;	
}
//*************************************************
function VT_getname(index)
{
	return this.name[index];
}
//*************************************************
function VT_getrelation(index)
{
	return this.relation[index];
}