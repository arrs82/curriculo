// Substitua 'SUA_CHAVE_API' pela sua chave de API do IPinfo
var apiKey = '96d4ac6404718c';

// Use um serviço para obter o endereço IP do visitante (opcional)
var ipAddressService = 'https://api64.ipify.org?format=json';

// Faça uma solicitação HTTP para obter o endereço IP do visitante
fetch(ipAddressService)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var ipAddress = data.ip;

    // Faça uma solicitação ao IPinfo para obter informações de geolocalização
    fetch('https://ipinfo.io/' + ipAddress + '/json?token=' + apiKey)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Use os dados de geolocalização, como país, cidade, etc.
        console.log(data);
      })
      .catch(function(error) {
        console.error('Erro ao obter informações de geolocalização:', error);
      });
  })
  .catch(function(error) {
    console.error('Erro ao obter endereço IP do visitante:', error);
  });