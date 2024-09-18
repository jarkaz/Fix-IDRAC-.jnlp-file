(function() {
    var expr = /^viewer\.jnlp/;

    chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
        if (expr.test(downloadItem.filename)) {
            suggest({filename: downloadItem.filename.replace('.jnlp', '') + '.jnlp'});
        }
    });
})();
