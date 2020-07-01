/*
    API utilsées:
    chrome.runtime
    chrome.tabs: https://developer.chrome.com/extensions/tabs#type-Tab
    chrome.webRequest: https://developer.chrome.com/extensions/webRequest
*/

chrome.runtime.onInstalled.addListener(function() {
    // chrome.storage.sync.set({color: '#3aa757'}, function() {
    //     console.log("The color is green.");
    // });
    // https://www.youtube.com/watch?v=EEsbM0gKrME
    chrome.tabs.query({ url: 'https://www.youtube.com/watch?v=*' }, function(tabs) {
        if(!tabs || tabs.length == 0)
        {
            console.log('No tab found!');
        }
        else
        {
            tabs.forEach(tab => {

                chrome.tabs.get(tab.id, x => {
                    console.log(tab);

                    // chrome.webRequest.onBeforeSendHeaders.addListener(
                    //     detail => {
                    //         console.log(detail);
                    //     }
                    // );
                });
            });
            // chrome.tabs.update(tabs[0].id, {url: newUrl});
        }
    });
});