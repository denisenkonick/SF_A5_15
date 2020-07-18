const dataURL = "https://api.jsonbin.io/b/5f132093c58dc34bf5d5e5bf";
 
$(".btn-createText").click(function() {
  ///
  console.log("выполняется createText");
  var jqxhr = $.getJSON( dataURL, function() {
  console.log( "success" );
})
  .done(function(data) {
   console.log("data.text: ", data.text);
   let text = '';
    for (i in data.text) {
  text += "<p>" + data.text[i] + "</p>";
  }
   $(".result-text").html(text);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });    
  ///
});

$(".btn-replaceVariables").click(function() {
  console.log("выполняется createText");
  let text = $(".result-text").html();
  const var1 = $("input[name=var1]").val()
  const var2 = $("input[name=var2]").val()
  const var3 = $("input[name=var3]").val()
  const var4 = $("input[name=var4]").val()
  const var5 = $("input[name=var5]").val()
  const var6 = $("input[name=var6]").val()
  const speech = $("input[name=speech]").val()
  text = text.replace(new RegExp("{var1}", 'g'), var1);
  text = text.replace(new RegExp("{var2}", 'g'), var2);
  text = text.replace(new RegExp("{var3}", 'g'), var3);
  text = text.replace(new RegExp("{var4}", 'g'), var4);
  text = text.replace(new RegExp("{var5}", 'g'), var5);
  text = text.replace(new RegExp("{var6}", 'g'), var6);
  text = text.replace(new RegExp("{speach}", 'g'), speech);
 
   $(".result-text").html(text);
});


