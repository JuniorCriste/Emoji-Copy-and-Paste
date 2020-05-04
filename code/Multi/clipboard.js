$(document).ready(function(){
        $(".emojibutton").click(function(){
          var texttocopy = $(this).val();
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(texttocopy).select();
          document.execCommand("copy");
          $temp.remove();
          alert($(this).val() + " copiado!");

        });
});
