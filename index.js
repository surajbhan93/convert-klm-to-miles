function convert(){
        let klm = document.getElementById('data').value
        const factor=0.621783
        var miles = klm*factor;
        document.getElementById('res').innerText=miles+'miles';
      }