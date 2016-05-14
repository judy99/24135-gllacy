      var popup = document.querySelector(".modal");

      var tip1 = popup.querySelector("#tip1");
      var tip2 = popup.querySelector("#tip2");
      var tip3 = popup.querySelector("#tip3");

      var link = document.querySelector(".btn-feedback");
      var close = document.querySelector(".form-feedback-exit");

      var form = popup.querySelector("form");
      var username = popup.querySelector("[name=username]");
      var email = popup.querySelector("[name=email]");
      var text = popup.querySelector("[name=text]");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-show");
      });


      close.addEventListener("click", function(event) {
          event.preventDefault();
          popup.classList.remove("modal-show");
          form.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
      });

      form.addEventListener("submit", function(event) {
          if (!username.value || !email.value || !text.value) {
            event.preventDefault();
            // console.log("Нужно ввести все данные.");
            form.classList.remove("modal-error");
            form.offsetWidth = popup.offsetWidth;
            form.classList.add("modal-error");
            } 
          else {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
            }
      });


      username.addEventListener("blur", function(event) {
          event.preventDefault();
          if (username.value) {
            tip1.classList.add("tip-color");
          }
          else {
            tip1.classList.remove("tip-color");

          }
      });

      email.addEventListener("blur", function(event) {
          event.preventDefault();
          if (email.value) {
            tip2.classList.add("tip-color");
          }
          else {
            tip2.classList.remove("tip-color");
          }
      });

      text.addEventListener("blur", function(event) {
          event.preventDefault();
          if (text.value) {
            tip3.classList.add("tip-color");
          }
          else {
            tip3.classList.remove("tip-color");
          }
      });
