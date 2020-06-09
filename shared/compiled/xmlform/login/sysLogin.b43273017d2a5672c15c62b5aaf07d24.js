    var form_bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda;
  var object_sysLogin;

  if (typeof(__aObjects__) == "undefined") {
      var __aObjects__ = [];
  }

    function loadForm_bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda(ajaxServer)
    {
      swSubmitValidateForm = 1;
      var i = 0;

      if (typeof(G_Form) == "undefined") {
          return alert("form.js was not loaded");
      }

      form_bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda=new G_Form(document.getElementById('bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda'),'bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda');
      object_sysLogin = form_bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda;
      __aObjects__.push(object_sysLogin);
      var myForm=form_bjlLWDFaNmlwNm5qd0tEVTNxTm42cDda;
      if (myForm.aElements===undefined) alert("sysLogin");
      myForm.ajaxServer = ajaxServer;

        //
        
                  i = myForm.aElements.length;

                      var element = getField("TITLE");
            
                        i = myForm.aElements.length;

                      myForm.aElements[i] = new G_Text(myForm, myForm.element.elements['form[USR_USERNAME]'],'USR_USERNAME');
            myForm.aElements[i].setAttributes({"size":"30","maxLength":"50","validate":"Any","mask":"","defaultValue":"","required":false,"dependentFields":"","linkField":"","strTo":"","readOnly":false,"sqlOption":[],"gridFieldType":"text","formula":"","function":"","replaceTags":0,"renderMode":"","comma_separator":".","autocomplete":"on","label":"User","pmLabel":"User","language":"en","group":0,"mode":"edit","gridLabel":"","hint":"","enableHtml":false,"style":"","withoutLabel":false,"className":"","colWidth":140,"colAlign":"left","colClassName":"","titleAlign":"","align":"","showInTable":"","dataCompareField":"","dataCompareType":"=","pmtable":"","keys":"","pmconnection":"","pmfield":"","modeGrid":"","modeForGrid":"edit","options":[]});
            //alert('{"size":"30","maxLength":"50","validate":"Any","mask":"","defaultValue":"","required":false,"dependentFields":"","linkField":"","strTo":"","readOnly":false,"sqlOption":[],"gridFieldType":"text","formula":"","function":"","replaceTags":0,"renderMode":"","comma_separator":".","autocomplete":"on","label":"User","pmLabel":"User","language":"en","group":0,"mode":"edit","gridLabel":"","hint":"","enableHtml":false,"style":"","withoutLabel":false,"className":"","colWidth":140,"colAlign":"left","colClassName":"","titleAlign":"","align":"","showInTable":"","dataCompareField":"","dataCompareType":"=","pmtable":"","keys":"","pmconnection":"","pmfield":"","modeGrid":"","modeForGrid":"edit","options":[]}');
            
                          i = myForm.aElements.length;

                      var element = getField("USR_PASSWORD");
            
                        i = myForm.aElements.length;

                      myForm.aElements[i] = new G_DropDown(myForm, myForm.element.elements['form[USER_ENV]'],'USER_ENV');
            myForm.aElements[i].setAttributes({"defaultValue":"","required":false,"dependentFields":"","readonly":false,"optgroup":0,"option":[],"sqlOption":[],"saveLabel":0,"modeGridDrop":"","renderMode":"","selectedValue":"","label":"Workspace","pmLabel":"Workspace","language":"en","group":0,"mode":"edit","gridFieldType":"","gridLabel":"","hint":"","enableHtml":false,"style":"","withoutLabel":false,"className":"","colWidth":140,"colAlign":"left","colClassName":"","titleAlign":"","align":"","showInTable":"","dataCompareField":"","dataCompareType":"=","pmtable":"","keys":"","pmconnection":"","pmfield":"","modeGrid":"","modeForGrid":"edit","options":[]});
            
                          i = myForm.aElements.length;

                      myForm.aElements[i] = new G_DropDown(myForm, myForm.element.elements['form[USER_LANG]'],'USER_LANG');
            myForm.aElements[i].setAttributes({"defaultValue":"","required":false,"dependentFields":"","readonly":false,"optgroup":0,"option":[],"sqlOption":[],"saveLabel":0,"modeGridDrop":"","renderMode":"","selectedValue":"","label":"Language","pmLabel":"Language","language":"en","group":0,"mode":"edit","gridFieldType":"","gridLabel":"","hint":"","enableHtml":false,"style":"","withoutLabel":false,"className":"","colWidth":140,"colAlign":"left","colClassName":"","titleAlign":"","align":"","showInTable":"","dataCompareField":"","dataCompareType":"=","pmtable":"","keys":"","pmconnection":"","pmfield":"","modeGrid":"","modeForGrid":"edit","options":[]});
            
                          i = myForm.aElements.length;

                      var element = getField("BSUBMIT");
            
                        i = myForm.aElements.length;

                      var element = getField("JS");
            
                                                                                                                          }

    
