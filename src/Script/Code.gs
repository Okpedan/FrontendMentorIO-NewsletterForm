// This code needs to be inserted and deployed inside of google scripts
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1AAAsCi8KfRu76wO-GtKhWTaC2ZuG7L-vJxW69dIy-K4/edit#gid=0");
const sheet = sheets.getSheetByName("Sheet1");

function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Email]);
  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}