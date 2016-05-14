      var popup = document.querySelector(".modal");

      if (popup != null) {
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
      }

      var inputs = document.querySelectorAll(".form-elem");
      for (i=0; i<inputs.length; i++) {
        inputs[i].addEventListener("blur", function(event) {
            event.preventDefault();
            this.nextElementSibling.classList.remove("tip-color");
            if (this.value.length > 0) {
              this.nextElementSibling.classList.add("tip-color");
            }
        });
      }