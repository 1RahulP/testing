var scrollTrigger = 60;
      var cls = "inverted";
      window.onscroll = function () {
        // We add pageYOffset for compatibility with IE.
        if (
          window.scrollY >= scrollTrigger ||
          window.pageYOffset >= scrollTrigger
        ) {
          document.getElementsByTagName("header")[0].classList.add(cls);
        } else {
          document.getElementsByTagName("header")[0].classList.remove(cls);
        }
      };