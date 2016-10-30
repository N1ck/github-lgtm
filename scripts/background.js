const submitLGTM = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "submit_lgtm"}, function(response) {});
  });
}

chrome.contextMenus.create({
 title: "LGTM 👍",
 contexts:["all"],
 onclick: submitLGTM
});
