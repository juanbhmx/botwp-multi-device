  import http from "http";
  setInterval(function() {
      http.get("http://wapsend.herokuapp.com");
  }, 1500000); // cada 25 minutos (1500000)
