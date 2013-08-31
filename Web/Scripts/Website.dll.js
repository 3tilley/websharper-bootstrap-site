(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,JavaScript,Html,Default,Operators,List,T,EventsPervasives,Site,Client;
 Runtime.Define(Global,{
  Site:{
   Client:{
    EntryPoint:function()
    {
     return JavaScript.Log("Loaded OK");
    },
    SampleButtons:function()
    {
     var op_Append,Button,Group,Content,x,f,x1,x2,f1,x3,x4,f2,x5;
     op_Append=function(a,b)
     {
      return(Default.NewAttr(a))(b);
     };
     Button=function(text)
     {
      var _this;
      return Operators.add(Default.Button(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","button")),Default.Attr().Class("btn btn-primary")])),List.ofArray([Default.Text(text)]));
     };
     Group=function(xs)
     {
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("btn-group"),op_Append("data-toggle","buttons-radio")])),xs);
     };
     Content=Default.Div(Runtime.New(T,{
      $:0
     }));
     return Default.Div(List.ofArray([Group(List.ofArray([(x=Button("Vikki"),(f=(x1=function()
     {
      return function()
      {
       return Content.set_Text("Test 1");
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     }),(f(x),x))),(x2=Button("Fole"),(f1=(x3=function()
     {
      return function()
      {
       return Content.set_Text("Test 2");
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x3,arg10);
     }),(f1(x2),x2))),(x4=Button("Everyone"),(f2=(x5=function()
     {
      return function()
      {
       return Content.set_Text("Test 3");
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x5,arg10);
     }),(f2(x4),x4)))])),Content]));
    }
   },
   Controls:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      Client.EntryPoint();
      return Default.Span(Runtime.New(T,{
       $:0
      }));
     }
    }),
    SampleButtons:Runtime.Class({
     get_Body:function()
     {
      return Client.SampleButtons();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  Operators=Runtime.Safe(Html.Operators);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Site=Runtime.Safe(Global.Site);
  return Client=Runtime.Safe(Site.Client);
 });
 Runtime.OnLoad(function()
 {
 });
}());
