function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    callback(tabs[0].url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		
		var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + url;

		var qrCodeImage = document.getElementById('qr-code-image');

		qrCodeImage.width = 150;
		qrCodeImage.height = 150;
		qrCodeImage.src = qrCodeUrl;
		qrCodeImage.hidden = false;

	});
});
		
