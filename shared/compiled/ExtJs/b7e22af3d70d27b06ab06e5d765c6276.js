
var availableGrid;var selCombo='';var assignedGrid;var editor;var store;var assignButton;var assignAllButton;var removeButton;var removeAllButton;var tmp1=new Array();var pageSize=50;var mainMask=new Ext.LoadMask(Ext.getBody(),{msg:_('ID_PLEASE_WAIT')});var bbarpaging;Ext.onReady(function(){mainMask=new Ext.LoadMask(Ext.getBody(),{msg:_('ID_PLEASE_WAIT')});var fm=Ext.form;var fieldsCount=0;storeA=new Ext.data.GroupingStore({proxy:new Ext.data.HttpProxy({url:'../pmTablesProxy/getDynafields'}),reader:new Ext.data.JsonReader({root:'rows',totalProperty:'count',fields:[{name:'FIELD_UID'},{name:'FIELD_VALIDATE'},{name:'FIELD_NAME'},{name:'_index'},{name:'_isset'}]}),listeners:{beforeload:function(store,options)
{var p={PRO_UID:(PRO_UID!==false)?PRO_UID:Ext.getCmp("PROCESS").getValue()};if(Ext.getCmp("REP_TAB_TYPE").getValue()=="GRID"&&Ext.getCmp("REP_TAB_GRID").getValue()!=""){p.TYPE="GRID";p.GRID_UID=Ext.getCmp("REP_TAB_GRID").getValue();}
if(Ext.getCmp("searchTxt").getValue()!=""){p.textFilter=Ext.getCmp("searchTxt").getValue();}
this.baseParams=p;},load:function(){Ext.getCmp('availableGrid').store.sort();storeA.setBaseParam('PRO_UID',(PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue()));mainMask.hide();assignedGrid._setTitle();}},baseParams:{PRO_UID:''},remoteSort:false});storeA.setDefaultSort('FIELD_NAME','asc');cmodelA=new Ext.grid.ColumnModel({defaults:{width:55,sortable:true},columns:[{id:'FIELD_UID',dataIndex:'FIELD_UID',hidden:true,hideable:false},{dataIndex:'FIELD_VALIDATE',hidden:true,hideable:false},{dataIndex:'_index',hidden:true,hideable:false},{dataIndex:'_isset',hidden:true,hideable:false},{header:_("ID_DYNAFORM_FIELDS"),dataIndex:'FIELD_NAME',sortable:true,align:'left'}]});smodelA=new Ext.grid.RowSelectionModel({selectSingle:false,listeners:{selectionchange:function(sm){switch(sm.getCount()){case 0:Ext.getCmp('assignButton').disable();break;default:Ext.getCmp('assignButton').enable();break;}}}});storePageSize=new Ext.data.SimpleStore({fields:['size'],data:[['20'],['30'],['40'],['50'],['100']],autoLoad:true});comboPageSize=new Ext.form.ComboBox({typeAhead:false,mode:'local',triggerAction:'all',store:storePageSize,valueField:'size',displayField:'size',width:50,editable:false,listeners:{select:function(c,d,i){bbarpaging.pageSize=parseInt(d.data['size']);bbarpaging.moveFirst();}}});comboPageSize.setValue(pageSize);bbarpaging=new Ext.PagingToolbar({id:'editReportBbarpaging',pageSize:pageSize,store:storeA,displayInfo:true,displayMsg:'{0} - {1} '+_('ID_DISPLAY_OF')+' {2}',emptyMsg:_('ID_NO_RECORDS')});availableGrid=new Ext.grid.GridPanel({layout:'fit',region:'center',id:'availableGrid',ddGroup:'assignedGridDDGroup',enableDragDrop:true,stripeRows:true,autoWidth:true,stripeRows:true,height:100,width:290,stateful:true,stateId:'gridEditReport',enableHdMenu:false,columnLines:false,viewConfig:{forceFit:true},cm:cmodelA,sm:smodelA,store:storeA,listeners:{rowdblclick:AssignFieldsAction},tbar:[{xtype:'textfield',id:'searchTxt',ctCls:'pm_search_text_field',allowBlank:true,width:220,emptyText:_('ID_EMPTY_SEARCH'),listeners:{specialkey:function(f,e){if(e.getKey()==e.ENTER){filterAvFields();}}}},{id:'availableGridButtonClear',text:'X',ctCls:'pm_search_x_button',handler:function(){Ext.getCmp('searchTxt').setValue('');filterAvFields();}},{id:'availableGridButtonSearch',text:_('ID_FILTER'),handler:function(){filterAvFields();}}],bbar:bbarpaging});var filterAvFields=function(){storeA.reload({params:{textFilter:Ext.getCmp('searchTxt').getValue(),start:bbarpaging.cursor,limit:pageSize}});}
sm=new Ext.grid.RowSelectionModel({selectSingle:false,listeners:{rowselect:function(sm){validateFieldSizeAutoincrement(assignedGrid.getSelectionModel().getSelected().get('field_type'),false);},selectionchange:function(sm){switch(sm.getCount()){case 0:Ext.getCmp('removeButton').disable();Ext.getCmp('removeColumn').disable();break;case 1:var record=Ext.getCmp('assignedGrid').getSelectionModel().getSelected();Ext.getCmp('removeButton').enable();if(record.data.field_dyn==''&&record.data.field_name!='APP_UID'&&record.data.field_name!='APP_NUMBER'&&record.data.field_name!='ROW'){Ext.getCmp('removeColumn').enable();}
break;default:Ext.getCmp('removeButton').enable();Ext.getCmp('removeColumn').disable();break;}}}});var checkColumn=new Ext.grid.CheckColumn({header:'Filter',dataIndex:'FIELD_FILTER',id:'FIELD_FILTER',width:55});var sizeField=new fm.NumberField({name:'sizeEdit',id:'sizeEdit',allowBlank:true,allowDecimals:false,allowNegative:false,disabled:true,nanText:'This field should content a number',minValue:1,maxValue:99,minLength:0,listeners:{render:function(){validateFieldSizeAutoincrement(assignedGrid.getSelectionModel().getSelected().get('field_type'),false);}}});var cmColumns=[{id:'uid',dataIndex:'uid',hidden:true,hideable:false},{dataIndex:'_index',hidden:true,hideable:false},{dataIndex:'_isset',hidden:true,hideable:false},{id:'field_uid',dataIndex:'field_uid',hidden:true,hideable:false},{id:'field_key',dataIndex:'field_key',hidden:true,hideable:false},{id:'field_index',dataIndex:'field_index',hidden:true,hideable:false},{id:'field_null',dataIndex:'field_null',hidden:true,hideable:false},{id:'field_dyn',header:_("ID_DYNAFORM_FIELD"),dataIndex:'field_dyn',width:220,editor:{xtype:'displayfield',style:'font-size:11px; padding-left:7px'}},{id:'field_name',header:_("ID_FIELD_NAME"),dataIndex:'field_name',width:220,editor:{xtype:'textfield',allowBlank:true,listeners:{change:function(f,e){this.setValue(this.getValue().toUpperCase());}}}},{id:'field_label',header:_("ID_FIELD_LABEL"),dataIndex:'field_label',width:220,editor:{xtype:'textfield',allowBlank:true}},{id:'field_type',header:_("ID_TYPE"),dataIndex:'field_type',width:105,editor:new fm.ComboBox({typeAhead:true,triggerAction:'all',editable:false,lazyRender:true,mode:'local',displayField:'type',valueField:'type_id',store:new Ext.data.SimpleStore({fields:['type_id','type'],data:columnsTypes,sortInfo:{field:'type_id',direction:'ASC'}}),listeners:{beforerender:function(combo)
{if(combo.getValue()==""&&combo.store.getAt(0)){combo.setValue(combo.store.getAt(0).get(combo.valueField));}},beforeshow:function(combo)
{if(combo.getValue()==""&&combo.store.getAt(0)){combo.setValue(combo.store.getAt(0).get(combo.valueField));}},'select':function(combo,row,index){if(cm&&cm instanceof Ext.grid.ColumnModel){var valueCombo=combo.getValue();var changeValue=!(valueCombo===assignedGrid.getSelectionModel().getSelected().get('field_type'));validateFieldSizeAutoincrement(valueCombo,changeValue);var fieldTypeValue=combo.getValue();var fieldIndex=Ext.getCmp("field_index");var fieldInc=Ext.getCmp("field_incre");var sizeEdit=Ext.getCmp("sizeEdit");editorFieldsEnableDisable(fieldTypeValue,fieldIndex,fieldInc,sizeEdit);flagShowMessageError=1;}}}})},{id:'field_size',header:_("ID_SIZE"),dataIndex:'field_size',width:50,align:'right',editor:sizeField},{xtype:'booleancolumn',header:_('ID_AUTO_INCREMENT'),dataIndex:'field_autoincrement',align:'center',width:100,trueText:_('ID_YES'),falseText:_('ID_NO'),editor:{xtype:'checkbox',id:'field_incre',disabled:true,inputValue:'always'}}];function validateFieldSizeAutoincrement(valueType,defaultValue){if(Ext.getCmp("sizeEdit").getEl()){if(valueType==='INTEGER'||valueType==='BIGINT'||valueType==='SMALLINT'||valueType==='TINYINT'){Ext.getCmp("sizeEdit").enable();Ext.getCmp("sizeEdit").setMaxValue(99);Ext.getCmp("sizeEdit").getEl().dom.maxLength=2;if(defaultValue){Ext.getCmp("sizeEdit").setValue('');}
Ext.getCmp("field_incre").enable();if(defaultValue){Ext.getCmp("field_incre").setValue(false);}}
if(valueType==='CHAR'||valueType==='VARCHAR'||valueType==='LONGVARCHAR'){Ext.getCmp("sizeEdit").enable();Ext.getCmp("sizeEdit").setMaxValue(((valueType==='CHAR')?255:999));Ext.getCmp("sizeEdit").getEl().dom.maxLength=3;if(defaultValue){Ext.getCmp("sizeEdit").setValue('');}
Ext.getCmp("field_incre").disable();Ext.getCmp("field_incre").setValue(false);}
if(valueType==='BOOLEAN'||valueType==='DATE'||valueType==='DATETIME'||valueType==='TIME'||valueType==='DECIMAL'||valueType==='DOUBLE'||valueType==='FLOAT'||valueType==='REAL'){Ext.getCmp("sizeEdit").disable();Ext.getCmp("sizeEdit").setValue('');Ext.getCmp("field_incre").disable();Ext.getCmp("field_incre").setValue(false);}}}
if(TABLE!==false&&TABLE.ADD_TAB_TAG=='plugin@simplereport'){cmColumns.push({xtype:'booleancolumn',header:'Filter',dataIndex:'field_filter',align:'center',width:50,trueText:_('ID_YES'),falseText:_('ID_NO'),editor:{xtype:'checkbox'}})}
var cm=new Ext.grid.ColumnModel({defaults:{resizable:false,sortable:true},columns:cmColumns});store=new Ext.data.ArrayStore({fields:[{name:'uid',type:'string'},{name:'_index'},{name:'_isset'},{name:'field_uid',type:'string'},{name:'field_key',type:'string'},{name:'field_index',type:'string'},{name:'field_name',type:'string'},{name:'field_label',type:'string'},{name:'field_type'},{name:'field_size',type:'float'},{name:'field_null',type:'float'},{name:'field_autoincrement',type:'float'},{name:'field_filter',type:'string'}]});var flagShowMessageError=1;editor=new Ext.ux.grid.RowEditor({saveText:_("ID_UPDATE"),isValid:function()
{var valid=true;this.items.each(function(f){if(!f.isValid(true)){valid=false;if(valid){flagShowMessageError=1;}
return false;}});if(valid){flagShowMessageError=1;}
return valid;},showTooltip:function(msg)
{if(flagShowMessageError==1){Ext.msgBoxSlider.msgTopCenter("error",_("ID_ERROR"),msg,3);flagShowMessageError=0;}},listeners:{canceledit:function(grid,obj){if(grid.record.data.field_label==''&&grid.record.data.field_name==''){store.remove(grid.record);}
flagShowMessageError=1;}}});editor.on({afteredit:function(roweditor,changes,record,rowIndex){},beforeedit:function(roweditor,rowIndex){row=assignedGrid.getSelectionModel().getSelected();if(row.get('field_name')=='APP_UID'||row.get('field_name')=='APP_NUMBER'||row.get('field_name')=='ROW'){editor.stopEditing();return false;}
setTimeout(function()
{var fieldTypeValue=row.get('field_type');var fieldIndex=Ext.getCmp("field_index");var fieldInc=Ext.getCmp("field_incre");var sizeEdit=Ext.getCmp("sizeEdit");editorFieldsEnableDisable(fieldTypeValue,fieldIndex,fieldInc,sizeEdit);},250);}});assignedGrid=new Ext.grid.GridPanel({title:_('ID_NEW_REPORT_TABLE'),region:'center',id:'assignedGrid',ddGroup:'availableGridDDGroup',enableDragDrop:true,viewConfig:{forceFit:true},cm:cm,sm:sm,store:store,plugins:[editor,checkColumn],loadMask:{message:_('ID_LOADING_GRID')},tbar:[{id:'assignedGridAddField',icon:'/images/add-row-after.png',text:_("ID_ADD_FIELD"),handler:addColumn},{id:'removeColumn',icon:'/images/delete-row.png',text:_("ID_REMOVE_FIELD"),disabled:true,handler:removeColumn}],listeners:{render:function(grid){var ddrow=new Ext.dd.DropTarget(grid.getView().mainBody,{ddGroup:'availableGridDDGroup',copy:false,notifyDrop:function(dd,e,data){var ds=grid.store;var sm=grid.getSelectionModel();var rows=sm.getSelections();if(dd.getDragData(e)){var cindex=dd.getDragData(e).rowIndex;if(store.data.items[cindex].data.field_key)
return;if(typeof(cindex)!="undefined"){for(var i=0;i<rows.length;i++){if(rows[i].data.field_key){continue;}
var srcIndex=ds.indexOfId(rows[i].id);ds.remove(ds.getById(rows[i].id));if(i>0&&cindex<srcIndex){cindex++;}
ds.insert(cindex,rows[i]);}
sm.selectRecords(rows);}}}});}},_setTitle:function(){this.setTitle(_('ID_REPORT_TABLE')+': '+Ext.getCmp('REP_TAB_NAME').getValue()+' ('+store.getCount()+' '+_('ID_COLUMNS')+')');}});buttonsPanel=new Ext.Panel({id:'buttonsPanelVertical',width:40,layout:{type:'vbox',padding:'0',pack:'center',align:'center'},defaults:{margins:'0 0 35 0'},items:[{xtype:'button',text:'>',handler:AssignFieldsAction,id:'assignButton',disabled:true},{xtype:'button',text:'&lt;',handler:RemoveFieldsAction,id:'removeButton',disabled:true},{xtype:'button',text:'>>',handler:AssignAllFieldsAction,id:'assignButtonAll',disabled:false},{xtype:'button',text:'&lt;&lt;',handler:RemoveAllFieldsAction,id:'removeButtonAll',disabled:false}]});FieldsPanel=new Ext.Panel({region:'center',width:150,layout:'hbox',defaults:{flex:1},layoutConfig:{align:'stretch'},items:[availableGrid,buttonsPanel,assignedGrid],viewConfig:{forceFit:true}});searchTextA=new Ext.form.TextField({id:'searchTextA',ctCls:'pm_search_text_field',allowBlank:true,width:110,emptyText:_('ID_EMPTY_SEARCH'),listeners:{specialkey:function(f,e){if(e.getKey()==e.ENTER){DoSearchA();}}}});searchTextP=new Ext.form.TextField({id:'searchTextP',ctCls:'pm_search_text_field',allowBlank:true,width:110,emptyText:_('ID_EMPTY_SEARCH'),listeners:{specialkey:function(f,e){if(e.getKey()==e.ENTER){DoSearchP();}}}});var types=new Ext.data.ArrayStore({storeId:"types",autoDestroy:true,fields:["REP_TAB_TYPE","type"],data:[['NORMAL',_("ID_GLOBAL")],['GRID',_("ID_GRID")]]});comboReport=new Ext.form.ComboBox({id:'REP_TAB_TYPE',name:'type',fieldLabel:'Type',hiddenName:'REP_TAB_TYPE',mode:'local',store:types,displayField:'type',valueField:'REP_TAB_TYPE',width:120,typeAhead:true,triggerAction:'all',editable:false,lazyRender:true,value:typeof TABLE.ADD_TAB_TYPE!='undefined'?TABLE.ADD_TAB_TYPE:'NORMAL',listeners:{select:function(combo,record,index){if(this.getValue()=='NORMAL'){Ext.getCmp('REP_TAB_GRID').setVisible(false);loadFieldNormal();}else{Ext.getCmp('availableGrid').store.removeAll();Ext.getCmp('REP_TAB_GRID').setVisible(true);Ext.getCmp('REP_TAB_GRID').setValue('');gridsListStore.reload({params:{PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue()}});}}}});dbConnectionsStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:'../pmTablesProxy/getDbConnectionsList',method:'POST'}),baseParams:{PRO_UID:''},reader:new Ext.data.JsonReader({fields:[{name:'DBS_UID'},{name:'DBS_NAME'}]}),listeners:{load:function(){if(TABLE!==false){defaultValue=TABLE.DBS_UID;comboDbConnections.setDisabled(true);}else{defaultValue='workflow';}
var i=this.findExact('DBS_UID',defaultValue,0);if(i>-1){comboDbConnections.setValue(this.getAt(i).data.DBS_UID);comboDbConnections.setRawValue(this.getAt(i).data.DBS_NAME);}else{Ext.Msg.alert(_('ID_ERROR'),_('ID_DB_CONNECTION_NOT_EXIST'));}}}});comboDbConnections=new Ext.form.ComboBox({id:'REP_TAB_CONNECTION',fieldLabel:_("ID_DB_CONNECTION"),hiddenName:'DBS_UID',store:dbConnectionsStore,valueField:'DBS_UID',displayField:'DBS_NAME',triggerAction:'all',editable:false,mode:'local'});gridsListStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:'../pmTablesProxy/getDynafields',method:'POST'}),baseParams:{PRO_UID:'',TYPE:'GRID'},reader:new Ext.data.JsonReader({fields:[{name:'FIELD_UID'},{name:'FIELD_NAME'}]}),listeners:{load:function(){if(TABLE!==false){var i=this.findExact('FIELD_UID',TABLE.ADD_TAB_GRID,0);if(i>-1){comboGridsList.setValue(this.getAt(i).data.FIELD_UID);comboGridsList.setRawValue(this.getAt(i).data.FIELD_NAME);comboGridsList.setDisabled(true);var available=Ext.getCmp('availableGrid');available.store.load({params:{action:"getDynafields",PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),TYPE:'GRID',GRID_UID:Ext.getCmp('REP_TAB_GRID').getValue(),start:0,limit:pageSize}});}else{Ext.Msg.alert(_('ID_ERROR'),_('ID_GRID_NO_EXIST'));}}}}});comboGridsList=new Ext.form.ComboBox({id:'REP_TAB_GRID',fieldLabel:'Grid',hiddenName:'FIELD_UID',store:gridsListStore,emptyText:_("ID_SELECT_GRID"),valueField:'FIELD_UID',displayField:'FIELD_NAME',triggerAction:'all',width:200,editable:false,mode:'local',listeners:{afterrender:function(){},select:function(combo,record,index){loadFieldsGrids();}}});processStore=new Ext.data.Store({autoLoad:true,proxy:new Ext.data.HttpProxy({url:'../pmTablesProxy/getProcessList',method:'POST'}),baseParams:{action:'getProcessList'},reader:new Ext.data.JsonReader({fields:[{name:"PRO_UID"},{name:"PRO_TITLE"},{name:"PRO_DESCRIPTION"}]}),listeners:{load:function(){if(TABLE!==false){var i=this.findExact('PRO_UID',TABLE.PRO_UID,0);if(i>-1){processComboBox.setValue(this.getAt(i).data.PRO_UID);processComboBox.setRawValue(this.getAt(i).data.PRO_TITLE);processComboBox.setDisabled(true);}else{Ext.Msg.alert(_('ID_ERROR'),_('ID_PROCESS_NO_EXIST'));}
Ext.getCmp('REP_TAB_NAME').setValue(TABLE.ADD_TAB_NAME);Ext.getCmp('REP_TAB_NAME').setDisabled(false);Ext.getCmp('REP_TAB_DSC').setValue(TABLE.ADD_TAB_DESCRIPTION);comboReport.setDisabled(true);if(TABLE.ADD_TAB_TYPE=='GRID'){Ext.getCmp('REP_TAB_GRID').setVisible(true);gridsListStore.reload({params:{PRO_UID:Ext.getCmp('PROCESS').getValue()}});}
comboDbConnections.getStore().reload({params:{PRO_UID:Ext.getCmp('PROCESS').getValue()}});if(TABLE.ADD_TAB_TYPE=='NORMAL')
loadFieldNormal();loadTableRowsFromArray(TABLE.FIELDS);}}}});processComboBox=new Ext.form.ComboBox({id:'PROCESS',fieldLabel:_("ID_CASESLIST_APP_PRO_TITLE"),hiddenName:'PRO_UID',store:processStore,emptyText:_("ID_EMPTY_PROCESSES"),valueField:'PRO_UID',displayField:'PRO_TITLE',editable:true,typeAhead:true,mode:'local',autocomplete:true,triggerAction:'all',forceSelection:true,listeners:{select:function(){var dataStoreAux=types.getRange(0);comboReport.setValue(dataStoreAux[0].data.REP_TAB_TYPE);comboGridsList.setVisible(false);PRO_UID=Ext.getCmp('PROCESS').getValue().trim();comboDbConnections.getStore().reload({params:{PRO_UID:PRO_UID}});if(Ext.getCmp('REP_TAB_TYPE').getValue()=='GRID'){gridsListStore.reload({params:{PRO_UID:PRO_UID}});}else{loadFieldNormal();}}}});var items=new Array();if(PRO_UID===false){items.push(processComboBox);}
items.push({id:'REP_TAB_NAME',fieldLabel:_("ID_TABLE_NAME")+' <span style="font-size:9">('+_("ID_AUTO_PREFIX")+' "PMT_")</span>',xtype:'textfield',emptyText:_("ID_SET_A_TABLE_NAME"),width:250,autoCreate:{tag:"input",type:"text",autocomplete:"off",maxlength:sizeTableName},stripCharsRe:/(\W+)/g,listeners:{change:function(){this.setValue(this.getValue().toUpperCase());assignedGrid._setTitle();}}});items.push({id:'REP_TAB_DSC',fieldLabel:_("ID_DESCRIPTION"),xtype:'textarea',emptyText:_("ID_SET_TABLE_DESCRIPTION"),width:250,height:40,allowBlank:true});items.push({xtype:'hidden',name:'REP_TAB_GRID',value:'GridComments-463650787492db06640c904001904930'});items.push({xtype:'compositefield',fieldLabel:_("ID_TYPE"),msgTarget:'side',anchor:'-20',defaults:{flex:1},items:[comboReport,comboGridsList]});items.push(comboDbConnections);var frmDetailsConfig={id:'frmDetails',region:'north',labelWidth:180,labelAlign:'right',title:ADD_TAB_UID?_('ID_REPORT_TABLE'):_('ID_NEW_REPORT_TABLE'),bodyStyle:'padding:10px',waitMsgTarget:true,frame:true,defaults:{allowBlank:false,msgTarget:'side',align:'center'},listeners:{afterRender:function(){this.setHeight('auto');}},items:items};var frmDetails=new Ext.FormPanel(frmDetailsConfig);southPanel=new Ext.FormPanel({region:'south',buttons:[{id:'southPanelCreateUpdate',text:TABLE===false?_("ID_CREATE"):_("ID_UPDATE"),handler:function()
{if(TABLE===false){createReportTable();}else{var oldRepTabName=TABLE.ADD_TAB_NAME;var newRepTabName=Ext.getCmp("REP_TAB_NAME").getValue().trim();if(newRepTabName!=""){if(oldRepTabName!=newRepTabName){Ext.MessageBox.show({title:_("ID_CONFIRM"),msg:_("ID_RT_RENAME_NAME_TABLE"),icon:Ext.MessageBox.QUESTION,buttons:{yes:_("ID_RT_CONTINUE_TABLE_RENAME"),no:_("ID_RT_NOT_CHANGE_NAME")},fn:function(buttonId,text,opt)
{if(buttonId=="yes"){createReportTable();}}});}else{createReportTable();}}else{PMExt.error(_("ID_ERROR"),_("ID_TABLE_NAME_IS_REQUIRED"),function()
{Ext.getCmp("REP_TAB_NAME").focus();});}}}},{id:'southPanelCancel',text:_("ID_CANCEL"),handler:function(){proParam=(typeof('flagProcessmap')!='undefined'&&flagProcessmap==1)?(PRO_UID!==false?'?flagProcessmap=1&PRO_UID='+PRO_UID:''):'';location.href='../pmTables'+proParam;}}]});var viewport=new Ext.Viewport({layout:'border',autoScroll:false,items:[frmDetails,FieldsPanel,southPanel]});if(TABLE!==false){if(TABLE.ADD_TAB_TYPE!='GRID'){Ext.getCmp('REP_TAB_GRID').hide();}}else{Ext.getCmp('REP_TAB_GRID').hide();}
if(PRO_UID!==false){comboDbConnections.getStore().reload({params:{PRO_UID:PRO_UID}});if(Ext.getCmp('REP_TAB_TYPE').getValue()=='GRID'){gridsListStore.reload({params:{PRO_UID:PRO_UID}});}
if(TABLE===false){if(TABLE.ADD_TAB_TYPE!='GRID'){loadFieldNormal();}}}
DDLoadFields();});function createReportTable()
{var tableName=Ext.getCmp('REP_TAB_NAME').getValue().trim();var tableDescription=Ext.getCmp('REP_TAB_DSC').getValue().trim();if(Ext.getCmp('REP_TAB_NAME').getValue().trim()==''){Ext.getCmp('REP_TAB_NAME').focus();PMExt.error(_('ID_ERROR'),_('ID_TABLE_NAME_IS_REQUIRED'),function(){Ext.getCmp('REP_TAB_NAME').focus();});return false;}
PRO_UID=(PRO_UID!==false&&PRO_UID!=="")?PRO_UID:((Ext.getCmp('PROCESS').getValue().trim()!='')?Ext.getCmp('PROCESS').getValue().trim():'');if(PRO_UID==''){Ext.getCmp('PROCESS').focus();PMExt.error(_('ID_ERROR'),_('ID_PROCESS_IS_REQUIRED'),function(){Ext.getCmp('PROCESS').focus();});return false;}
if(tableName.length<4){PMExt.error(_('ID_ERROR'),_('ID_TABLE_NAME_TOO_SHORT'),function(){Ext.getCmp('REP_TAB_NAME').focus();});return false;}
var allRows=assignedGrid.getStore();var columns=new Array();var hasSomePrimaryKey=false;if(allRows.getCount()==0){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_ALERT7'));return false;}
var fieldsNames=new Array();var reservedWords=new Array('DESC');for(var r=0;r<allRows.getCount();r++){row=allRows.getAt(r);if(in_array(row.data['field_name'],fieldsNames)){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_ALERT1')+' <b>'+row.data['field_name']+'</b>');return false;}
for(j=0;j<reservedWords.length;j++){if(row.data['field_name']==reservedWords[j]){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_RESERVED_FIELDNAME_WARNING',reservedWords[j]));return false;}}
if(row.data['field_name'].trim()==''){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_ALERT2'));return false;}
if(row.data['field_label'].trim()==''){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_ALERT3'));return false;}
if((row.data['field_type']=='VARCHAR'||row.data['field_type']=='INTEGER')&&row.data['field_size']==''){PMExt.error(_('ID_ERROR'),_('ID_PMTABLES_ALERT5')+' '+row.data['field_name']+' ('+row.data['field_type']+').');return false;}
if(row.data['field_index']){hasSomeIndex=true;}else{hasSomeIndex=false;}
if(row.data['field_key']){hasSomePrimaryKey=true;}
columns.push(row.data);}
Ext.Msg.show({title:'',msg:TABLE!==false?_('ID_UPDATING_TABLE'):_('ID_CREATING_TABLE'),wait:true,waitConfig:{interval:500}});Ext.Ajax.request({url:'../pmTablesProxy/save',params:{REP_TAB_UID:TABLE!==false?TABLE.ADD_TAB_UID:'',PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),REP_TAB_NAME:TABLE!==false?tableName:'PMT_'+tableName,REP_TAB_DSC:tableDescription,REP_TAB_CONNECTION:Ext.getCmp('REP_TAB_CONNECTION').getValue(),REP_TAB_TYPE:Ext.getCmp('REP_TAB_TYPE').getValue(),REP_TAB_GRID:Ext.getCmp('REP_TAB_TYPE').getValue()=='GRID'?Ext.getCmp('REP_TAB_GRID').getValue():'',columns:Ext.util.JSON.encode(columns)},success:function(resp){result=Ext.util.JSON.decode(resp.responseText);Ext.MessageBox.hide();if(result.success){proParam=(typeof('flagProcessmap')!='undefined'&&flagProcessmap==1)?(PRO_UID!==false?'?flagProcessmap=1&PRO_UID='+PRO_UID:''):'';location.href='../pmTables'+proParam;}else{PMExt.error(_('ID_ERROR'),result.type+': '+result.msg);if(window.console&&window.console.firebug){window.console.log(result.msg);window.console.log(result.trace);}}},failure:function(obj,resp){Ext.Msg.alert(_('ID_ERROR'),resp.result.msg);}});}
function addColumn()
{if(!verifyTableLimit()){return false;}
var PMRow=assignedGrid.getStore().recordType;var row=new PMRow({uid:'',field_uid:'',field_dyn:'',field_name:'',field_label:'',field_type:'',field_size:'',field_key:0,field_index:0,field_null:1});var len=assignedGrid.getStore().data.length;editor.stopEditing();store.insert(len,row);assignedGrid.getView().refresh();assignedGrid.getSelectionModel().selectRow(len);editor.startEditing(len);}
function removeColumn()
{PMExt.confirm(_('ID_CONFIRM'),_('ID_CONFIRM_REMOVE_FIELD'),function(){var records=Ext.getCmp('assignedGrid').getSelectionModel().getSelections();Ext.each(records,Ext.getCmp('assignedGrid').store.remove,Ext.getCmp('assignedGrid').store);});}
function editorFieldsEnableDisable(fieldTypeValue,fieldIndex,fieldInc,sizeEdit)
{var swSize=1;var swNull=1;var swPK=1;var swAI=1;var swI=1;if(fieldTypeValue=="DATE"||fieldTypeValue=="DATETIME"||fieldTypeValue=="TIME"||fieldTypeValue=="TEXT"){swSize=0;swPK=0;swAI=0;swI=0;}
if(fieldTypeValue=="INTEGER"||fieldTypeValue=="BIGINT"){}
if(fieldTypeValue=="TINYINT"||fieldTypeValue=="SMALLINT"){swSize=0;}
if(fieldTypeValue=="DECIMAL"||fieldTypeValue=="FLOAT"){swPK=0;swAI=0;swI=0;}
if(fieldTypeValue=="DOUBLE"||fieldTypeValue=="REAL"){swSize=0;swPK=0;swAI=0;swI=0;}
if(fieldTypeValue=="CHAR"||fieldTypeValue=="VARCHAR"){swAI=0;}
if(fieldTypeValue=="LONGVARCHAR"){swPK=0;swAI=0;swI=0;}
if(fieldTypeValue=="BOOLEAN"){swSize=0;swNull=0;swPK=0;swAI=0;swI=0;}
if(swAI==1){fieldInc.enable();}else{fieldInc.disable();fieldInc.setValue(false);}
if(swSize==1){sizeEdit.enable();if(fieldTypeValue=="CHAR"||fieldTypeValue=="VARCHAR"||fieldTypeValue=="LONGVARCHAR"){sizeEdit.setMaxValue(((fieldTypeValue=="CHAR")?255:999));sizeEdit.getEl().dom.maxLength=3;}else{sizeEdit.setMaxValue(99);sizeEdit.getEl().dom.maxLength=2;}}else{sizeEdit.disable();sizeEdit.setValue("");}}
AssignFieldsAction=function(){records=Ext.getCmp('availableGrid').getSelectionModel().getSelections();setReportFields(records);};RemoveFieldsAction=function(){records=Ext.getCmp('assignedGrid').getSelectionModel().getSelections();unsetReportFields(records);};AssignAllFieldsAction=function(){var avStore=Ext.getCmp('availableGrid').getStore();var records=new Array();if(avStore.getCount()>0){for(i=0;i<avStore.getCount();i++){records[i]=avStore.getAt(i);}
setReportFields(records);}};RemoveAllFieldsAction=function(){if(store.getCount()>100){PMExt.info(_('ID_NOTICE'),_('ID_ACTION_DISABLED_TO_LOW_PERFORMANCE_1')+_('ID_ACTION_DISABLED_TO_LOW_PERFORMANCE_2'));return;}
var allRows=Ext.getCmp('assignedGrid').getStore();var records=new Array();if(allRows.getCount()>0){for(var i=0;i<allRows.getCount();i++){records[i]=allRows.getAt(i);}
unsetReportFields(records);}};loadFieldNormal=function(){Ext.getCmp('availableGrid').store.removeAll();Ext.getCmp('availableGrid').store.load({params:{action:"getDynafields",PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),start:0,limit:pageSize,loadField:1}});var assignedGridGotData=Ext.getCmp('assignedGrid').getStore().getCount()>0;if(assignedGridGotData){Ext.MessageBox.confirm(_('ID_CONFIRM'),_('ID_CONFIRM_ASSIGNED_GRID'),function(button){if(button=='yes'){Ext.getCmp('assignedGrid').store.removeAll();}});}};loadFieldsGrids=function(){var available=Ext.getCmp('availableGrid');available.store.removeAll();available.store.load({params:{action:"getDynafields",PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),TYPE:'GRID',GRID_UID:Ext.getCmp('REP_TAB_GRID').getValue(),start:0,limit:pageSize,loadField:1}});var assigned=Ext.getCmp('assignedGrid');assigned.store.removeAll();};RefreshFields=function(){var available=Ext.getCmp('availableGrid');available.store.load({params:{"action":"deleteFieldsReportTables","PRO_UID":PRO_UID}});var assigned=Ext.getCmp('assignedGrid');assigned.store.load({params:{"action":"assignedFieldsReportTables","PRO_UID":PRO_UID}});};FailureFields=function(){Ext.Msg.alert(_('ID_GROUPS'),_('ID_MSG_AJAX_FAILURE'));};var DDLoadFields=function(){var availableGridDropTargetEl=availableGrid.getView().scroller.dom;var availableGridDropTarget=new Ext.dd.DropTarget(availableGridDropTargetEl,{ddGroup:'availableGridDDGroup',notifyDrop:function(ddSource,e,data){var records=ddSource.dragData.selections;unsetReportFields(records);return true;}});var assignedGridDropTargetEl=assignedGrid.getView().scroller.dom;var assignedGridDropTarget=new Ext.dd.DropTarget(assignedGridDropTargetEl,{ddGroup:'assignedGridDDGroup',notifyDrop:function(ddSource,e,data){setReportFields(ddSource.dragData.selections)
return true;}});};function setReportFields(records){mainMask.show();var PMRow=assignedGrid.getStore().recordType;var indexes=new Array();for(i=0;i<records.length;i++){if(!verifyTableLimit()){return false;}
var meta=mapPMFieldType(records[i].data['FIELD_UID']);var typeField=meta.type;var sizeField=meta.size;if(records[i].data['FIELD_VALIDATE'].toUpperCase()=='REAL'){typeField='DOUBLE';sizeField='';}
if(records[i].data['FIELD_VALIDATE'].toUpperCase()=='INT'){typeField='INTEGER';}
var row=new PMRow({uid:'',_index:records[i].data['_index']!==''?records[i].data['_index']:records[i].data['FIELD_DYN'],field_uid:records[i].data['FIELD_UID'],field_dyn:records[i].data['FIELD_NAME'],field_name:records[i].data['FIELD_NAME'].toUpperCase(),field_label:records[i].data['FIELD_NAME'].toUpperCase(),field_type:typeField,field_size:sizeField,field_key:0,field_index:0,field_null:1,field_filter:0,field_autoincrement:0});store.add(row);indexes.push(records[i].data['_index']);}
Ext.each(records,availableGrid.store.remove,availableGrid.store);if(indexes.length==0){mainMask.hide();return;}
Ext.Ajax.request({url:'../pmTablesProxy/updateAvDynafields',params:{PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),indexes:indexes.join(','),isset:false},success:function(resp){result=Ext.util.JSON.decode(resp.responseText);availableGrid.store.lastOptions.params.loadField=0;availableGrid.store.reload();}});}
function unsetReportFields(records){mainMask.show();var PMRow=availableGrid.getStore().recordType;var indexes=new Array();var recordsUsrDef=new Array();var fieldName='';for(i=0;i<records.length;i++){if(records[i].data['field_dyn']!=''){var row=new PMRow({FIELD_UID:records[i].data['field_uid'],FIELD_NAME:records[i].data['field_dyn']});availableGrid.getStore().add(row);ix=records[i].data['_index']!=''?records[i].data['_index']:records[i].data['field_dyn']
indexes.push(ix);}else{if(records[i].data['field_name']=='APP_UID'||records[i].data['field_name']=='APP_NUMBER'||records[i].data['field_name']=='ROW')
{records[i]=null;}else{if(records[i].data['field_dyn']==''||records[i].data['field_dyn']==null){if(fieldName.length>0){fieldName+=', '}
fieldName+=records[i].data['field_name'];recordsUsrDef.push(records[i]);records[i]=null;}}}}
Ext.each(records,assignedGrid.store.remove,assignedGrid.store);if(recordsUsrDef.length>0){PMExt.confirm(_('ID_CONFIRM'),_('ID_CONFIRM_REMOVE_FIELDS')+' '+fieldName+'?',function(){Ext.each(recordsUsrDef,assignedGrid.store.remove,assignedGrid.store);});}
if(indexes.length==0){mainMask.hide();return;}
Ext.Ajax.request({url:'../pmTablesProxy/updateAvDynafields',params:{PRO_UID:PRO_UID!==false?PRO_UID:Ext.getCmp('PROCESS').getValue(),indexes:indexes.join(','),isset:true},success:function(resp){result=Ext.util.JSON.decode(resp.responseText);availableGrid.store.lastOptions.params.loadField=0;availableGrid.store.reload();}});}
function loadTableRowsFromArray(records)
{var PMRow=assignedGrid.getStore().recordType;if(records.length==0)
return;for(i=0;i<records.length;i++){switch(records[i].FLD_TYPE){case'TIMESTAMP':records[i].FLD_TYPE='DATETIME';break;}
var row=new PMRow({uid:records[i].FLD_UID,field_uid:records[i].FLD_DYN_UID,field_dyn:records[i].FLD_DYN_NAME,field_name:records[i].FLD_NAME,field_label:records[i].FLD_DESCRIPTION,field_type:records[i].FLD_TYPE,field_size:records[i].FLD_SIZE,field_key:records[i].FLD_KEY,field_index:records[i].FLD_TABLE_INDEX=='1'?true:false,field_null:records[i].FLD_NULL,field_autoincrement:records[i].FLD_AUTO_INCREMENT=='1'?true:false,field_filter:records[i].FLD_FILTER=='1'?true:false,_index:''});store.add(row);}}
function loadAvFieldsFromArray(records)
{var PMRow=availableGrid.getStore().recordType;for(i=0;i<records.length;i++){var row=new PMRow({FIELD_UID:records[i].FIELD_UID,FIELD_NAME:records[i].FIELD_NAME});availableGrid.getStore().add(row);}}
function mapPMFieldType(id)
{var meta=id.split('-');switch(meta[1]){case'text':case'password':case'dropdown':case'yesno':case'checkbox':case'radio':case'radiogroup':case'hidden':typeField='VARCHAR';sizeField='255';break;case'currency':typeField='INTEGER';sizeField='11';break;case'percentage':typeField='FLOAT';sizeField='11';break;case'date':typeField='VARCHAR';sizeField='10';break;case'textarea':typeField='VARCHAR';sizeField='255';break;case'string':typeField='VARCHAR';sizeField='255';break;case'integer':typeField='INTEGER';sizeField='11';break;case'float':typeField='FLOAT';sizeField='11';break;case'boolean':typeField='BOOLEAN';sizeField='';break;case'date':typeField='DATE';sizeField='';break;case'datetime':typeField='DATETIME';sizeField='';break;default:typeField='VARCHAR';sizeField='255';break;}
return{type:typeField,size:sizeField};}
Ext.override(Ext.form.TextField,{initComponent:Ext.form.TextField.prototype.initComponent.createInterceptor(function(){if(this.convertToUpperCase){this.style="textTransform: uppercase;"}}),getValue:function(){var value=Ext.form.TextField.superclass.getValue.call(this);if(this.convertToUpperCase){value=value.toUpperCase();}
return value;}});function verifyTableLimit()
{if(store.getCount()>=255){mainMask.hide();PMExt.info(_('ID_NOTICE'),_('ID_MAX_LIMIT_COLUMNS_FOR_DATABASE'));assignedGrid._setTitle();return false;}
return true;}
function in_array(needle,haystack){for(var i in haystack){if(haystack[i]==needle){return true;}}
return false;}