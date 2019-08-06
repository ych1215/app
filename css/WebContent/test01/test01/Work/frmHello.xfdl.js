(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("frmHello");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds1", this);
            obj._setContents("<ColumnInfo><Column id=\"aa\" type=\"STRING\" size=\"256\"/><Column id=\"bb\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aa\">111</Col><Col id=\"bb\">1111</Col></Row><Row><Col id=\"aa\">222</Col><Col id=\"bb\">2222</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds2", this);
            obj._setContents("<ColumnInfo><Column id=\"d\" type=\"STRING\" size=\"256\"/><Column id=\"c\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"d\">232323</Col><Col id=\"c\">3232323</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "0.78%", "6", null, "51", "80.66%", null, this);
            obj.set_taborder("0");
            obj.set_text("하이\r\n하잉");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "0.98%", "72", null, "36", "74.41%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "28.13%", "77", null, "38", "47.27%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.15%", "144", null, "247", "32.81%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"d\"/><Cell col=\"1\" text=\"c\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:d\"/><Cell col=\"1\" edittype=\"combo\" text=\"bind:c\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds1","aa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit00","","ds1","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","ds1","aa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit01","","ds1","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Grid00","binddataset","ds2","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmHello.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	// this 는 자바스크립트와 상관없는 현재 폼의 this란뜻임.
        	// . 찍으면 빨간, 검정 , 녹색 보이는대 
        	// 빩간: 함수
        	// 검정:속성
        	// 녹색: 화면에 보여지는 컴퍼넌트 id
        	
        	
        	this.alert("test") ; 
        	
        	alert(obj.id);
        	
        	alert( obj.name );
        }

        this.Edit00_oneditclick = function(obj,e)
        {
        	
        }

        this.ds1_oncolumnchanged = function(obj,e)
        {
        	this.alert(e.row);
        	this.alert(e.columnid);
        	
        	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds1.addEventHandler("oncolumnchanged", this.ds1_oncolumnchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Edit00.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Edit01.addEventHandler("oneditclick", this.Edit00_oneditclick, this);

        };

        this.loadIncludeScript("frmHello.xfdl", true);

       
    };
}
)();
